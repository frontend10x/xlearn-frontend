import React, { useEffect, useState } from 'react'
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { NavegacionDashboard } from '../../componentes/dashboards/NavegacionDashboard'
import { Image, Col, Container, Row } from 'react-bootstrap'
import { cuposIcon, equiposIcon } from '../../assets/img'
import { useSelector } from 'react-redux'
import { getEnterpriseQuotas, getEnterpriseGroups } from '../../services/services'

export const GestionDeCupos = () => {

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
        <div className='xlrn__gestion-cupos' >
            <HeaderDashboard />
            <div className="xln__content__nav">
                <NavegacionDashboard />
            </div>
            <div className='xlrn__gestion-cupos_blocks' >
                <Container fluid >
                    <Row className='gap-5' >
                        <Col md={5}>
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
                        <Col md={5}>
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
    )
}
