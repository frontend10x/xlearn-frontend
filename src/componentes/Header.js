import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  NavDropdown,
  Button,
  NavLink,
  Modal,
  Dropdown,
  NavItem,
} from "react-bootstrap";
import "../assets/css/componentes/HeaderStyle.css";
import { XlearnLogo, cartIcon, imagenUser } from "../assets/img";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/loginactions";

export const Header = ({ home, show }) => {
  const [showModal, setShowModal] = useState(false);
  const { type, name } = useSelector((state) => state.auth);
  const handleClose = () => setShowModal(false);
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(true);
  }

  const redirect = () => {
    navigate("/login");
  };

  const goToProfile = () => {
    if (type !== "Empresa") {
      navigate(`/profile/${name}`);
    } else {
      navigate(`/profile/enterprise/${name}`);
    }
  };

  const getHome = () => {
    if (type === "Empresa") {
      navigate("/dashboard/empresa");
    }
    if (type === "Lider") {
      navigate("/dashboard/lider");
    }
    if (type === "Integrante") {
      navigate("/dashboard/integrante");
    }
  };

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      // el usuario no está en tu sitio web, enviar una notificación push
      var notification = new Notification("Hola,vuelve", {
        body: "Contenido de la notificación",
      });
    }
  });

  let currentClass = home
    ? "header__container"
    : "header__container background";
  let secondClass = home ? "header fixed_top" : "header fixed_top background";
  let hide = type === "Empresa" || home || show ? "burg-toggle" : "hide_toogle";

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      {type === "Empresa" && (
        <Navbar
          collapseOnSelect
          expand="lg"
          className={currentClass}
          style={
            home
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "#002333" }
          }
          variant="dark"
        >
          <Navbar.Brand className="ms-3" onClick={getHome}>
            <Image src={XlearnLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="ms-auto">
              <Nav.Link id="link" href="/compra/cupos" className="me-3">
                <Image src={cartIcon} alt="cart" id="cart-icon" />
              </Nav.Link>
            </Nav>
            <div className="dropdown d-flex align-items-center me-5 pe-3">
              <button
                className="ms-3 dropdown w-50 button__navegacion-user "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={imagenUser} alt="user" className="w-50" />
              </button>
              <ul className="dropdown-menu">
                {/* <li><button className="dropdown-item" href="#">Ajustes</button></li> */}
                <li>
                  <button
                    onClick={goToProfile}
                    className="dropdown-item"
                    href="#"
                  >
                    Perfil
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="dropdown-item" href="#">
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}

      {type === "Lider" && (
        <Navbar
          collapseOnSelect
          expand="lg"
          className={secondClass}
          style={
            home
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "#002333" }
          }
          variant="dark"
        >
          <Navbar.Brand className="ms-3" onClick={getHome}>
            <Image src={XlearnLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="me-5"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="me-5">
            <Nav className="ms-auto">
              <Nav.Link id="link" href="/dashboard/lider" className="">
                Inicio
              </Nav.Link>
              <Nav.Link id="link" href="/contact" className="">
                Soporte
              </Nav.Link>
            </Nav>
            <div className="dropdown d-flex align-items-center me-5 pe-3">
              <button
                className="ms-3 dropdown w-50 button__navegacion-user "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={imagenUser} alt="user" className="w-50" />
              </button>
              <ul className="dropdown-menu">
                {/* <li><button className="dropdown-item" href="#">Ajustes</button></li> */}
                <li>
                  <button
                    onClick={goToProfile}
                    className="dropdown-item"
                    href="#"
                  >
                    Perfil
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="dropdown-item" href="#">
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}

      {type === "Integrante" && (
        <Navbar
          collapseOnSelect
          expand="lg"
          className={secondClass}
          style={
            home
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "#002333" }
          }
          variant="dark"
        >
          <Navbar.Brand className="ms-3" onClick={getHome}>
            <Image src={XlearnLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="me-5">
            <Nav className="ms-auto">
              <Nav.Link id="link" href="/dashboard/integrante" className="">
                Inicio
              </Nav.Link>
              <Nav.Link id="link" href="/contact" className="">
                Soporte
              </Nav.Link>
            </Nav>
            <div className="dropdown d-flex align-items-center">
              <button
                className="ms-3 dropdown w-50 button__navegacion-user "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={imagenUser} alt="user" className="w-50" />
              </button>
              <ul className="dropdown-menu">
                {/* <li><button className="dropdown-item" href="#">Ajustes</button></li> */}
                <li>
                  <button
                    onClick={goToProfile}
                    className="dropdown-item"
                    href="#"
                  >
                    Perfil
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="dropdown-item" href="#">
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}

      {type === undefined && (
        <Navbar
          collapseOnSelect
          expand="lg"
          className={secondClass}
          style={
            home
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "#002333" }
          }
          variant="dark"
        >
          <Navbar.Brand className="ms-3">
            <Button
              className="ms-2 mb-2 me-3"
              variant="outline-light"
              id="burg-toogle"
              onClick={() => handleShow(values)}
            >
              |||
            </Button>
            <Image src={XlearnLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="me-5">
            <Nav className="ms-auto">
              <Nav.Link id="link" href="/">
                Inicio
              </Nav.Link>
              <Nav.Link id="link" href="/courses">
                Cursos
              </Nav.Link>
              <Nav.Link id="link" href="/plans/register">
                Planes
              </Nav.Link>
              <Nav.Link id="link" href="/enterprises">
                Empresa
              </Nav.Link>
              <Nav.Link id="link" href="/contact">
                Contactanos
              </Nav.Link>
              <Button id="button" onClick={redirect}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}

      <Modal
        show={showModal}
        fullscreen={fullscreen}
        onHide={() => setShowModal(false)}
      >
        <Modal.Body id="background">
          <button className="header__menu-button" onClick={handleClose}>
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
        </Modal.Body>
      </Modal>
    </>
  );
};
