import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/loginactions";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavegacionDashboardHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear()
    dispatch(logout());
  };

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
          Contactanos
        </NavLink>
        <NavLink className="nav-link " to="/soporte">
          Soporte
        </NavLink>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </Nav>
      <div>
        <button className="navegacion__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
