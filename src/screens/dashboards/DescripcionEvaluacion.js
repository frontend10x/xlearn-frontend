import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { Footer } from '../../componentes/Footer'
import { evaluationCourse } from '../../services/services';

export const DescripcionEvaluacion = () => {
    const { token } = useSelector(state => state.auth)
    const { course_id } = useParams();
    const [quantity, setQuantity] = useState();
    const [tries, setTries] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        async function quiz() {
            try {
                const data = await evaluationCourse(token, course_id);
                setQuantity(data.response._embedded.evaluation.questions.length);
                setTries(data.response._embedded.evaluation.Attempts);
                
            } catch (error) {
                console.error(error);
            }
        }
        quiz();
    }, []);

    const redirect = () => {
        navigate(`/evaluacion/${course_id}`)
    }

    return (
        <div className='description__evaluation-section' >
            <HeaderDashboard />
            <div className='h-100 description__evaluation-container ' >
                <p>Que lejos has llegado!</p>
                <h1>Valida tu conocimiento</h1>
                <div>
                    <div>
                        <p>
                            Duracion
                        </p>
                        <p>30 Minutos</p>
                    </div>
                    <div>
                        <p>Preguntas</p>
                        <p>{quantity}</p>
                    </div>
                    <div>
                        <p>Metodologia</p>
                        <p>Seleccion multiple</p>
                    </div>
                    <div>
                        <p>Intentos</p>
                        <p>{tries}</p>
                    </div>
                    <button onClick={redirect}>
                        Ingresar
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
