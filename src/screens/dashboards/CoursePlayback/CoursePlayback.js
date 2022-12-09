import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { HeaderDashboard } from "../../../componentes/dashboards/HeaderDashboard";
import { getLessons } from "../../../services/services";
import VideoPlayer from "./components/VideoPlayer";
// import LessonSideMenu from "./components/LessonSideMenu";
import { InfoVideoPlayer } from "../../../componentes/dashboards/InfoVideoPlayer";
import { IconRutaPlayer, IconRutaExamen} from "../../../assets/img";
import { storeProgress } from "../../../services/apis/progress.services";


const CorusePlayback = () => {
    const {course_id, name} = useParams()
    const {token, id} = useSelector(state => state.auth);
    const [lessons, setLessons] = useState();
    const [videoCurrent, setVideoCurrent] = useState();
    const [destroy, setDestroy] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getVideos() {
            const data = await getLessons(token, course_id);
            const key = data?.response?._rel
            const videos = data?.response?._embedded[key]
            setVideoCurrent({
                name  : videos[0]?.name,
                video : videos[0]?.player_embed_url,
                vimeoId : videos[0]?.vimeo_id,
                lessonId : videos[0]?.id
            })
            setLessons(videos)
        }
        getVideos()
    },[token, course_id])    


    const changeVideo = ({ name, player_embed_url, vimeo_id, id }) => {
        
        setVideoCurrent({
            name: name,
            video: player_embed_url,
            vimeoId : vimeo_id,
            lessonId : id
        })

        setDestroy(true)
        
    }

    const handlingProgress = ({duration, percent, seconds}) => {
        const payload = {
            "course_id" : course_id,
            "user_id": id,
            "lesson_id": videoCurrent?.lessonId,
            "percentage": percent,
            "advanced_current_time": seconds,
            "total_video_time": duration
        }
        storeProgress(payload).then(response => console.log(response)).catch(error => console.log(error))
    }

    const redirect = () => {
        navigate(`/presentacion/evaluacion/${course_id}`);
    }
    
    return (
        <div className="video__reproduccion-section" >
            <HeaderDashboard />
            <div className="video__reproduccion-container" >
                <div className="video__reproduccion-content" >
                <h2 style={{color:'white'}}>{name}</h2>
                    {/* <h2>{name}</h2> */}
                    <button>Comunidad</button>
                </div>
                <div className="d-flex">
                    <div className="video__reproduccion-container-player" >
                    <VideoPlayer videoCurrent={videoCurrent} destroy={destroy} handlingProgress={handlingProgress}/>
                    
                    <div className="xlnMenu__icon__player">
                        <p>Ruta</p>
                        <img src={IconRutaPlayer}/>
                    </div>
                    {lessons?.map((video, key) => (
                        <LessonSideMenu key={key} index={key} video={video} changeVideo={changeVideo}/>
                    ))}
                    <button className="xln-btn-couseExamen mt-3" onClick={redirect} ><img src={IconRutaExamen}/></button>
                    </div>
                </div>
            </div>
            <InfoVideoPlayer />
        </div>
    )
}

export default CorusePlayback;