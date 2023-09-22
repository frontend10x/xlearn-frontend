import React, { useState, useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Col, Image, Row } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { useForm } from "../../hooks/useForm"
import { creationUser, getEnterpriseGroups, getUsersGroup, typeOfUsers } from "../../services/services";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "../../assets/css/screens/dashboards/StyleGestionDeEquipos.css";
import { Header } from "../../componentes/Header";
import { GroupsDescription } from "../../componentes/dashboards/GroupsDescription";

export const GestionDeEquipos = () => {

    const { token, roles, subcompanie_id } = useSelector(state => state.auth);
    const { event } = useSelector(state => state.size);
    const [groups, setGroups] = useState([]);
    const [users, setUsers] = useState([]);
    const [ids, setIds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        async function getEnterprisesGroup() {
            const data = await getEnterpriseGroups(token, subcompanie_id);
            setGroups(data.groups._embedded.groups)
            console.log(data.groups)
            console.log(data, 'structura')
        }

        getEnterprisesGroup();
    }, []);

    const redirect = () => {
        navigate('/gestion/equipo');
    }
    const adjustClass = event ? "xln_add_menuLateral" : "col-md-10";

    return (
        <div className="dashboard__section-empresa">

            <div className="dashboard__container">
                {/* <HeaderDashboard /> */}
                <Header />
                <div className="container xln-content-dash">

                <div className="row">

                    <div className="col-md-2 xln-container-navDashboard" style={{ padding: "0"}}>
                        <NavegacionDashboard />
                    </div>

                    <div className={adjustClass}>
                    {/* <div className="col-md-10"> */}
                        <div className="row dashboard__container-nav_banner">

                            <div className="col-md-12 xlrn__informacion-equipos-title" >
                                <h1>Gestion de Equipos</h1>
                                <p>Gestiona y administra tus cupos</p>
                            </div>
                            {/* <div className="col-md-12 xln__content__progress_gestionDeCupos"> */}
                            <div className="col-md-12 xln__content__progress_gestionDeCupos d-flex justify-content-center">
                                <GroupsDescription items={users} />
                            </div>

                            <div className="col-md-12 xln__creacion-nuevo-equipo" >
                                <div className="xln__creacion-nuevo-equipo-content" >
                                    <Image src={equiposIcon} className="ms-5" />
                                    <h2>Nuevo equipo</h2>
                                    <button onClick={redirect} >Crear equipo</button>
                                </div>
                            </div>
                            <div className="col-md-12" style={{padding:"0"}}>
                                <Footer />
                            </div>
                        </div>

                    </div>

                </div>
                </div>
                
            </div>
        
        </div>

    )
}