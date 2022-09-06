import React from "react";
import { NavLink } from "react-bootstrap";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";

export const GestionDeUsuario = () => {


  return (
    <div className="gestion__usuario-section">
      <HeaderDashboard />
      <div className="gestion__usuario-container">
        <div className="gestion__usuario-navegacion">
          <NavegacionDashboard />
        </div>
        <div className="gestion__usuario-content">
          <div className="gestion__usuario-title">
            <h1>Gestion De cupos</h1>
            <p>Dolore magna aliquam erat volutpat.</p>
          </div>
          <div className="gestion__usuario-banner">
              <div className="gestion__usuario-banner_content">
              <h3>Aun no tienes cupos para registrar usuarios</h3>
              <p>Aquiere tus cupos y registra tus usuarios.</p>
              <button className="gestion__usuario-banner_button-add">+</button>
              <NavLink className="gestion__usuario-banner_button" href="/compra/cupos">
                Adquirir cupos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
