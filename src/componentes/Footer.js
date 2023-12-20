import React from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { XlearnLogo,XlearnLogo1920 ,facebook, twitter, linkedin, youtube, logo10X } from "../assets/img";
import { useNavigate } from "react-router-dom";
import "../assets/css/componentes/StyleFooter.css"

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

  const preguntasFrecuentes = () => {
    navigate('/preguntas/frecuentes')
  }

  return (
    <footer className="footer">
      
      <div className="container footer__container">
        <div className="row columnas-x2">
            <div className="col-md-4">
              <div className="footer__group">
                <div className="xln__altoTitle__footer logoFooter">
                  {/* <Image src={XlearnLogo} alt="logo" className="img-fluid" /> */}
                  <Image src={XlearnLogo1920} alt="logo" className="img-fluid" />
                </div>
                <p className="footer__logo-info_title" >
                  Somos una plataforma educativa para empresas especializada en innovación; podrás encontrar contenido de alto valor para tu  compañía, realizar tus entrenamientos y proyectos a partir del desarrollo de temáticas como: innovación, sostenibilidad, transformación digital, emprendimiento corporativo, excelencia operacional y mucho más...
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer__group margins ">
                <div className="xln__altoTitle__footer">
                  <h5>Compañía</h5>
                </div>
                <p className="link-footer" onClick={nosotros}>Nosotros</p>
                {/* <p className="link-footer" onClick={empresa} >Empresas</p> */}
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer__group margins ">
                <div className="xln__altoTitle__footer">
                  <h5>Comunidad</h5>
                </div>
                <p className="link-footer" onClick={planes}>Planes</p>
                {/* <p>Blog</p> */}
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer__group margins">
                <div className="xln__altoTitle__footer">
                  <h5>Contáctanos</h5>
                </div>
                <p className="link-footer" onClick={preguntasFrecuentes} >Preguntas frecuentes</p>
                <p className="link-footer" onClick={soporte}>Soporte</p>
              </div>
            </div>
            <div className="col-md-2 none">
              <div className="footer__group">
                <div className="xln__altoTitle__footer logoFooter">
                  <Image src={logo10X} alt="logo" className="img-fluid" />
                  {/* <input type="email" placeholder="Enter Your Email" className="footer__email" /> */}
                </div>

              </div>
            </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <hr/>
          </div>
        </div>

        <div className="container footer__media">
          <div className="row">
            <div className="col-md-10" style={{padding:"0px"}}>
                
              <div className="row footer__option" style={{padding:"0px"}}>
                <div className="col-md-4">
                  <p>Xlearn by 10XThinking. 2023</p>
                </div>
                {/* <p className="link-footer" onClick={ayuda}>Ayuda</p> */}

                <div className="col-md-2">
                  <p className="link-footer" onClick={cookies}>Cookies</p>
                </div>
                <div className="col-md-2">
                  <p className="link-footer" onClick={privacidad}>Privacidad</p>
                </div>
                <div className="col-md-2">
                  <p className="link-footer" onClick={terminos}>Términos</p>
                </div>
              </div>

            </div>

            <div className="col-md-2">
              <div className="row xln__social_mediaFooter">
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <a href="https://www.facebook.com/XLearn10XThinking" rel="noreferrer">
                  <Image src={facebook} alt='icon'  className="footer__media-icon"  />
                  </a>
                </div>

                <div className="col-md-2">
                  <a href="https://twitter.com/XLearn2" rel="noreferrer">
                  <Image src={twitter}  alt='icon' className="footer__media-icon"  />
                  </a>
                </div>

                <div className="col-md-2">
                  <a href="https://www.linkedin.com/in/xlearn-platform-409991240/" rel="noreferrer">
                  <Image src={linkedin} alt='icon'  className="footer__media-icon"  />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="https://www.youtube.com/channel/UCyS1OiIhWpylctMcbSkYgFQ" rel="noreferrer">
                  <Image src={youtube}  alt='icon'  className="footer__media-icon" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};
