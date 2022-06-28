import React from "react";
import { NavLink } from "react-bootstrap";
import { XlearnLogo } from "../assets/img";
import { Navegacion } from "./Navegacion";

export const Header = () => {
  return (
    <div>
      <header id="header" className="header fixed_top">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </header>
      {/* <!-- Modal --> */}
      <div class="modal-dialog modal-fullscreen-sm-down">
        <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <button class="" data-bs-dismiss="modal">
                X
              </button>
              <div class="header_burgtoggle">
                <ul className="header__menu">
                  <li className="header__menu-item">
                    Ingresar
                    <ul className="header__menu-lista" >
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
                    <ul className="header__menu-lista">
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
                    <ul className="header__menu-lista">
                      <NavLink data-bs-toggle="tooltip" href="/login" className="link">
                        Innovacion
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Transformacion
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Sostenibilidad
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Gestion de Proyectos
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link" >
                        Inteligencia
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Cultura
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Gestion Estrategica
                      </NavLink>
                      <NavLink ldata-bs-toggle="tooltip" href="/plans/register" className="link">
                        Habilidades
                      </NavLink>
                    </ul>
                  </li>
                  <li className="header__menu-item">
                    Acerca
                    <ul className="header__menu-lista ">
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
  );
};
