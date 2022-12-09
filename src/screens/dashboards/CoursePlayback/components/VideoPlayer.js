import { useEffect, useState } from 'react';
import Player from '@vimeo/player';

const VideoPlayer = ({videoCurrent, destroy, handlingProgress}) => {

    const [videoStatus, setVideoStatus] = useState();

    var videoPlay = "";

    useEffect(()=>{

        const options = {
            width : 993,
            height : 562,
            loop : false
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

        player.setLoop(false).then(() => {});
        // player?.on('playing', () => handleVideo(videoPlay, player));
        player?.on('pause', (data) => handlingProgress(data));
        
        // player.on('ended', function(data) {
        //     console.log("ended", data)
        //     // data is an object containing properties specific to that event
        // });

    }

    // const handleVideo = (videoPlay, player) => {

    //     if (videoPlay)
    //     {
    //         clearInterval(videoPlay);
    //     }

    //     videoPlay = setInterval( () => {
            
    //         player.on('timeupdate', (getAll) =>
    //         {
    //             setVideoStatus({
    //                 currentTime : getAll?.seconds, //get currentime
    //                 vdoEndTym : getAll?.duration, //get video duration
    //                 percentage : (getAll?.percent * 100)+"%",
    //                 timeSeconds : getAll?.seconds + ' Seconds'
    //             })
                
    //         });
    //         player.on('ended',  (data) => {
    //             console.log("data", data)
    //             clearInterval(videoPlay)
    //         });
    //     }, 1000);
        
    // }

    // useEffect(() => {
    //     console.log('videoStatus', videoStatus)
    // },[videoStatus])

    return (
        <div>
            <h3 style={{color:'white'}}>{videoCurrent?.name}</h3>
            <div className="xln_player_course" data-vimeo-id={videoCurrent?.vimeoId} data-vimeo-defer id='my-video'></div>
        </div>
    )
}

export default VideoPlayer