import React from "react";
import { Col, Image, NavItem } from "react-bootstrap";
import { XlearnLogo } from "../assets/img";

export const CarouselCourses = ([item]) => {
    return(
        <Col >
              <div className="carousel__card" >
                <Image src={XlearnLogo} alt='logo' style={{width: 70 }} className='carousel__logo' />
                {/* <Image src={image} className="carousel__image" /> */}
                <div className="carousel__content">
                  <h3 className="carousel__title">{item.areas.name}</h3>
                  <button
                    type="button"
                    className="carousel__button"
                  >
                    Conocer
                  </button>
                </div>
              </div>
        </Col>
    )
}