import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Image } from 'react-bootstrap';
import { equiposIcon } from '../assets/img';
import { useNavigate } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};




export const CarouselDashboards = ({ item }) => {

    const navigate = useNavigate();
    const course = item;
    const redirect = (e) => (
        navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`)
    )

    return (
        <Carousel responsive={responsive}>
            {course &&
                course.map((item, index) => (
                    <div key={index} className="dashboard__lider-container_courses-card" >
                        <Image src={item.file_path} className="img-recomendation-xln" />
                        <div className="dashboard__lider-container_courses-card-content" >
                            <div className="dashboard__lider-container_courses-card-content-body" >
                                <h3>{item.name}</h3>
                                <button className="dashboard__lider-container_courses-card-content_button" value={item.name} id={item.id} onClick={redirect} >Ingresar</button>
                            </div>
                        </div>
                    </div>

                ))
            }
        </Carousel >
    )
}
