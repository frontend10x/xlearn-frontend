import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard';
import { generateCertificate } from '../../services/services';
import StyleScore from '../../assets/css/screens/dashboards/StyleScore.css';

export const Score = () => {

    const [score, setScore] = useState();
    const [correctAnswers, setCorrectAnswers] = useState();
    const { token } = useSelector(state => state.auth)
    const { id, course_id } = useParams();
    useEffect(() => {
        async function scores() {
            const response = await generateCertificate(token, id, course_id);
            setScore(response.results.percentage)
            setCorrectAnswers(response.results.correct_answers.length)
        }
        scores()
    }, [])

    const scores = 28;

    return (
        <div className='certificate__section' >
            <HeaderDashboard />
            <Container className='container-fluid' >

                <div className='certifate__section-container text-center mt-5' >
                    <div className='certificate__section-content' >
                        <h2 className='fw-bold' >Resultado</h2>
                        <h1 className='title' >¡Felicidades!</h1>
                        {/* {correctAnswers} Aciertos */}
                        <h4 className='fw-bold' >
                            {scores} Aciertos
                        </h4>
                    </div>
                </div>
            </Container>
        </div>
    )
}
