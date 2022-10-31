import React, { useState ,useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Image } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { useForm } from "../../hooks/useForm"
import { creationUser, typeOfUsers } from "../../services/services";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const GestionDeEquipos = () => {
    
    const {token, roles,subcompanie_id} = useSelector(state => state.auth)

    return (
        <div className="xlrn__crear-suarios__section" >
            <HeaderDashboard />
            <div className="xlrn__crear-usuarios__container" >
                <div className="xlrn__crear-usuarios__nav" >
                    <NavegacionDashboard />
                </div>
                <div className="xlrn__crear-usuarios__content-titles" >
                    <h1>Gestion de cupos</h1>
                    <p>Gestiona y administra tus cupos</p>
                </div>
               
            </div>
            <Footer />
        </div>
    )
}