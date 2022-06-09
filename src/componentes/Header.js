import React from "react";
import { XlearnLogo } from "../assets/img";
import { Navegacion } from "./Navegacion";

export const Header = () => {
  return (
    <div>
      <header id="header" className="header fixed_top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a className="burg-toggle" id="b-toggle" href="#menu-full">
            <span></span>
          </a>

          <img src={XlearnLogo} alt="logo" className="header__logo" />

          <div className="menu-full" id="menu-full">
            <a className="close-button" href="#">
              <span></span>
            </a>
            <div>
              <div>
                <div>
                  <ul className="itens ">
                    <li>
                      <a href="ingresar">Ingresar</a>
                      <ul className="sub-menu" id="ingresar">
                        <li>
                          <a href="#">Inicia secion</a>
                        </li>
                        <li>
                          <a href="#">Registrarse</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#mais-servicos">Planes</a>
                      <ul className="sub-menu " id="mais-servicos">
                        <li>
                          <a href="#">Elite</a>
                        </li>
                        <li>
                          <a href="#">Corporativo</a>
                        </li>
                        <li>
                          <a href="#">Multi-Empresarial</a>
                        </li>
                        <li>
                          <a href="#">Basico</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#categorias-blog">Categorias</a>
                      <ul className="sub-menu " id="categorias-blog">
                        <li>
                          <a href="#">Innovacion</a>
                        </li>
                        <li>
                          <a href="#">Transformacion</a>
                        </li>
                        <li>
                          <a href="#">Sostenibilidad</a>
                        </li>
                        <li>
                          <a href="#">Gestion De Proyectos</a>
                        </li>
                        <li>
                          <a href="#">Inteligencia</a>
                        </li>
                        <li>
                          <a href="#">Cultura</a>
                        </li>
                        <li>
                          <a href="#">Gestion Estrategica</a>
                        </li>
                        <li>
                          <a href="#">Habilidades</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="" href="#acerca">Acerca de</a>
                      <ul className="sub-menu" id="acerca">
                        <li>
                          <a href="#">Nosotros</a>
                        </li>
                        <li>
                          <a href="#">Contacto</a>
                        </li>
                        <li>
                          <a href="#">Politicas</a>
                        </li>
                        <li>
                          <a href="#">Tratamiento de datos</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <Navegacion />
          {/* <!-- .navbar --> */}
        </div>
      </header>
      <section></section>
    </div>
  );
};
