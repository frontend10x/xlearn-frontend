import React, { useEffect, useState } from "react";
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { NavegacionDashboard } from '../../componentes/dashboards/NavegacionDashboard'
import { Image, Col, Container, Row } from 'react-bootstrap'
import { Footer } from "../../componentes/Footer";
import {
    cuposIcon,
    equiposIcon,
    vistaEmpresa,
    gradient,
} from "../../assets/img";
import { useSelector } from 'react-redux'
import { getEnterpriseQuotas, getEnterpriseGroups } from '../../services/services'
import { useNavigate } from "react-router-dom";

import "../../assets/css/screens/dashboards/StyleGestionDeCupos.css";
import { Header } from "../../componentes/Header";


export const GestionDeCupos = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { token, subcompanie_id } = useSelector(state => state.auth);
    const { event} = useSelector(state => state.size);
    const [quotas, setQuotas] = useState();
    const [createdTeams, setCreatedTeams] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function getQuotas() {
            const data = await getEnterpriseQuotas(token, subcompanie_id)
            setQuotas(data.quotas);
        }

        async function getGroups() {
            const data = await getEnterpriseGroups(token, subcompanie_id)
            setCreatedTeams(data.groups["hc:length"])
        }

        getQuotas();
        getGroups();
    }, [token, subcompanie_id])

    const redirect = (e) => {
        if (e.target.value === "cupos") {
            navigate('/compra/cupos')
        } else if (e.target.value === "asignar") {
            navigate('/creacion/usuarios');
        }
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

                                <div className="col-md-12">
                                    <div className="dashboard__banner-content" style={{ backgroundImage: `linear-gradient(45deg, rgb(0 35 51), rgb(0 0 0 / 0%)), url("${vistaEmpresa}")` }}>
                                        {/* <div className="dashboard__banner-title"> */}
                                        <div className="dashboard__banner-title">
                                            <h2>Administra tus cupos</h2>
                                            <p>
                                                Es el momento de gestionar y desarrollar tus proyectos con Xlearn
                                            </p>
                                        </div>
                                    </div>


                                </div>
                                <hr className="xln_sp_DB" />

                            </div>

                            <div className="xln_section_adminCupos">
                                <div className="dashboard__management">
                                    <h2>Agrega o crea usuarios</h2>

                                    <div className="dashboard__block-container">
                                        <div className="col-md-12">
                                            <div className="row">

                                                <div className="col-md-6 xln-taget-info">
                                                    <div className="dashboard__block">
                                                        <div className="row dashboard__block-content">
                                                            <div className="row dashboard__block-content">

                                                                <div className="col-md-4">
                                                                    <Image src={cuposIcon} />
                                                                </div>

                                                                <div className="col-md-8">
                                                                    <button className="xlrn__gestion-cupos-button-agregar-cupos" onClick={redirect} value="cupos">
                                                                        Agregar cupos
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="xlrn__gestion-cupos-subtitle">
                                                                        <h3>{quotas} Cupos disponibles</h3>
                                                                        <p>Administra tus Cupos</p>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-md-6 xln-taget-info">
                                                    <div className="dashboard__block">
                                                        <div className="row dashboard__block-content">

                                                            <div className="row xlrn__gestion-cupos-title">

                                                                <div className="col-md-4">
                                                                    <Image src={equiposIcon} />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <button className="xlrn__gestion-cupos-button" onClick={redirect} value="asignar" >
                                                                        Asignar usuarios
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="xlrn__gestion-cupos-subtitle">
                                                                        <h3>{createdTeams} En uso</h3>
                                                                        <p>{quotas} cupos sin usuarios asignados </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <Footer />

                            </div>


                        </div>

                    </div>



                </div>


            </div>
        </div>







    )
}
