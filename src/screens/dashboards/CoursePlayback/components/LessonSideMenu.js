const LessonSideMenu = ({progress, index, video, changeVideo}) => {
    
    let currentClass =  progress ? "xlnIcon__couser__ruta_initiated" : "xlnIcon__couser__ruta"

    if(progress == 100) currentClass = "xlnIcon__couser__ruta_completed"
    
    return (
        <div className="xln__content__rutaClick">
            <button onClick={() => changeVideo(video)} >
                <h3 className={currentClass}>{index + 1 }</h3>
            </button>
        </div>
    )
}

export default LessonSideMenu;