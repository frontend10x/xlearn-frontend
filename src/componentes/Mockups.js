import React, { useEffect, useRef } from "react";
import { Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { tablet, telefono, telefonoResponsive} from "../assets/img";
import "../assets/css/componentes/StyleMockup.css";

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

      <div className="mockups__container align-items row">
        <div className="col-md-7 mockups__shadow" style={{padding: "0"}}>
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
        </div>
        <div className="col-md-5">
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
        </div>

      </div>

      <div className="mockups_sec row align-items-center">
        
          
            <div className="mockups__sec-content col-md-7 xln-two-columnas">
              
                <h2 className="mockups__sec-title" >Conoce las novedades que tenemos para ti y  para tu equipo </h2>
                <div className="xln_iconLine_title"></div>
            
                <p>
                Nuevos cursos, nuevos retos y nuevas oportunidades para aprender
                </p>
                <button className="mockups__button" onClick={redirect} id="cursos" >
                Conoce más
              </button>

            </div>
        
         
            <div className="mockups__sec-favicon col-md-5 xln-two-columnas">

                    <Image src={tablet} alt="tablet" className="tablet" />
                    <Image src={telefono} alt="telf" className="telf" />
                    <Image src={telefonoResponsive} alt="telf" className="tel-resposive" style={{padding:"0"}}/>
             
            </div>
        
      
      </div>

    </div>
  );
};
