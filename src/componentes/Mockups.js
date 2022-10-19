import React from "react";
import { Col, Image } from "react-bootstrap";
import { tablet, telefono} from "../assets/img";

export const Mockups = () => {
  return (
    <div className="mockups">
      <div className="mockups__container">
        <Col className="mockups__shadow" >
          <div className="mockups__platform">
            <h1>
              Mockups <br /> platform
            </h1>
          </div>
        </Col>
        <Col>
          <div className="mockups__content">
            <div className="mockups__content-title" >
              <h1>Conviértete en un caso de éxito y apuéstale a la innovacion con Xlearn </h1>
              <div className="xln_iconLine_title"></div>
            </div>
            <p>
              Conoce las empresas que se han formado con nosotros y han asumido los retos y oportunidades del mercado a través de su capital humano.
            </p>
            <button className="mockups__button" >
              Conoce más
            </button>
          </div>
        </Col>
      </div>
      <div className="mockups_sec">
        <div className="d-flex mockups__sec-container">
          
            <div className="mockups__sec-content">
              <div>
                <h1 className="mockups__sec-title" >Conoce las novedades que tenemos para ti y  para tu equipo </h1>
                <div className="xln_iconLine_title"></div>
              </div>
              <p>
              Nuevos cursos, nuevos retos y nuevas <br/> 
              oportunidades para aprender
              </p>
              <button className="mockups__button" >
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
