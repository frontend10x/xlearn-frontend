import React from "react";
import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2 } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Image } from "react-bootstrap";


export const ReproduccionDeCursos = () => {
    return (
        <div className="video__reproduccion-section" >
            <HeaderDashboard />
            <div className="video__reproduccion-container" >
                <div className="video__reproduccion-content" >
                    <h2>Prototipado</h2>
                    <button>Comunidad</button>
                </div>
                <div className="d-flex">

                <div className="video__reproduccion-container-player" >
                    <Image src={Image_02} className="videoplayer__image" />
                </div>
                <div className="chatbox__container" >
                    <div className="chatbox__container-content">

                    <h1>Dentro de poco disfruta de compartir con tus compañeros informacion importante de los cursos</h1>
                    <Image src={iconoChat2} className="w-25"/>
                    <Image src={construccion} className="logo__contruccion-chat" />
                    <h1>Estamos trabajando en ello</h1>
                    </div>
                </div>
                </div>
            </div>


            <div className="dashboar__lider-construction-container" >
                <div className="dashboar__lider-construction-content" >
                    <h1>Hola bienvenido a <span><Image src={XlearnLogo} className="logo_build" /></span> , estamos en construccion para que puedas ver los cursos de la plataforma</h1>
                    <p>Espera nuestro gran lanzamiento</p>
                    <Image src={construccion} className="construccion__image" />
                </div>
            </div>
        </div>
    )
}