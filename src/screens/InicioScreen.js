import React, { useState } from "react";
import { Header } from "../componentes/Header";
import { Banner } from "../componentes/Banner";
import { homeCarousel01, homeCarousel02, homeCarousel03, homeCarousel04 } from "../assets/img";
import { CarouselCourses } from "../componentes/CarouselCourses";
import { CarouselEnterprises } from "../componentes/CarouselEnterprises";
import { Mockups } from "../componentes/Mockups";
import { Footer } from "../componentes/Footer";
import { PreguntasFrecuentes } from "../componentes/PreguntasFrecuentes";

export const InicioScreen = () => {

  const [data, setData] = useState([
    {
      title: "Presentaciones efectivas de Negocios",
      image: homeCarousel01,
    },
    {
      title: "Prototipado Digital",
      image: homeCarousel02,
    },
    {
      title: "ADN de un Innovador",
      image: homeCarousel03,
    },
    {
      title: "Presentaciones efectivas de Negocios",
      image:homeCarousel04,
    },
    {
      title: "Prototipado Digital",
      image: homeCarousel01,
    },
    {
      title: "ADN de un Innovador",
      image: homeCarousel02,
    },
    {
      title: "Prototipado Digital",
      image: homeCarousel03,
    },
    {
      title: "Presentaciones efectivas de Negocios",
      image: homeCarousel04,
    },
    {
      title: "Prototipado Digital",
      image: homeCarousel01,
    },
  ]);

  return (
    <div className="inicioScreen">
      <div className="Inicio banner&header ">
        <Header />
        <Banner />
      </div> 

      <div className="carousel-section">
        <div className="carousel__section-content">
          <h1>Elige los cursos de tu interes</h1>

          <ul className=" carousel__lista ">
            <button>Todas las Areas</button>
            <button>Corporativo</button>
            <button>Innovacion</button>
            <button>Transformacion</button>
            <button>Diseño de productos</button>
            <button>Sostenibilidad</button>
          </ul>

          <div className="d-flex carousel__container">
            {data.map((item, index) => (
              <CarouselCourses key={index} {...item} />
            ))}
          </div>
        </div>
      </div> 
      
      <div className="enterprise-section">
        <CarouselEnterprises />
      </div> 

      <div className="mockups-section">
        <Mockups />
      </div>
      
      <div className="preguntas-section">
        <PreguntasFrecuentes />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};
