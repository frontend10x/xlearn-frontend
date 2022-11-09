import React, { useEffect, useRef } from "react";
import { Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { tablet, telefono} from "../assets/img";

export const Mockups = () => {
  const videoRef = useRef(null);

  useEffect(() => {
      let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75]
      };

      let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
          videoRef.current.play();
          } else {
          videoRef.current.pause();
          }
      });
      };

      let observer = new IntersectionObserver(handlePlay, options);

      observer.observe(videoRef.current);
  });

  const navigate = useNavigate();
  const redirect = (e) => {
    if (e.target.id === "empresas") {
      navigate('/enterprises');
    }else {
      navigate('/courses');
    }
      
  }

  return (
    <div className="mockups">
      <div className="mockups__container">
        <Col className="mockups__shadow" >
          <div className="mockups__platform">
            <video className="xln-content-video_MS"
              width="100%"
              ref={videoRef}
              pause={false}
              muted={true}
              controls
              /* poster={posterMSVideo} */
              src={require("./../assets/videos/video-promocional.mp4")}
            ></video>
          </div>
        </Col>
        <Col>
          <div className="mockups__content">
            <div className="mockups__content-title" >
              <h2>Conviértete en un caso de éxito y apuéstale a la innovación con Xlearn </h2>
              <div className="xln_iconLine_title"></div>
            </div>
            <p>
              Conoce las empresas que se han formado con nosotros y han asumido los retos y oportunidades del mercado a través de su capital humano.
            </p>
            <button className="mockups__button" onClick={redirect} id="empresas" >
              Conoce más
            </button>
          </div>
        </Col>
      </div>
      <div className="mockups_sec">
        <div className="d-flex mockups__sec-container">
          
            <div className="mockups__sec-content">
              <div>
                <h2 className="mockups__sec-title" >Conoce las novedades que tenemos para ti y  para tu equipo </h2>
                <div className="xln_iconLine_title"></div>
              </div>
              <p>
              Nuevos cursos, nuevos retos y nuevas <br/> 
              oportunidades para aprender
              </p>
              <button className="mockups__button" onClick={redirect} id="cursos" >
              Conoce más
            </button>
            </div>
        
         
            <div className="mockups__sec-favicon">
                <Image src={tablet} alt="tablet" className="tablet" />
                <Image src={telefono} alt="telf" className="telf" />
            </div>
        
        </div>
      </div>
    </div>
  );
};
