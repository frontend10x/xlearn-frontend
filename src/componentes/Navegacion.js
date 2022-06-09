import React from "react";
import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
                <NavLink className="nav-link " to="/plans">
                    Planes
                </NavLink>
                <NavLink className="nav-link " to="/enterprise">
                    Empresa
                </NavLink>
                <NavLink className="nav-link " to="/contact">
                    Contactanos
                </NavLink>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </Nav>
            <div>
                <NavLink className="navegacion__button" to='/login' >Ingresar</NavLink>
            </div>
        </div>
    );
};
