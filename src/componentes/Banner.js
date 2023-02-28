import React, { useEffect, useRef } from "react";
import { Col, Image } from "react-bootstrap";
import {
  Slider_01,
  Slider_02,
  Slider_03,
  playButton,
  buttonprev,
  buttonnext,
} from "../assets/img";

import "../assets/css/componentes/StyleBanner.css";

export const Banner = () => {

  const videoRef = useRef(null);

  useEffect(() => {
      let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75]
      };

      let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
          videoRef.current.play();
          } else {
          videoRef.current.pause();
          }
      });
      };

      let observer = new IntersectionObserver(handlePlay, options);

      observer.observe(videoRef.current);
  });

  return (
    <div className="banner">

      <div className="controladores carousel slide enterprise__carosuel-indicators" id="carouselExampleIndicators" data-bs-ride="carousel">
        
        <div className="row">
          <div className="col-md-12">

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

          </div>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={Slider_01} className="d-block w-100" alt="..." />
            <div className="content__banner-info">
              <p>Competencias y proyectos</p>
              <h1>
                Xlearn:
                <span>
                  <br />
                  Haz de la innovación el motor de transformación
                </span>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Slider_02} className="d-block w-100" alt="..." />
            <div className="content__banner-info">
              <p>Competencias y proyectos</p>
              <h1>
                Xlearn:
                <span>
                  <br />
                  Involucra a tus empleados en los procesos de formación
                </span>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Slider_03} className="d-block w-100" alt="..." />
            <div className="content__banner-info">
              <p>Competencias y proyectos</p>
              <h1>
                Xlearn:
                <span>
                  <br />
                  Crea y diseña nuevos negocios con Xlearn
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="xln-btn-banners">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="banner__carousel-prev" aria-hidden="true">
              <img src={buttonprev} alt="prev" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className=" carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="banner__carousel-next" aria-hidden="true">
              <img src={buttonnext} alt="next" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className="slides">
        <div className="slides__content">
          <h3>01</h3>
          <p>Innova</p>
        </div>
        <div className="slides__content">
          <h3>02</h3>
          <p>Desarrolla</p>
        </div>
        <div className="slides__content">
          <h3>03</h3>
          <p>Crea</p>
        </div>
      </div>

      <div className="content__banner">
        <Col className="h-100 w-100" md={6}>
          <button
            className=" content__banner-button d-flex"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <Image src={playButton} className="banner__content-button_image" />
            <p className="mt-4 ms-3 ">Play Demo</p>
          </button>

          <div className="content__banner-block">
            <h3>PROPUESTA DE VALOR</h3>
            <p>
              Somos una plataforma educativa para empresas especializada en innovación; podrás encontrar contenido de alto valor para tu  compañía, realizar tus entrenamientos y proyectos a partir del desarrollo de temáticas como: innovación, sostenibilidad, transformación digital, emprendimiento corporativo, excelencia operacional y mucho más...
            </p>
          </div>
        </Col>
        <Col className="h-75" md={6}>
          <div className="content__banner-info_block  ms-3">
            <h3>
              2023 <br /> Innovación <br /> Sostenibilidad <br /> Transformación
            </h3>
          </div>
        </Col>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div className="modal-body">
              <video className="xln-content-video_MS"
                width="100%"
                ref={videoRef}
                pause={false}
                muted={false}
                controls
                /* poster={posterMSVideo} */
                src={require("./../assets/videos/video-promocional.mp4")}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
