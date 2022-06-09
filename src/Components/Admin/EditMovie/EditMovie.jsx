import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
<<<<<<< HEAD:src/Components/EditMovie/EditMovie.jsx
import { topicsContext } from "../../Context/TopicContext";
=======
import { topicsContext } from "../../../Context/TopicContext";
>>>>>>> 02b4a7d175e63eea270e3d31e4412d031da99cad:src/Components/Admin/EditMovie/EditMovie.jsx
import "./EditMovie.css";

const EditMovie = () => {
  const { getTopicDetails, detailsObj, editTopicFunc } =
    useContext(topicsContext);
  const { id } = useParams();
  const [editTitle, setEditTitle] = useState(detailsObj.title);
  const [editDescription, setEditDescription] = useState(
    detailsObj.description
  );
  const [editImage, setEditImage] = useState(detailsObj.image);
  const [editLib, setEditLib] = useState(detailsObj.lib);

  useEffect(() => {
    getTopicDetails(id);
  }, []);

  const handleClick = () => {
    let editedTopicObj = {
      title: editTitle,
      description: editDescription,
      image: editImage,
      lib: editLib,
    };
    editTopicFunc(id, editedTopicObj);
  };

  return (
    <div className="containerEditFilm">
      <div className="containerTopic">
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
          <FormControl
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Добавьте название"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
          <FormControl
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Добавьте описание"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
          <FormControl
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            placeholder="Вставьте ссылку на картинку"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
          <FormControl
            value={editLib}
            onChange={(e) => setEditLib(e.target.value)}
            placeholder="Вставьте ссылку на информацию"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div className="btnEdit">
          <NavLink to="/Movies">
            <button id="edit" onClick={handleClick}>
              Change
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
