import { Button, TextField } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-bootstrap";
import "./AddMovie.css";

const AddProduct = () => {
  return (
    <div className="addProduct__container">
      <div className="inputs">
        <div>
          <TextField
            id="filled-basic"
            label="Название фильма"
            variant="filled"
            name="title"
            className="inp1"
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            label="Жанр"
            variant="filled"
            name="type"
            className="inp2"
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            label="Описание"
            variant="filled"
            name="description"
            className="inp3"
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            type="number"
            label="Цена"
            variant="filled"
            name="price"
            className="inp4"
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            label="Постер"
            variant="filled"
            name="img"
            className="inp5"
          />
        </div>
        <div>
          <Button type="button" variant="contained" className="btnSave">
            Добавить фильм
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
