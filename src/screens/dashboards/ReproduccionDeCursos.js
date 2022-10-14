import React, { useState } from "react";
import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2, gradient, blackout, playButton } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Image } from "react-bootstrap";
import { InfoVideoPlayer } from "../../componentes/dashboards/InfoVideoPlayer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getLessons } from "../../services/services";
import { useSelector } from "react-redux";


export const ReproduccionDeCursos = () => {
    
    const {id, name} = useParams()
    const {token} = useSelector(state => state.auth);
    const [lessons, setLessons] = useState();

    useEffect(() => {
        async function getVideos() {
            const data = await getLessons(token, id);
            console.log(data.response._embedded.lesson,'structura')
            console.log(data);
        }
        getVideos()
    },[])

    console.log(lessons,'videos')

    return (
        <div className="video__reproduccion-section" >
            <HeaderDashboard />
            <div className="video__reproduccion-container" >
                <div className="video__reproduccion-content" >
                    <h2>{name}</h2>
                    <button>Comunidad</button>
                </div>
                <div className="d-flex">
                    <div className="video__reproduccion-container-player" >
                        {/* <Image src={blackout} className="videoplayer__image" />
                        <Image src={playButton} className="videoplayer__playbutton"/> */}
                        {/* <iframe
                            src="" width="1020" height="280" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Lecci&amp;oacute;n 4 Selecci&amp;oacute;n de oportunidades de negocio"
                            id="my-video"
                            className="mfp-iframe"
                        ></iframe> */}
                    </div>
                    {/* <div className="chatbox__container" >
                        <div className="chatbox__container-content">

                            <h1>Dentro de poco disfruta de compartir con tus compañeros informacion importante de los cursos</h1>
                            <Image src={iconoChat2} className="w-25" />
                            <Image src={construccion} className="logo__contruccion-chat" />
                            <h1>Estamos trabajando en ello</h1>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <InfoVideoPlayer /> */}
        </div>
    )
}