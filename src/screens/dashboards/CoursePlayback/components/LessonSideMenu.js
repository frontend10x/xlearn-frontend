const LessonSideMenu = ({index, video, changeVideo}) => {

    return (
        <div>
            <button onClick={() => changeVideo(video)}>
                <h3 style={{color:'white'}}>{index + ' - ' +video?.name}</h3>
            </button>
        </div>
    )
}

export default LessonSideMenu;