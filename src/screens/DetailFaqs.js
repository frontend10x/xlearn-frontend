import React from 'react';
import { Header } from '../componentes/Header';
import { registerbanner } from '../assets/img';
import "../assets/css/screens/public/StyleDetailedFaqs.css";

export const DetailFaqs = () => {
    return (
        <div>
            <Header />
            <div style={{ height: "50vh" }} >
                <section className="faqs-banner" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="faqs_banner-content">
                                    <h2 className='' style={{ fontSize: "36px" }} >Centro de ayuda <span className='text-white fw-bold faqs_detailed-title' >| FAQ´s</span> </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='container' >
                <button className='btn fw-bold ' style={{borderColor:"#002333", width:"224px", height:"41px" }} > Volver al listado </button>
            </div>

        </div>
    )
}
