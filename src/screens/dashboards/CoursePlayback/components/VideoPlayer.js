import { useEffect, useState } from 'react';
import Player from '@vimeo/player';

const VideoPlayer = ({videoCurrent, destroy}) => {

    const [videoStatus, setVideoStatus] = useState();

    var videoPlay = "";

    useEffect(()=>{

        const options = {
            width : 993,
            height : 562
        }

        if(videoCurrent){
            
            let player = new Player('my-video', options);
            eventsPlayer(player)

            if (destroy) {
              
                player.destroy().then( () => {
                    player = new Player('my-video', options);
                    eventsPlayer(player)
                }).catch(function(error) {
                    console.error('error', error)
                });
            
            }
                        
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[videoCurrent, destroy])

    const eventsPlayer = player => {

        player?.on('playing', () => handleVideo(videoPlay, player));
        player?.on('pause', function(data) {
            console.log('Segundos, porcentaje, duración actual', data)
        });

    }

    const handleVideo = (videoPlay, player) => {

        if (videoPlay)
        {
            clearInterval(videoPlay);
        }

        videoPlay = setInterval( () => {
            
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

    return (
        <div>
            <h3 style={{color:'white'}}>{videoCurrent?.name}</h3>
            <div data-vimeo-id={videoCurrent?.vimeoId} data-vimeo-defer id='my-video'></div>
        </div>
    )
}

export default VideoPlayer