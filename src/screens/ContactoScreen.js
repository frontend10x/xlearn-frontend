import React, { useState, useEffect } from "react";
//import { Image } from "react-bootstrap";
import { HeaderRegister } from "../componentes/HeaderRegister";
import { getCountrys } from "../services/services";
import { Footer } from "../componentes/Footer";
import {
    bannerContact01
  } from "../assets/img";
import { useNavigate } from "react-router-dom";

export const ContactoScreen = () => {

    const [countries, setCountries] = useState()
    const navigate = useNavigate()

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

    const redirect = () => {
        navigate('/plans/register')
    }

    return (
        <div className="xlrn-contacto__section" >
           <HeaderRegister />
            <div className="xlrn-contacto__section-container" >
                <div className="xlrn-contacto__section-banner" >
                    {/* <Image src={ bannerContact01 } alt="image__banner" /> */}
                    <div className="xln__content__bannerContact" style={{ backgroundImage: `url(${bannerContact01})` }}>
                        <div className="xln__title__bannerContact">
                            <h1>¡Ponte en contacto con nosotros y entrena a tu equipo!</h1>
                            <p>Es el momento de crear, proponer , generar ingresos y, sobre todo ,de innovar. Descubre y aprovecha el potencial de tu organización y desarrolla un plan de acción en torno al entrenamiento ¡Contáctanos!</p>
                            <button onClick={redirect} className='w-25' >
                                Iniciar
                            </button>
                        </div>
                    </div>
                    <div className="xlrn-contacto__section-banner__content" >
                        
                        
                        <div className="xlrn__contacto-formulario-container">
                            <div className="xln__txt__formContact">
                                <h2>Contáctanos</h2>
                                <div className="xln__separator__subtitle"></div>
                                <p>Apuéstale al desarrollo de proyectos con Xlearn ¿Tienes dudas o inquietudes? Déjanos tus datos y pronto te contactaremos.</p>
                            </div>
                        </div>
                        <div className="xlrn__contacto-formulario-container" >
                            <div className="xln__content__formContact">
                                <form className="xlrn__contacto-formulario" >

                                    <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Nombre <span className="campo_requerido">*</span></label>
                                            <input type='text' />
                                        </div>
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Apellidos <span className="campo_requerido">*</span></label>
                                            <input type='text' />
                                        </div>
                                    </div>

                                    <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Empresa <span className="campo_requerido">*</span></label>
                                            <input type='text' />
                                        </div>
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Correo electrónico <span className="campo_requerido">*</span></label>
                                            <input type='text' />
                                        </div>
                                    </div>

                                    {/* <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Web site</label>
                                            <input type='text' />
                                        </div>
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >País</label>
                                            <select>
                                                <option value="" >select</option>
                                                {countries &&
                                                    countries.map((item, index) => (
                                                        <option key={index} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div> */}

                                    {/* <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-1" >
                                            <label >Que plan de Xlearn te interesa <span className="campo_requerido">*</span></label>
                                            <select>
                                                <option value="" >select</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-1" >
                                            <label >cuantos cupos estas buscando <span className="campo_requerido">*</span></label>
                                            <select>
                                                <option value="" >select</option>
                                            </select>
                                        </div>
                                    </div> */}

                                    <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-1" >
                                            <label >Cuéntanos tu requerimiento</label>
                                            <textarea/>
                                        </div>
                                    </div>
                                    <div className="xlrn__contacto-formulario-group" >
                                        <button className="xln__formulario-button__contact">Enviar</button>
                                    </div>
                                    <div className="xlrn__contacto-formulario-group" >
                                        <p>Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta plataforma y otros propósitos descritos en nuestra política de privacidad.</p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    
                    
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}