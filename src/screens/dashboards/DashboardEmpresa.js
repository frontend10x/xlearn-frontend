import React, { useEffect, useState } from "react";
import {
  vistaEmpresa,
  gradient,
  playButton,
  dashboard1,
  dashboard2,
  dashboard3,
  cuposIcon,
  equiposIcon,
  EmpresaInnovacion,
  EmpresaTransformacion,
  EmpresaExelencia,
  hand
} from "../../assets/img";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Footer } from "../../componentes/Footer";
import { logout } from "../../actions/loginactions";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { getCourse, getEnterpriseGroups, getEnterpriseQuotas, validateMembership } from "../../services/services";
import { useNavigate } from "react-router-dom";

import "../../assets/css/screens/dashboards/StyleDashboardEmpresa.css";
import { Header } from "../../componentes/Header";

import { Snackbar, Alert } from "@mui/material";


export const DashboardEmpresa = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { name, subcompanie_id, token } = useSelector((state) => state.auth);
  const { validation } = useSelector((state) => state.membership);
  const { event } = useSelector((state) => state.size);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [course, setCourse] = useState([
    { title: "Innovación", image: EmpresaInnovacion },
    { title: "Transformación digital", image: EmpresaTransformacion },
    { title: "Excelencia operacional", image: EmpresaExelencia },
  ]);
  const [quotas, setQuotas] = useState();
  const [createdTeams, setCreatedTeams] = useState();
  const [news, setNews] = useState([
    {
      title: "Prepara tu proyecto",
      subtitle: "Organiza tus herramientas",
      image: dashboard2,
    },
    {
      title: "Digitaliza tu empresa",
      subtitle: "Prepara tus herramientas",
      image: dashboard2,
    },
  ]);

  const [allCourses, setAllCourses] = useState();
  const [show, setShow] = useState(validation);

  useEffect(() => {
    async function getQuotas() {
      try {
        const data = await getEnterpriseQuotas(token, subcompanie_id)
        setQuotas(data.quotas);
      } catch (error) {
        setQuotas(0);
      }

    }

    async function getGroups() {
      try {
        const data = await getEnterpriseGroups(token, subcompanie_id)
        setCreatedTeams(data.groups["hc:length"]);
      } catch (error) {
        console.error(error, 'error 2')
      }
    }

    async function getAllCoursesForEnterprises() {
      const data = await getCourse();
      setAllCourses(data.response._embedded.courses)
      console.log(data,'datos');
    }

    getQuotas();
    getGroups();
    getAllCoursesForEnterprises();
  }, [token, subcompanie_id])

  const redirect = (e) => {
    if (e.target.value === "users" && quotas > 0) {
      navigate('/gestion/cupos/disponibles')
    } else if (e.target.value === "users" && quotas === 0) {
      navigate('/compra/cupos');
    }
  }

  const ComprarRedirect = () => {
    navigate('/compra/cupos')
  }

  const change = () => {
    getEnterpriseGroups(token, subcompanie_id)
      .then(event => {
        navigate('/manejo/equipos');
      })
      .catch(error => {
        console.error(error, 'error 2')
        navigate('/gestion/equipo');
      }
      )
  }

  const soporte = () => {
    navigate('/contact')
  }

  const redirectTo = (e) => (
    navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`)
  )

  const adjustClass = event ? "xln_add_menuLateral" : "col-md-10";

  return (
    <div className="dashboard__section-empresa">
      <div className="dashboard__container">
        <Header />

        <div className="container xln-content-dash">


          <div className="row">

            <div className="col-md-2 xln-container-navDashboard" style={{ padding: "0" }}>
              <NavegacionDashboard />
            </div>


            <div className={adjustClass}>
              {/* <div className="col-md-10"> */}

              <div className="row dashboard__container-nav_banner">

                <div className="col-md-12">
                  <div className="dashboard__banner-content" style={{ backgroundImage: `linear-gradient(45deg, rgb(0 35 51), rgb(0 0 0 / 0%)), url("${vistaEmpresa}")` }}>
                    <div className="dashboard__banner-title">
                      <h1>¡<span className="style-name">Hola</span> {name}! <Image src={hand} alt="gradiente" /></h1>
                      <p>
                        Es el momento de gestionar y desarrollar tus proyectos con Xlearn
                      </p>
                    </div>
                  </div>


                </div>
                <hr className="xln_sp_DB" />

              </div>

              <div className="xln_section_adminCupos">
                <div className="dashboard__management">
                  <h2>Gestiona los cupos y contenidos</h2>

                  <div className="dashboard__block-container">
                    <div className="col-md-12">
                      <div className="row">

                        <div className="col-md-6 xln-taget-info">
                          <div className="dashboard__block">
                            <div className="row dashboard__block-content">
                              <div className="col-md-4">
                                <Image src={cuposIcon} />
                              </div>
                              <div className="col-md-8">
                                <button className="dashboard__block-button" onClick={redirect} value="users">
                                  Administrar cupos
                                </button>

                              </div>

                              <div className="col-md-12">
                                {quotas ?
                                  <div className="dashboard__title"  >
                                    <h3>{quotas} Cupos disponibles</h3>
                                    <p>Administra tus Cupos</p>
                                  </div>
                                  : <div className="dashboard__title">
                                    <h3>0 Cupos disponibles</h3>
                                    <p>Administra tus Cupos</p>
                                  </div>
                                }
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="col-md-6 xln-taget-info">
                          <div className="dashboard__block">
                            <div className="row dashboard__block-content">

                              <div className="col-md-4">
                                <Image src={equiposIcon} />
                              </div>

                              <div className="col-md-8">
                                <button className="dashboard__block-button" onClick={change}>
                                  Administrar tus equipos
                                </button>
                              </div>

                              <div className="col-md-12">
                                {createdTeams ?
                                  <div className="dashboard__title">
                                    <h3>{createdTeams} Equipos creados</h3>
                                    <p>Crea y gestiona tus equipos</p>
                                  </div>
                                  : <div className="dashboard__title">
                                    <h3> 0 Equipos creados</h3>
                                    <p>Crea y gestiona tus equipos</p>
                                  </div>
                                }
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className="xlrn__dashborad__lider-container-block">
                <div className="xlrn__dashboard__lider-block d-flex " >

                  {validation ?
                    allCourses?.map((item, index) => (
                      <div className="xlrn__dashboard__lider-block-content d-flex" key={index} >
                        <Image src={item.file_path} className="xlrn__dashboard__lider-block-image" />
                        <div className="xlrn__dashboard__lider-block-content-titles" >
                          <p>Curso </p>
                          <h3>{item.name}</h3>
                          <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                            {/* <h4>Progreso: <span>{item['progress:porcentage']}%</span></h4> | <h4> Lecciones: {item["lessons:amount"]} </h4> */}
                          </div>

                          <button onClick={redirectTo} className="xlrn__dashboard__lider-block-button" value={item.name} id={item.id}>Iniciar</button>

                        </div>
                      </div>
                    ))
                    :
                    <p style={{ color: "#8894ab" }} className="fw-bold ms-5" >Valida si ya puedes ver tus cursos</p>
                  }
                </div>
              </div>

              <div className="xln_section_course dashboard__card-info">
                <h2>Identifica las brechas de aprendizaje y sugiere contenido</h2>


                <div className="dashboard__info-container">
                  <div className="row">

                    {course.map((item, index) => (
                      <div key={index} className="col-md-4 dashboard__card-content">
                        <div className="dashboard__card-body">
                          <Image
                            src={item.image}
                            alt="image-card"
                            className="dashboard__card-image"
                          />
                          <div className="dashboard__card-title">
                            <p>{item.title}</p>
                            <button className="dashboard__card-button" onClick={ComprarRedirect}>Adquirir</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>



              </div>

              <div className="dashboard__novedades-section">
                <div className="row dashboard__novedades-container">

                  <div className="col-md-6">
                    <div className="dashboard__novedades-content">
                      <div className="xln-empresa-novedades-content">
                        <h2>Conoce las novedades que tenemos para ti</h2>
                        <div className="xln-separator-title"></div>
                        <p>
                          Conoce las ofertas y cursos que tenemos para tu compañia
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">

                    <div className="row dashboard__novedades-container_image">
                      {news.map((item, index) => (
                        <div key={index} className="col-md-6 dashboard__novedades-card_image">
                          <Image
                            src={item.image}
                            alt="novedades"
                            className="dashboard__novedades-image"
                          />
                          <div className="dashboard__novedades-titles">
                            <h5>{item.title}</h5>
                            <p>{item.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>


                  </div>

                </div>
              </div>

              <div className="dashboard__support-section">
                <div className="row dashboard__support-container">
                  <div className="dashboard__support-content">
                    <h1>¿Necesitas ayuda?</h1>
                    <p>
                      ¿Tienes dudas?  Déjanos tus preguntas, comentarios o sugerencias y pronto nos pondremos en contacto
                    </p>
                    <button onClick={soporte} className="dashboard__support-button">
                      Ir a soporte
                    </button>
                  </div>
                </div>
              </div>

              <div className="row">
                <Footer />
              </div>


            </div>

          </div>



        </div>


      </div>
    </div >
  );
};
