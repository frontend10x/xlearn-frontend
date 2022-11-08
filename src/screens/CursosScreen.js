import React, { useEffect, useState } from "react";
import { HeaderRegister } from "../componentes/HeaderRegister";
import { Footer } from "../componentes/Footer";
import { Image } from "react-bootstrap";
import {
  banner_cursos,
  homeCarousel01, 
  homeCarousel02, 
  homeCarousel03, 
  homeCarousel04,
  XlearnLogoBlack,
} from "../assets/img";
import { getCourse } from "../services/services";
import { useNavigate } from "react-router-dom";

export const CursosScreen = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      async function getCourses() {
          const data = await getCourse();
          setCourses(data.response._embedded.courses);
      }

      getCourses();
  },[]) /* LOGICA DE CURSOS PUBLICOS */
  const filterCourses = () => {
    alert(`Filtro hecho este es el id`);
  };
  
  const redirect = (e) => {
    navigate(`/course/info/${e.target.id}`);
  }

  return (
    <div className="cursos__section">
      <HeaderRegister />
      <div className="cursos__container">

        <div className="cursos__filter-container">
          
          <div className="cursos__filter-content">
            <ul className="cursos__filter-buttons">
              <div className="cursos__filter-title" >
                <h3>Todas Las áreas</h3>
              </div>
              <h4 className="">Innovación</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Sistemas de innovacion"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Emprendimiento Corporativo"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Exelencia Operacional"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Innovacion Abierta"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Oportunidades, retos y Priorizacion"
              />
              {/* <h4>Transformacion Digital</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="IOT"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Analitica y Big Data"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Inteligencia Artificial"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Marketing Digital"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Ciberseguridad"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Blockchain"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Robotica"
              />
              <h4>Gestion De Proyectos</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Agilismo"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Gestion y Liderazgo"
              />
              <h4>Inteligencia y Estrategia</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Estrategia"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Vigilancia"
              /> */}
            </ul>
          </div>

          <div className="cursos__banner">
            <Image
              src={banner_cursos}
              alt="banner__cursos"
              className="cursos__banner-image"
            />
            <div className="cursos__banner-content">
                  <h3>Cursos Online</h3>
                  <p>Conoce nuestra oferta de cursos y encuentra lo que tu empresa necesita</p>
                  <button className="cursos__banner-button" >Obten cursos de prueba gratis</button>
            </div>
          </div>

          <h4 className="cursos__section-recently" >Agregados recientemente</h4>
          <div className="map_content">
            {courses.map((item, index) => (
              <div className="cursos__card-body" key={index}   >
                <Image src={item.file_path} alt={item.file_path} />
                <div className="cursos__card-content" >
                  <div className="cursos__card-titles">
                    <div className="cursos__card-information">
                      {/* <h6>{item.users} usuarios</h6> */}
                      {/* <h6>{item.time}</h6> */}
                    </div>
                    <h5>{item.name}</h5>
                  </div>
                  {/* <Image
                    src={item.logo}
                    alt="logo"
                    className="cursos__card-logo"
                  /> */}
                  <button onClick={redirect} id={item.id} value={item.value} >Descripción</button>
                </div>
              </div>
            ))}
          </div>
          <h4 className="cursos__section-populars" >Cursos Populares</h4>
          <div className="map_content2">
            {courses.map((item, index) => (
              <div className="cursos__card-body" key={index}>
                <Image src={item.file_path} alt={item.file_path} />
                <div className="cursos__card-content">
                  <div className="cursos__card-titles">
                    <div className="cursos__card-information">
                      {/* <h6>{item.users} usuarios</h6> */}
                      {/* <h6>{item.time}</h6> */}
                    </div>
                    <h5>{item.name}</h5>
                  </div>
                  {/* <Image
                    src={item.logo}
                    alt="logo"
                    className="cursos__card-logo"
                  /> */}
                </div>
              </div>
            ))}
          </div>
          <button className="cursos__button-expand" >
            ver todos
          </button>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};
