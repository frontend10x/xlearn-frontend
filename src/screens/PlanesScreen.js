import React from "react";
import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Footer";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { dashboard1 } from "../assets/img";

export const PlanesScreen = () => {
  const [plans, setPlans] = useState([
    { name: "Aprendizaje y desarrollo", type: "Equipos", price: "159USD", quantity:"Por usuarios y equipos de 4" },
    { name: "Aprendizaje y desarrollo", type: "Empresarial", price: "99USD", quantity:"Por Grupos de 20" },
    { name: "Beneficios para empleados", type: "Negocio", price: "129USD", quantity:"Por equipos o grupos de 20+" },
  ]);

  return (
    <div className="" style={{ height: "100vh" }}>
      <Header />
      <div className="" style={{ height: "60vh", backgroundColor: "#002333" }}>
        <div
          className="ms-5 d-flex gap-5"
          style={{
            position: "relative",
            top: "100px",
            left: "120px",
            width: "80%",
          }}
        >
          <Image src={dashboard1} style={{ width: "379px", height: "216px" }} />

          <div>
            <h2 style={{ color: "white" }}>
              ¡Haz de la formación la fuente de innovación de tu compañía!
            </h2>
            <div style={{ color: "white" }} className="d-flex">
              <p>Innovacion</p>|<p>Emprendimiento corporativo</p>
            </div>
            <button
              className="fw-bold"
              style={{
                backgroundColor: "#31fb84",
                color: "#002333",
                width: "302px",
                height: "41px",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Obtén curso de prueba gratis
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5" style={{ height: "75vh" }}>
        <div className="d-flex flex-column text-center justify-content-center">
          <h3>Nuestros Planes y Precios</h3>
          <p>Accede a todos los beneficios que tenemos para tu empresa</p>
        </div>
        <div className="d-flex justify-content-center gap-5 ">
          {plans?.map((item, index) => (
            <div class="card" style={{ width: "408px", height:"400px"}} key={index} >
              <div class="card-body ms-4">
                <p class="card-text" style={{fontSize:"16px"}} >{item.name}</p>
                <h5 class="card-title fw-bold " style={{color:"#270bc4"}} >{item.type}</h5>
                <h5 class="card-title fw-bold " >{item.price}</h5>
                {/* <a href="#" class="btn btn-primary"></a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
