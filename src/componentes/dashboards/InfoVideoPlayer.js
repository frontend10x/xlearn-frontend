import React, { useState, useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import {
    arrowFront,
    ImageProyectos,
    manageSearch,
    recomendation_01,
    recomendation_02,
    recomendation_03,
    recomendation_04,
    robot,
} from "../../assets/img";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseDescription, getCourse } from "../../services/services";
import { imagenUser } from "../../assets/img";
import "../../assets/css/componentes/StyleInfoVideoPlayer.css";

export const InfoVideoPlayer = () => {

    const navigate = useNavigate();
    const { course_id } = useParams();
    const [courses, setCourses] = useState([
        // { title: "Presentaciones efectivas de negocios", image:  recomendation_01, subtitle: "Presenta tus ideas de negocio", time: "2H", user: "366" },
        // { title: "Modelación de negocios", image:  recomendation_02, subtitle: "Define las herramientas para tu negocio", time: "2H", user: "366" },
        // { title: "Diseño de propuesta de valor", image:  recomendation_03, subtitle: "Determina tu segmento de clientes", time: "2H", user: "366" },
        // { title: "Prototipado", image:  recomendation_04, subtitle: "Valida tus ideas de negocio", time: "2H", user: "366" },
    ]);
    const [course, setCourse] = useState([]);

    const redirect = (e) => (
        navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`)
    )

    const activeChatBox = () => {
        const event = new Event('x10_bot_open');
        window.dispatchEvent(event);
    }

    const [pages, setPages] = useState("Proyecto");

    const pageSelected = (e) => {
        if (e.target.value === "Proyecto") {
            setPages("Proyecto");
        } else if (e.target.value === "Recursos") {
            setPages("Recursos");
        } else {
            setPages("Glosario");
        }
    }

    useEffect(() => {
        async function getCourses() {
            try {
                const data = await getCourseDescription(course_id);
                setCourse(data.response._embedded.course)
            } catch (error) {

            }
        }

        async function getAllCourses() {
            const data = await getCourse();
            setCourses(data.response._embedded.courses)
        }

        getCourses();
        getAllCourses();
    }, []) /* LOGICA DE CURSOS PUBLICOS */

    console.log(course,'curso');

    return (
        <div className="xlrn__infovideoplayer-section" >
            <div className="xlrn__infovideoplayer-container" >
                <div className="xlrn__infovideo-nav d-flex justify-content-around" >
                    <div className="xlrn__infovideo-nav-container-buttons mt-5 d-flex gap-3 h-25" >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Proyecto" onClick={pageSelected} />
                        {course?.resources?.length > 0 &&
                            < input type="button" className="xlrn__infovideo-nav__button" value="Recursos" onClick={pageSelected} />
                        }
                        {/* <input type="button" className="xlrn__infovideo-nav__button" value="Glosario" onClick={pageSelected} /> */}
                    </div>
                    {/* <div className="xlrn__infovideo-nav-buttons-makereport mt-5 "  >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Hacer un reporte" />
                    </div> */}
                </div>
                {pages === "Proyecto" &&
                    <div className="xlrn__infovideoplayer-container-content" >
                        <div className="xlrn__infovideoplayer-content" >
                            <div className="xlnPlayer__content__proyectos" >
                                <div className="proyectos__text">
                                    <div className="w-75" dangerouslySetInnerHTML={{ __html: course.description }} />
                                </div>
                                <div className="proyectos__img">
                                    {/* <h3>Estudiantes 1.540</h3> */}
                                    <img src={ImageProyectos} />
                                </div>
                            </div>
                            <div className="xlrn__infovideoplayer-content-users flex-column ">
                                <h2 className="fw-bold ms-5 ">Acerca del tutor</h2>
                                <div className="description__infovideoplayer-content" >
                                    <div className="d-flex mt-5" >
                                        <Col md={6} className="d-flex gap-5 border-end" >
                                            <Image src={course.img_author} className='about__tutor-image ms-5' alt="usuario" />
                                            <div className="w-75" dangerouslySetInnerHTML={{ __html: course.about_author }} />
                                        </Col>
                                        <Col md={6} className="d-flex justify-content-start ms-5 mt-5" >
                                            <div className=" ms-5 mt-5 border-bottom container__buttons d-flex " >
                                                <Image src={manageSearch} alt="" className="icon_manageSearch" />
                                                <button className="consultor__button " onClick={activeChatBox} >Modo consultor <span className="ms-5" >  </span> </button>
                                                <Image src={arrowFront} alt="" className="icon_arrowFront mt-1" />
                                            </div>
                                            <Image src={robot} alt="bot" className="robot__icon" onClick={activeChatBox} />
                                        </Col>
                                    </div>
                                </div>
                            </div>

                            <div className="xln__internos__CursosRecomendadosPlayer" >
                                <h2 className="dashboard__lider-container-title" >Cursos recomendados</h2>
                                <div className="dashboard__lider-container_courses" >
                                    {courses &&
                                        courses.map((item, index) => (
                                            <div key={index} className="dashboard__lider-container_courses-card" >
                                                <div className="dashboard__lider-container_courses-card-content" >
                                                    <Image src={item.file_path} className="img-recomendation-xln" />
                                                    <div className="dashboard__lider-container_courses-card-content-body" >
                                                        <div className="d-flex justify-content-around" >
                                                            {/* <p>{item.time} de contenido</p>
                                                            <p>{item.user} de usuarios</p> */}
                                                        </div>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.subtitle}</p>
                                                        <button className="dashboard__lider-container_courses-card-content_button" onClick={redirect} >Ingresar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* <div className="" > 
                                <h2>Tener Presente</h2>
                            </div> */}
                        </div>
                    </div>
                }
                {pages === "Recursos" &&
                    <div className="xlrn__infovideoplayer-container-content" >
                        <div className="xlrn__infovideoplayer-content" >
                            <div className="xlnPlayer__content__proyectos" >
                                <div className="proyectos__text">
                                    <h3>Recursos</h3>
                                    {
                                        course.resources.map((item,index) => (
                                            <div key={index} >
                                                {console.log(item,'items')}

                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                }
                {/* {pages === "Glosario" &&
                   <div className="xlrn__infovideoplayer-container-content" >
                   <div className="xlrn__infovideoplayer-content" >
                       <div className="xlnPlayer__content__proyectos" >
                           <div className="proyectos__text">
                              <h3>glosario</h3>
                           </div>
                           <div className="proyectos__img">
                               <h3>Estudiantes 1.540</h3>
                               <img src={ImageProyectos}/>
                           </div>
                       </div>
                       <div className="xlrn__infovideoplayer-content-users" >
                           <div>
                               {proffesor}
                           </div>
                       </div>
                   </div>
               </div>

                } */}

            </div> {/* Contenedor fin */}
        </div >
    )
}