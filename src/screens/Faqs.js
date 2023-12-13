import React, { useState } from "react";
import { Header } from "../componentes/Header";
import { cuposIcon, registerbanner } from "../assets/img";
import "../assets/css/screens/public/StyleFaqs.css";
import { useEffect } from "react";
import { faqs } from "../services/publics/faqs/FaqsService";
import { Footer } from "../componentes/Footer";
import { useNavigate } from "react-router-dom";

export const Faqs = () => {
  const [quest, setQuest] = useState([]);
  const [selectedSubCategory, setSelectedSubcategory] = useState("");
  const [originalFaqs, setOriginalFaqs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getFaqs() {
      const data = await faqs();
      setOriginalFaqs(data.data.response._embedded.faqs);
      setQuest(data.data.response._embedded.faqs);
    }
    getFaqs();
  }, []);

  const detailedFaqs = (faqsId, faqsName) => {
    navigate(`/preguntas/frecuentes/${faqsId}/${faqsName}`);
  };

  const filter = (subCategory) => {
    if (!subCategory) {
      setQuest(originalFaqs); // Restablece el array original si no se selecciona ninguna subcategoría
    } else {
      const filteredFaqs = originalFaqs.filter(
        (item) => item.sub_category === subCategory
      );
      setQuest(filteredFaqs);
    }
  };

  const handleFilterClick = (e) => {
    const selectedSubcategory = e.currentTarget.dataset.subcategory;
    setSelectedSubcategory(selectedSubcategory);
    filter(selectedSubcategory);
  };

  console.log(quest);

  return (
    <div className="faqs_section">
      <Header />

      <div>
        <div
          className="faqs-banner"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="faqs_banner-content">
                  <h2 className="faqs-title">Centro de ayuda</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center gap-5 mb-3 mt-5">
            <div
              className={`card text-center ${
                selectedSubCategory === "xlearn" ? "selected" : ""
              }`}
              style={{
                width: "215px",
                height: "102px",
                backgroundColor: "#01202C",
                color: "white",
              }}
              onClick={handleFilterClick}
              data-subcategory="xlearn"
            >
              <div class="card-body">
                <h5 class="card-title mt-2 fw-bold fs-1">Xlearn</h5>
              </div>
            </div>
            <div
              className={`card text-center ${
                selectedSubCategory === "cursos" ? "selected" : ""
              }`}
              style={{
                width: "215px",
                height: "102px",
                backgroundColor: "#01202C",
                color: "white",
              }}
              onClick={handleFilterClick}
              data-subcategory="cursos"
            >
              <div class="card-body">
                <h5 class="card-title mt-2 fw-bold fs-1 ">Cursos</h5>
              </div>
            </div>
          </div>
          <h2 className="faqs-title fw-bold mb-5">Iniciemos con la ayuda</h2>
          <div className="mb-5 d-flex d-flex justify-content-center gap-2 flex-wrap ">
            {quest &&
              quest.map((item) => (
                <div
                  className="card border-0 rounded d-flex justify-content-center align-items-center"
                  key={item.id}
                  style={{
                    width: "300px",
                    height: "281px",
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  <div className="card-body mt-5 pt-5 text-center">
                    <h5
                      className="card-title walsheimProBold"
                      style={{
                        fontSize: "20px",
                        color: "#270BC4",
                        height: "40px",
                      }}
                    >
                      {item?.question}
                    </h5>
                    <a
                      onClick={() => detailedFaqs(item?.id, item?.question)}
                      className="card-link walsheimProBold "
                      style={{ fontSize: "14px", color: "#270BC4" }}
                      type="button"
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="row mb-3 d'flex justify-content-center align-items-center">
          <div className="col-md-4 mb-2">
            <div
              className="card w-100"
              style={{
                height: "320px",
                borderColor: "#002333",
              }}
            >
              <div className="card-body">
                <img src={cuposIcon} className="img-fluid mt-3" />
                <div className="mt-5">
                  <h5 className="walsheimProBold" style={{ color: "#002333" }}>
                    Consultar profesor
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div
              className="card w-100"
              style={{
                height: "320px",
                borderColor: "#002333",
              }}
            >
              <div className="card-body">
                <img src={cuposIcon} className="img-fluid mt-3" />
                <div className="mt-5">
                  <h5 className="walsheimProBold" style={{ color: "#002333" }}>
                    Consultar profesor
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div
              className="card w-100"
              style={{
                height: "320px",
                borderColor: "#002333",
              }}
            >
              <div className="card-body">
                <img src={cuposIcon} className="img-fluid mt-3" />
                <div className="mt-5">
                  <h5 className="walsheimProBold" style={{ color: "#002333" }}>
                    Consultar profesor
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
