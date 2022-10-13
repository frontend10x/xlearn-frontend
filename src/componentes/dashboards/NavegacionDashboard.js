import React from "react";
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import { NavIconLeft_01, NavIconLeft_02, NavIconLeft_03, NavIconLeft_04, NavIconLeft_05, NavIconLeft_06 } from "../../assets/img";

export const NavegacionDashboard = () => {
    return (
        <div className="xln-contentNavLeft-block">
            <div className="dashboard__navegacion-container">
                <div className="dashboard__nav-section" >
                    <Nav className="dashboard__nav" >
                        <NavLink to='/dashboard/empresa' className='dashboard__nav-link' ><img src={NavIconLeft_01}/> Inicio</NavLink>
                        <NavLink to='/gestion/cupos' className='dashboard__nav-link' ><img src={NavIconLeft_02}/> Gestion De Cupos</NavLink>
                        <NavLink to='/gestion/equipo' className='dashboard__nav-link' ><img src={NavIconLeft_04}/> Gestion De Equipos</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_05}/> Gestion De Usuarios</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_03}/> Chat</NavLink>
                        <NavLink to='/' className='dashboard__nav-link' ><img src={NavIconLeft_06}/> Reporte</NavLink>
                    </Nav>
                </div>
            </div>
        </div>
    )
}