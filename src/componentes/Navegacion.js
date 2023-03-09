import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import "../assets/css/componentes/StyleNavegacionMarketingsite.css"

export const Navegacion = () => {
    return (
        <div className="navegacion">
                <Nav id="navbar" className="navbar">
                    <NavLink className="nav-link " to="/">
                        Inicio
                    </NavLink>
                    <NavLink className="nav-link " to="/courses">
                        Cursos
                    </NavLink>
                    <NavLink className="nav-link " to="/plans/register">
                        Planes
                    </NavLink>
                    <NavLink className="nav-link " to="/enterprises">
                        Empresa
                    </NavLink>
                    <NavLink className="nav-link " to="/contact">
                        Contáctanos
                    </NavLink>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </Nav>
                <div>
                    <NavLink className="navegacion__button" to='/login' >Ingresar</NavLink>
                </div>
        </div>
    );
};
