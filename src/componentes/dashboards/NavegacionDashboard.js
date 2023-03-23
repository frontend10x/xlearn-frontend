import React, { useEffect, useState } from "react";
import { Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { NavIconLeft_01, NavIconLeft_02, NavIconLeft_03, NavIconLeft_04, NavIconLeft_05, hide, show } from "../../assets/img";
import { getEnterpriseGroups, getEnterpriseQuotas } from "../../services/services";
import "../../assets/css/componentes/StyleNavegacionDashboard.css";
import { NavLink } from "react-bootstrap";

export const NavegacionDashboard = () => {

    const { token, subcompanie_id } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const redirect = () => {
        getEnterpriseQuotas(token, subcompanie_id)
            .then(event => {
                navigate('/gestion/cupos/disponibles')
            })
            .catch(error => {
                console.error(error.response.data.message, 'error');
                navigate('/gestion/cupos')
            });
    }

    const change = () => {
        getEnterpriseGroups(token, subcompanie_id)
            .then(event => {
                navigate('/manejo/equipos')
            })
            .catch(error => {
                navigate('/gestion/equipo')
            })
    }

    const [size, setSize] = useState(false);

    const styleClass = size ? "xln-contentNavLeft-block-resize" : "xln-contentNavLeft-block"
    // let currentClass =  progress ? "xlnIcon__couser__ruta_initiated mt-2" : "xlnIcon__couser__ruta mt-2 "


    const resize = (e) => {
        if (size === false) {
            setSize(true)
        } else if (size === true) {
            setSize(false);
        }
    }

    const order = size ? "order" : "dashboard__nav"
    const position = size ? "position-absolute top-50" : "position-absolute top-100 dashboard__nav-link";

    return (
        <div className={styleClass}>
            <div className="dashboard__navegacion-container">
                <div className="dashboard__nav-section" >
                    <Nav className={order} >
                        <NavLink type="button" href='/dashboard/empresa' className='dashboard__nav-link' ><img src={NavIconLeft_01} className="" /> <span>Inicio</span>  </NavLink>
                        <NavLink className='dashboard__nav-link' type="button" onClick={redirect}  ><img src={NavIconLeft_02} className="" /> <span>Gestión de cupos</span>  </NavLink>
                        <NavLink type="button" onClick={change} className='dashboard__nav-link' ><img src={NavIconLeft_04} className="" /> <span>Gestión de equipos</span> </NavLink>
                        <NavLink href='/gestion/usuarios' className='dashboard__nav-link' ><img src={NavIconLeft_05} /> <span>Gestión de usuarios</span> </NavLink>
                        {/* <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_03}/> Chat</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_06}/> Reporte</NavLink> */}

                    <NavLink type="button" className={position} onClick={resize} value="Ocultar" ><img src={size ? show : hide} /> <span className="position-absolute top-25 ms-2" >Ocultar</span> </NavLink>
                    </Nav>
                </div>
            </div>
            {/* <button onClick={resize} >boton</button> */}
        </div>
    )
}