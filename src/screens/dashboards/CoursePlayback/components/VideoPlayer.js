import { useEffect, useState } from 'react';
import Player from '@vimeo/player';

const VideoPlayer = ({videoCurrent, destroy, handlingProgress, pause = false}) => {

    const [videoStatus, setVideoStatus] = useState();
    const [playing, setPlaying] = useState(false);

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

        const currentTime = videoCurrent?.currentTime 
        player.setLoop(false).then(() => {});
        player.setCurrentTime( currentTime || 0)
        player?.on('pause', (data) => handlingProgress(data));
        //player.on('timeupdate', (data) => setVideoStatus(data));
        player.on('playing', (data) => handlingProgress({duration : data?.duration, percent : 0.01, seconds : 1}));
        
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