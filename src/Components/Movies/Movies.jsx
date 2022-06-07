import React, { useContext, useEffect } from "react";
import { TopicContext } from "../../Context/TopicContext";
import { Button, ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Movies.css";
import { topicsContext } from "../../Context/TopicContext";

const Movies = () => {
  const { topicsArr, getTopics, prevPage, nextPage } =
    useContext(topicsContext);

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className="container d-flex justify-content-evenly flex-wrap container-cards">
      <Button className="topicListBtn" onClick={() => prevPage()}>
        ←
      </Button>
      {topicsArr.map((item) => (
        <div key={item.id}>
          <div
            className="card1 text-center m-4"
            style={{ width: "18rem", height: "350px" }}
          >
            <img
              src={item.image}
              height="200"
              className="card-img-top"
              alt={item.title}
            />
            {/* <div className="card-body"> */}
            {/* <h5 className="card-title">{item.title}</h5> */}
            <NavLink to={`/details/${item.id}`}>
              <Button className="topicListLook">Просмотреть</Button>
            </NavLink>
            {/* </div> */}
          </div>
        </div>
      ))}
      <Button className="topicListBtn" onClick={() => nextPage()}>
        →
      </Button>
    </div>
  );
};

export default Movies;
