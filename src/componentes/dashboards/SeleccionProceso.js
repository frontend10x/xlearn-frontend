import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { proyectoIcon, entrenamientoIcon } from "../../assets/img";
import { HeaderDashboard } from "./HeaderDashboard";
import { Image } from 'react-bootstrap';

import "../../assets/css/screens/dashboards/StyleDiagnosticoLiderGeneral.css";

export const SeleccionProceso = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();

  const selectionSection = (e) => {
    if (e.target.value === "Proyecto") {
      setSelected("Proyecto");
    } else if (e.target.value === "Entrenamiento") {
      setSelected("Entrenamiento");
    }
    /* Desarrollo de logica */
  };

  const redirection = () => {
    if (selected === 'Proyecto') {
      navigate('/project/diagnostic/questions');
    } else if (selected === 'Entrenamiento') {
      navigate('/project/diagnostic/training/areas');
    }
  }

  return (
    <div className="selecction__section">
      <HeaderDashboard />
      <div className="selection__process-container">

        <div className="container">
          <div className="row justify-content-md-center content-center-SelectDiagnostic">
            <div className="col-md-4">
              <div className="selection__process-content">
                {/* <Image src={proyectoIcon} className="selection__icon folder"/>
                <input
                  type="submit"
                  className="selection__process-button"
                  name="section1"
                  value="Proyecto"
                  id="1"
                  onClick={selectionSection}
                /> */}
                <Image src={entrenamientoIcon} className="selection__icon " />
                <input
                  type="submit"
                  className="selection__process-button"
                  name="section2"
                  value="Entrenamiento"
                  id="2"
                  onClick={selectionSection}
                />
              </div>
            </div>
          </div>
        </div>



        <div className="selection__process-footer">

          <div className="row justify-content-md-center content-center-SelectBtn" >
            <div className="col-md-2">
              <NavLink
                onClick={redirection}
                className="selection__footer-button"
              >
                Siguiente
              </NavLink>
            </div> 
          </div>
        </div>

      </div>
    </div>
  );
};
