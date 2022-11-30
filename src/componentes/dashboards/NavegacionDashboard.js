import React, { useEffect, useState } from "react";
import { Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { NavIconLeft_01, NavIconLeft_02, NavIconLeft_03, NavIconLeft_04, NavIconLeft_05, NavIconLeft_06 } from "../../assets/img";
import { getEnterpriseQuotas } from "../../services/services";

export const NavegacionDashboard = () => {

    const { token, subcompanie_id } = useSelector(state => state.auth)
    // const [quotas, setQuotas] = useState();
    const navigate = useNavigate();
    const subcompany = subcompanie_id.subcompanies_id;

    useEffect( ()  => {
        
    }, [])

    const redirect = () => {
        getEnterpriseQuotas(token, subcompany)
        .then( event => {
            navigate('/gestion/cupos/disponibles')
        })
        .catch(error => {
            console.error(error.response.data.message,'error');
            navigate('/gestion/cupos')
        });
    }

    return (
        <div className="xln-contentNavLeft-block">
            <div className="dashboard__navegacion-container">
                <div className="dashboard__nav-section" >
                    <Nav className="dashboard__nav" >
                        <NavLink to='/dashboard/empresa' className='dashboard__nav-link' ><img src={NavIconLeft_01} /> Inicio</NavLink>
                        <a className='dashboard__nav-link' type="button" onClick={redirect} value="Gestión de cupos" ><img src={NavIconLeft_02} /> Gestión de cupos </a>
                        <NavLink to='/gestion/equipo' className='dashboard__nav-link' ><img src={NavIconLeft_04} /> Gestión de equipos</NavLink>
                        <NavLink to='/asignacion/cupos' className='dashboard__nav-link' ><img src={NavIconLeft_05} /> Gestión de usuarios</NavLink>
                        {/* <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_03}/> Chat</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_06}/> Reporte</NavLink> */}
                    </Nav>
                </div>
            </div>
        </div>
    )
}