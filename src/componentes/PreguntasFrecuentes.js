import React from "react";
import { Image } from "react-bootstrap";
import { homeCarouselPF01, homeCarouselPF02 } from "../assets/img";

export const PreguntasFrecuentes = () => {
  return (
    <div className="preguntas__frecuentes">
      <div className="preguntas__frecuentes-content">

      <h2 className="preguntas__frecuentes-title">
        Preguntas frecuentes y tutoriales
      </h2>
      <p className="preguntas__frecuentes-subtitle">
        ¿Tienes dudas? tenemos el espacio perfecto para ti; en esta seccion podras
        resolver tus preguntas y encontrar contenido de valor
      </p>
      </div>

      {/* // <!-- Carousel --> */}
      <div
        id="demo"
        className="carousel slide preguntas__carousel"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators xln_preguntas_NavPuntos">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          {/* <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button> */}
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner preguntas__carousel-slides">
          
          <div className="carousel-item active">
            <div className="xln_carousel_PositionLeft">
              <Image
                src={homeCarouselPF01}
                alt="preguntas frecuentes 1"
                className="preguntas__carousel-image"
              />
            </div>
            <div className="preguntas__slides-content xln_carousel_PositionRigth">
              <div className="preguntas__content-box">
              <h4>
                Feugiat pretium nib ipsum consequa vida tru quisque <br />
                non tellus orci ac strud ctor tellus mauris Feugiat <br />
                pretium nib ipsum conseq?
              </h4>
              <div className="preguntas__slides-content_info ">
                <p className="preguntas__comillas">“</p>
                <p>
                  Feugiat pretium nib ipsum consequa vida trum <br /> quisque
                  non tellus orci ac strud ctor tellus mauris <br /> Feugiat
                  pretium nib ipsum consequa vida trum <br /> Feugiat pretium
                  nib ipsum consequa vida trum <br /> quisque non tell
                </p>
              </div>
              <button className="preguntas__button" >LOREM IPSUM DOLOR SIT AMET</button>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="xln_carousel_PositionLeft">
              <Image
                src={homeCarouselPF02}
                alt="preguntas frecuentes 2"
                className="preguntas__carousel-image"
              />
            </div>

            <div className="preguntas__slides-content xln_carousel_PositionRigth">
              <div className="preguntas__content-box">

                <h4>
                  Feugiat pretium nib ipsum consequa vida tru quisque <br />
                  non tellus orci ac strud ctor tellus mauris Feugiat <br />
                  pretium nib ipsum conseq?
                </h4>
                <div className="preguntas__slides-content_info">
                  <p className="preguntas__comillas">“</p>
                  <p>
                    Feugiat pretium nib ipsum consequa vida trum <br /> quisque
                    non tellus orci ac strud ctor tellus mauris <br /> Feugiat
                    pretium nib ipsum consequa vida trum <br /> Feugiat pretium
                    nib ipsum consequa vida trum <br /> quisque non tell
                  </p>
                </div>
                <button className="preguntas__button" >LOREM IPSUM DOLOR SIT AMET</button>
              </div>
            </div>

          </div>
          {/* <div className="carousel-item">
            <Image
              src={Image_04}
              alt="preguntas frecuentes 3"
              className="preguntas__carousel-image"
            />

            <div className="preguntas__slides-content">
            <div className="preguntas__content-box">

              <h4>
                Feugiat pretium nib ipsum consequa vida tru quisque <br />
                non tellus orci ac strud ctor tellus mauris Feugiat <br />
                pretium nib ipsum conseq?
              </h4>
              <div className="preguntas__slides-content_info">
                <p className="preguntas__comillas">“</p>
                <p>
                  Feugiat pretium nib ipsum consequa vida trum <br /> quisque
                  non tellus orci ac strud ctor tellus mauris <br /> Feugiat
                  pretium nib ipsum consequa vida trum <br /> Feugiat pretium
                  nib ipsum consequa vida trum <br /> quisque non tell
                </p>
              </div>
              <button className="preguntas__button" >LOREM IPSUM DOLOR SIT AMET</button>
            </div>
          </div>

          </div> */}
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="preguntas__carousel-prev">^</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="preguntas__carousel-next">^</span>
        </button>
      </div>
      {/* Final de Carrusel */}
    </div>
  );
};
