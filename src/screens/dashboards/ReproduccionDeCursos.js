import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Player from '@vimeo/player';

import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2, gradient, blackout, playButton } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Image } from "react-bootstrap";
import { InfoVideoPlayer } from "../../componentes/dashboards/InfoVideoPlayer";
import { getLessons } from "../../services/services";

export const ReproduccionDeCursos = () => {
    const {id, name} = useParams()
    const {token} = useSelector(state => state.auth);
    const [lessons, setLessons] = useState();
    const [videoStatus, setVideoStatus] = useState();
    const [statePlayer, setStatePlayer] = useState();
    
    
    useEffect(()=>{

        const myVideo = document.querySelector('#my-video');
        var vdo_play = "";

        if(lessons){
            const player = new Player(myVideo, {
                id: 19231868,
                width: 640
            });

            player.on('playing', () => handleVideo(vdo_play, player));

            setStatePlayer(player);
            
        }

    },[lessons])

    useEffect(() => {
        async function getVideos() {
            const data = await getLessons(token, id);
            const key = data?.response?._rel
            setLessons(data?.response?._embedded[key])
        }
        getVideos()
    },[token, id])

    useEffect(() => {
        console.log('videoStatus', videoStatus)
    },[videoStatus])

    //Este manejador de evento escucha cuando el usuario pause el video
    statePlayer?.on('pause', function(data) {
        console.log('Segundos, porcentaje, duración actual', data)
    });

    const handleVideo = (vdo_play, player) => {

        if (vdo_play)
        {
            clearInterval(vdo_play);
        }

        vdo_play = setInterval( () =>
        {
            player.on('timeupdate', (getAll) =>
            {
                setVideoStatus({
                    currentTime : getAll?.seconds, //get currentime
                    vdoEndTym : getAll?.duration, //get video duration
                    percentage : (getAll?.percent * 100)+"%",
                    timeSeconds : getAll?.seconds + ' Seconds'
                })
                
            });
            
            player.on('ended',  () => clearInterval(vdo_play));
        }, 1000);
        
    }

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
                    {lessons?.map((video, key) => (
                        <div key={key}>
                            <h3 style={{color:'white'}}>{video?.name}</h3>
                            <iframe id="my-video" width="560" height="315" src={video?.player_embed_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    ))}
                    
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