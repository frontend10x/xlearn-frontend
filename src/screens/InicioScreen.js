import React, { useState, useEffect} from "react";
import { Header } from "../componentes/Header";
import { Banner } from "../componentes/Banner";
import { homeCarousel01, homeCarousel02, homeCarousel03, homeCarousel04 } from "../assets/img";
import { CarouselCourses } from "../componentes/CarouselCourses";
import { CarouselEnterprises } from "../componentes/CarouselEnterprises";
import { Mockups } from "../componentes/Mockups";
import { Footer } from "../componentes/Footer";
import { PreguntasFrecuentes } from "../componentes/PreguntasFrecuentes";
import { getCourse } from "../services/services";

export const InicioScreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  useEffect(() => {
    async function getCarrouselCourses() {
      const data = await getCourse()
      console.log(data.response._embedded.courses)
      setData(data.response._embedded.courses)
    } 
    getCarrouselCourses()
  }, [])
  

  return (
    <div className="inicioScreen">
      <div className="Inicio banner&header ">
        <Header />
        <Banner />
      </div> 

      <div className="carousel-section">
        <div className="carousel__section-content">
          <h1>Elige los cursos de tu interés</h1>

          <ul className=" carousel__lista ">
            <button>Todas las areas</button> |
            <button>Innovación</button> |
            <button>Corporativo</button> |
            <button>Transformación</button> |
            <button>Diseño de productos</button> |
            <button>Sostenibilidad</button>
          </ul>

          <div className="d-flex carousel__container">
            {data.map((item, index) => (
              <CarouselCourses key={index} item={item} />
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
