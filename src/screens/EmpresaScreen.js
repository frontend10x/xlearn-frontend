import React from "react";
import { HeaderRegister } from "../componentes/HeaderRegister";
import { Footer } from "../componentes/Footer";
import { Image } from "react-bootstrap";
import { banner_empresa01, empresas_contacto, empresas_image, Image_01, platformImage, playButton, empresa_img, } from "../assets/img";

export const EmpresaScreen = () => {
  return (
    <div className="empresas__section">
      <HeaderRegister />
      <div className="empresas__banner">
        <Image
          src={banner_empresa01}
          alt="banner_empresa"
          className="empresas__banner-image"
        />
        <div className="empresas__banner-content">
          <h1>
          Lleva tu empresa al siguiente nivel a través del entrenamiento de tu equipo de trabajo
          </h1>
          <p>
            Contamos con una gran oferta de cursos que te ayudaran a aumentar la productividad de tu organización, acelerando el crecimiento y desarrollando nuevas competencias
          </p>
          <button className="empresas__banner-button">
          Conoce nuestros planes
          </button>
        </div>
      </div>
      <div className="empresas__innovacion-container">
        <div className="empresas__innovacion-redirection">
          <a href="/">Home </a>
          <a href="/enterprises">| Empresa</a>
        </div>
        <div className="empresas__innovacion-title">
          <h4>INNOVACIÓN</h4>
        </div>
        <div className="empresas__innovacion-information_container" >
          <div className="empresas__innovacion-content">
            <h1>
              Implementa procesos y metodologías que le aporten al desarrollo y
              a la optimización de recursos en tus compañia
            </h1>
          </div>
          <div className="empresas__innovacion-information">
            <div className="empresas__innovacion-information_group" >
              <div className="empresas__innovacion-information_group-title" >
                <h4>Introduccion a la innovación</h4>
              </div>
              <h2>ADN Innovador</h2>
              <p>
                Conoce y desarrolla las habilidades de una empresa innovadora,
                caracteristicas y acciones para fortalecer tu ADN innovador.
              </p>
            </div>
            <div className="empresas__innovacion-information_group" >
              <div className="empresas__innovacion-information_group-title" >
                {/* <h4>Introduccion a la innovación</h4> */}
              </div>
              <h2>¿Que es innovación?</h2>
              <p>
              Ingresa al mundo de la innovación conociendo su definición, 
              tipos, dimensiones y el proceso para implementarla en tu emprendimiento
              </p>
            </div>
            <div className="empresas__innovacion-information_group" >
              <div className="empresas__innovacion-information_group-title" >
                <h4>Introduccion a la innovacion</h4>
              </div>
                <h2>Entender y explorar</h2>
              <p>
              Aprende a identificar oportunidades a través de uso de herramientas para la generación y priorización de ideas
              </p>
            </div>
            <div className="empresas__innovacion-information_group" >
              <div className="empresas__innovacion-information_group-title" >
                <h4>Introducción a la innovación</h4>
              </div>
              <h2>Experimentar y decidir</h2>
              <p>
                Arriésgate a experimentar y obtén las herramientas necesarias para plantear hipótesis y experimentos que validen tu idea de negocio
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="empresas__banner-image_content">
          <Image src={empresa_img} className="empresas__banner-image_section" />
        </div>
        <div className="empresas__section-information" >
          <div className="empresas__section-information_content" >
            <h4>INNOVACION</h4>
            <h1>Ingresa al mundo de la innovacion entrenando a tus <span> equipos</span> de trabajo </h1>
          </div>
        </div>
        <div className="empresas__platform-container">
          <div className="empresas__platform-container_image" >
            <Image src={platformImage} alt="platform-image" className="empresas__platform-image" />
          </div>
          <div className="empresas__platform-container_options" >
            {/* <div className="empresas__platform-video" >
              <Image src={playButton} alt="playVideo" />
              <p>Play Video</p>
            </div> */}
            <div className="empresas__platform-options_content" >
              <h1>Conoce nuestra plataforma; podrás analizar el rendimiento y mejorar los procesos de tu compañía a través de la formación y capacitación</h1>
              <h4>- Xlearn para empresas</h4>
              <p>Regístrate y gestiona los cupos para el desarrollo de proyectos que impulsen la innovación y el aprovechamiento de la capacidad instalada</p>
              {/* <h4>+ Administra tu equipo</h4>
              <h4>+ Monitorea el rendimiento</h4> */}
            </div>
          </div>
        </div>
        <div className="empresas__colaboration-container" >
          <div className="empresas__colaboration-content" >
            <h4>ACERCA DE </h4>
            <h1>Empresas que hemos <span>acompañado</span></h1>
          </div>
          <div className="empresas__colaboration-information">
            <div className="empresas__colaboration-information-content">
              <p>Hemos contribuido con el entrenamiento y acompañamiento de empresas medianas y grandes que le han apostado a la innovación</p>
            </div>
          </div>
        </div>
        <div className="empresas__banner-contacto" >
          <Image src={empresas_contacto} />
          <div className="empresas__banner-contacto_content" >
            <p>Contáctanos</p>
            <h1>Ponte en contacto con nosotros</h1>
            <div className="empresas__banner-button_container" >
              <button className="empresas__banner-contacto_button" >Contactanos ahora</button>
              <button className="empresas__banner-proyecto_button" >Quiero iniciar un proyecto</button>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};
