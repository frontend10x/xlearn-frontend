import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";
import { Slider_01, Slider_02, Slider_03, playButton } from "../assets/img";

export const 
Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleIndicators"
        className="carousel slide enterprise__carosuel-indicators"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators  ">
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={Slider_01} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Slider_02} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Slider_03} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="banner__carousel-prev" aria-hidden="true">
            ^
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
            ^
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="slides">
        <div>
          <h3>02</h3>
          <p>Innova en todas las areas</p>
        </div>
        <div>
          <h3>03</h3>
          <p>
            Desarrolla Proyectos para <br /> Innovar
          </p>
        </div>
        <div>
          <h3>04</h3>
          <p>
            Logra exito empresarial <br /> paso a paso
          </p>
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
            <Image src={playButton} className='banner__content-button_image' />
            <p className="mt-4 ms-3 ">Play Demo</p>
          </button>

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
          <div className="content__banner-info">
            <p>
              Competencias y Proyectos
            </p>
            <h1>
              Xlearn:
              <span>
                la  innovacion se hace realidad
              </span>
            </h1>
          </div>
          <div className="content__banner-info_block  ms-3">
            <h3>
              2022 <br /> Innovacion <br /> Sostenibilidad <br /> Transformación
            </h3>
          </div>
        </Col>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body">
              <Image src={Slider_01} className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
