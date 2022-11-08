import React, { useState, useEffect } from 'react'
import { HeaderRegister } from "../componentes/HeaderRegister";
import { useParams } from 'react-router-dom'
import { getCourse, getCourseDescription } from '../services/services'
import { Image } from 'react-bootstrap'

export const InfoCourse = () => {

    const { id } = useParams();
    const [courses, setCourses] = useState([]);

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
                    <div className="col-lg-2">
                        <p>Cuestionar</p>
                    </div>

                    <div className="col-lg-2">
                        <p>Observar</p>
                    </div>

                    <div className="col-lg-2">
                        <p>Experimentar</p>
                    </div>

                    <div className="col-lg-2">
                        <p>Colaborar</p>
                    </div>

                    <div className="col-lg-2">
                        <p>Asociar</p>
                    </div>
                    
                </div>
            </div>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
                <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
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

                    <div className='d-flex flex-column' >

                        

                        

                    </div>
        </div>
    )
}
