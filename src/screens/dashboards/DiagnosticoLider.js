import React from "react";
import { NavLink } from "react-bootstrap";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";

export const DiagnosticoLider = () => {

    

    return (
        <div className="diagnostico__lider">
                <HeaderDashboard />
            <div className="diagnostico__lider-container">
                <div className="diagnostico__lider-content">
                    <h1>Estructura tu proceso</h1>
                    <h4>Inicia tu diagnóstico</h4>
                    <NavLink href='/selection/process' className='diagnostico__lider-button' >Iniciar</NavLink>
                </div>
                {/* <div className="diagnostico__lider-footer" >
                </div> */}
            </div>
        </div>
    );
};
