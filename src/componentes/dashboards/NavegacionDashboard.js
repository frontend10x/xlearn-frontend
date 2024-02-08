import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  NavIconLeft_01,
  NavIconLeft_02,
  NavIconLeft_03,
  NavIconLeft_04,
  NavIconLeft_05,
  NavIconLeft_06,
  hide,
  show,
} from "../../assets/img";
import {
  getEnterpriseGroups,
  getEnterpriseQuotas,
} from "../../services/services";
import "../../assets/css/componentes/StyleNavegacionDashboard.css";
import { NavLink } from "react-bootstrap";
import { holdState } from "../../actions/SizeNavegacion";
import { validateMembership } from "../../services/services";
import { validateSubscription } from "../../actions/validation";

export const NavegacionDashboard = () => {
  const { token, subcompanie_id } = useSelector((state) => state.auth);
  const { event } = useSelector((state) => state.size);
  const { validation } = useSelector((state) => state.membership);

  const [size, setSize] = useState(true);
  const [subscripcion, setSubscripcion] = useState();
  const [activeLink, setActiveLink] = useState('Inicio');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    getEnterpriseQuotas(token, subcompanie_id)
      .then((evnt) => {
        navigate("/gestion/cupos/disponibles");
      })
      .catch((error) => {
        console.error(error.response.data.message, "error");
        navigate("/gestion/cupos");
      });
  };

  const change = () => {
    getEnterpriseGroups(token, subcompanie_id)
      .then((evnt) => {
        navigate("/manejo/equipos");
      })
      .catch((error) => {
        navigate("/gestion/equipo");
      });
  };

  const resize = () => {
    if (size === false) {
      setSize(true);
      dispatch(holdState(size));
    } else if (size === true) {
      setSize(false);
      dispatch(holdState(size));
    }
  };

  useEffect(() => {
    async function validateActiveSubscription() {
      const data = await validateMembership(token, subcompanie_id);
      setSubscripcion(data.data.activeSubscription);
    }
    validateActiveSubscription();
  });

  const courses = () => {
    if (subscripcion) {
      if (validation === false) {
        dispatch(validateSubscription(true));
      } else {
        dispatch(validateSubscription(false));
      }
    } else {
      dispatch(validateSubscription(false));
    }
  };

  const styleClass = event
    ? "xln-contentNavLeft-block-resize"
    : "xln-contentNavLeft-block";
  const order = event ? "order" : "dashboard__nav";
  const position = event
    ? "position-absolute top-cerrar"
    : "position-absolute top-principal dashboard__nav-link";

  return (
    <div className={styleClass}>
      <div className="dashboard__navegacion-container">
        <div className="dashboard__nav-section">
          <Nav className={order}>
            <NavLink
              type="button"
              href="/dashboard/empresa"
              className="dashboard__nav-link"
              title="Inicio"
              onChange={() => setActiveLink("Inicio")}
            >
              <img src={NavIconLeft_01} className="" title="Inicio" />{" "}
              <span>Inicio</span>{" "}
            </NavLink>
            <NavLink
              className="dashboard__nav-link"
              type="button"
              onClick={redirect}
              title="Gestión de cupos"
            >
              <img src={NavIconLeft_02} className="" />{" "}
              <span>Gestión de cupos</span>{" "}
            </NavLink>
            <NavLink
              type="button"
              onClick={change}
              className="dashboard__nav-link"
              title="Gestión de equipos"
            >
              <img src={NavIconLeft_04} className="" />{" "}
              <span>Gestión de equipos</span>{" "}
            </NavLink>
            <NavLink
              href="/gestion/usuarios"
              className="dashboard__nav-link"
              title="Gestión de usuarios"
            >
              <img src={NavIconLeft_05} /> <span>Gestión de usuarios</span>{" "}
            </NavLink>
            <NavLink
              href="/reportes"
              className="dashboard__nav-link"
              title="Reportes"
            >
              <img src={NavIconLeft_06} /> <span>Reportes</span>
            </NavLink>
            <NavLink
              onClick={courses}
              className="dashboard__nav-link"
              title="Ver cursos"
            >
              <img src={NavIconLeft_03} /> <span>Ver cursos</span>
            </NavLink>
            <NavLink
              type="button"
              className={position}
              onClick={resize}
              value="Ocultar"
              title="Inicio"
            >
              <img src={event ? show : hide} />{" "}
              <span className="position-absolute top-25 ms-2 ocultar-style">
                Ocultar
              </span>{" "}
            </NavLink>
          </Nav>
        </div>
      </div>
      {/* <button onClick={resize} >boton</button> */}
    </div>
  );
};
