import React, { useState } from 'react'
import { Container, Navbar, Nav, Image, Row, Col, NavDropdown, Button, NavLink, Modal } from 'react-bootstrap'
import "../assets/css/componentes/HeaderStyle.css"
import { XlearnLogo } from "../assets/img";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Header = ({ home,show }) => {

  const [showModal, setShowModal] = useState(false);
  const { type } = useSelector(state => state.auth);
  const handleClose = () => setShowModal(false);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(true);
  }

  const redirect = () => {
    navigate("/login")
  }

  let currentClass = home ? "header__container" : "header__container background"
  let secondClass = home ? "header fixed_top" : "header fixed_top background"
  let hide = type === "Empresa" || home || show ? "burg-toggle" : "hide_toogle"

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={secondClass} style={home ? { backgroundColor: "transparent" } : { backgroundColor: "#002333" }} variant='dark'>
        <Button className="ms-3 mb-2" onClick={() => handleShow(values)}>
          X
        </Button>
        <Navbar.Brand className='ms-3' >
          <Image src={XlearnLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='me-5' >
          <Nav className='ms-auto' >
            <Nav.Link id='link' href="/">Inicio</Nav.Link>
            <Nav.Link id='link' href="/courses">Cursos</Nav.Link>
            <Nav.Link id='link' href="/plans/register">Planes</Nav.Link>
            <Nav.Link id='link' href="/enterprises">Empresa</Nav.Link>
            <Nav.Link id='link' href="/contact">Contactanos</Nav.Link>
            <Button id='button' onClick={redirect} >Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <Modal show={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}>
        <Modal.Body id="background" >
          <button className="header__menu-button"
            onClick={handleClose} >
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
        </Modal.Body >
      </Modal >


    </>
  )
}