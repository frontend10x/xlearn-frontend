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
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    async function getCourses() {
      const data = await getCourse();
      setCourses(data.response._embedded.courses);
      console.log(data, 'cursos');
    }

    getCourses();
  }, []) /* LOGICA DE CURSOS PUBLICOS */
  const filterCourses = () => {
    alert(`Filtro hecho este es el id`);
  };

  const redirect = (item) => {
    navigate(`/course/info/${item}`);
  }

  const startRegister = () => {
    navigate('/plans/register')
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
                className="text-start "
                onClick={filterCourses}
                value="Sistemas de innovación"
                type="button"
              />
              <p
                className="text-start fs-5 mt-3"
              // onClick={filterCourses}
              // value="Emprendimiento Corporativo"
              >Emprendimiento corporativo</p>
              <p
                className="text-start fs-5"
                value="Excelencia Operacional"
              >Excelencia operacional</p>
              <p
                className="text-start fs-5"
                value="Innovacion Abierta"
              >Innovacion abierta</p>
              <p
                className="text-start fs-5"
                value="Oportunidades, retos y Priorizacion"
              >Oportunidades, retos y Priorizacion</p>


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
              <button className="cursos__banner-button w-25 " onClick={startRegister} >Registrarme</button>
            </div>
          </div>

          <h4 className="cursos__section-recently" >Agregados recientemente</h4>
          <div className="map_content">
            {courses.map((item, index) => (
              <div className="cursos__card-body" key={index} onClick={() => redirect(item.id)}  >
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
          {/* <button className="cursos__button-expand" >
            ver todos
          </button> */}
        </div>

      </div>
      <Footer />
    </div>
  );
};
