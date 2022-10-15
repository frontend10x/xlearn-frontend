import { useEffect, useState } from 'react';
import Player from '@vimeo/player';

const VideoPlayer = ({videoCurrent}) => {

    const [videoStatus, setVideoStatus] = useState();
    const [statePlayer, setStatePlayer] = useState();
    const [myVideo, setMyVideo] = useState();

    var videoPlay = "";

    useEffect(()=>{

        setMyVideo(document.querySelector(`#video-${videoCurrent?.vimeoId}`))

        if(videoCurrent){

            let player = new Player(myVideo);
            setStatePlayer(player);
            console.log('myVideo', myVideo)
        }


    },[videoCurrent, myVideo])

    console.log(videoCurrent)

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

    useEffect(() => {
        console.log('videoStatus', videoStatus)
    },[videoStatus])

    //Este manejador de evento escucha cuando el usuario pause el video
    useEffect(() =>{
        statePlayer?.on('playing', () => handleVideo(videoPlay, statePlayer));
        statePlayer?.on('pause', function(data) {
            console.log('Segundos, porcentaje, duración actual', data)
        });
    }, [statePlayer, videoPlay])

    return (
        <div>
            <h3 style={{color:'white'}}>{videoCurrent?.name}</h3>
            <iframe id={`video-${videoCurrent?.vimeoId}`} width="993" height="562" src={videoCurrent?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    )
}

export default VideoPlayer