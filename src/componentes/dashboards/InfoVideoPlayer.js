import React, { useState, useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import {
    ImageProyectos,
    recomendation_01,
    recomendation_02,
    recomendation_03,
    recomendation_04,
} from "../../assets/img";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseDescription, getCourse } from "../../services/services";
import { imagenUser } from "../../assets/img";

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
        if (e.target.value === "Proyecto" ) {
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
                console.log(data, 'datos')
            } catch (error) {

            }
        }

        async function getAllCourses() {
            const data = await getCourse();
            // console.log(data.response._embedded.courses,'datos');
            setCourses(data.response._embedded.courses)
        }

        getCourses();
        getAllCourses();
    }, []) /* LOGICA DE CURSOS PUBLICOS */


    return (
        <div className="xlrn__infovideoplayer-section" >
            <div className="xlrn__infovideoplayer-container" >
                <div className="xlrn__infovideo-nav d-flex justify-content-around" >
                    <div className="xlrn__infovideo-nav-container-buttons mt-5 d-flex gap-3 h-25" >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Proyecto" onClick={pageSelected} />
                        <input type="button" className="xlrn__infovideo-nav__button" value="Recursos" onClick={pageSelected} />
                        <input type="button" className="xlrn__infovideo-nav__button" value="Glosario" onClick={pageSelected} />
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
                                    <p>A lo largo del curso desarrollaremos una herramienta llamada Foco de Negocio que nos permitirá definir el foco de negocio y sintetizar los resultados clave del análisis del entorno.</p>
                                    <p>El Foco de Negocio resume los hallazgos más importantes de cada lección. En la primera lección, la creación del ecosistema de oportunidades, analizaremos el panorama el de todas oportunidades de negocio recolectando primeros datos del entorno del que alimentan el componente de tendencias, cifras y referentes. Iremos profundizando en los elementos en el transcurso de las lecciones de selección de oportunidades de negocio y análisis de las 4A.</p>
                                    <p>El objetivo es que lleguemos al final del curso con los conceptos claros sobre el Foco de Negocio y que reflejen el análisis del entorno de hasta las 2 oportunidades de negocio y, con ello, podremos priorizar y definir los datos objetivos y vincularlos a la visión estratégica de la organización, es decir, el foco del negocio.</p>
                                    <p>Finalmente, lograremos desarrollar las capacidades para analizar integralmente el entorno de negocio de la temática de interés y definir un foco de negocio con una base de datos objetiva.</p>
                                </div>
                                <div className="proyectos__img">
                                    <h3>Estudiantes 1.540</h3>
                                    <img src={ImageProyectos} />
                                </div>
                            </div>
                            <div className="xlrn__infovideoplayer-content-users" >
                                <div className="" >
                                    <h2 className="fw-bold">Acerca del tutor</h2>
                                    <div className="d-flex" >
                                        <Col md={6} className="d-flex gap-5 border-end" >
                                            <Image src={imagenUser} className='about__tutor' alt="usuario" />
                                            <div className="w-50" dangerouslySetInnerHTML={{ __html: course.about_author }} />
                                        </Col>
                                        <Col md={6} className="d-flex" >
                                            <ul className="d-flex" >
                                                <li className="border-bottom w-25" >
                                                    <button onClick={activeChatBox} >Modo consultor</button>
                                                </li>
                                            </ul>
                                            {/* <Image src={imagenUser} alt="imagen" /> */}
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
                                                <Image src={item.file_path} className="img-recomendation-xln" />
                                                <div className="dashboard__lider-container_courses-card-content" >
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