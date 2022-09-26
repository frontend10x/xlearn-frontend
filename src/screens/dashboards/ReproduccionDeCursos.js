import React from "react";
import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2, gradient, blackout, playButton } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Image } from "react-bootstrap";
import { InfoVideoPlayer } from "../../componentes/dashboards/InfoVideoPlayer";


export const ReproduccionDeCursos = () => {
    return (
        <div className="video__reproduccion-section" >
            <HeaderDashboard />
            <div className="video__reproduccion-container" >
                <div className="video__reproduccion-content" >
                    <h2>Presentacion Efectiva De Negocios</h2>
                    <button>Comunidad</button>
                </div>
                <div className="d-flex">
                    <div className="video__reproduccion-container-player" >
                        <Image src={blackout} className="videoplayer__image" />
                        <Image src={playButton} className="videoplayer__playbutton"/>
                    </div>
                    <div className="chatbox__container" >
                        <div className="chatbox__container-content">

                            <h1>Dentro de poco disfruta de compartir con tus compañeros informacion importante de los cursos</h1>
                            <Image src={iconoChat2} className="w-25" />
                            <Image src={construccion} className="logo__contruccion-chat" />
                            <h1>Estamos trabajando en ello</h1>
                        </div>
                    </div>
                </div>
            </div>
            <InfoVideoPlayer />
        </div>
    )
}