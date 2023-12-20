import React from "react";
import { Container } from "react-bootstrap";
import { HeaderDashboard } from "../componentes/dashboards/HeaderDashboard";
import { Footer } from "../componentes/Footer";
import { Image } from "react-bootstrap";
import { error404, XlearnLogo } from "../assets/img";
import { Header } from "../componentes/Header";
import "../assets/css/screens/public/ErrorScreen.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const ErrorScreen = () => {

  const navigate = useNavigate();
  const {type} = useSelector(state => state?.auth)


  const show = true;

  const getHome = () => {
    if (type === "Empresa") {
      navigate("/dashboard/empresa");
    } else if (type === "Lider") {
      navigate("/dashboard/lider");
    }else if (type === "Integrante") {
      navigate("/dashboard/integrante");
    }else {
      navigate("/");
    }
  };
  
  return (
    <div className="" >
      <Header/>      
      <div className="container d-flex justify-content-center align-items-center " style={{height:"70vh"}} >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <section class="error-container">
              <span>
                <span>4</span>
              </span>
              <span>0</span>
              <span>
                <span>4</span>
              </span>
            </section>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Hemos buscado una concidencia.</h2>
            <p>
              Sin embargo, parece que la página que buscas ya no existe​ Puedes
              contunuar a xlearn.com.co o informar de este error 404 al servicio
              de atención al cliente 
            </p>
            <button className="btn w-25 fw-bold" style={{fontSize:"20px",backgroundColor:"#31fb84",color:"#002333"}} onClick={getHome} >Regresar</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
