import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export const topicsContext = createContext();

const API = "http://localhost:8000/topics";
let totalPages;

const INIT_STATE = {
  topics: [],
  topicDetails: {},
  typeOfMovie: "",
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...prevState, topics: action.payload };
    case "GET_TOPIC_DETAILS":
      return { ...prevState, topicDetails: action.payload };
    case "SET_TYPE_OF_MOVIE":
      return { ...prevState, typeOfMovie: action.payload };
    default:
      return prevState;
  }
};

// Хук useContext используется для создания общих данных, к которым можно обращаться из дочерних компонентов (не прописывая каждый раз props)

let page = 1; // Переменная для пагинации

const TopicContextProvider = ({ children }) => {
  // хук useReducer - принимает 2 аргумента: функцию reducer и начальное состояние. Затем хук возвращает массив из 2 элементов: текущее состояние и функцию dispatch. Dispatch (принимает в аргументы action) - функция, которая отправляет объект "action" для изменения состояния.
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  console.log(state);

  // addTopics - функция для добавления топиков в базу данных db.json
  const addTopics = async (topic) => {
    await axios.post(API, topic);
  };

  const getTotalTopics = async () => {
    const { data } = await axios.get(API);
    console.log(data, "totaldata");
    totalPages = Math.ceil(data.length / 10);
  };

  // getTopics - Фуннкция для получения данных из БД db.json и сохранения этих данных в state "topics"
  const getTopics = async () => {
    const { data } = await axios.get(
      `${API}?_page=${page}&_limit=10&q=${searchValue}`
    );
    dispatch({
      type: "GET_TOPICS",
      payload: data,
    });
    getTotalTopics();
  };

  // getTopicDetails - функция которя стягивает данные из общего массива "topics" внутри БД db.json. Стягивает только один объект, на который мы нажимаем

  const getTopicDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_TOPIC_DETAILS",
      payload: data,
    });
  };

  // deleteTopic - функция для удаления топика

  const deleteTopic = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  // editTopicFunc - функция для изменения данных нашей карточки

  const editTopicFunc = async (id, editedTopic) => {
    await axios.patch(`${API}/${id}`, editedTopic);
  };

  const prevPage = () => {
    if (page <= 1) return;
    page--;
    getTopics();
  };

  const nextPage = () => {
    console.log(totalPages, "total");
    if (page >= totalPages) return;
    page++;
    getTopics();
  };

  const setTypeOfMovie = async (type) => {
    dispatch({
      type: "SET_TYPE_OF_MOVIE",
      payload: type,
    });
    navigate("/filtered");
  };

  console.log(state.typeOfMovie, "type inside Context");

  return (
    <topicsContext.Provider
      value={{
        topicsArr: state.topics,
        detailsObj: state.topicDetails,
        typeOfMovie: state.typeOfMovie,
        addTopics,
        getTopics,
        getTopicDetails,
        deleteTopic,
        editTopicFunc,
        prevPage,
        nextPage,
        searchValue,
        setSearchValue,
        setTypeOfMovie,
      }}
    >
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;
