import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse, getCourseDescription, getLessons } from '../services/services'
import { Image } from 'react-bootstrap'
import {
    telefonoDos,
    recomendation_01,
    recomendation_02,
    recomendation_03,
    recomendation_04,
    playButton,
    flechaIzquierdaCourse
} from "../assets/img";
import { Footer } from '../componentes/Footer'

import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from '../componentes/dashboards/HeaderDashboard';
import { CarouselDashboards } from '../componentes/CarouselDashboards';
import { Container } from 'react-bootstrap';

import '../assets/css/screens/public/StyleInfoCourse.css';


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

    const show = true;

    return (
        <div className='xln__info_courses' >
            <HeaderDashboard show={show} />

            <section className="hero">
                <div className="row align-items-center">
                    <div className="col-md-4" style={{position: "relative"}}>
                        <Image src={course.file_path} alt="image_description" style={{width: "100%"}} />
                        <button className="button__info-course" data-bs-toggle="modal" data-bs-target="#videoTrailer">
                            <Image src={playButton} />
                        </button>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-7 title">
                        <div className="InfoCourse__innovacion-redirection">
                            <Image src={flechaIzquierdaCourse} alt="image_description" style={{width: "10px",marginRight:"15px",}} />
                            <a href="/" rel="noreferrer">Home </a>
                            <a href="/courses" rel="noreferrer">| Cursos | </a>
                            <a className='activarGreen' rel="noreferrer">{course.name}</a>
                        </div>
                        <h2 className="xln__name_course">{course.name}</h2>
                        <div className="">
                            <a href='/login' className="btn btn-primary btn-lg px-4 me-md-2 btn__cursos__descripcion" rel="noreferrer"> Iniciar curso</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="objetivos_de_curso">
                <div className="row align-items-center">

                    <div className="row">

                        <div className="col-md-12 title_objetivos_de_curso">
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
            </section>

            <section className="section_descripction_course container">
                <div className="row">

                    <div className="col-md-6">
                        <h2 className="xln__description__tutor">Descripción general del curso</h2>
                        <div className="col-md-12"><p dangerouslySetInnerHTML={{ __html: course.about_author }} /></div>
                    </div>

                    <div className="col-md-6">
                        <h2  className="xln__description__tutor">Lecciones del curso</h2>
                        <button className="" data-bs-toggle="modal" data-bs-target="#videoTrailer">
                            {course.name}
                        </button>
                        {lessons &&
                            lessons.map((item, index) => (
                                <div className='xln_item_courses' key={index}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>

            <section className="section_cta_de_curso">
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
            </section>



            <section className="section_carousel_curso container" >
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className="xln__description__tutor" >Cursos recomendados</h2>
                    </div>
                    <div className='col-md-12'>
                        <Container >
                            <CarouselDashboards item={courses} />
                        </Container>
                    </div>
                </div>
            </section>



            <div className="modal fade" id="videoTrailer" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Video Trailer</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe width="100%" height="100%" src={course?.video_path} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div> */}
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}
