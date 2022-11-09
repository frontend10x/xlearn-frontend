import React from "react";
import { registerbanner } from "../../assets/img";
import { HeaderRegister } from "../../componentes/HeaderRegister";
import { Footer } from "../../componentes/Footer";
import { EmpresaFormulario } from "../../componentes/EmpresaFormulario";

export const EmpresasRegister = () => {
  
  return (
    <div className="planes-register">
      <HeaderRegister />
      <div className="planes__register-banner"  style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")` }}>

        <div className="planes__register-content">
          <h1>Requerimientos para el registro</h1>
          <p>
            Regístrate y escoge el plan adecuado para lo que tu organización necesita; podrás gestionar los cupos, equipos y usuarios en los respectivos procesos de formación.
          </p>
        </div>
      </div>
      <div className="planes__register-information">
        <div className="planes__register-container_option">
          <div className="planes__register-option">
            <h2>Regístrate y comienza a desarrollar tus proyectos en innovación</h2>
            <div className="xln__separator__subtitle"></div>
            <div className="planes__option-group">
              <h4>Monitorea tus equipos</h4>
              <ul>
                <li>Evalúa el rendimiento</li>
                <li>Desarrolla proyectos</li>
              </ul>
            </div>
            <div className="planes__option-group">
              <h4>Accede a contenido de valor</h4>
              <ul>
                <li>Contenido exclusivo y especializado</li>
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
                <li>Evalúa el progreso</li>
                <li>Revisa las dinámicas de los equipos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="planes__container-about">
          <div className="planes__register-about">
            <h2>¿Necesitas asesoria?</h2>
            <div className="xln__separator__subtitle"></div>
            <p>
              Déjanos tus datos y regístrate en nuestra plataforma; pronto nos pondremos en contacto (Contáctanos)
            </p>
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
