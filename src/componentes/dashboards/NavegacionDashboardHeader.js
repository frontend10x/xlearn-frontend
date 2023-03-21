import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/loginactions";
import { Nav, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { cartIcon, imagenUser } from "../../assets/img";
import "../../assets/css/componentes/StyleNavegacionDashboardHeader.css";

export const NavegacionDashboardHeader = () => {
  const dispatch = useDispatch();
  const { type, name } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear()
    dispatch(logout());
  };

  const redirect = () => {
    navigate(`/profile/${name}`);
  }

  return (
    <>

      {type === "Empresa" &&
        <div className="navegacion">
          <Nav id="navbar" className="navbar d-flex align-items-center ms-auto">
            {/* <NavLink className="nav-link " to="/dashboard/empresa">
              
            </NavLink> */}
            <div className="d-flex ms-auto" >

              <NavLink className="nav-link " to="/compra/cupos">
                Comprar
                <img src={cartIcon} className='w-25 me-3' />
              </NavLink>
              <p className="user_name" >{name}</p>
              <div className="dropdown d-flex">
                <button className="ms-3 dropdown w-50 button__navegacion-user" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <Image src={imagenUser} alt='user' className="w-50" />
                </button>
                <ul className="dropdown-menu">
                  {/* <li><button className="dropdown-item" href="#">Ajustes</button></li> */}
                  <li><button onClick={redirect} className="dropdown-item" href="#">Perfil</button></li>
                  <li><button onClick={handleLogout} className="dropdown-item" href="#">Cerrar sesión</button></li>
                </ul>
              </div>
            </div>
          </Nav>

        </div>

      }
      {type === "Lider" &&
        <div className="navegacion">
          <Nav id="navbar" className="navbar d-flex align-items-center ms-auto ">
            <div className="d-flex ms-5" >
              <NavLink className="nav-link " to="/dashboard/lider">
                Inicio
              </NavLink>
              <NavLink className="nav-link " to="/contact">
                Soporte
              </NavLink>
              <p className="user_name ms-3" >{name}</p>
              <div className="dropdown d-flex align-items-center">
                <button className="ms-3 dropdown w-50 button__navegacion-user " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <Image src={imagenUser} alt='user' className="w-50" />
                </button>
                <ul className="dropdown-menu">
                  {/* <li><button className="dropdown-item" href="#">Ajustes</button></li> */}
                  <li><button onClick={redirect} className="dropdown-item" href="#">Perfil</button></li>
                  <li><button onClick={handleLogout} className="dropdown-item" href="#">Cerrar sesión</button></li>
                </ul>
              </div>
            </div>
          </Nav>

        </div>

      }
      {type === "Integrante" &&
        <div className="navegacion">

          <Nav id="navbar" className="navbar mt-1 ms-auto ">
            <div className="d-flex ms-auto" >

              <NavLink className="nav-link " to="/dashboard/empresa">
                Inicio
              </NavLink>
              <NavLink className="nav-link " to="/contact">
                Soporte
              </NavLink>
              <p className="user_name" >{name}</p>
              <div className="dropdown d-flex">
                <button className="ms-3 dropdown w-50 button__navegacion-user " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <Image src={imagenUser} alt='user' className="w-50" />
                </button>
                <ul className="dropdown-menu">
                  <li><button onClick={redirect} className="dropdown-item" href="#">Perfil</button></li>
                  <li><button onClick={handleLogout} className="dropdown-item" href="#">Cerrar sesión</button></li>
                </ul>
              </div>
            </div>
          </Nav>
        </div>
      }

      <div className="navegacion" style={type && { display: 'none' }} >
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

    </>
  );
};
