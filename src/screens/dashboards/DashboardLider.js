import React, { useEffect, useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import { banner_cursos, dashboard1, dashboard3, dashboard2, construccion, XlearnLogo, Image_02 } from "../../assets/img";
import { useSelector } from "react-redux";
import { Footer } from "../../componentes/Footer";
import { useNavigate } from "react-router-dom";

export const DashboardLider = () => {

  const { name } = useSelector(state => state.auth)
  const navigate = useNavigate();

  const [course, setCourse] = useState([
    { title: "Emprendimiento Corporativo", image: dashboard3, subtitle: "presenta tus ideas de negocio", time: "2H", user: "366" },
    { title: "Transformacion digital", image: dashboard3, subtitle: "define herramientas para tu negocio", time: "2H", user: "366" },
    { title: "Excelencia operacional", image: dashboard3, subtitle: "determina tu segmento de clientes", time: "2H", user: "366" },
  ]);

  const redirect = () => {
    navigate('/course/videoplayer')
  }

  return (
    <div className="dashboard__lider" >
      <HeaderDashboard />
      <div className="dashboard__lider-banner" >
        <Image src={banner_cursos} alt="banner" className="dashboard__lider-banner_image" />
        <div className="dashboard__lider-banner_content" >
          <h1>¡Hola {name}!</h1>
          <p><span>Continua estudiando.</span> Mira la ultima actividad en tus cursos</p>
        </div>
      </div>

      <div className="xlrn__dashboard__lider-course__route" >
        <div className="xlrn__dashboard__lider-course__route-selection">
          <input type="button" value="Mi Ruta" className="xlrn__dashboard__lider-course__route-selection-input" />
          <span className="h-25 fs-1" >
            |
            </span>
          <input type="button" value="Mis Cursos" className="xlrn__dashboard__lider-course__route-selection-input" />
        </div>

        <div className="xlrn__dashborad__lider-container-block">
          <div className="xlrn__dashboard__lider-block d-flex " >
            <div className="xlrn__dashboard__lider-block-content d-flex gap-4 " >
              <Image src={Image_02} className="xlrn__dashboard__lider-block-image" />
              <div className="xlrn__dashboard__lider-block-content-titles" >
                <p>Curso A</p>
                <h3>Presentacion Efectiva De Negocios</h3>
                <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                  <h4>Progreso: <span>40%</span></h4> | <h4> Lecciones: 6 </h4>
                </div>
                <button onClick={redirect} className="xlrn__dashboard__lider-block-button" >Ingresar</button>
              </div>
            </div>
            <div className="xlrn__dashboard__lider-block-content d-flex gap-4" >
              <Image src={Image_02} className="xlrn__dashboard__lider-block-image" />
              <div className="xlrn__dashboard__lider-block-content-titles" >
                <p>Curso B</p>
                <h3>Presentacion Efectiva De Negocios</h3>
                <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                  <h4>Progreso: <span>40%</span></h4> | <h4> Lecciones: 6 </h4>
                </div>
                <button onClick={redirect} className="xlrn__dashboard__lider-block-button" >Ingresar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="dashboard__lider-container-title" >Cursos Recomendados</h2>

      <div className="dashboard__lider-container_courses" >
        {course &&
          course.map((item, index) => (
            <div key={index} className="dashboard__lider-container_courses-card" >
              <Image src={item.image} className="w-75" />
              <div className="dashboard__lider-container_courses-card-content" >
                <div className="dashboard__lider-container_courses-card-content-body" >
                  <div className="d-flex justify-content-around" >
                    <p>{item.time} de contenido</p>
                    <p>{item.user} de usuarios</p>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <button className="dashboard__lider-container_courses-card-content_button" onClick={redirect} >Ingresar</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="dashboar__lider-construction-container" >
        <div className="dashboar__lider-construction-content" >
          <h1>Hola bienvenido a <span><Image src={XlearnLogo} className="logo_build" /></span> , estamos en construccion para mostrar tus cursos asignados</h1>
          <p>Espera nuestro gran lanzamiento</p>
          <Image src={construccion} className="construccion__image" />
        </div>
      </div>

      <div className="dashboard__lider-container-help" >
        <div className="dashboard__lider-container-info">

          <div className="dashboard__lider-container-help-content" >
            <h1>¿Necesitas Asesoria?</h1>
            <p>¿Tienes dudas? Dejanos tus preguntas, comentarios o sugerencias y pronto nos pondremos en contacto contigo</p>
            <button>Ingresar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
