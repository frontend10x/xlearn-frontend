import React, { useState, useEffect } from "react";
import { Col, Container, Image } from "react-bootstrap";
import {
    arrowFront,
    fileZip,
    ImageProyectos,
    manageSearch,
    robot,
} from "../../assets/img";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseDescription, getCourse } from "../../services/services";
import "../../assets/css/componentes/StyleInfoVideoPlayer.css";
import { CarouselDashboards } from "../CarouselDashboards";
import { baseURL } from "../../utils/route";
import Resources from "./components/Resources";


export const InfoVideoPlayer = () => {

    const navigate = useNavigate();
    const { course_id } = useParams();
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([]);
    const [resources, setResources] = useState();

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
                setCourse(data.response._embedded.course);
                setResources(data.response._embedded.course.resources);
                console.log(resources, 'valores');
            } catch (error) {
                console.error(error);
            }
        }

        async function getAllCourses() {
            const data = await getCourse();
            setCourses(data.response._embedded.courses);
        }

        getCourses();
        getAllCourses();
    }, []) /* LOGICA DE CURSOS PUBLICOS */

    const donwloadResource = async (e) => {
        await window.open(resources[`${e.target.id}`].file_path, '_blank');
    }

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
                                            {course?.img_author?.map((img, index)=>(
                                                <Image key={index} src={img} className='about__tutor-image ms-5' alt="usuario" />
                                            ))
                                            }
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
                                    {/* {courses &&
                                        courses.map((item, index) => (
                                            <div key={index} className="dashboard__lider-container_courses-card" >
                                                <div className="dashboard__lider-container_courses-card-content" >
                                                    <Image src={item.file_path} className="img-recomendation-xln" />
                                                    <div className="dashboard__lider-container_courses-card-content-body" >
                                                        <div className="d-flex justify-content-around" >
                                                            <p>{item.time} de contenido</p>
                                                            <p>{item.user} de usuarios</p>
                                                        </div>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.subtitle}</p>
                                                        <button className="dashboard__lider-container_courses-card-content_button" onClick={redirect} >Ingresar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    } */}
                                    <Container >
                                        <CarouselDashboards item={courses} />
                                    </Container>
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
                                <Resources
                                    title='Recursos'
                                    download={donwloadResource} 
                                    data={resources}/>
                                </div>
                                <div className="proyectos__text">
                                <Resources
                                    title='Realidad aumentada'
                                    download={donwloadResource} 
                                    data={resources}/>
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