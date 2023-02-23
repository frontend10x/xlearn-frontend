import React, { useState, useEffect } from "react";
//import { Image } from "react-bootstrap";
import { HeaderRegister } from "../componentes/HeaderRegister";
import { Image } from 'react-bootstrap'
import { contactSupport, getCountrys } from "../services/services";
import { Footer } from "../componentes/Footer";
import {
    bannerContact01,
    flechaIzquierdaCourseNegra
} from "../assets/img";
import { useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import Swal from "sweetalert2";
import { HeaderDashboard } from "../componentes/dashboards/HeaderDashboard";
import { useSelector } from "react-redux";


import "../assets/css/screens/public/StyleContactoScreen.css";

export const ContactoScreen = () => {

    const [countries, setCountries] = useState();
    const { token, type } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [formValues, handleInputChange] = useForm({
        name: "",
        phone: "",
        company: "",
        email: "",
        observation: ""
    });

    const { name, phone, company, email, observation } = formValues;

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    useEffect(() => {
        async function countries() {
            try {
                const data = await getCountrys();
                setCountries(data);
            } catch (error) {
                console.error(error);
            }
        }

        countries();
    }, [])

    const redirect = (e) => {
        if (e.target.value === "inicio" && type === "Empresa") {
            navigate('/dashboard/empresa');
        } else if (e.target.value === "inicio" && type === "Lider") {
            navigate('/dashboard/lider');
        }
        else if (e.target.value === "inicio" && type === "Integrante") {
            navigate('/dashboard/integrante');
        }
        else {
            navigate('/plans/register')
        }
    }

    const contact = async (e) => {
        e.preventDefault();
        try {
            const data = await contactSupport(name, phone, company, email, observation)
            Swal.fire({
                icon: 'success',
                title: `${data.message}`,
                text: `Te contactaremos pronto`,
                // footer: 'Revisa tu correo para confirmar la cuenta'
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="xlrn-contacto__section" >
            <HeaderDashboard />

            <section className="contacto__register-banner" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${bannerContact01}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="contacto__register-content">
                                <h1>Lleva tu empresa al siguiente nivel a través del entrenamiento de tu equipo de trabajo</h1>
                                <p>
                                    Contamos con una gran oferta de cursos que te ayudaran a aumentar la productividad de tu organización, acelerando el crecimiento y desarrollando nuevas competencias.
                                </p>
                                {token ?
                                    <button onClick={redirect} className='contacto__banner-button' value="inicio" >
                                        Volver a inicio
                                    </button>

                                    : <button onClick={redirect} className='contacto__banner-button' value="registro" >
                                        Registrarme
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" >
         
                    <div className="xlrn-contacto__section-container">
                <div className="row" >
                    

                        <div className="col-md-4">
                            <div className="xln__txt__formContact">
                                <div className="InfoCourse__innovacion-redirection">
                                    {/* <Image src={flechaIzquierdaCourseNegra} alt="image_description" style={{width: "10px",marginRight:"15px",}} /> */}
                                    <a href="/" rel="noreferrer" style={{ color: "#000" }}>Home </a>
                                    <a href="/contact" className='activarGreen' rel="noreferrer">| Contáctanos </a>

                                </div>
                                <h2>Contáctanos</h2>
                                <div className="xln__separator__subtitle"></div>
                                <p>Apuéstale al desarrollo de proyectos con Xlearn ¿Tienes dudas o inquietudes? Déjanos tus datos y pronto te contactaremos.</p>
                            </div>
                        </div>

                        <div className="col-md-2"></div>

                        <div className="col-md-6" >
                            <div className="xln__content__formContact">
                                <form className="xlrn__contacto-formulario" onSubmit={contact} >

                                    <div className="row" >
                                        <div className="col-md-6 xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Nombre y Apellido <span className="campo_requerido">*</span></label>
                                            <input type='text' name="name" onChange={handleInputChange} />
                                        </div>
                                        <div className="col-md-6 xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Telefono <span className="campo_requerido">*</span></label>
                                            <input type='text' name="phone" onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="row" >
                                        <div className="col-md-6 xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Empresa <span className="campo_requerido">*</span></label>
                                            <input type='text' name="company" onChange={handleInputChange} />
                                        </div>
                                        <div className="col-md-6 xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Correo electrónico <span className="campo_requerido">*</span></label>
                                            <input type='text' name="email" onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="row" >
                                        <div className="col-md-12 xln__input__GroupBlock-1" >
                                            <label >Cuéntanos tu requerimiento</label>
                                            <textarea name="observation" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row" >
                                        <div></div>
                                        <div className="col-md-6 mx-auto">
                                            <button className="xln__formulario-button__contact">Enviar</button>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="row" >
                                        <div className="col-md-12">
                                            
                                            <p>Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta plataforma y otros propósitos descritos en nuestra política de privacidad.</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                </div>
                    </div>
            </section>


            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}