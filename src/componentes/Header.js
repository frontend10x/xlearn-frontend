import React from "react";
import { XlearnLogo } from "../assets/img";
import { Navegacion } from "./Navegacion";

export const Header = () => {
  return (
      <div>

    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a className="burg-toggle" id="b-toggle" href="#menu-full">
          <span></span>
        </a>

        <img src={XlearnLogo} alt='logo' className="header__logo" />

        <div className="menu-full" id="menu-full">
          <a className="close-button" href="#">
            <span></span>
          </a>
          <div>
            <div>
              <div>
                <ul className="itens">
                  <li>
                    <a href="ingresar">Ingresar</a>
                    <ul className="sub-menu" id="ingresar">
                      <li>
                        <a href="#">Producto 1</a>
                      </li>
                      <li>
                        <a href="#">Producto 2</a>
                      </li>
                      <li>
                        <a href="#">Producto 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#mais-servicos">Planes</a>
                    <ul className="sub-menu" id="mais-servicos">
                      <li>
                        <a href="#">Producto 1</a>
                      </li>
                      <li>
                        <a href="#">Producto 2</a>
                      </li>
                      <li>
                        <a href="#">Producto 3</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#categorias-blog">Categorias</a>
                    <ul className="sub-menu" id="categorias-blog">
                      <li>
                        <a href="#">Categoria 1</a>
                      </li>
                      <li>
                        <a href="#">Categoria 2</a>
                      </li>
                      <li>
                        <a href="#">Categoria 3</a>
                      </li>
                      <li>
                        <a href="#">Categoria 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#acerca">Acerca de</a>
                    <ul className="sub-menu" id="acerca">
                      <li>
                        <a href="#">Categoria 1</a>
                      </li>
                      <li>
                        <a href="#">Categoria 2</a>
                      </li>
                      <li>
                        <a href="#">Categoria 3</a>
                      </li>
                      <li>
                        <a href="#">Categoria 4</a>
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
    <section>
        
    </section>
    </div>

  );
};
