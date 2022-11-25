import React, { useState, useEffect } from 'react'
import { HeaderRegister } from "../componentes/HeaderRegister";
import { useParams } from 'react-router-dom'
import { getCourse, getCourseDescription } from '../services/services'
import { Image } from 'react-bootstrap'
import { 
    telefonoDos,
    recomendation_01,
    recomendation_02,
    recomendation_03,
    recomendation_04, 
} from "../assets/img";
import { Footer } from '../componentes/Footer'

import { useNavigate } from "react-router-dom";

export const InfoCourse = () => {

    const { id } = useParams();
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();

    const [course, setCourse] = useState([
      { title: "Presentaciones efectivas de negocios", image:  recomendation_01, subtitle: "Presenta tus ideas de negocio", time: "2H", user: "366" },
      { title: "Modelación de negocios", image:  recomendation_02, subtitle: "Define las herramientas para tu negocio", time: "2H", user: "366" },
      { title: "Diseño de propuesta de valor", image:  recomendation_03, subtitle: "Determina tu segmento de clientes", time: "2H", user: "366" },
      { title: "Prototipado", image:  recomendation_04, subtitle: "Valida tus ideas de negocio", time: "2H", user: "366" },
    ]);
    const [courseRoute, setCourseRoute] = useState();
    const redirect = (e) => (
      navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`)
    )



    useEffect(() => {
        async function getCourses() {
            const data = await getCourseDescription(id);
            setCourses(data.response._embedded.course)
        }
        getCourses();
    }, []) /* LOGICA DE CURSOS PUBLICOS */

    const [lessons, setLessons] = useState([
        {title:"ADN Innovador",time:"2:59"},
        {title:"Observar",time:"1:07"},
        {title:"Experimentar",time:"1:07"},
        {title:"Colaborar",time:"1:07"},
        {title:"Asociar",time:"1:07"}
    ]);

    console.log(courses,'variable');

    return (
        <div className='xln__info_courses' >
            <HeaderRegister />

            <div className="hero">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <Image src={courses.file_path} alt="image_description" />
                    </div>
                    <div className="col-lg-8 title">
                        <h2 className="display-5 fw-bold lh-1 mb-3">{courses.name}</h2>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href={courses.video_uri} className="btn btn-primary btn-lg px-4 me-md-2 btn__cursos__descripcion"> Iniciar curso</a>
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
                        <h3 className="fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h3>
                        <p className="col-lg-10 fs-5">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <h2>Lecciones del curso</h2>
                        {lessons &&
                            lessons.map((item,index) => (
                                <div>
                                    {item.title} {item.time}
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
                        <button className="section_introCursos-button">Registrarme</button>
                    </div>
                    <div className="col-sm">
                        <Image src={telefonoDos} alt="telf" />
                    </div>
                </div>
            </div>


            <h2 className="dashboard__lider-container-title" >Cursos recomendados</h2>

            <div className="dashboard__lider-container_courses" >
            {course &&
                course.map((item, index) => (
                <div key={index} className="dashboard__lider-container_courses-card" >
                    <Image src={item.image} className="img-recomendation-xln" />
                    <div className="dashboard__lider-container_courses-card-content" >
                    <div className="dashboard__lider-container_courses-card-content-body" >
                        <div className="d-flex justify-content-around" >
                        <p>{item.time} de contenido</p>
                        <p>{item.user} de usuarios</p>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                        <button className="dashboard__lider-container_courses-card-content_button" onClick={redirect} >Ingresar</button>
                    </div>
                    </div>
                </div>
                ))
            }
            </div>


            <Footer />

        </div>
    )
}
