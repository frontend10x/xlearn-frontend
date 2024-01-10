import React from "react";
import { NavLink } from "react-bootstrap";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";

import "../../assets/css/screens/dashboards/StyleDiagnosticoLiderGeneral.css";
import { Header } from "../../componentes/Header";

export const DiagnosticoLider = () => {
  return (
    <div className="diagnostico__lider">
      <div className="">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="diagnostico__lider-container"> */}
              <div className="container d-flex flex-column justify-content-center align-items-center">
                {/* <div className="diagnostico__lider-content"> */}
                <div className="d-flex flex-column justify-content-center align-items-center gap-3 mt-5 pt-5">
                  <h2 className="fw-bold" >Estructura tu proceso</h2>
                  <h4 className="fw-bold" >Inicia tu diagnóstico</h4>
                  <NavLink
                    href="/selection/process"
                    className="w-50 text-center border rounded fw-bold"
                    style={{backgroundColor:"#31fb84",color:"#002333",fontSize:"20px"}}
                  >
                    Iniciar
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
