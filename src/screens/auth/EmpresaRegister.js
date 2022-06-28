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
            <h1>Lorem Ipsum dolor sit amet, consectetuer</h1>
            <div className="planes__option-group">
              <h4>Lorem ipsum dolor sit amet</h4>
              <ul>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
            <div className="planes__option-group">
              <h4>Lorem ipsum dolor sit amet</h4>
              <ul>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
            <div className="planes__option-group">
              <h4>Lorem ipsum dolor sit amet</h4>
              <ul>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
            <div className="planes__option-group">
              <h4>Lorem ipsum dolor sit amet</h4>
              <ul>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="planes__container-about">
          <div className="planes__register-about">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h4>
              Ut wisi enim ad minim veniam quis nostrued exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat Duis autem vel eum iriure dolor
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
