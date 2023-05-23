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
import { test, team, resume, learn, time, greenElipse, whiteElipse, calendario } from '../../assets/img'


export const Reportes = () => {

    const { event } = useSelector(state => state.size);
    const { token, id, subcompanie_id } = useSelector(state => state.auth);
    const [groups, setGroups] = useState([]);

    const adjustClass = event ? "xln_add_menuLateral" : "col-md-10";
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

    return (


        <div className="dashboard__section-empresa">
            <div className="dashboard__container">
                <Header />

                <div className="container xln-content-dash">

                    <div className="row">

                        <div className="col-md-2 xln-container-navDashboard" style={{ padding: "0" }}>
                            <NavegacionDashboard />
                        </div>

                        <div className={adjustClass}>
                            
                            <div className="row dashboard__container-nav_banner">
                            <div className='mt-5 mb-5'>
                                <h1 style={{ color: "#002333", fontSize: "28px" }} className='fw-bold' >Reportes</h1>
                                <h2 style={{ color: "#002333", fontSize: "20px" }} >Monitorea el rendimiento de tus equipos en el proyecto</h2>
                            </div>

                                <div id='info-states' className='container ' >
                                    <h3>Todos los estados</h3>
                                    <div className='d-flex gap-3 mt-3 justify-content-center' >

                                        <div className='me-5' >
                                            <div className='d-flex ms-4' >
                                                <h3 id='title'>{data?.users?.active} / <span id='complement-title'>{data?.users?.total}</span> </h3>
                                            </div>
                                            <h5 id='subtitle'>Usuarios activos</h5>
                                        </div>
                                        <div className='me-5' >
                                            <div className='d-flex ms-3' >
                                                <h3 id='title' >{data?.users?.active} / <span id='complement-title' >{data?.users?.total}</span></h3>
                                            </div>
                                            <h5 id='subtitle' >Cupos usados</h5>
                                        </div>
                                        <div className='me-5 text-center' >
                                            <div className='d-flex align-items-center gap-1' >
                                                <Image src={team} id='icons' />
                                                <h3 id='title'>{data?.team?.total}</h3>
                                            </div>
                                            <h5 id='subtitle'>Equipos</h5>
                                        </div>
                                        <div className='d-flex align-items-center flex-column me-5 text-center'>
                                            <div className='d-flex gap-2 ' >
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
                                    </div>


                                    <div className='container' id='percentage-container'>
                                        <div className='row border-bottom'>
                                            <div className="col-md-4" >
                                                <div className='d-flex gap-3'>
                                                    <div className='w-50 mt-3'>
                                                        <CircularProgressbarWithChildren styles={buildStyles({
                                                            rotation: 1 / 2 + 1 / 4, strokeLinecap: "butt",
                                                            trailColor: "#fff", pathColor: "#31fb84", textSize: "25px"
                                                        })} circleRatio={0.5} value={data?.courses?.completed?.percentage}
                                                            strokeWidth={7}
                                                            className='mt-1'>
                                                            <h3 style={{ marginTop: -60 }} >{data?.courses?.completed?.percentage} %</h3>
                                                        </CircularProgressbarWithChildren>
                                                    </div>
                                                    <div className='mt-5'>
                                                        <h3>{data?.courses?.completed?.total}</h3>
                                                        <h5 id='subtitle' >Cursos completados</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4" >
                                                <div className='d-flex gap-3'>
                                                    <div className='w-50 mt-3'>
                                                        <CircularProgressbarWithChildren styles={buildStyles({
                                                            rotation: 1 / 2 + 1 / 4, strokeLinecap: "butt",
                                                            trailColor: "#fff", pathColor: "#31fb84", textSize: "25px"
                                                        })} circleRatio={0.5} value={data?.courses?.pending?.percentage}
                                                            strokeWidth={7}
                                                            className='mt-1'>
                                                            <h3 style={{ marginTop: -60 }} >{data?.courses?.pending?.percentage} %</h3>
                                                        </CircularProgressbarWithChildren>
                                                    </div>
                                                    <div className='mt-5'>
                                                        <h3>{data?.courses?.pending?.total}</h3>
                                                        <h5 id='subtitle'>Cursos completados</h5>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-4" >
                                                <div className='d-flex gap-1'>
                                                    <div className='w-50 mt-3'>
                                                        <CircularProgressbarWithChildren styles={buildStyles({
                                                            rotation: 1 / 2 + 1 / 4, strokeLinecap: "butt",
                                                            trailColor: "#fff", pathColor: "#31fb84", textSize: "25px"
                                                        })} circleRatio={0.5} value={data?.courses?.pending?.percentage}
                                                            strokeWidth={7}
                                                            className='mt-2'>
                                                            <div className='w-25 h-25' >
                                                                <img className='img-fluid' id='icons' src={time} alt="doge" />
                                                            </div>

                                                        </CircularProgressbarWithChildren>
                                                    </div>
                                                    <div className='mt-5'>
                                                        <div className='d-flex gap-1' >
                                                            <div className='d-flex gap-1'>
                                                                <img src={whiteElipse} id='dots' className='img-fluid' />
                                                                <p>{data?.dedicatedHours?.workingHours}</p>
                                                                <p style={{ fontSize: "11px" }}>No laborales</p>
                                                            </div>
                                                            <div className='d-flex gap-1'>
                                                                <img src={greenElipse} id='dots' className='img-fluid' />
                                                                <p>{data?.dedicatedHours?.workingHours}</p>
                                                                <p style={{ fontSize: "11px" }}>Laborales</p>
                                                            </div>
                                                        </div>
                                                        <h5 className='ms-5' id='subtitle'>Horas totales dedicadas</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className='d-flex gap-5 '>
                                                    <div className='mt-3 pe-5 ps-5' >
                                                        <h3 className='fw-bold' >Tiempo transcurrido</h3>
                                                        <input type="range" className="range mt-5" value={50} />
                                                    </div>
                                                    <div id='calendar' className='ms-5 mt-3' >
                                                        <img src={calendario} className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='d-flex gap-5 '>
                                                    <div className='mt-3 pe-5 ps-5' >
                                                        <h3 className='fw-bold' >Cursos completados</h3>
                                                        <h5>Cursos por fuera de la ruta</h5>
                                                        <h3>14</h3>
                                                    </div>
                                                    <div id='calendar' className='ms-5 mt-3' >
                                                        <img src={test} className='img-fluid' />
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
