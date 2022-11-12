import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Player from '@vimeo/player';
import { Image } from "react-bootstrap";

import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2, gradient, blackout, playButton, IconRutaPlayer, } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { InfoVideoPlayer } from "../../componentes/dashboards/InfoVideoPlayer";
import { getLessons } from "../../services/services";


export const ReproduccionDeCursos = () => {
    const {id, name} = useParams()
    const {token} = useSelector(state => state.auth);
    const [lessons, setLessons] = useState();
    const [videoStatus, setVideoStatus] = useState();
    const [videoCurrent, setVideoCurrent] = useState();
    const [statePlayer, setStatePlayer] = useState();
    const [evaluation, setEvaluation] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        async function getVideos() {
            const data = await getLessons(token, id);
            const key = data?.response?._rel
            const videos = data?.response?._embedded[key]
            setVideoCurrent({
                name  : videos[0]?.name,
                video : videos[0]?.player_embed_url,
                vimeoId : videos[0]?.vimeo_id
            })
            setLessons(videos)
        }
        getVideos()
    },[token, id])
    
    useEffect(()=>{

        var videoPlay = "";

        try {
            
            if(videoCurrent){
                const myVideo = document.querySelector(`#video-${videoCurrent?.vimeoId}`);
                const player = new Player(myVideo);
                player.on('playing', () => handleVideo(videoPlay, player));
                setStatePlayer(player);
                console.log('myVideo', myVideo)
            }

        } catch (error) {
            console.error('error', error)
        }


    },[videoCurrent])

    useEffect(() => {
        console.log('videoStatus', videoStatus)
    },[videoStatus])

    //Este manejador de evento escucha cuando el usuario pause el video
    statePlayer?.on('pause', function(data) {
        console.log('Segundos, porcentaje, duración actual', data)
    });

    const handleVideo = (videoPlay, player) => {

        if (videoPlay)
        {
            clearInterval(videoPlay);
        }

        videoPlay = setInterval( () =>
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
            player.on('ended',  () => clearInterval(videoPlay));
        }, 1000);
        
    }

    const changeVideo = video => {
        const { name, player_embed_url, vimeo_id } = video
        setVideoCurrent({
            name: name,
            video: player_embed_url,
            vimeoId : vimeo_id
        })
    }

    const redirect = () => {

    }
    return (
        <div className="video__reproduccion-section" >
            <HeaderDashboard />
            <div className="video__reproduccion-container" >
                <div className="video__reproduccion-content" >
                    <h2 style={{color:'white'}}>{videoCurrent?.name}</h2>
                    {/* <button>Comunidad</button> */}
                </div>
                <div className="d-flex">
                    <div className="video__reproduccion-container-player" >
                        
                    <div className="xln_player_course">
                        
                        <iframe id={`video-${videoCurrent?.vimeoId}`} width="993" height="562" src={videoCurrent?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"></iframe>
                    </div>
                    <div className="xlnMenu__icon__player">
                        <p>Ruta</p>
                        <img src={IconRutaPlayer}/>
                    </div>
                    {lessons?.map((video, key) => (
                        <div className="xln__content__rutaClick" key={key}>
                            <button onClick={() => changeVideo(video)}>
                                {/* <h3 style={{color:'black'}}>{key + ' - ' +video?.name}</h3> */}
                                <h3 className="xlnIcon__couser__ruta">{key + 1 }</h3>
                                
                            </button>
                            </div>
                    ))}   
                    {evaluation &&
                        <button className="" onClick={redirect} ><i class="fa-light fa-paper-plane-top"></i></button>
                    }
                    </div>
                </div>
            </div>
            <InfoVideoPlayer />
        </div>
    )
}
