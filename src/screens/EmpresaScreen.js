import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../componentes/Footer";
import { Image } from "react-bootstrap";
import { banner_empresa01, empresas_contacto, empresas_image, Image_01, platformImage, playButton, empresa_img, } from "../assets/img";
import { HeaderDashboard } from "../componentes/dashboards/HeaderDashboard";
import "../assets/css/screens/public/StyleEmpresaScreen.css";


export const EmpresaScreen = () => {

  const navigate = useNavigate()

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const contactanos = () => {
    navigate('/contact')
  }

  const proyecto = () => {
    navigate('/plans/register')
  }

  const planes = () => {
    navigate('/plans/register')
  }

  return (
    <div className="empresas__section">
      <HeaderDashboard />


      <section className="Enterprises__register-banner" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${banner_empresa01}")` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="Enterprises__register-content">
                <h1>Lleva tu empresa al siguiente nivel a través del entrenamiento de tu equipo de trabajo</h1>
                <p>
                  Contamos con una gran oferta de cursos que te ayudaran a aumentar la productividad de tu organización, acelerando el crecimiento y desarrollando nuevas competencias.
                </p>
                <button onClick={planes} className="empresas__banner-button">
                  Conoce nuestros planes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="empresas__innovacion-container">
        {/* <div className="empresas__innovacion-redirection">
          <a href="/">Home </a>
          <a href="/enterprises">| Empresa</a>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="sub_center_aling">Innovación</h4>
              <hr className="hr__EmpresaScreen" />
              <h2 className="xln__description_EmpresasRigth">
                Implementa procesos y metodologías que le aporten al desarrollo y
                a la optimización de recursos en tus compañia
              </h2>
              <div className="xln__separator__subtitle"></div>
            </div>

            <div className="col-md-8">

              <div className="row item_row">

                <div className="col-md-12">
                  <h4>Introduccion a la innovación</h4>
                  <hr className="hr__EmpresaScreen" />
                </div>

                <div className="col-md-6" >
                  <h2>ADN Innovador</h2>
                  <hr className="hr__EmpresaScreen" />
                  <p>
                    Conoce y desarrolla las habilidades de una empresa innovadora,
                    caracteristicas y acciones para fortalecer tu ADN innovador.
                  </p>

                </div>

                <div className="col-md-6" >
                  <h2>¿Que es innovación?</h2>
                  <hr className="hr__EmpresaScreen" />
                  <p>
                    Ingresa al mundo de la innovación conociendo su definición, tipos, dimensiones y el proceso para implementarla en tu emprendimiento
                  </p>
                </div>

                <div className="col-md-6" >
                  <h2>Entender y explorar</h2>
                  <hr className="hr__EmpresaScreen" />
                  <p>
                    Aprende a identificar oportunidades a través de uso de herramientas para la generación y priorización de ideas
                  </p>
                </div>

                <div className="col-md-6" >
                  <h2>Experimentar y decidir</h2>
                  <hr className="hr__EmpresaScreen" />
                  <p>
                    Arriésgate a experimentar y obtén las herramientas necesarias para plantear hipótesis y experimentos que validen tu idea de negocio
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="empresas__banner-image_content">
        <Image src={empresa_img} className="empresas__banner-image_section" />
      </section>

      <section className="empresas__innovacion-container">
        {/* <div className="empresas__innovacion-redirection">
          <a href="/">Home </a>
          <a href="/enterprises">| Empresa</a>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="sub_center_aling">Innovación</h4>
              <h2 className="xln__description_EmpresasRigth">
                Ingresa al mundo de la innovacion entrenando a tus <span> equipos</span> de trabajo.
              </h2>
              <div className="xln__separator__subtitle"></div>
            </div>


          </div>
        </div>
      </section>

      <section className="empresas__platform-container">
        <div className="row" style={{width: "100%"}}>
          <div className="col-md-6 left" >
            <Image src={platformImage} alt="platform-image" className="empresas__platform-image" />
          </div>
          <div className="col-md-6 rigth" >
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
      </section>

      <section className="empresas__innovacion-container">
        {/* <div className="empresas__innovacion-redirection">
          <a href="/">Home </a>
          <a href="/enterprises">| Empresa</a>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="sub_center_aling">Acerca de</h4>
              <h2 className="xln__description_EmpresasRigth">
                Empresas que hemos acompañado
              </h2>
              <div className="xln__separator__subtitle"></div>
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-6">
              <p>Hemos contribuido con el entrenamiento y acompañamiento de empresas medianas y grandes que le han apostado a la innovación.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Enterprises__register-banner xln__CTA_Enterprises" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${empresas_contacto}")` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Enterprises__register-content">
                <p>Contáctanos</p>
                <h2>Ponte en contacto con nosotros</h2>
                <div className="row" >
                  <div className="col-md-6">
                    <button onClick={contactanos} className="empresas__banner-contacto_button" >Contáctanos ahora</button>
                  </div>

                  <div className="col-md-6">
                    <button onClick={proyecto} className="empresas__banner-proyecto_button" >Quiero iniciar un proyecto</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <div className="empresas__banner-contacto" >
        <Image src={empresas_contacto} />
        <div className="empresas__banner-contacto_content" >
          <p>Contáctanos</p>
          <h1>Ponte en contacto con nosotros</h1>
          
        </div>
      </div> */}
      <Footer />
    </div>
  );
};
