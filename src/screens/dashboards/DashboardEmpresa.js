import React, { useState } from "react";
import {
  vistaEmpresa,
  gradient,
  playButton,
  dashboard1,
  dashboard2,
  dashboard3,
  cuposIcon,
  equiposIcon,
} from "../../assets/img";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Footer } from "../../componentes/Footer";
import { logout } from "../../actions/loginactions";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";

export const DashboardEmpresa = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [course, setCourse] = useState([
    { title: "Emprendimiento Corporativo", image: dashboard1 },
    { title: "Transformacion digital", image: dashboard3 },
    { title: "Excelencia operacional", image: dashboard3 },
  ]);

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

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="dashboard__section-empresa">
      <div className="dashboard__container">
        <HeaderDashboard />
        <div className="xln-content-dash">

          <div className="xln-contentNavLeft-block-empresa">
            <div className="dashboard__navegacion-container">
                <NavegacionDashboard />
            </div>
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
                      <button className="dashboard__block-button">
                        Administrar Cupos
                      </button>
                    </div>
                    <div className="dashboard__title">
                      <h3>0/20 Cupos utilizados</h3>
                      <p>Administra tus Cupos</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="dashboard__block">
                    <div className="dashboard__block-content">
                      <Image src={equiposIcon} />
                      <button className="dashboard__block-button">
                        Administrar tus equipos
                      </button>
                    </div>
                    <div className="dashboard__title">
                      <h3>0 Equipos Creados</h3>
                      <p>Crea y gestiona tus equipos</p>
                    </div>
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
                    Tienes dudas? Dejanos ts preguntas, comentarios o sugerencias y pronto nos pondremos en contacto
                  </p>
                  <button className="dashboard__support-button">
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
