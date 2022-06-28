import React from "react";
import { XlearnLogo } from "../assets/img";
import { Navegacion } from "./Navegacion";

export const HeaderRegister = () => {
  return (
    <div>
      <div>
        <header id="header" className="header__register fixed_top">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a className="burg-toggle" id="b-toggle" href="#menu-full">
              <span></span>
            </a>

            <img src={XlearnLogo} alt="logo" className="header__logo" />

            

            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="" />
            </a>

            <Navegacion />
            {/* <!-- .navbar --> */}
          </div>
          {/* Fin de Burg Toogle */}
        </header>
      </div>
    </div>
  );
};
