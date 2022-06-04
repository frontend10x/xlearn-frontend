import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";
import { Slider_01, Slider_02, Slider_03, playButton } from "../assets/img";

export const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item /* interval={500} */>
          <img className="d-block w-100" src={Slider_01} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item /* interval={500} */>
          <img className="d-block w-100" src={Slider_02} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item /* interval={500} */>
          <img className="d-block w-100" src={Slider_03} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="slides" >
        <div>
          <h3>02</h3>
          <p>Innova en todas las areas</p>
        </div>
        <div>
          <h3>03</h3>
          <p>Desarrolla Proyectos para <br /> Innovar</p>
        </div>
        <div>
          <h3>04</h3>
          <p>Logra exito empresarial <br /> paso a paso</p>
        </div>
      </div>

      <div className="content__banner">
        <Col className="h-100 w-100" md={6}>
          <div className="d-flex" >
            <Image src={playButton} />
            <p className="mt-4 ms-3" >Play Demo</p>
          </div>

          <div className="content__banner-block">
            <h3>PROPUESTA DE VALOR</h3>
            <p>
              Logra desarrollar competencias y proyectos en las áreas de la
              innovación, el intraemprendimiento, diseño y desarrollo de
              productos, transformación digital, sostenibilidad y más…
            </p>
          </div>
        </Col>
        <Col className="h-75" md={6}>
            <div className="content__banner-info" >
              <p>Competencias y <br/> Proyectos</p>
              <h1>Xlearn: <span> la <br /> innovacion <br /> se hace <br/> realidad </span> </h1>
            </div>
          <div className="content__banner-info_block  ms-3" >
              <h3>
                2022 <br /> Innovacion <br /> Sostenibilidad <br/> Transformación  
              </h3>
          </div>
        </Col>
      </div>
    </div>
  );
};
