import React from "react";
import { Image } from "react-bootstrap";
import { HeaderPublic } from "../componentes/HeaderPublic";
import { dashboard2 } from "../assets/img";

export const ContactoScreen = () => {
    return(
        <div className="xlrn-contacto__section" >
            <HeaderPublic />
            <div className="xlrn-contacto__section-container" >
                <div className="xlrn-contacto__section-banner" >
                    <Image src="" alt="image__banner" />
                    <div className="xlrn-contacto__section-banner__content" >
                        <h1>¡Ponte en contacto con nosotros y entrena a tu equipo!</h1>
                        <p>Es el momento de crear, proponer , generar ingresos y, sobre todo ,de innovar. Descubre y aprovecha el potencial de tu organización y desarrolla un plan de acción en torno al entrenamiento ¡Contáctanos!</p>
                        <button className="xlrn-contacto__section-banner__button" >Registrate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}