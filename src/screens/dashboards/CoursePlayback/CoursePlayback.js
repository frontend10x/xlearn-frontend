import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import { Image_01, Image_02, XlearnLogo, construccion, iconoChat, iconoChat2, gradient, blackout, playButton } from "../../assets/img";
import { HeaderDashboard } from "../../../componentes/dashboards/HeaderDashboard";
// import { InfoVideoPlayer } from "../../componentes/dashboards/InfoVideoPlayer";
import { getLessons } from "../../../services/services";
import VideoPlayer from "./components/VideoPlayer";
import LessonSideMenu from "./components/LessonSideMenu";

const CorusePlayback = () => {
    const {id, name} = useParams()
    const {token} = useSelector(state => state.auth);
    const [lessons, setLessons] = useState();
    const [videoCurrent, setVideoCurrent] = useState();
    const [destroy, setDestroy] = useState(false);
        
    useEffect(() => {
        async function getVideos() {
            const data = await getLessons(token, id);
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
    },[token, id])    


    const changeVideo = video => {
        
        storeProgress("Aquí se me ocurre enviar un storage que tenga el estado actual del video visto")
        const { name, player_embed_url, vimeo_id, id } = video
    
        setVideoCurrent({
            name: name,
            video: player_embed_url,
            vimeoId : vimeo_id,
            lessonId : id
        })

        setDestroy(true)
        
    }

    const storeProgress = (progress) => {
        console.log(progress)
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
                    <VideoPlayer videoCurrent={videoCurrent} destroy={destroy}/>
                    
                    {lessons?.map((video, key) => (
                        <LessonSideMenu key={key} index={key} video={video} changeVideo={changeVideo}/>
                    ))}   
                    </div>
                </div>
            </div>
            {/* <InfoVideoPlayer /> */}
        </div>
    )
}

export default CorusePlayback;