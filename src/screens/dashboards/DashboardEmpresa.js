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
} from "../../assets/img";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Footer } from "../../componentes/Footer";
import { logout } from "../../actions/loginactions";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { getEnterpriseGroups, getEnterpriseQuotas } from "../../services/services";
import { useNavigate } from "react-router-dom";

export const DashboardEmpresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { name, subcompanie_id, token } = useSelector((state) => state.auth);
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

  useEffect(() => {
    async function getQuotas() {
      try {
        const data = await getEnterpriseQuotas(token, subcompanie_id)
        console.log(data)
        setQuotas(data.quotas);
      } catch (error) {
        console.error(error, 'error')
        setQuotas(0);
      }

    }

    async function getGroups() {
      try {
        const data = await getEnterpriseGroups(token, subcompanie_id)
        setCreatedTeams(data.groups["hc:length"]);
      } catch (error) {
        console.error(error,'error 2')        
      }
    }
    getQuotas();
    getGroups();
  }, [token, subcompanie_id])

  const redirect = (e) => {
    console.log(e.target.value, quotas)
    if (e.target.value === "users" && quotas > 0) {
      navigate('/gestion/cupos/disponibles')
    } else if (e.target.value === "users" && quotas === 0) {
      navigate('/compra/cupos');
    }
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


  return (
    <div className="dashboard__section-empresa">
      <div className="dashboard__container">
        <HeaderDashboard />
        <div className="xln-content-dash">


          <div className="xln__content__nav">
            <NavegacionDashboard />
          </div>


          <div className="xln-contentSection-block-empresa">

            <div className="dashboard__container-nav_banner">

              <div className="dashboard__banner">
                <div className="dashboard__banner-content">
                  <div className="dashboard__banner-title">
                    <h1>¡Hola {name}!</h1>
                    <p>
                      Es el momento de gestionar y desarrollar tus proyectos con Xlearn
                    </p>
                  </div>
                  <Image
                    src={vistaEmpresa}
                    alt="banner"
                    className="dashboard__banner-image"
                  />
                  <Image src={gradient} alt="gradiente" className="gradient" />
                </div>


              </div>

            </div>

            <div className="dashboard__management">

              <h2>Gestiona los cupos y contenidos</h2>

              <div className="dashboard__block-container">
                <Col>
                  <div className="dashboard__block">
                    <div className="dashboard__block-content">
                      <Image src={cuposIcon} />
                      <button className="dashboard__block-button" onClick={redirect} value="users">
                        Administrar cupos
                      </button>
                    </div>
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
                </Col>
                <Col>
                  <div className="dashboard__block">
                    <div className="dashboard__block-content">
                      <Image src={equiposIcon} />
                      <button className="dashboard__block-button" onClick={change}>
                        Administrar tus equipos
                      </button>
                    </div>
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
                </Col>
              </div>
            </div>
            <div className="dashboard__card-info">
              <h2>Identifica las brechas de aprendizaje y sugiere contenido</h2>

              <div className="dashboard__info-container">
                {course.map((item, index) => (
                  <div key={index} className="dashboard__card-content">
                    <div className="dashboard__card-body">
                      <Image
                        src={item.image}
                        alt="image-card"
                        className="dashboard__card-image"
                      />
                      <div className="dashboard__card-title">
                        <p>{item.title}</p>
                        <button className="dashboard__card-button">Adquirir</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard__novedades-section">
              <div className="dashboard__novedades-container">
                <Col>
                  <div className="dashboard__novedades-content">
                    <div className="xln-empresa-novedades-content">
                      <h2>Conoce las novedades que tenemos para ti</h2>
                      <div className="xln-separator-title"></div>
                      <p>
                        Conoce las ofertas y cursos que tenemos para tu compañia
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="dashboard__novedades-container_image">
                    {news.map((item, index) => (
                      <div key={index} className="dashboard__novedades-card_image">
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
                </Col>
              </div>
            </div>
            <div className="dashboard__support-section">
              <div className="dashboard__support-container">
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
          </div>

        </div>

        <div className="xln-contentSection-block-empresa">
          <Footer />
        </div>
      </div>
    </div>
  );
};
