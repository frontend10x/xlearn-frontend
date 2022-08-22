import React from "react";
import { registerbanner } from "../../assets/img";
import { HeaderRegister } from "../../componentes/HeaderRegister";
import { Footer } from "../../componentes/Footer";
import { EmpresaFormulario } from "../../componentes/EmpresaFormulario";

export const EmpresasRegister = () => {
  
  return (
    <div className="planes-register">
      <HeaderRegister />
      <div className="planes__register-banner">
        <img
          src={registerbanner}
          alt="register__banner"
          className="register__banner-image"
        />
        <div className="planes__register-content">
          <h1>Requerimientos para el registro</h1>
          <h4>
            Registrate y escoge el plan adecuado para lo que tu organizacion
            necesita; podras gestionar los cupos, equipos y usuarios en los
            respectivos procesos de formacion
          </h4>
        </div>
      </div>
      <div className="planes__register-information">
        <div className="planes__register-container_option">
          <div className="planes__register-option">
            <h1>Registrate y comienza a desarrollar tus proyectos e innovacion</h1>
            <div className="planes__option-group me-5">
              <h4>Monitorea tus equipos</h4>
              <ul>
                <li>Evalua el rendimiento</li>
                <li>Desarrolla proyectos</li>
              </ul>
            </div>
            <div className="planes__option-group ms-5">
              <h4>Accede a contenido de valor</h4>
              <ul>
                <li>contenido exclusivo y espacializado</li>
                <li>Acompañamiento de consultores</li>
              </ul>
            </div>
            <div className="planes__option-group">
              <h4 className="w-75">Haz seguimiento a tus proyectos</h4>
              <ul>
                <li>Genera nuevas ideas</li>
                <li>Estrategias de mejora</li>
              </ul>
            </div>
            <div className="planes__option-group">
              <h4>Genera reportes de progreso</h4>
              <ul>
                <li>Evalua el progreso</li>
                <li>Revisa las dinamicas de los equipos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="planes__container-about">
          <div className="planes__register-about">
            <h1>¿Necesitas asesoria?</h1>
            <h4>
              Dejanos tus datos y registrate en nuestra plataforma; pronto nos pondremos en contacto
            </h4>
          </div>
        </div>
        <div className="planes__form-container">
         <EmpresaFormulario />
        </div>
        <Footer />
      </div>
    </div>
  );
};
