import React, { useEffect, useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import {
  banner_cursos,
  recomendation_01,
  recomendation_02,
  recomendation_03,
  recomendation_04,
} from "../../assets/img";
import { useSelector } from "react-redux";
import { Footer } from "../../componentes/Footer";
import { useNavigate } from "react-router-dom";
import { getUserCourseById } from "../../services/services";
import { getCourse } from "../../services/services";

export const DashboardIntegrante = () => {

  const { name, token, id } = useSelector(state => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [course, setCourse] = useState([]);
  const [courseRoute, setCourseRoute] = useState();
  const [progress, setProgress] = useState(false);

  const redirect = (e) => (
    navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`)
  )

  // const evaluation = (e) => (
  //   navigate(`/evaluacion/${e.target.id}`)
  // )

  const support = () => {
    navigate('/contact')
  }

  useEffect(() => {
    async function getUserCourses() {
      const data = await getUserCourseById(token, id);
      setCourseRoute(data.response._embedded.courses)
    }
   
    async function getAllCourses() {
      const data = await getCourse();
      setCourse(data.response._embedded.courses)
    }

    getUserCourses();
    getAllCourses();
  }, [])

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
            {courseRoute ?

              courseRoute.map((item, index) => (
                <div className="xlrn__dashboard__lider-block-content d-flex" key={index} >
                  {console.log(item,'valores')}
                  <Image src={item.file_path} className="xlrn__dashboard__lider-block-image" />
                  <div className="xlrn__dashboard__lider-block-content-titles" >
                    <p>Curso A</p>
                    <h3>{item.name}</h3>
                    <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                      <h4>Progreso: <span>0%</span></h4> | <h4> Lecciones: 0 </h4>
                    </div>
                    <button onClick={redirect} className="xlrn__dashboard__lider-block-button" value={item.name} id={item.id}>Iniciar</button>
                    {/* {progress &&
                      // <button onClick={evaluation} className="xlrn__dashboard__lider-block-button" value={item.name} id={item.id}>Presentar</button> : 
                    } */}
                  </div>
                </div>
              ))
              : <p style={{color: "#8894ab"}} className="fw-bold" >Aun no tienes una ruta asignada</p>
            }
            {/* <div className="xlrn__dashboard__lider-block-content d-flex 5" >
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
              <Image src={item.file_path} className="img-recomendation-xln" />
              <div className="dashboard__lider-container_courses-card-content" >
                <div className="dashboard__lider-container_courses-card-content-body" >
                  <div className="d-flex justify-content-around" >
                    {/* <p>{item.time} de contenido</p>
                    <p>{item.user} de usuarios</p> */}
                  </div>
                  <h3>{item.name}</h3>
                  <button className="dashboard__lider-container_courses-card-content_button" value={item.name} id={item.id} onClick={redirect} >Ingresar</button>
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
            <h1>¿Necesitas Asesoría?</h1>
            <p>¿Tienes dudas? Dejanos tus preguntas, comentarios o sugerencias y pronto nos pondremos en contacto contigo</p>
            <button onClick={support} >Ingresar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
