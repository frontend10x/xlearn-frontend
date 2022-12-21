import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard';
import { generateCertificate } from '../../services/services';
import StyleScore from '../../assets/css/screens/dashboards/StyleScore.css';

export const Score = () => {

    const [score, setScore] = useState();
    const [correctAnswers, setCorrectAnswers] = useState();
    const { token } = useSelector(state => state.auth)
    const { id, course_id,name } = useParams();
    const navigate = useNavigate();
    useEffect(() => {

        async function scores() {
            const response = await generateCertificate(token, id, course_id);
            /* setScore(response.results.percentage) */
            /* setCorrectAnswers(response.results.correct_answers.length) */
            console.log(response, 'respuesta');
        }
        scores()
    }, [])

    console.log(name,'nombre del curso');

    const scores = 28;
    const percentage = 8

    const redirect = () => {
        if (percentage >= 90) {
            navigate(`/certificado/${course_id}`);
        } else {
            navigate(`/course/videoplayer/${name}/${course_id}`);
        }
    }
    return (
        <div className='certificate__section' >
            <HeaderDashboard />
            <Container className='container-fluid' >

                <div className='certifate__section-container text-center mt-5' >
                    <div className='certificate__section-content border-bottom' >
                        <h2 className='fw-bold' >Resultado</h2>
                        <h1 className='title' >¡Felicidades!</h1>
                        {/* {correctAnswers} Aciertos */}
                        <h4 className='fw-bold' >
                            {scores} Aciertos
                        </h4>
                        <h2 className='percentage__evaluation' >{percentage}% </h2>
                    </div>
                </div>
                <div className='text-center mt-5' >
                    {percentage >= 90 ?
                        <button className='button__certificate' onClick={redirect} >
                            Finalizar
                        </button>
                        : 
                        <button className='button__certificate' onClick={redirect} >
                            Repasar
                        </button>
                    }

                </div>
            </Container>
        </div>
    )
}
