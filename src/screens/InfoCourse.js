import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse } from '../services/services'

export const InfoCourse = () => {

    const {id} = useParams()
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function getCourses() {
            const data = await getCourse();
            setCourses(data.response._embedded.courses);
        }

        getCourses();
    }, []) /* LOGICA DE CURSOS PUBLICOS */

    console.log(courses, 'data');

    return (
        <div className='' >
            <h1>Hola bienvenido a la description del curso</h1>
            {courses ?
                courses.map((item, index) => (
                    <div>
                        {item.name}
                    </div>
                ))
                : <p> Verifica que el curso que elegiste sea el correcto </p>
            }
        </div>
    )
}
