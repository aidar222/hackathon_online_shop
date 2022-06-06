import React, { useContext, useState } from "react";
import { Form, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import { topicsContext } from "../../Context/TopicContext";
import "./AddMovie.css";

const AddMovie = () => {
  const { addTopics } = useContext(topicsContext);

  const [title, setTitle] = useState("");
  const [typeOfMovie, setTypeOfMovie] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const alertToastify = () => {
    toast.error("🦄 Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClick = () => {
    if (
      !title.trim() ||
      !typeOfMovie.trim() ||
      !description.trim() ||
      !price.trim() ||
      !image.trim()
    ) {
      alertToastify();
      return;
    }
    let newTopic = {
      title,
      typeOfMovie,
      description,
      price,
      image,
    };
    addTopics(newTopic);
    setTitle("");
    setTypeOfMovie("");
    setDescription("");
    setPrice("");
    setImage("");
  };
  return (
    <div className="addMovie__container">
      <div className="containerAddTopic">
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название фильма"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          value={typeOfMovie}
          onChange={(e) => setTypeOfMovie(e.target.value)}
          placeholder="Жанр"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Цена"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Постер"
        />
        <button onClick={handleClick} className="addTopic-btn">
          Добавить
        </button>
        <ToastContainer
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
      </div>
    </div>
  );
};

export default AddMovie;
