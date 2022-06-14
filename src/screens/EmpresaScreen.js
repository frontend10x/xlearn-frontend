import React from "react";
import { HeaderRegister } from "../componentes/HeaderRegister";
import { Footer } from "../componentes/Footer";
import { Image } from "react-bootstrap";
import { empresa } from "../assets/img";

export const EmpresaScreen = () => {
  return (
    <div className="empresas">
      <HeaderRegister />
      <div className="empresas__banner-info">
        <Image src={empresa} className="empresas__banner-image" />
        <div className="empresas__banner-content">
          <h1>Requerimientos para el registro</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
          </p>
        </div>
      </div>
      <div className="empresas__content">
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className="empresas__content-info">
          <div className="d-flex">
            <div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
              <ul>
                <li>Nibh euismod tincidunt ut laoreet dolore</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
            <div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
              <ul>
                <li>Nibh euismod tincidunt ut laoreet dolore</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
              <ul>
                <li>Nibh euismod tincidunt ut laoreet dolore</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
            <div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
              <ul>
                <li>Nibh euismod tincidunt ut laoreet dolore</li>
                <li>Nibh euismod tincidunt</li>
                <li>Nibh euismod tincidunt</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="empresas__form-container">
          <div className="empresas__form-content">
            <h3>Solicitud De Registro</h3>
            <form className="empresas__form">
              <div className=" d-flex gap-3 mb-4 ">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
              </div>
              <div className=" d-flex gap-3 mb-4">
                <input type="text" placeholder="Empresa" />
                <input type="text" placeholder="Correo Electronico" />
              </div>
              <div className=" d-flex gap-3 mb-4">
                <input type="text" placeholder="Web Site Empresa" />
                <input type="text" placeholder="tamaño de la empresa" />
              </div>
              <div className=" d-flex gap-3 mb-4">
                <input type="text" placeholder="selecciona tu pais" />
                <input type="text" placeholder="selecciona" />
              </div>
              <div className=" d-flex gap-3 mb-4">
                <input type="text" placeholder="planes" />
                <input type="text" placeholder="cupos" />
              </div>
              <input
                type="textarea"
                placeholder="cuentanos sobre tus necesidades"
                className="empresas__text-area"
              />

              <button className="empresas__button" >Registrarme</button>
            </form>
          </div>
        </div>
      </div>
      <div className="empresas__promo">
        <div className="empresas__promo-content">
          <h2>Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
