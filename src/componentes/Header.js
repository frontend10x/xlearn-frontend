import React from "react";
import { NavLink } from "react-bootstrap";
import { XlearnLogo,  menu } from "../assets/img";
import { Navegacion } from "./Navegacion";


export const Header = () => {
  return (
      
    <div className="header__container">
      <header id="header" className="header fixed_top">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="burg-toggle"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>
        <img src={XlearnLogo} alt='header__logo' className="header__logo" />
        <Navegacion />
        
    </header>

      {/* <!-- Modal --> */}
      <div className="modal__container">

      <div className="modal-dialog modal-fullscreen-sm-down">
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <button className="header__menu-button" data-bs-dismiss="modal">
                <span>
                    <i className="fa-solid fa-x" ></i>
                </span>
              </button>
              <div className="header_burgtoggle">
                <ul className="header__menu">
                  <li className="header__menu-item">
                    Ingresar
                    <ul className="header__menu-lista ingresar" >
                      <NavLink data-bs-toggle="tooltip" href="/login" className="link">
                        Iniciar Sesion
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Registrarse
                      </NavLink>
                    </ul>
                  </li>
                  <li className="header__menu-item">
                    Planes
                    <ul className="header__menu-lista planes">
                      <NavLink data-bs-toggle="tooltip" href="/login" className="link">
                        Elite
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Corporativo
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Multi-Empresarial
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Basico
                      </NavLink>
                    </ul>
                  </li>
                  <li className="header__menu-item">
                    Categorias
                    <ul className="header__menu-lista categoria">
                      <NavLink data-bs-toggle="tooltip" href="/login" className="link">
                        Innovación
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Transformación
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Sostenibilidad
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Gestión de proyectos
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link" >
                        Inteligencia
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Cultura
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Gestión estratégica
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Habilidades
                      </NavLink>
                    </ul>
                  </li>
                  <li className="header__menu-item">
                    Acerca
                    <ul className="header__menu-lista acerca">
                      <NavLink data-bs-toggle="tooltip" href="/login" className="link">
                        Nosotros
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Contacto
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Politicas
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Tratamiento de datos
                      </NavLink>
                    </ul>
                  </li>
                  <li className="header__menu-item">
                    soporte
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      </div>
 


  );
};
