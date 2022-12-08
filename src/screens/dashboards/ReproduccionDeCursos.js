import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Player from '@vimeo/player';
import { Image } from "react-bootstrap";

import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2, gradient, blackout, playButton, IconRutaPlayer, IconRutaExamen, } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { InfoVideoPlayer } from "../../componentes/dashboards/InfoVideoPlayer";
import { getLessons } from "../../services/services";
import { storeProgress } from "../../services/apis/progress.services";


export const ReproduccionDeCursos = () => {
    const {course_id, name} = useParams()
    const {token, id} = useSelector(state => state.auth);
    const [lessons, setLessons] = useState();
    const [videoStatus, setVideoStatus] = useState();
    const [videoCurrent, setVideoCurrent] = useState();
    const [statePlayer, setStatePlayer] = useState();
    const [evaluation, setEvaluation] = useState(true)
    const navigate = useNavigate();

     const getVideos = async () => {
        const data = await getLessons(token, course_id);
        const key = data?.response?._rel
        const videos = data?.response?._embedded[key]
        setVideoCurrent({
            id  : videos[0]?.id,
            name  : videos[0]?.name,
            video : videos[0]?.player_embed_url,
            vimeoId : videos[0]?.vimeo_id
        })
        setLessons(videos)
    }

    useEffect(() => {
        getVideos()
    },[token, course_id])

    const changeVideo = ({ name, player_embed_url, vimeo_id, id }) => {
        
        setVideoCurrent({
            name,
            video: player_embed_url,
            vimeoId : vimeo_id,
            id
        })
    }

    const setNewPlayer = async videoCurrent => {
        const myVideo = await document.querySelector(`#video-${videoCurrent?.vimeoId}`);
        const player = await new Player(myVideo);
        console.log("NUEVO PLAYER >> ", player)
        player.on('playing', () => console.log("NUEVO PLAYER >> ", player));
        setStatePlayer(player);
    }
    
    useEffect(()=>{

        var videoPlay = "";

        try {
            
            if(videoCurrent){
                setNewPlayer(videoCurrent)
            }

        } catch (error) {
            console.error('error', error)
        }


    },[videoCurrent])

    // useEffect(() => {
    //     //console.log('videoStatus', videoStatus)
    // },[videoStatus])

    //Este manejador de evento escucha cuando el usuario pause el video
    statePlayer?.on('pause', function(data) {
        handlingProgress(data)
    });

    const handlingProgress = ({duration, percent, seconds}) => {
        const payload = {
            "course_id" : course_id,
            "user_id": id,
            "lesson_id": videoCurrent?.id,
            "percentage": percent,
            "advanced_current_time": seconds,
            "total_video_time": duration
        }
        storeProgress(payload).then(response => console.log(response)).catch(error => console.log(error))
    }

    const handleVideo = (videoPlay, player) => {

        console.log("ESTE >>> player", player, videoPlay)
        console.log("ESTE >>> videoPlay", videoPlay)

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

    console.log("videoStatus", videoStatus)

    const redirect = () => {
        navigate(`/presentacion/evaluacion/${course_id}`);
    }
    
    return (
        <div className="video__reproduccion-section" >
            <HeaderDashboard />
            <div className="video__reproduccion-container" >
                <div className="video__reproduccion-content" >
                    <h2 style={{color:'white'}}>{videoCurrent?.name}</h2>
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
                                <h3 className="xlnIcon__couser__ruta">{key + 1 }</h3>
                                
                            </button>
                            </div>
                    ))}   

                    {evaluation &&
                        <button className="xln-btn-couseExamen mt-3" onClick={redirect} ><img src={IconRutaExamen}/></button>
                    }
                    </div>
                </div>
            </div>
            <InfoVideoPlayer />
        </div>
    )
}
