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
    company: "",
    email: "",
    website: "",
    country: "",
    plan: "",
    quantity: "",
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
                <form className="xlrn__contacto-formulario" onSubmit={contact}>
                  <div class="row w-100">
                    <div className="d-flex justify-content-center gap-5">
                      <div class="mb-3 w-100">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Nombres <span className="icon-requerido">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control borders"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          name="name"
                          required
                        />
                      </div>
                      <div class="mb-3 w-100">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Apellidos <span className="icon-requerido">*</span>
                        </label>
                        <input
                          name="lastname"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row w-100">
                    <div className="d-flex justify-content-center gap-5">
                      <div class="mb-3 w-100 ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Empresa <span className="icon-requerido">*</span>
                        </label>
                        <input
                          name="company"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div class="mb-3 w-100">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Correo electrónico <span className="icon-requerido">*</span>
                        </label>
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row w-100">
                    <div className="d-flex justify-content-center align-items-center gap-5">
                      <div class="mb-3 w-100 ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Website <span className="icon-requerido">*</span>
                        </label>
                        <input
                          name="website"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div class="mb-3 w-100">
                        <label for="inputState" class="form-label">
                          País <span className="icon-requerido">*</span>
                        </label>
                        <select
                          id="inputState"
                          class="form-select"
                          name="country"
                          required
                        >
                          <option value="" disabled selected>Selecciona</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row w-100">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div class="mb-3 w-100">
                        <label for="inputState" class="form-label">
                          ¿Qué plan de Xlearn te interesa? <span className="icon-requerido">*</span>
                        </label>
                        <select id="inputState" class="form-select" name="plan" required>
                          <option value="" disabled selected>Selecciona</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div class="mb-3 w-100">
                        <label for="inputState" class="form-label">
                          ¿Cuántos cupos estás buscando? <span className="icon-requerido">*</span>
                        </label>
                        <select
                          id="inputState"
                          class="form-select"
                          name="quantity"
                          required
                        >
                          <option value="" disabled selected>Selecciona</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div class="mb-3 w-100">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          ¡Déjanos saber un poco más de ti!
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="observation"
                        ></textarea>
                      </div>
                      <button className="btn w-25 fw-bold" style={{backgroundColor:"#31fb84",color:"#002333",fontSize:"18px"}} >Enviar</button>
                    </div>
                  </div>
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
