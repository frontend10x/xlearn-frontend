import React, { useState, useEffect } from "react";
import { Header } from "../componentes/Header";
import { registerbanner } from "../assets/img";
import "../assets/css/screens/public/StyleDetailedFaqs.css";
import { useNavigate, useParams } from "react-router-dom";
import { faqs } from "../services/publics/faqs/FaqsService";
import { cuposIcon } from "../assets/img";
import { Footer } from "../componentes/Footer";

export const DetailFaqs = () => {
  const navigate = useNavigate();
  const [detailed, setDetailed] = useState();
  const { id } = useParams();

  console.log(id, "id");

  useEffect(() => {
    async function getFaqs() {
      const data = await faqs();
      const filteredData = data.data.response._embedded.faqs.filter(
        (item) => item?.id === parseInt(id)
      );
      setDetailed(filteredData);
    }
    getFaqs();
  }, [id]);

  const goBack = () => {
    navigate("/preguntas/frecuentes");
  };

  console.log(detailed, "detallado");

  return (
    <div>
      <Header />
      <div style={{ height: "50vh" }}>
        <section
          className="faqs-banner"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="faqs_banner-content">
                  <h2 className="walsheimProBold" style={{ fontSize: "36px" }}>
                    Centro de ayuda{" "}
                    <span className="text-white fw-bold faqs_detailed-title">
                      | FAQ´s
                    </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <button
          className="btn fw-bold"
          onClick={goBack}
          style={{ borderColor: "#002333", width: "224px", height: "41px" }}
        >
          Volver al listado
        </button>
        <div className="container mt-5" style={{ height: "30vh" }}>
          {detailed && (
            <div>
              <h2
                className="walsheimProBold"
                style={{ fontSize: "36px", color: "#002333" }}
              >
                {detailed[0]?.question}
              </h2>
              <h4 style={{ fontSize: "16px", color: "#002333" }}>
                {detailed[0]?.options[0]?.response}
              </h4>
            </div>
          )}
        </div>
      </div>

      <div
        className="container d-flex justify-content-center justify-content-around"
        style={{ height:"50vh" }}
      >
        <div
          className="card"
          style={{ width: "299px", height: "320px", borderColor: "#002333" }}
        >
          <div className="card-body">
            <img src={cuposIcon} className="img-fluid mt-3" />
            <div className="mt-5">
              <h5 className="walsheimProBold" style={{ color: "#002333" }}>
                Consultar profesor
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "299px", height: "320px", borderColor: "#002333" }}
        >
          <div className="card-body">
            <img src={cuposIcon} className="img-fluid mt-3" />
            <div className="mt-5">
              <h5 className="walsheimProBold" style={{ color: "#002333" }}>
                Consultar en comunidad
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "299px", height: "320px", borderColor: "#002333" }}
        >
          <div className="card-body">
            <img src={cuposIcon} className="img-fluid mt-3" />
            <div className="mt-5">
              <h5 className="walsheimProBold" style={{ color: "#002333" }}>
                Danos un toque
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
