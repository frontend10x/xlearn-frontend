import React from "react";
import { Col, Image, NavItem, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { XlearnLogo } from "../assets/img";
import Carousel from 'react-multi-carousel';


import "../assets/css/componentes/StyleCarousel.css";

export const CarouselCourses = ({ item }) => {

  const navigate = useNavigate();

  const infoCourse = (e) => {

    navigate(`/course/info/${e.target.id}`)
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1.5
    }
  };

  const course = item;

  return (
    <Row >
      {/* <div className="carousel__card" >
                <Image src={XlearnLogo} alt='logo' style={{width: 70 }} className='carousel__logo' />
                <Image src={item.file_path} className="carousel__image" />
                <div className="carousel__content">
                  <h3 className="carousel__title">{item.name}</h3>
                  <button
                    type="button"
                    className="carousel__button"
                    value={item.name}
                    id={item.id}
                    onClick={infoCourse}
                  >
                    Conocer
                  </button>
                </div>
              </div> */}
    
      <Carousel responsive={responsive}>
        {course &&
          course.map((item, index) => (
            <div key={index} className="dashboard__lider-container_courses-card" >
              <Image src={item.file_path} className="img-recomendation-xln" />
              <div className="dashboard__lider-container_courses-card-content" >
                <div className="dashboard__lider-container_courses-card-content-body" >
                  <h3>{item.name}</h3>
                  <button className="dashboard__lider-container_courses-card-content_button" value={item.name} id={item.id} onClick={infoCourse} >Ingresar</button>
                </div>
              </div>
            </div>

          ))
        }
      </Carousel >
    </Row>
  )
}