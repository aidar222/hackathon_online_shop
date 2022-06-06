import React from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  ToastContainer,
} from "react-bootstrap";
import "./AddMovie.css";

const AddProduct = () => {
  return (
    <div className="addProduct__container">
      <div className="containerAddTopic">
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          placeholder="Название фильма"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          placeholder="Жанр"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          placeholder="Описание"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          placeholder="Цена"
        />
        <Form.Control
          className="inp"
          size="lg"
          type="text"
          placeholder="Постер"
        />
        <button className="addTopic-btn">Добавить</button>
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

export default AddProduct;
