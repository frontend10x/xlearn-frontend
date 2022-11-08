import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse, getCourseDescription } from '../services/services'

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
                    <div >
                        {courses.name}
                    </div>
        </div>
    )
}
