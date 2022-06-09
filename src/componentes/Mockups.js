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
              <h1>Sed diam non <br /> ummy nibh euis?</h1>
            </div>
            <p>
              Sed diam nonummy nibh euismod <br />
              tincidunt laoreet dolore magna aliquam <br />
              erat volutpat. Ut wisi enim ad minim <br />
              veniam, quis exerci
            </p>
            <button className="mockups__button" >
              Conocer
            </button>
          </div>
        </Col>
      </div>
      <div className="mockups_sec">
        <div className="d-flex">
          <Col>
            <div className="mockups__sec-content">
              <div>
                <h1 className="mockups__sec-title" >Ut wisi enim ad minim <br /> veniam, quis exerci</h1>
              </div>
              <p>
              Sed diam nonummy nibh euismod tincidunt laoreet <br/> 
              dolore magna aliquam erat volutpat.
              </p>
              <button className="mockups__button" >
              Conocer
            </button>
            </div>
          </Col>
          <Col>
            <div className="mockups__sec-favicon">
                <Image src={tablet} alt="tablet" className="tablet" />
                <Image src={telefono} alt="telf" className="telf" />
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};
