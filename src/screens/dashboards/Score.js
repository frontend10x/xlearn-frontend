import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard';
import { generateCertificate } from '../../services/services';
import '../../assets/css/screens/dashboards/StyleScore.css';
import { baseURL } from '../../utils/route';
import { Header } from '../../componentes/Header';

export const Score = () => {

    const [response, setResponse] = useState();
    const { token, type } = useSelector(state => state.auth)

    const { id, course_id, name } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        async function scores() {
            const response = await generateCertificate(token, id, course_id);
            setResponse(response)
            console.log(response,'valores');
        }
        scores()
    }, [])

    const redirect = async ()  => {
        if (response?.status) {
            await window.open(baseURL + response?.paths?.download, '_blank');
            await window.open(baseURL + response?.paths?.show, '_blank');
            navigate(`/dashboard/${type.toLowerCase()}`);
        } else {
            navigate(`/course/videoplayer/${name}/${course_id}`);
        }
    }



    return (
        <div className='certificate__section' >
            <Header />
            <Container className='container-fluid' >
                {response?.status === true &&
                    <>
                        <div className='certifate__section-container text-center mt-5' >
                            <div className='certificate__section-content border-bottom' >
                                <h2 className='fw-bold' >Resultado</h2>
                                <h1 className='title' >¡Felicidades!</h1>
                                <h4 className='fw-bold' >
                                    {response?.results?.length} Aciertos
                                </h4>
                                <h2 className='percentage__evaluation' >
                                    {response?.percentage}%
                                </h2>
                            </div>
                        </div>

                        <div className='text-center mt-5' >
                            <button className='button__certificate' onClick={redirect} >
                                Finalizar
                            </button>
                        </div>
                    </>
                }
                {response?.status === false &&


                    <>
                        <div className='certifate__section-container text-center mt-5' >
                            <div className='certificate__section-content border-bottom' >
                                <h2 className='fw-bold' >Resultado</h2>
                                <h1 className='title_fail' >¡{response?.message}!</h1>
                                <h4 className='fw-bold' >
                                    {response?.results?.correct_answers} Aciertos
                                </h4>
                                <h2 className='percentage__evaluation' >{response?.percentage}% </h2>
                            </div>
                        </div>

                        <div className='text-center mt-5' >
                            <button className='button__certificate' onClick={redirect} >
                                Repasar
                            </button>
                        </div>
                    </>

                }

            </Container>
        </div>
    )
}
