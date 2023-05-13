import React, { useState, useEffect } from 'react'
import { Header } from '../../componentes/Header'
import { NavegacionDashboard } from '../../componentes/dashboards/NavegacionDashboard'
import "../../assets/css/screens/dashboards/StyleReportes.css"
// import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { reportEnterprise } from '../../services/services'
import { Footer } from '../../componentes/Footer'
import { getEnterpriseGroups } from '../../services/services'
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { test, team, resume, learn, time, greenElipse, whiteElipse } from '../../assets/img'


export const Reportes = () => {

    const { event } = useSelector(state => state.size);
    const { token, id, subcompanie_id } = useSelector(state => state.auth);
    const [groups, setGroups] = useState([]);

    const adjustClass = event ? "xln_add_menuLateral" : "col-md-4";
    const [data, setData] = useState([]);

    useEffect(() => {
        function getInfoEnterprise() {
            reportEnterprise(token, 83)
                .then(evnt => {
                    setData(evnt.data)
                })
                .catch(err => {
                    console.error(err, 'error del endpoint');
                })
        }

        getInfoEnterprise();
    }, [token])

    useEffect(() => {
        async function getEnterprisesGroup() {
            const data = await getEnterpriseGroups(token, subcompanie_id);
            setGroups(data.groups._embedded.groups)
            console.log(data.groups)
            console.log(data, 'structura')
        }

        getEnterprisesGroup();
    }, []);

    console.log(data, 'datos');


    return (
        <>
            <Header />
            <div className="col-md-2 xln-container-navDashboard" style={{ padding: "0" }}>
                <NavegacionDashboard />
            </div>

            <Container id='main-container'>
                <div className={adjustClass}>
                    <h1 style={{ color: "#002333", fontSize: "28px" }} className='fw-bold' >Reportes</h1>
                    <h2 style={{ color: "#002333", fontSize: "20px" }} >Monitorea el rendimiento de tus equipos en el proyecto</h2>
                </div>
                <Container id='info-container'>
                    <h3 className='pt-5' >Todos los estados</h3>
                    <Container id='info-states' className='d-flex gap-3 mt-3  justify-content-center' >
                        <div>
                            <div className='d-flex' >
                                <h3 id='title'>{data?.users?.active} / <span id='complement-title'>{data?.users?.total}</span> </h3>
                            </div>
                            <h5 id='subtitle'>Usuarios activos</h5>
                        </div>
                        <div>
                            <div className='d-flex' >
                                <h3 id='title' >{data?.users?.active} / <span id='complement-title' >{data?.users?.total}</span></h3>
                            </div>
                            <h5 id='subtitle' >Cupos usados</h5>
                        </div>
                        <div>
                            <div className='d-flex align-items-center' >
                                <Image src={team} id='icons' />
                                <h3 id='title'>{data?.team?.total}</h3>
                            </div>
                            <h5 id='subtitle'>Equipos</h5>
                        </div>
                        <div className='d-flex align-items-center flex-column'>
                            <div className='d-flex ' >
                                <Image src={resume} id='icons' className='mt-2' />
                                <h3 id='title' >{data?.certificates?.total}</h3>
                            </div>
                            <h5 id='subtitle' >Certificados otorgados</h5>
                        </div>
                        {/* <div>
                            <div className='d-flex' >
                                <h3 id='title' >{data?.certificates?.total}</h3>
                            </div>
                            <h5 id='subtitle' >Certificados otorgados</h5>
                        </div> */}
                        <div className='d-flex align-items-center flex-column' >
                            <div className='d-flex gap-2' >
                                <Image src={learn} id='icons' className='mt-2' />
                                <h3 id='title' >{data?.time?.total}</h3>
                            </div>
                            <h5 id='subtitle' >Tiempo de Formación</h5>
                        </div>
                    </Container>

                    <Container className='' id='percentage-container' > {/* Ajustar espaciados en esta area con COLS */}
                        <Row className='pb-5' >
                            <Col xs={6} md={4}>
                                <div className='d-flex gap-3' >
                                    <CircularProgressbar
                                        className='w-25 mt-3'
                                        value={20}
                                        text={`${20}%`}
                                        // value={data?.courses?.completed?.percentage}
                                        // text={`${data?.courses?.completed?.percentage}`}
                                        circleRatio={0.5}
                                        styles={buildStyles({
                                            rotation: 1 / 2 + 1 / 4,
                                            strokeLinecap: "butt",
                                            trailColor: "#fff",
                                            pathColor: "#31fb84",
                                            textSize: '25px'
                                        })}
                                    />
                                    <div>
                                        <h2>{data?.courses?.completed?.total}</h2>
                                        <p>Cursos completados</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='d-flex gap-3' >
                                    <CircularProgressbar
                                        className='w-25 mt-3'
                                        // value={data?.courses?.pending?.percentage}
                                        // text={`${data?.courses?.pending?.percentage}`}
                                        value={20}
                                        text={`${20}%`}
                                        circleRatio={0.5}
                                        styles={buildStyles({
                                            rotation: 1 / 2 + 1 / 4,
                                            strokeLinecap: "butt",
                                            trailColor: "#fff",
                                            pathColor: "#31fb84",
                                            textSize: '25px'
                                        })}
                                    />
                                    <div >
                                        <h2>{data?.courses?.pending?.total}</h2>
                                        <p>Cursos pendientes</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='d-flex'>
                                    <div className='w-25 mt-3' >
                                        <CircularProgressbarWithChildren
                                            styles={buildStyles({
                                                rotation: 1 / 2 + 1 / 4,
                                                strokeLinecap: "butt",
                                                trailColor: "#fff",
                                                pathColor: "#31fb84",
                                                textSize: "25px"
                                            })}
                                            circleRatio={0.5}
                                            value={50}
                                            className='mt-1'
                                        >
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <Image
                                                style={{ width: 30, marginTop: -5 }}
                                                src={time}
                                                alt="doge"
                                            />
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    {/* <div className='d-flex' >
                                        <div>
                                            <div>
                                                <Image src={whiteElipse} />
                                                <h3><h5></h5></h3>
                                            </div>
                                        </div>
                                        <h5 id='subtitle' >Horas totales dedicadas</h5>
                                    </div> */}

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                xs=6 md=4
                            </Col>
                            <Col xs={6} md={4}>
                                xs=6 md=4
                            </Col>
                            <Col xs={6} md={4}>
                                xs=6 md=4
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <Footer />

        </>
    )
}
