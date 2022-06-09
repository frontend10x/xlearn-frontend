import React from "react";
import { Image } from "react-bootstrap";
import { empresa, Image_01, Image_02 } from "../assets/img";

export const CarouselEnterprises = () => {
    return (
        <div className="enterprise" >
            <div
                id="carouselExampleIndicators2"
                className="carousel slide enterprise__carosuel-indicators"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators2"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators2"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators2"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            src={empresa}
                            className="d-block enterprise__carousel-image "
                            alt="enterprise_1"
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            src={Image_01}
                            className="d-block enterprise__carousel-image "
                            alt="enterprise_2"
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            src={Image_02}
                            className="d-block enterprise__carousel-image "
                            alt="enterprise_3"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="prev"
                >
                    <span className="enterprise__carousel-prev" aria-hidden="true">
                        ^
                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className=" carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="next"
                >
                    <span className="enterprise__carousel-next" aria-hidden="true">
                        ^
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="enterprise__carousel-content" >
                <h3 className="enterprise__carousel-content_title" >Empresa. </h3>
                <h1 className="enterprise__carousel-content_subtitle" >Ut wisi enim ad minim <br /> veniam, quis exerci</h1>
                <h4 className="enterprise__carousel-content_info" >Sed diam nonummy nibh euismod tincidunt laoreet <br/> dolore magna aliquam erat volutpat.</h4>
            </div>
        </div>
    );
};
