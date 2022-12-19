import React, { useState, useEffect, useRef } from 'react'
import { HeaderRegister } from "../componentes/HeaderRegister";
import { useParams } from 'react-router-dom'
import { getCourse, getCourseDescription, getLessons } from '../services/services'
import { Image } from 'react-bootstrap'
import {
    telefonoDos,
    recomendation_01,
    recomendation_02,
    recomendation_03,
    recomendation_04,
    playButton
} from "../assets/img";
import { Footer } from '../componentes/Footer'

import { useNavigate } from "react-router-dom";

export const InfoCourse = () => {

    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const [course, setCourse] = useState([]);
    const [lessons, setLessons] = useState([]);
    const redirect = (e) => {
        if (e.target.value === 'login') {
            navigate('/login')
        } else {
            navigate('/plans/register')
        }
    }

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        async function getCourses() {
            const data = await getCourseDescription(id);
            setCourse(data.response._embedded.course)
        }

        async function getAllCourses() {
            const data = await getCourse();
            setCourses(data.response._embedded.courses)
        }

        async function getLessonsCourse() {
            const data = await getLessons("", id)
            setLessons(data.response._embedded.lesson)
        }

        getCourses();
        getAllCourses();
        getLessonsCourse();
    }, []) /* LOGICA DE CURSOS PUBLICOS */

    console.log(course,'curso');

    return (
        <div className='xln__info_courses' >
            <HeaderRegister />

            <div className="hero">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <Image src={course.file_path} alt="image_description" />
                        <button className="button__info-course" data-bs-toggle="modal" data-bs-target="#videoTrailer">
                            <Image src={playButton} />
                        </button>
                    </div>
                    <div className="col-lg-8 title">
                        <h2 className="display-5 fw-bold lh-1 mb-3">{course.name}</h2>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href='/login' className="btn btn-primary btn-lg px-4 me-md-2 btn__cursos__descripcion"> Iniciar curso</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="objetivos_de_curso">
                <div className="row align-items-center">

                    <div className="row">

                        <div className="col-lg-12 title_objetivos_de_curso">
                            <h2>En este curso desarrollarás :</h2>
                        </div>


                        <div className="col-sm">
                            <div className="separador"></div>
                            <p>Cuestionar</p>
                        </div>
                        <div className="col-sm">
                            <div className="separador"></div>
                            <p>Observar</p>
                        </div>
                        <div className="col-sm">
                            <div className="separador"></div>
                            <p>Experimentar</p>
                        </div>
                        <div className="col-sm">
                            <div className="separador"></div>
                            <p>Colaborar</p>
                        </div>
                        <div className="col-sm">
                            <div className="separador"></div>
                            <p>Asociar</p>
                        </div>

                    </div>


                </div>
            </div>

            <div className="section_descripction_course container col-lg-12">
                <div className="row g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h3 className="fw-bold lh-1 mb-3">Descripción general del curso</h3>
                        <div className="col-lg-10 fs-5"><p dangerouslySetInnerHTML={{ __html: course.about_author }} /></div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <h2>Lecciones del curso</h2>
                        <button className="" data-bs-toggle="modal" data-bs-target="#videoTrailer">
                            {course.name}
                        </button>
                        {lessons &&
                            lessons.map((item, index) => (
                                <div key={index}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* <div className='d-flex flex-column' > 

            </div> */}

            <div className="section_cta_de_curso">
                <div className="row align-items-center">
                    <div className="col-sm">
                        <h2>Regístrate a nuestra plataforma</h2>
                    </div>
                    <div className="col-sm">
                        <div className='separador-left'></div>
                        <p>Podrás conectarte desde cualquier lugar con nuestra versión mobile; ¡Ingresa a Xlearn y comienza a desarrollar tus proyectos!</p>
                        <button onClick={redirect} className="section_introCursos-button" value="register" >Registrarme</button>
                    </div>
                    <div className="col-sm">
                        <Image src={telefonoDos} alt="telf" />
                    </div>
                </div>
            </div>


            <h2 className="dashboard__lider-container-title" >Cursos recomendados</h2>

            <div className="dashboard__lider-container_courses" >
                {courses &&
                    courses.map((item, index) => (
                        <div key={index} className="dashboard__lider-container_courses-card" >
                            <Image src={item.file_path} className="img-recomendation-xln" />
                            <div className="dashboard__lider-container_courses-card-content" >
                                <div className="dashboard__lider-container_courses-card-content-body" >
                                    <div className="d-flex justify-content-around" >
                                        <p>{item.time} de contenido</p>
                                        <p>{item.user} de usuarios</p>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <button className="dashboard__lider-container_courses-card-content_button" onClick={redirect} value="login" >Ingresar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



            <div className="modal fade" id="videoTrailer" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Video Trailer</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe width="993" height="562" src={course?.video_path} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}
