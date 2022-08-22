import React from "react";
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
export const NavegacionDashboard = () => {
    return (
        <div className="dashboard__nav-section" >
            <Nav className="dashboard__nav" >
                <NavLink to='/' className='dashboard__nav-link' >Inicio</NavLink>
                <NavLink to='/gestion/cupos' className='dashboard__nav-link' >Gestion De Cupos</NavLink>
                <NavLink to='/gestion/equipo' className='dashboard__nav-link' >Gestion De Equipos</NavLink>
                <NavLink to='/' className='dashboard__nav-link' >Gestion De Usuarios</NavLink>
                <NavLink to='/' className='dashboard__nav-link' >Chat</NavLink>
                <NavLink to='/' className='dashboard__nav-link' >Reporte</NavLink>
            </Nav>
        </div>
    )
}