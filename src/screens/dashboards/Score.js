import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { generateCertificate } from '../../services/services';

export const Score = () => {

    const [score, setScore] = useState();
    const [correctAnswers, setCorrectAnswers] = useState();
    const {token} = useSelector(state => state.auth)
    const {id, course_id} = useParams();
    useEffect(() => {
    async function scores() {
        const response = await generateCertificate(token ,id,course_id);
        setScore(response.results.percentage)
        setCorrectAnswers(response.results.correct_answers.length)
    }
    scores()
    }, [])

    return (
        <div className='certificate__section' >
            <HeaderDashboard />
            <div className='certifate__section-container' >
                <div className='certificate__section-content' >
                    <h1>Resultado</h1> 
                    <p>Estos fueron tus aciertos</p>
                    {score}
                    <h1>Felicidades</h1>
                    {correctAnswers} Aciertos
                </div>
            </div>
        </div>
    )
}
