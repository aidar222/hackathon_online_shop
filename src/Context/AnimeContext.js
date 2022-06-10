import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const animeContext = createContext();

const API = "http://localhost:8000/topics";
let totalPages;

const INIT_STATE = {
  topics: [],
  topicDetails: {},
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ANIME":
      return { ...prevState, topics: action.payload };
    case "GET_ANIME_DETAILS":
      return { ...prevState, topicDetails: action.payload };
    default:
      return prevState;
  }
};

// Хук useContext используется для создания общих данных, к которым можно обращаться из дочерних компонентов (не прописывая каждый раз props)

let page = 1; // Переменная для пагинации

const AnimeContextProvider = ({ children }) => {
  // хук useReducer - принимает 2 аргумента: функцию reducer и начальное состояние. Затем хук возвращает массив из 2 элементов: текущее состояние и функцию dispatch. Dispatch (принимает в аргументы action) - функция, которая отправляет объект "action" для изменения состояния.
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [searchValue, setSearchValue] = useState("");
  console.log(state);

  // addTopics - функция для добавления топиков в базу данных db.json
  const addAnime = async (topic) => {
    await axios.post(API, topic);
  };

  const getTotalAnime = async () => {
    const { data } = await axios.get(API);
    console.log(data, "totaldata");
    totalPages = Math.ceil(data.length / 10);
  };

  // getTopics - Фуннкция для получения данных из БД db.json и сохранения этих данных в state "topics"
  const getAnime = async () => {
    const { data } = await axios.get(
      `${API}?_page=${page}&_limit=10&q=${searchValue}`
    );
    dispatch({
      type: "GET_ANIME",
      payload: data,
    });
    getTotalAnime();
  };

  // getTopicDetails - функция которя стягивает данные из общего массива "topics" внутри БД db.json. Стягивает только один объект, на который мы нажимаем

  const getAnimeDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ANIME_DETAILS",
      payload: data,
    });
  };

  // deleteTopic - функция для удаления топика

  const deleteAnime = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  // editTopicFunc - функция для изменения данных нашей карточки

  const editAnimeFunc = async (id, editedTopic) => {
    await axios.patch(`${API}/${id}`, editedTopic);
  };

  const prevPage = () => {
    if (page <= 1) return;
    page--;
    getAnime();
  };

  const nextPage = () => {
    console.log(totalPages, "total");
    if (page >= totalPages) return;
    page++;
    getAnime();
  };

  return (
    <animeContext.Provider
      value={{
        topicsArr: state.anime,
        detailsObj: state.animeDetails,
        addAnime,
        getAnime,
        getAnimeDetails,
        deleteAnime,
        editAnimeFunc,
        prevPage,
        nextPage,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </animeContext.Provider>
  );
};

export default AnimeContextProvider;
