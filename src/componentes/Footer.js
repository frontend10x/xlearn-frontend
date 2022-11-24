import React from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { XlearnLogo, facebook, twitter, linkedin, youtube, logo10X } from "../assets/img";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">

          <div className="footer__group-container">

            <div className="footer__group">
              <Image src={XlearnLogo} alt="logo" className="footer__image" />
              <p className="footer__logo-info_title" >
                  Somos una plataforma pensada para empresas,coorporativa, y con enfasis en el entrenamiento de equipos de trabajo para el desarrollo de proyectos en temas como: innovación, sostenibilidad, transformación, digital, etc
              </p>
            </div>

            <div className="footer__group margins ">
              <h5>Compañia</h5>
              <p>Nosotros</p>
              <p>Empresas</p>
            </div>

            <div className="footer__group margins ">
              <h5>Comunidad</h5>
              <p>Planes</p>
              <p>Blog</p>
            </div>

            <div className="footer__group margins">
              <h5>Contáctanos</h5>
              <p>FAQ</p>
              <p>Soporte</p>
            </div>

            <div className="footer__group position">

              <div className="footer__content-email_logo ">
                <Image src={logo10X} alt="logo" className="footer__image-email" />
                {/* <input type="email" placeholder="Enter Your Email" className="footer__email" /> */}
              </div>

            </div>

          </div>
        </div>
        {/* Footer Content */}

        <div className="footer__media">
          <div className="footer__media-content" >
              <p>&copy; Xlearn,by 10XThinking .2022</p>

            <div className="footer__option" >
              <p>Ayuda</p>
              <p>Privacidad</p>
              <p>Términos</p>
            </div>
          </div>
          <div className="footer__media-links" >
            <a href="https://www.facebook.com/XLearn10XThinking" >
            <Image src={facebook} alt='icon'  className="footer__media-icon"  />
            </a>
            <a href="https://twitter.com/XLearn2" >
            <Image src={twitter}  alt='icon' className="footer__media-icon"  />
            </a>
            <a href="https://www.linkedin.com/in/x-learn-409991240/" >
            <Image src={linkedin} alt='icon'  className="footer__media-icon"  />
            </a>
            <a href="https://www.youtube.com/channel/UCyS1OiIhWpylctMcbSkYgFQ">
            <Image src={youtube}  alt='icon'  className="footer__media-icon" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
