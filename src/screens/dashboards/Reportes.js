import React, { useState, useEffect } from "react";
import { Header } from "../../componentes/Header";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import "../../assets/css/screens/dashboards/StyleReportes.css";
// import { CircularProgress } from '@mui/material'
import { useSelector } from "react-redux";
import { Container, Image, Row, Col } from "react-bootstrap";
import { reportEnterprise } from "../../services/services";
import { Footer } from "../../componentes/Footer";
import { getEnterpriseGroups } from "../../services/services";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import {
  test,
  team,
  resume,
  learn,
  time,
  greenElipse,
  whiteElipse,
  calendario,
} from "../../assets/img";
import { GroupsDescription } from "../../componentes/dashboards/GroupsDescription";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Reportes = () => {
  const { event } = useSelector((state) => state.size);
  const { token, id, subcompanie_id } = useSelector((state) => state.auth);
  const [groups, setGroups] = useState([]);

  const adjustClass = event ? "xln_add_menuLateral" : "col-md-10 repo-content";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  //   });

  useEffect(() => {
    function getInfoEnterprise() {
      reportEnterprise(token, subcompanie_id)
        .then((evnt) => {
          setData(evnt.data);
        })
        .catch((err) => {
          console.error(err, "error del endpoint");
        });
    }

    getInfoEnterprise();
  }, [token]);

  useEffect(() => {
    async function getEnterprisesGroup() {
      const data = await getEnterpriseGroups(token, subcompanie_id);
      setGroups(data.groups._embedded.groups);
    }

    getEnterprisesGroup();
  }, []);

  return (
    <div className="dashboard__section-empresa">
      <div className="dashboard__container" >
        <Header />

        <div className="container xln-content-dash">
          <div className="row">
            <div
              className="col-md-2 xln-container-navDashboard"
              style={{ padding: "0" }}
            >
              <NavegacionDashboard />
            </div>

            <div className={adjustClass}>
              <div className="row dashboard__container-nav_banner">
                <div className="mb-5">
                  <h2 style={{ color: "#002333" }} className="fw-bold">
                    Reportes
                  </h2>
                  <h2 style={{ color: "#002333", fontSize: "20px" }}>
                    Monitorea el rendimiento de tus equipos en el proyecto
                  </h2>
                </div>

                <div id="info-states" className="container-fluid ">
                  <h3>Todos los estados</h3>
                  <div className="d-flex gap-3 mt-3 justify-content-between">
                    <div className="me-5">
                      <div className="d-flex ms-4">
                        <h3 id="title">
                          {data?.users?.active} /{" "}
                          <span id="complement-title">
                            {data?.users?.total}
                          </span>{" "}
                        </h3>
                      </div>
                      <h5 id="subtitle">Usuarios activos</h5>
                    </div>
                    <div className="me-5">
                      <div className="d-flex ms-3">
                        <h3 id="title">
                          {data?.users?.active} /{" "}
                          <span id="complement-title">
                            {data?.users?.total}
                          </span>
                        </h3>
                      </div>
                      <h5 id="subtitle">Cupos usados</h5>
                    </div>
                    <div className="me-5 text-center">
                      <div className="d-flex align-items-center gap-1">
                        <Image src={team} id="icons" />
                        <h3 id="title">{data?.team?.total}</h3>
                      </div>
                      <h5 id="subtitle">Equipos</h5>
                    </div>
                    <div className="d-flex align-items-center flex-column me-5 text-center">
                      <div className="d-flex gap-2 ">
                        <Image src={resume} id="icons" className="mt-2" />
                        <h3 id="title">{data?.certificates?.total}</h3>
                      </div>
                      <h5 id="subtitle">Certificados otorgados</h5>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <div className="d-flex gap-2">
                        <Image src={learn} id="icons" className="mt-2" />
                        <h3 id="title">{data?.trainingTime?.total}</h3>
                      </div>
                      <h5 id="subtitle">Tiempo de formación</h5>
                    </div>
                  </div>



                  <div className="container-fluid" id="percentage-container">
                    <div className="row border-bottom">

                      <div className="col-md-4">
                        <div className="d-flex gap-3">
                          <div className="w-50 mt-3">
                            {data?.courses?.completed?.percentage ? (
                              <CircularProgressbarWithChildren
                                styles={buildStyles({
                                  rotation: 1 / 2 + 1 / 4,
                                  strokeLinecap: "butt",
                                  trailColor: "#fff",
                                  pathColor: "#31fb84",
                                  textSize: "25px",
                                })}
                                circleRatio={0.5}
                                value={data?.courses?.completed?.percentage}
                                strokeWidth={7}
                                className="mt-1"
                              >
                                <h3 style={{ marginTop: -60 }}>
                                  {Math.floor(
                                    data?.courses?.completed?.percentage
                                  )}{" "}
                                  %
                                </h3>
                              </CircularProgressbarWithChildren>
                            ) : (
                              <Skeleton />
                            )}
                          </div>

                          <div className="mt-5">
                            <h3 className="text-center">{data?.courses?.completed?.total}</h3>
                            <h5 id="subtitle">Cursos completados</h5>
                          </div>

                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="d-flex gap-3">
                          <div className="w-50 mt-3">
                            {data?.courses?.pending?.percentage ? (
                              <CircularProgressbarWithChildren
                                styles={buildStyles({
                                  rotation: 1 / 2 + 1 / 4,
                                  strokeLinecap: "butt",
                                  trailColor: "#fff",
                                  pathColor: "#31fb84",
                                  textSize: "25px",
                                })}
                                circleRatio={0.5}
                                value={data?.courses?.pending?.percentage}
                                strokeWidth={7}
                                className="mt-1"
                              >
                                <h3 style={{ marginTop: -60 }}>
                                  {Math.floor(
                                    data?.courses?.pending?.percentage
                                  )}{" "}
                                  %
                                </h3>
                              </CircularProgressbarWithChildren>
                            ) : (
                              <Skeleton />
                            )}
                          </div>
                          <div className="mt-5">
                            <h3 className="text-center">{data?.courses?.pending?.total}</h3>
                            <h5 id="subtitle" >Cursos pendientes</h5>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-6">

                            <div className="mt-3" style={{width:"100%"}} >
                              {data?.courses?.pending?.percentage ? (
                                <CircularProgressbarWithChildren
                                  styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 4,
                                    strokeLinecap: "butt",
                                    trailColor: "#fff",
                                    pathColor: "#31fb84",
                                    textSize: "25px",
                                  })}
                                  circleRatio={0.5}
                                  value={data?.courses?.pending?.percentage}
                                  strokeWidth={7}
                                  className="mt-2 text-center"
                                >
                                  <div className="w-50 h-25">
                                    {/* <img className='img-fluid' id='icons' src={time} alt="doge" /> */}
                                    <p style={{ fontSize: "19px" }}>
                                      {data?.dedicatedHours?.nonWorkingHours}
                                    </p>
                                  </div>
                                </CircularProgressbarWithChildren>
                              ) : (
                                <Skeleton />
                              )}
                            </div>

                          </div>

                          <div className="col-md-6">

                            <div className="row mt-3">


                              <div className="col-md-12">
                                <div className="row"  >
                                  <div className="col-md-2">

                                    <img
                                      src={whiteElipse}
                                      id="dots"
                                      className="img-fluid img-repo-puntos"
                                    />
                                  </div>
                                  <div className="col-md-10 text-item-report">
                                    <p>{data?.dedicatedHours?.nonWorkingHours}</p>
                                    <p style={{ fontSize: "11px" }}>No laborales</p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-12">

                                <div className="row" >
                                    <div className="col-md-2">
                                      <img
                                        src={greenElipse}
                                        id="dots"
                                        className="img-fluid img-repo-puntos"
                                      />
                                    </div>
                                    <div className="col-md-10 text-item-report">
                                      <p>{data?.dedicatedHours?.workingHours}</p>
                                      <p style={{ fontSize: "11px" }}>Laborales</p>
                                    </div>
                                </div>

                              </div>

                              <div className="col-md-12">
                                <h5 className="" id="subtitle">
                                  Horas totales dedicadas
                                </h5>
                              </div>
                            </div>

                          </div>
                          

                         
                        </div>
                      </div>

                    </div>
                    <div className="row mt-5">
                
                     

                          <div className="col-md-3 ">
                            <h6 className="fw-bold">Tiempo transcurrido</h6>
                            <input
                              type="range"
                              className="range mt-5"
                              value={data?.time?.elapsed}
                              min={0}
                              max={data?.time?.total}
                              readOnly
                            />
                          </div>

                          <div className="col-md-3 calendar"
                          >
                            <img src={calendario} className="img-fluid" />
                            <h5>{data?.time?.total} días </h5>
                          </div>

                          <div className="col-md-3 ">
                            <h6 className="fw-bold">Cursos completados</h6>
                            <h6>
                              Cursos por fuera <br /> de la ruta
                            </h6>
                            <h3>0</h3>
                          </div>

                          <div id="calendar" className="col-md-3 calendar">
                            <img src={test} className="img-fluid" />
                          </div>

                     
                    
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                {/* <GroupsDescription /> */}
              </div>

              <div className="row">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
