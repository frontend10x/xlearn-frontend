import React, { useState } from 'react';
import { Header } from '../componentes/Header';
import { cuposIcon, registerbanner } from '../assets/img';
import "../assets/css/screens/public/StyleFaqs.css"
import { useEffect } from 'react';
import { faqs } from '../services/publics/faqs/FaqsService';
import { Footer } from '../componentes/Footer';
import { useNavigate } from 'react-router-dom';

export const Faqs = () => {

    const [quest, setQuest] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getFaqs() {
            const data = await faqs();
            setQuest(data.data.response._embedded.faqs);
        }
        getFaqs();
    }, [])

    const detailedFaqs = (courseName) => {
        navigate(`/preguntas/frecuentes/${courseName}`);
    }

    console.log(quest,'preguntas');

    return (
        <div>
            <Header />
            <div style={{ height: "50vh" }} >
                <section className="faqs-banner" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="faqs_banner-content">
                                    <h2 className='faqs-title' >Centro de ayuda</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='container' style={{ height: "90vh" }} >
                <h2 className='faqs-title fw-bold' >Iniciemos con la ayuda</h2>
                <div className='mb-5' >
                    {quest &&
                        quest.map((item, index) => (
                            <div key={index} className='mb-2'>
                                <a className='walsheimProBold' style={{ color: "#270bc4", cursor: "pointer", fontSize: "18px" }} onClick={() => detailedFaqs(item.question)} >{item.question}</a>
                            </div>
                        ))
                    }
                </div>
                <div className='d-flex justify-content-center justify-content-around' >
                    <div class="card" style={{ width: "299px", height: "320px", borderColor: "#002333" }}>
                        <div class="card-body">
                            <img src={cuposIcon} className='img-fluid mt-3' />
                            <div className='mt-5' >
                                <h5 class="walsheimProBold" style={{ color: "#002333" }} >Consultar profesor</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ width: "299px", height: "320px", borderColor: "#002333" }}>
                        <div class="card-body">
                            <img src={cuposIcon} className='img-fluid mt-3' />
                            <div className='mt-5' >
                                <h5 class="walsheimProBold" style={{ color: "#002333" }} >Consultar en comunidad</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ width: "299px", height: "320px", borderColor: "#002333" }}>
                        <div class="card-body">
                            <img src={cuposIcon} className='img-fluid mt-3' />
                            <div className='mt-5'>
                            <h5 class="walsheimProBold" style={{ color: "#002333" }} >Danos un toque</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
