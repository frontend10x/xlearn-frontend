import React, { useEffect, useState } from "react";
import {Nav} from 'react-bootstrap';
import { useSelector } from "react-redux";
import {NavLink, useNavigate, useSearchParams} from 'react-router-dom';
import { NavIconLeft_01, NavIconLeft_02, NavIconLeft_03, NavIconLeft_04, NavIconLeft_05, NavIconLeft_06 } from "../../assets/img";
import { getEnterpriseQuotas } from "../../services/services";

export const NavegacionDashboard = () => {

    const {token, subcompanie_id} = useSelector(state => state.auth)
    const [quotas, setQuotas] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        async function getQuotas() {
          const data = await getEnterpriseQuotas(token, subcompanie_id)
          setQuotas(data.quotas);
        }
    
        getQuotas();
      },[])
    
    const redirect = () => {
        if (quotas) {
            navigate("/dashboard/empresa")
        }
    }

    return (
        <div className="xln-contentNavLeft-block">
            <div className="dashboard__navegacion-container">
                <div className="dashboard__nav-section" >
                    <Nav className="dashboard__nav" >
                        <NavLink to='/dashboard/empresa' className='dashboard__nav-link' ><img src={NavIconLeft_01}/> Inicio</NavLink>
                        <NavLink to='/gestion/cupos' className='dashboard__nav-link' ><img src={NavIconLeft_02} onClick={redirect}/> Gestion de cupos</NavLink>
                        <NavLink to='/gestion/equipo' className='dashboard__nav-link' ><img src={NavIconLeft_04}/> Gestion de equipos</NavLink>
                        <NavLink to='/asignacion/cupos' className='dashboard__nav-link' ><img src={NavIconLeft_05}/> Gestion de usuarios</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_03}/> Chat</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_06}/> Reporte</NavLink>
                    </Nav>
                </div>
            </div>
        </div>
    )
}