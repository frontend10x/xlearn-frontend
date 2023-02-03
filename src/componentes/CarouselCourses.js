import React from "react";
import { Col, Image, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { XlearnLogo } from "../assets/img";

export const CarouselCourses = ({item}) => {
  
  const navigate = useNavigate();

  const infoCourse = (e) => {
    
    navigate(`/course/info/${e.target.id}`)
  }

  return(
        <Col >
              <div className="carousel__card" >
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
              </div>
        </Col>
    )
}