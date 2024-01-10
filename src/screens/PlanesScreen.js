import React, { useEffect } from "react";
import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Footer";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { dashboard1, iconCheck } from "../assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/screens/public/StylePlansScreen.css";
import { getDetailedPlans } from "../services/services";
import { useNavigate } from "react-router-dom";

export const PlanesScreen = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfoPlans() {
      const data = await getDetailedPlans();
      setPlans(data?.data?.plans[1], "data de planes");
    }
    getInfoPlans();
  }, []);

  // console.log(plans,'plans');

  const redirect = () => {
    navigate("/plans/register");
  };

  console.log(plans, "planes");

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
              Registrate ahora
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5" style={{ height: "75vh" }}>
        <div className="d-flex flex-column text-center justify-content-center">
          <h3 className="fw-bold" style={{ fontSize: "48px" }}>
            Nuestros Planes y Precios
          </h3>
          <p style={{ fontSize: "16px" }}>
            Accede a todos los beneficios que tenemos para tu empresa
          </p>
        </div>
        <div className="d-flex justify-content-center gap-5 ">
          {/* {plans &&
            plans?.map((item, index) => (
              <div
                class="card"
                style={{ width: "408px", height: "400px" }}
                key={index}
              >
                <div class="card-body ms-4">
                  <h5
                    class="card-title fw-bold "
                    style={{ fontSize: "26px", color: "#270BC4" }}
                  >
                    {item.name}
                  </h5>
                  <div className="d-flex flex-colo">
                    <p
                      class="card-title"
                      style={{ color: "#002333", fontSize: "16px" }}
                    >
                      {"Desde:"}
                      <br />
                      <span className="fw-bold">
                        {item?.price.toLocaleString("es-ES")}
                      </span>
                    </p>{" "}
                  </div>
                  <button
                    class="btn w-100 btn-plans_buy"
                    style={{
                      borderColor: "#1A25B6",
                      color: "#1A25B6",
                      transition: "background-color 0.3s, color 0.3s ease",
                    }}
                    onClick={redirect}
                  >
                    Comprar ahora
                  </button>
                  {/* <ul className="mt-3">
                    {item &&
                    item.benefits.map((benefit, benefitIndex) => (
                      <div className="d-flex justify-content-start mt-2">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="me-3"
                        />
                        <li
                          key={benefitIndex}
                          className=""
                          style={{ fontSize: "14px" }}
                        >
                          {benefit}
                        </li>
                      </div>
                    ))}
                  </ul> 
                </div>
              </div>
            ))} */}
          <div className="container">
            <div className="row d-flex justify-content-center ">
              {plans && (
                <div class="card" style={{ width: "408px", height: "408px" }}>
                  <div class="card-body">
                    <h5
                      class="card-title fw-bold"
                      style={{ fontSize: "26px", color: "#270BC4" }}
                    >
                      {plans?.name}
                    </h5>
                    <p class="card-text" style={{ fontSize: "16px" }}>
                      Desde: equipos de 4 o <br />
                      <span className="fw-bold" style={{ fontSize: "16px" }}>
                        {plans?.price?.toLocaleString("es-ES")} COP{" "}
                      </span>{" "}
                      por usuario/año
                    </p>
                    <button
                      class="btn w-100 btn-plans_buy mb-2"
                      style={{
                        borderColor: "#1A25B6",
                        color: "#1A25B6",
                        transition: "background-color 0.3s, color 0.3s ease",
                      }}
                      onClick={redirect}
                    >
                      Comprar ahora
                    </button>
                    {plans?.feature?.map((item) => (
                      <div className="">
                        <ul
                          className="d-flex gap-3 justify-content-start align-items-center mt-1 "
                          style={{ height: "18px", fontSize: "14px" }}
                        >
                          <i className="fa fa-check"></i>
                          {item}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center mb-5">
        <div className="w-75">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
            <h3 className="fw-bold" style={{fontSize:"38px"}} >Adquiere nuestro plan</h3>
            <div className="sub-title" ></div>
          </div>
          <table class="table">
            <thead className="">
              <tr className="">
                <th scope="col" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  vision general
                </th>
                <th scope="col" style={{ border: "1px solid #DDDDDD" }}>
                  <p className="text-center" style={{ color: "#270BC4" }}>
                    {plans?.name}
                  </p>
                  <p className="text-center">{plans?.price?.toLocaleString("es-ES")} COP </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  Más de 100 cursos y 6 áreas
                </th>
                <td
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img className="" src={iconCheck} />
                </td>
              </tr>
              <tr className="w-100">
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  Certificado digital de los cursos y las rutas
                </th>
                <td
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img className="" src={iconCheck} />
                </td>
              </tr>
              <tr className="w-100">
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  Eventos y conversatorios exclusivos
                </th>
                <td
                  colspan="2"
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img className="" src={iconCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  1 asesoría o realimentación virtual con un consultor
                </th>
                <td
                  colspan="2"
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img className="" src={iconCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  Análisis general de los equipos
                </th>
                <td
                  colspan="2"
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img className="" src={iconCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  Agrega un cupo
                </th>
                <td
                  colspan="2"
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img src={iconCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" style={{ borderBottom: "1px solid #DDDDDD" }}>
                  3 asesorías o realimentación virtual con un consultor
                </th>
                <td
                  colspan="2"
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img src={iconCheck} />
                </td>
              </tr>
              <tr className="">
                <th scope="row">Agrega 3 cupos</th>
                <td
                  colspan="2"
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                >
                  <img src={iconCheck} />
                </td>
              </tr>
              <tr>
                <th></th>
                <td
                  className="text-center"
                  style={{ border: "1px solid #DDDDDD" }}
                  onClick={redirect}
                >
                  <button className="btn w-75 buying-button ">
                    Comprar ahora
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};
