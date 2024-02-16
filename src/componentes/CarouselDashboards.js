import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";
import { equiposIcon } from "../assets/img";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { logologin } from "../assets/img";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CarouselDashboards = ({ item }) => {
  const navigate = useNavigate();
  const course = item;
  const redirect = (name, id) => {
    // navigate(`/course/videoplayer/${name}/${id}`);
    navigate(`/course/info/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <h2 className="ms-3 mb-3 mt-5 fw-bold">Cursos relacionados</h2>

      <Carousel responsive={responsive}>
        {course &&
          course.map((item, index) => (
            <Card
              key={item?.id}
              className="mb-4 rounded mt-3 "
              style={{ width: "100%", minHeight: "300px", cursor: "pointer" }}
              value={item?.name}
              id={item?.id}
              onClick={() => redirect(item?.name, item?.id)}
            >
              <Card.Img variant="top" src={item?.file_path} />
              <Card.Body style={{ height: "15vh" }}>
                <div className="d-flex justify-content-between">
                  <Card.Text style={{ fontSize: "14px", color: "#394649" }}>
                    366 Usuarios
                  </Card.Text>
                  <Card.Text style={{ fontSize: "14px", color: "#394649" }}>
                    250m
                  </Card.Text>
                </div>
                <Card.Title
                  className="title_card"
                  style={{ fontSize: "16px", color: "#002333" }}
                >
                  {item?.name}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <Card.Img variant="bottom" className="w-25" src={logologin} />
                  <i className="fa fa-bookmark mt-2 "></i>
                </div>
              </Card.Body>
            </Card>
          ))}
      </Carousel>
    </>
  );
};
