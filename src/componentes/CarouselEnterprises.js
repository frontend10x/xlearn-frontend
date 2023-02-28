import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { empresa, Image_01, Image_02 } from "../assets/img";

import "../assets/css/componentes/StyleCarouselEnterprises.css";

export const CarouselEnterprises = () => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate('/plans/register')
    }


    return (
        // <></>
        <div className="enterprise" >
            <div className="row">
                <div className="col-md-12" style={{padding: "0"}}>
                    <div
                        id="carouselExampleIndicators2"
                        className="carousel slide enterprise__carosuel-indicators"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <div className="xln-btn-banners-puntos">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                        </div>
                        
                        <div className="xln-btn-banners-dos">
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators2"
                                data-bs-slide="prev"
                            >
                                <span className="enterprise__carousel-prev" aria-hidden="true">
                                    ^
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className=" carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators2"
                                data-bs-slide="next"
                            >
                                <span className="enterprise__carousel-next" aria-hidden="true">
                                    ^
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="carousel-inner row">

                            <div className="carousel-item col-md-12 active">
                                <Image
                                    src={empresa}
                                    className="d-block enterprise__carousel-image "
                                    alt="enterprise_1"
                                />
                                <div className="enterprise__carousel-content" >
                                    <h3 className="enterprise__carousel-content_title" >Empresa</h3>
                                    <h1 className="enterprise__carousel-content_subtitle" >Asume nuevos retos y lleva tu negocio a otro nivel</h1>
                                    <h4 className="enterprise__carousel-content_info" >Atrévete a ingresar al mundo de la innovación a través del entrenamineto de tu equipo </h4>
                                    <button className='enterprise__button' onClick={redirect} > Conoce más </button>
                                </div>
                            </div>
                            <div className="carousel-item col-md-12">
                                <Image
                                    src={Image_01}
                                    className="d-block enterprise__carousel-image "
                                    alt="enterprise_2"
                                />
                                <div className="enterprise__carousel-content" >
                                    <h3 className="enterprise__carousel-content_title" >Empresa</h3>
                                    <h1 className="enterprise__carousel-content_subtitle" >Monitorea el rendimiento de tus empleados</h1>
                                    <h4 className="enterprise__carousel-content_info" >Podrás observar y analizar los resultados en cada una de las etapas de entrenamiento </h4>
                                    <button className='enterprise__button' onClick={redirect} > Conoce más </button>
                                </div>
                            </div>
                            <div className="carousel-item col-md-12">
                                <Image
                                    src={Image_02}
                                    className="d-block enterprise__carousel-image "
                                    alt="enterprise_3"
                                />
                                <div className="enterprise__carousel-content" >
                                    <h3 className="enterprise__carousel-content_title" >Empresa</h3>
                                    <h1 className="enterprise__carousel-content_subtitle" >Incrementa la productividad y establece las metas</h1>
                                    <h4 className="enterprise__carousel-content_info" >Es el momento de optimizar los procesos y generar estrategias en pro del crecimiento de la organización </h4>
                                    <button className='enterprise__button' onClick={redirect} > Conoce más </button>
                                </div>
                            </div>
                        </div>

                        

                    </div>

                </div>

            </div>

        </div>
    );
};
