import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { contactSupport, getCountrys } from "../services/services";
import { Footer } from "../componentes/Footer";
import { bannerContact01, flechaIzquierdaCourseNegra } from "../assets/img";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

import "../assets/css/screens/public/StyleContactoScreen.css";
import { Header } from "../componentes/Header";

export const ContactoScreen = () => {
  const [countries, setCountries] = useState();
  const { token, type } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    name: "",
    lastname: "",
    phone: "",
    company: "",
    email: "",
    observation: "",
  });

  const { name, phone, company, email, observation } = formValues;

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    async function countries() {
      try {
        const data = await getCountrys();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }

    countries();
  }, []);

  const redirect = (e) => {
    if (e.target.value === "inicio" && type === "Empresa") {
      navigate("/dashboard/empresa");
    } else if (e.target.value === "inicio" && type === "Lider") {
      navigate("/dashboard/lider");
    } else if (e.target.value === "inicio" && type === "Integrante") {
      navigate("/dashboard/integrante");
    } else {
      navigate("/plans/register");
    }
  };

  const contact = async (e) => {
    e.preventDefault();
    try {
      const data = await contactSupport(
        name,
        phone,
        company,
        email,
        observation
      );
      Swal.fire({
        icon: "success",
        title: `${data.message}`,
        text: `Te contactaremos pronto`,
        // footer: 'Revisa tu correo para confirmar la cuenta'
      });
    } catch (error) {
      console.log(error);
    }
  };

  const show = true;

  return (
    <div className="xlrn-contacto__section">
      <Header />
      <section
        className="contacto__register-banner"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${bannerContact01}")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contacto__register-content">
                <h1>¡Ponte en contacto con nosotros y entrena a tu equipo!</h1>
                <p>
                  Es el momento de crear, proponer , generar ingresos y, sobre
                  todo ,de innovar. Descubre y aprovecha el potencial de tu
                  organización y desarrolla un plan de acción en torno al
                  entrenamiento ¡Contáctanos!
                </p>
                {token ? (
                  <button
                    onClick={redirect}
                    className="contacto__banner-button"
                    value="inicio"
                  >
                    Volver a inicio
                  </button>
                ) : (
                  <button
                    onClick={redirect}
                    className="contacto__banner-button"
                    value="registro"
                  >
                    Registrarme
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="xlrn-contacto__section-container">
          <div className="row">
            <div className="col-md-5">
              <div className="xln__txt__formContact">
                <div className="InfoCourse__innovacion-redirection">
                  <Image
                    src={flechaIzquierdaCourseNegra}
                    alt="image_description"
                    style={{ width: "10px", marginRight: "15px" }}
                  />
                  <a href="/" rel="noreferrer" style={{ color: "#000" }}>
                    Home{" "}
                  </a>
                  <a href="/contact" className="activarGreen" rel="noreferrer">
                    | Contáctanos{" "}
                  </a>
                </div>
                <h2>Contáctanos</h2>
                <div className="xln__separator__subtitle"></div>
                <p>
                  Apuéstale al desarrollo de proyectos con Xlearn ¿Tienes dudas
                  o inquietudes? Déjanos tus datos y pronto te contactaremos.
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="xln__content__formContact">
                <form
                  className="xlrn__contacto-formulario d-flex flex-column justify-content-center align-items-center gap-3"
                  onSubmit={contact}
                >
                  <div class="row w-100">
                    <div class="col">
                      <div className="form-floating mb-3 w-100">
                        <input
                          type="name"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Nombres</label>
                      </div>
                    </div>
                    <div class="col">
                      <div className="form-floating mb-3">
                        <input
                          type="lastname"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Apellidos</label>
                      </div>
                    </div>
                  </div>
                  <div class="row w-100">
                    <div class="col">
                      <div className="form-floating mb-3">
                        <input
                          type="name"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Empresa</label>
                      </div>
                    </div>
                    <div class="col">
                      <div className="form-floating mb-3">
                        <input
                          type="lastname"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Correo eletrónico</label>
                      </div>
                    </div>
                  </div>
                  <div class="row w-100">
                    <div class="col">
                      <div className="form-floating mb-3">
                        <input
                          type="name"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Web site</label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating">
                        <select
                          class="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          <option selected>...</option>
                          <option value="1">Colombia</option>
                          <option value="2">Chile</option>
                          <option value="3">Venezuela</option>
                        </select>
                        <label for="floatingSelect">País</label>
                      </div>
                    </div>
                  </div>
                  <div class="row w-100 gap-4">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="floatingSelect" className="ms-2" >
                        ¿Qué plan de Xlearn te interesa?
                      </label>
                    </div>
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="floatingSelect" className="ms-2" >
                        ¿Cuántos cupos estás buscando?
                      </label>
                    </div>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{height:"100px"}}
                      ></textarea>
                      <label for="floatingTextarea2" className="ms-2" >¡Déjanos saber un poco más de ti!</label>
                    </div>
                  </div>
                  <button className="btn fw-bold" style={{backgroundColor:"#31fb84", color:"#002333", width:"158px", height:"43px"}} >Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};
