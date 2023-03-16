import React from "react";
import { NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { XlearnLogo } from "../../assets/img";
import { NavegacionDashboardHeader } from "../dashboards/NavegacionDashboardHeader";
import "../../assets/css/componentes/StyleHeaderDashboard.css"

export const HeaderDashboard = ({home}) => {
  const { type, token } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const redirect = () => {
    if (type === "Empresa") {
      navigate('/dashboard/empresa')
    } else if (type === "Lider") {
      navigate('/dashboard/lider')
    } else if (type === "Integrante") {
      navigate('/dashboard/integrante')
    } else {
      navigate('/')

    }
  }

  let currentClass =  home ? "header__container" : "header__container background"
  let secondClass = home ? "header fixed_top" : "header fixed_top background"

  return (
    <div className={currentClass}  >
      <header id="header" className={secondClass} style={home ? {backgroundColor:"transparent"} : {backgroundColor:"#002333"}}>
        {/* <!-- Button trigger modal --> */}
        {token ?
          <button
          type="button"
          className="burg-toggle"
          data-bs-toggle="modal"
          data-bs-target="#modalInside"
        >
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>
          : <button
            type="button"
            className="burg-toggle"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-bars fa-2xl"></i>
          </button>
        }
        <a className="header__button-redirect" onClick={redirect} rel="noreferrer">
          <img src={XlearnLogo} alt="header__logo" className="header__logo" />
        </a>
        <NavegacionDashboardHeader type={type} />
      </header>
      {token ?
        <div>

        </div>
        :
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
                      <i className="fa-solid fa-x"></i>
                    </span>
                  </button>
                  <div className="header_burgtoggle">
                    <ul className="header__menu">
                      <li className="header__menu-item">
                        Ingresar
                        <ul className="header__menu-lista ingresar">
                          <NavLink
                            data-bs-toggle="tooltip"
                            href="/login"
                            className="link"
                          >
                            Iniciar Sesion
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Registrarse
                          </NavLink>
                        </ul>
                      </li>
                      <li className="header__menu-item">
                        Planes
                        <ul className="header__menu-lista planes">
                          <NavLink
                            data-bs-toggle="tooltip"
                            href="/login"
                            className="link"
                          >
                            Elite
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Corporativo
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Multi-Empresarial
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Basico
                          </NavLink>
                        </ul>
                      </li>
                      <li className="header__menu-item">
                        Categorias
                        <ul className="header__menu-lista categoria">
                          <NavLink
                            data-bs-toggle="tooltip"
                            href="/login"
                            className="link"
                          >
                            Innovacion
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Transformacion
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Sostenibilidad
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Gestion de Proyectos
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Inteligencia
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Cultura
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Gestion Estrategica
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Habilidades
                          </NavLink>
                        </ul>
                      </li>
                      <li className="header__menu-item">
                        Acerca
                        <ul className="header__menu-lista acerca">
                          <NavLink
                            data-bs-toggle="tooltip"
                            href="/login"
                            className="link"
                          >
                            Nosotros
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Contacto
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Politicas
                          </NavLink>
                          <NavLink
                            ldata-bs-toggle="tooltip"
                            href="/plans/register"
                            className="link"
                          >
                            Tratamiento de datos
                          </NavLink>
                        </ul>
                      </li>
                      <li className="header__menu-item">soporte</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
