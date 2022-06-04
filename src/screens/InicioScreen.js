import React, { useState } from "react";
import { Header } from "../componentes/Header";
import { Banner } from "../componentes/Banner";
import { Image_01, Image_02, Image_03, Image_04, empresa } from "../assets/img";
import { Image, Col} from "react-bootstrap";
import { CarouselCourses } from "../componentes/CarouselCourses";

export const InicioScreen = () => {
  const [data, setData] = useState([
    {
      title: "Presentaciones efectivas de Negocios",
      image: Image_01,
    },
    {
      title: "Prototipado Digital",
      image: Image_02,
    },
    {
      title: "ADN de un Innovador",
      image: Image_03,
    },
    {
      title: "Presentaciones efectivas de Negocios",
      image: Image_04,
    },
    {
      title: "Prototipado Digital",
      image: Image_01,
    },
    {
      title: "ADN de un Innovador",
      image: Image_02,
    },
    {
      title: "Prototipado Digital",
      image: Image_03,
    },
    {
      title: "Presentaciones efectivas de Negocios",
      image: Image_04,
    },
    {
      title: "Prototipado Digital",
      image: Image_01,
    },
  ]);

  return (
    <div className="inicioScreen">
      <div className="inicio banner&header ">
        <Header />
        <Banner />
      </div>

      <div className="carousel">
        <h1>Elige tu area o tu curso de especialidad</h1>
          <div>
            <ul>
              <li>Todas Las Areas</li>
              <li>Corporativo</li>
              <li>Innovacion</li>
              <li>Transformacion</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        <div className="d-flex carousel__container">
          {data.map((item, index) => (
            <CarouselCourses 
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>

      <div className="enterprise">
        <Image src={empresa} alt="enterprise" className="enterprise__image" />
        <div>Prueba</div>
      </div>

      <div className="Mockups">
        <h1>Separador de secciones</h1>
      </div>
    </div>
  );
};
