import React from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { XlearnLogo, facebook, twitter, linkedin, youtube } from "../assets/img";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo-info" >

            <Image src={XlearnLogo} alt="logo" className="footer__image" />
            <p className="footer__logo-info_title" >
              Lorem ipsum dolor sit amet, consectetuer
              <br /> adipiscing elit, sed diam nonummy nibh <br /> euismod
              tincidunt ut laoreet dolore magna <br /> aliquam erat volutpat.
            </p>
          </div>

          <div className="footer__group-container">

          <div className="footer__group">
            <h5>Lorem ipsum</h5>
            <p>Erat volutpat</p>
            <p>Sed diam</p>
            <p>Dolor sit amet</p>
          </div>
          <div className="footer__group">
            <h5>Lorem ipsum</h5>
            <p>Erat volutpat</p>
            <p>Sed diam</p>
            <p>Dolor sit amet</p>
          </div>
          <div className="footer__group">
            <h5>Lorem ipsum</h5>
            <p>Erat volutpat</p>
            <p>Sed diam</p>
            <p>Dolor sit amet</p>
          </div>
          </div>

          <div className="footer__content-email_logo ">
            <Image src={XlearnLogo} alt="logo" className="footer__image-email" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
        </div>
        {/* Footer Content */}

        <div className="footer__media">
          <div className="footer__media-content" >
              <p>&copy; Xlearn,by 10XThinking .2022</p>

            <div className="footer__option" >
              <p>Ayuda</p>
              <p>Privacidad</p>
              <p>Terminos</p>
            </div>
          </div>
          <div className="footer__media-links" >
            <Image src={facebook} alt='icon'  className="footer__media-icon"  />
            <Image src={twitter}  alt='icon' className="footer__media-icon"  />
            <Image src={linkedin} alt='icon'  className="footer__media-icon"  />
            <Image src={youtube}  alt='icon'  className="footer__media-icon" />
          </div>
        </div>

      </div>
    </div>
  );
};
