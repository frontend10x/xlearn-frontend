import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/loginactions";
import { Nav, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { imagenUser } from "../../assets/img";


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
    // alert('recibido el click')
  }

  return (
    <>
      {type === "Empresa" &&
        <div className="navegacion">
          <Nav id="navbar" className="navbar">
            <NavLink className="nav-link " to="/dashboard/empresa">
              
            </NavLink>
            <NavLink className="nav-link " to="/compra/cupos">
              Compra
            </NavLink>
            {/* <NavLink className="nav-link " to="/gestion/equipo">
              Gestión de equipos
            </NavLink>
            <NavLink className="nav-link " to="/asignacion/cupos">
              Gestión de usuarios
            </NavLink>
            <NavLink className="nav-link " to="/contact">
              Soporte
            </NavLink> */}
            {/* <NavLink className="nav-link " to="/soporte">
              Soporte
            </NavLink>
            <i className="bi bi-list mobile-nav-toggle"></i> */}
          <div className="d-flex" >
            <p className="text-light" >{name}</p>
            <div class="dropdown">
            <button className="ms-5 dropdown w-50" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <Image src={imagenUser} alt='user' className="w-50" />
            </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" href="#">Ajustes</button></li>
                <li><button onClick={redirect} class="dropdown-item" href="#"  >Perfil</button></li>
                <li><button onClick={handleLogout} class="dropdown-item" href="#">Log out</button></li>
              </ul>
            </div>
          </div>
          </Nav>

        </div>
      }
      {type === "Lider" &&
      <div className="navegacion">
        <Nav id="navbar" className="navbar">
          <NavLink className="nav-link " to="/dashboard/empresa">
            Inicio
          </NavLink>
          {/* <NavLink className="nav-link " to="/gestion/cupos/disponibles">
            Ruta
          </NavLink>
          <NavLink className="nav-link " to="/gestion/equipo">
            Gestión de equipos
          </NavLink>
          <NavLink className="nav-link " to="/asignacion/cupos">
            Gestión de usuarios
          </NavLink> */}
          <NavLink className="nav-link " to="/contact">
            Soporte
          </NavLink>
          {/* <NavLink className="nav-link " to="/soporte">
            Soporte
          </NavLink>
          <i className="bi bi-list mobile-nav-toggle"></i> */}
        <div className="d-flex ms-5" >
          <p className="text-light mt-3 fw-bold " >{name}</p>
          <div className="dropdown d-flex">
          <button className="ms-3 dropdown w-50 button__navegacion-user " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            <Image src={imagenUser} alt='user' className="w-50" />
          </button>
            <ul className="dropdown-menu">
              {/* <li><button className="dropdown-item" href="#">Ajustes</button></li> */}
              <li><button onClick={redirect} className="dropdown-item" href="#">Perfil</button></li>
              <li><button onClick={handleLogout} className="dropdown-item" href="#">Log out</button></li>
            </ul>
          </div>
        </div>
        </Nav>

      </div>
    }
    </>
  );
};
