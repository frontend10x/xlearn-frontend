import { useEffect, useState } from 'react';
import Player from '@vimeo/player';

const VideoPlayer = ({videoCurrent, destroy, handlingProgress, pause = false}) => {

    const [videoStatus, setVideoStatus] = useState();

    window.unload = function(e) {
        console.log(videoStatus)
        return;
    };

    useEffect(()=>{

        const options = {
            /* width : 993, */
            /* height : 562, */
            //autoplay : true,
            //muted : true
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

    },[videoCurrent, destroy])

    const eventsPlayer = player => {

        const currentTime = videoCurrent?.currentTime
        player.setLoop(false).then(() => {});
        player.setCurrentTime( currentTime || 0)
        player?.on('pause', (data) => handlingProgress(data));
        
        //player.on('timeupdate', (data) => setVideoStatus(data));
        player.on('progress', (data) => setVideoStatus(data));
        player.on('playing', (data) => {
            handlingProgress({duration : data?.duration, percent : 0.01, seconds : 1})
            setTimeout(() => player.setVolume(0.5), 2000)
            
        });
        
        
        // esto no funciona hasta el momento
        const element = document.querySelectorAll('[aria-label="Play"]');
        console.log("element", element)
    }

    return (
        <div className='ms-5' >
            <div className="xln_player_course" data-vimeo-id={videoCurrent?.vimeoId} data-vimeo-defer id='my-video'></div>
            <h3 className='ms-1' style={{color:'white'}}>{videoCurrent?.name}</h3>
        </div>
    )
}

export default VideoPlayer