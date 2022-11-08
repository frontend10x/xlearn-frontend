import React, { useState, useEffect } from 'react'
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

    console.log(courses,'variable');

    return (
        <div className='' >
            <h1>Hola bienvenido a la description del curso</h1>
                    <div className='d-flex flex-column' >
                       <Image src={courses.file_path} alt="image_description" className='w-25 h-25' />
                        {courses.name}
                        <a href={courses.video_uri}> URL DEL VIDEO DE PRUEBA DEL CURSO</a>
                    </div>
        </div>
    )
}
