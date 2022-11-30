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

export const GestionDeCupos = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const { token, subcompanie_id } = useSelector(state => state.auth);
    const [quotas, setQuotas] = useState();
    const [createdTeams, setCreatedTeams] = useState();


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

    return (
        <div className="dashboard__section-empresa gestion__cupos___xln">
            <div className="dashboard__container" >
                <HeaderDashboard />

                <div className="xln-content-dash">
                    <div className="xln__content__nav">
                        <NavegacionDashboard />
                    </div>

                    <div className="xln-contentSection-block-empresa">
                        
                        <div className="dashboard__container-nav_banner">

                        <div className="dashboard__banner">
                            <div className="dashboard__banner-content">
                            <div className="dashboard__banner-title">
                                <h1>Administra tus cupos</h1>
                                <p>
                                Es el momento de gestionar y desarrollar tus proyectos con Xlearn
                                </p>
                            </div>
                            <Image
                                src={vistaEmpresa}
                                alt="banner"
                                className="dashboard__banner-image"
                            />
                            <Image src={gradient} alt="gradiente" className="gradient" />
                            </div>


                        </div>

                        </div>

                 
                    </div>

                    <div className='xlrn__gestion-cupos_blocks' >
                        <Container fluid >
                            <Row>
                                <Col md={6}>
                                    <div className="xlrn__gestion-cupos_content">
                                        <div className="xlrn__gestion-cupos-title">
                                            <Image src={cuposIcon} />
                                            <button className="xlrn__gestion-cupos-button-agregar-cupos">
                                                Agregar cupos
                                            </button>
                                        </div>
                                        <div className="xlrn__gestion-cupos-subtitle">
                                            <h3>{quotas} Cupos disponibles</h3>
                                            <p>Administra tus Cupos</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="xlrn__gestion-cupos_content">
                                        <div className="xlrn__gestion-cupos-title">
                                            <Image src={equiposIcon} />
                                            <button className="xlrn__gestion-cupos-button">
                                                Asignar usuarios
                                            </button>
                                        </div>
                                        <div className="xlrn__gestion-cupos-subtitle">
                                            <h3>{createdTeams} En uso</h3>
                                            <p>{quotas} cupos sin usuarios asignados </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="xln-contentSection-block-empresa">
                    <Footer />
                </div>

            </div>
        </div>
    )
}
