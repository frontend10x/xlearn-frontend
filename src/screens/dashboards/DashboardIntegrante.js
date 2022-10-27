import React, { useEffect, useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import { 
  banner_cursos,
  dashboard1, 
  dashboard3, 
  dashboard2,
  construccion,
  XlearnLogo,
  Image_02,
  recomendation_01,
  recomendation_02,
  recomendation_03,
  recomendation_04, } from "../../assets/img";

import { useSelector } from "react-redux";
import { Footer } from "../../componentes/Footer";
import { useNavigate } from "react-router-dom";
import { getUserCourseById } from "../../services/services";

export const DashboardIntegrante = () => {

  const { name, token, id } = useSelector(state => state.auth)
  const navigate = useNavigate();

  const [course, setCourse] = useState([
    { title: "Presentaciones efectivas de negocios", image:  recomendation_01, subtitle: "Presenta tus ideas de negocio", time: "2H", user: "366" },
    { title: "Modelación de negocios", image:  recomendation_02, subtitle: "Define las herramientas para tu negocio", time: "2H", user: "366" },
    { title: "Diseño de propuesta de valor", image:  recomendation_03, subtitle: "Determina tu segmento de clientes", time: "2H", user: "366" },
    { title: "Prototipado", image:  recomendation_04, subtitle: "Valida tus ideas de negocio", time: "2H", user: "366" },
  ]);
  const [courseRoute, setCourseRoute] = useState();
  const redirect = (e) => (
    navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`)
  )

  useEffect(() => {
    async function getUserCourses() {
      const data = await getUserCourseById(token, id);
      setCourseRoute(data.response._embedded.courses)
    }

    getUserCourses()
  }, [])

  console.log(courseRoute,'ruta de los cursos')

  return (
    <div className="dashboard__lider" >
      <HeaderDashboard />
      <div className="dashboard__lider-banner" style={{ backgroundImage: `url(${banner_cursos})` }}>
        {/* <Image src={banner_cursos} alt="banner" className="dashboard__lider-banner_image" /> */}
        <div className="dashboard__lider-banner_content" >
          <h1>¡Hola {name}!</h1>
          <p><span>Continúa aprendiendo.</span> Mira la última actividad en tus cursos</p>
           
        </div>
      </div>

      <div className="xlrn__dashboard__lider-course__route" >
        <div className="xlrn__dashboard__lider-course__route-selection">
          <input type="button" value="Mi ruta" className="xlrn__dashboard__lider-course__route-selection-input" />
        </div>

        <div className="xlrn__dashborad__lider-container-block">
          <div className="xlrn__dashboard__lider-block d-flex " >
              {courseRoute&&

                courseRoute.map((item, index) => (
                  <div className="xlrn__dashboard__lider-block-content d-flex gap-4 " >
                  
                  <Image src={item.file_path} className="xlrn__dashboard__lider-block-image" />
                  <div className="xlrn__dashboard__lider-block-content-titles" key={index}>
                  <p>Curso A</p>
                  <h3>{item.name}</h3>
                  <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                  <h4>Progreso: <span>40%</span></h4> | <h4> Lecciones: 6 </h4>
                  </div>
                  <button onClick={redirect} className="xlrn__dashboard__lider-block-button" value={item.name} id={item.id}>Ver curso</button>
                </div> 
            </div>
                ))
              }
            {/* <div className="xlrn__dashboard__lider-block-content d-flex gap-4" >
              <Image src={Image_02} className="xlrn__dashboard__lider-block-image" />
              <div className="xlrn__dashboard__lider-block-content-titles" >
                <p>Curso B</p>
                <h3>Presentacion Efectiva De Negocios</h3>
                <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                  <h4>Progreso: <span>40%</span></h4> | <h4> Lecciones: 6 </h4>
                </div>
                <button onClick={redirect} className="xlrn__dashboard__lider-block-button" >Ver curso</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <h2 className="dashboard__lider-container-title" >Cursos recomendados</h2>

      <div className="dashboard__lider-container_courses" >
        {course &&
          course.map((item, index) => (
            <div key={index} className="dashboard__lider-container_courses-card" >
              <Image src={item.image} className="img-recomendation-xln" />
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
      {/* <div className="dashboar__lider-construction-container" >
        <div className="dashboar__lider-construction-content" >
          <h1>Hola bienvenido a <span><Image src={XlearnLogo} className="logo_build" /></span> , estamos en construccion para mostrar el progreso en tus cursos</h1>
          <p>Espera nuestro gran lanzamiento</p>
          <Image src={construccion} className="construccion__image" />
        </div>
      </div> */}

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
