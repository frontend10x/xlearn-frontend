import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const LessonSideMenu = ({progress, index, video, changeVideo}) => {

    const { duration } = video

    let currentClass =  progress ? "xlnIcon__couser__ruta_initiated mt-2" : "xlnIcon__couser__ruta mt-2 "

    if(progress?.percentage_completion === 100 && duration <= progress?.advanced_current_time) currentClass = "xlnIcon__couser__ruta_completed"
    
    const tooltip = (
        <Tooltip id="tooltip">
          <strong>{video?.name}.</strong>
        </Tooltip>
    );

    return (
        <div className="xln__content__rutaClick">
            <OverlayTrigger placement="top" overlay={tooltip}>
                <Button onClick={() => changeVideo(video)} variant="outline-light" className="p-0 ms-4" >
                    <h3 className={currentClass}>{index + 1 }</h3>
                </Button>
            </OverlayTrigger>
        </div>
    )
}

export default LessonSideMenu;