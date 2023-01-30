import React from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { XlearnLogo, facebook, twitter, linkedin, youtube, logo10X } from "../assets/img";
import { useNavigate } from "react-router-dom";

export const Footer = () => {

  const navigate = useNavigate()

  const nosotros = () => {
    navigate('/enterprises')
  }

  /* const empresa = () => {
    navigate('/enterprises')
  } */

  const planes = () => {
    navigate('/plans/register')
  }

  const soporte = () => {
    navigate('/contact')
  }

  /* const ayuda = () => {
    navigate('/informacion/ayuda')
  }
 */
  const privacidad = () => {
    navigate('/politicas/privacidad')
  }

  const terminos = () => {
    navigate('/terminos/condiciones')
  }

  const cookies = () => {
    navigate('/cookies/usuario');
  }

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">

          <div className="footer__group-container">

            <div className="footer__group">
              <Image src={XlearnLogo} alt="logo" className="footer__image" />
              <p className="footer__logo-info_title" >
                Somos una plataforma educativa para empresas especializada en innovación; podrás encontrar contenido de alto valor para tu  compañía, realizar tus entrenamientos y proyectos a partir del desarrollo de temáticas como: innovación, sostenibilidad, transformación digital, emprendimiento corporativo, excelencia operacional y mucho más...
              </p>
            </div>

            <div className="footer__group margins ">
              <h5>Compañia</h5>
              <p className="link-footer" onClick={nosotros}>Nosotros</p>
              {/* <p className="link-footer" onClick={empresa} >Empresas</p> */}
            </div>

            <div className="footer__group margins ">
              <h5>Comunidad</h5>
              <p className="link-footer" onClick={planes}>Planes</p>
              {/* <p>Blog</p> */}
            </div>

            <div className="footer__group margins">
              <h5>Contáctanos</h5>
              {/* <p className="link-footer">FAQ</p> */}
              <p className="link-footer" onClick={soporte}>Soporte</p>
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
              <p>Xlearn by 10XThinking. 2023</p>

            <div className="footer__option" >
              {/* <p className="link-footer" onClick={ayuda}>Ayuda</p> */}
              <p className="link-footer" onClick={cookies}>Cookies</p>
              <p className="link-footer" onClick={privacidad}>Privacidad</p>
              <p className="link-footer" onClick={terminos}>Términos</p>
            </div>
          </div>
          <div className="footer__media-links" >
            <a href="https://www.facebook.com/XLearn10XThinking" >
            <Image src={facebook} alt='icon'  className="footer__media-icon"  />
            </a>
            <a href="https://twitter.com/XLearn2" >
            <Image src={twitter}  alt='icon' className="footer__media-icon"  />
            </a>
            <a href="https://www.linkedin.com/in/xlearn-platform-409991240/" >
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
