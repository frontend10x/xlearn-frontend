import React, { useState, useEffect } from "react";
//import { Image } from "react-bootstrap";
import { HeaderRegister } from "../componentes/HeaderRegister";
import { contactSupport, getCountrys } from "../services/services";
import { Footer } from "../componentes/Footer";
import {
    bannerContact01
} from "../assets/img";
import { useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import Swal from "sweetalert2";
import { HeaderDashboard } from "../componentes/dashboards/HeaderDashboard";
import { useSelector } from "react-redux";


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
        if (e.target.value === "inicio" && type === "Lider" ) {
            navigate('/dashboard/lider')
        } else {
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
            <div className="xlrn-contacto__section-container" >
                <div className="xlrn-contacto__section-banner" >
                    {/* <Image src={ bannerContact01 } alt="image__banner" /> */}
                    <div className="xln__content__bannerContact" style={{ backgroundImage: `url(${bannerContact01})` }}>
                        <div className="xln__title__bannerContact">
                            <h1>¡Ponte en contacto con nosotros y entrena a tu equipo!</h1>
                            <p>Es el momento de crear, proponer , generar ingresos y, sobre todo ,de innovar. Descubre y aprovecha el potencial de tu organización y desarrolla un plan de acción en torno al entrenamiento ¡Contáctanos!</p>
                            {token ?
                                <button onClick={redirect} className='w-25' value="inicio" >
                                    Volver a inicio
                                </button>

                                : <button onClick={redirect} className='w-25' value="registro" >
                                    Registrarme
                                </button>
                            }
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
                                <form className="xlrn__contacto-formulario" onSubmit={contact} >

                                    <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Nombre y Apellido <span className="campo_requerido">*</span></label>
                                            <input type='text' name="name" onChange={handleInputChange} />
                                        </div>
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Telefono <span className="campo_requerido">*</span></label>
                                            <input type='text' name="phone" onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="xlrn__contacto-formulario-group" >
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Empresa <span className="campo_requerido">*</span></label>
                                            <input type='text' name="company" onChange={handleInputChange} />
                                        </div>
                                        <div className="xlrn__contacto-formulario-inputs xln__input__GroupBlock-2" >
                                            <label >Correo electrónico <span className="campo_requerido">*</span></label>
                                            <input type='text' name="email" onChange={handleInputChange} />
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
                                            <textarea name="observation" onChange={handleInputChange} />
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