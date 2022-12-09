const LessonSideMenu = ({index, video, changeVideo}) => {

    return (
        <div className="xln__content__rutaClick">
            <button onClick={() => changeVideo(video)} >
                <h3 className="xlnIcon__couser__ruta">{index + 1 }</h3>
                {/* <h3 style={{color:'white'}}>{index + ' - ' +video?.name}</h3> */}
            </button>
        </div>
    )
}

export default LessonSideMenu;