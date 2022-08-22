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
        <div className="dashboard__container-nav_banner">
          <div className="dashboard__navegacion-container">
            <NavegacionDashboard />
          </div>
          <div className="dashboard__banner">
            <div className="dashboard__banner-content">
              <Image
                src={vistaEmpresa}
                alt="banner"
                className="dashboard__banner-image"
              />
            </div>

            <div className="dashboard__banner-title">
              <h1>¡Hola {name}!</h1>
              <p>
                Et wisi enim ad minim veniam, quis nostrud lorem ipsum dolor sit
                amet.
              </p>
            </div>
            <Image src={gradient} alt="gradiente" className="gradient" />
          </div>
        </div>

        <div className="dashboard__management">
          <h1>Gestiona los cupos y contenidos</h1>

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
                  <h1>0/20 Cupos utilizados</h1>
                  <p>Sed diam nonummy nibh euismod tincidunt laoreet</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="dashboard__block">
                <div className="dashboard__block-content">
                  <Image src={equiposIcon} />
                  <button className="dashboard__block-button">
                    Administrar Cupos
                  </button>
                </div>
                <div className="dashboard__title">
                  <h1>0 Equipos Creados</h1>
                  <p>Dolore magna aliquam erat volutpat.</p>
                </div>
              </div>
            </Col>
          </div>
        </div>

        <div className="dashboard__card-info">
          <h1>Identifica las brechas de aprendizaje y sugiere contenido</h1>

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
                <h1>Conoce las novedades que tenemos para ti</h1>
                <p>
                  Sed diam nonummy nibh euismod tincidunt laoreet dolore magna
                  aliquam erat volutpat.
                </p>
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
                Feugiat pretium nib ipsum consequa vida trum quisque non tellus
                orci ac strud ctor tellus mauris Feugiat pretium nib ipsum
                consequa vida trum
              </p>
              <button className="dashboard__support-button">
                Ir a soporte
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
