import React, { useEffect } from "react";
import { registerbanner } from "../../assets/img";
import { Footer } from "../../componentes/Footer";
import { EmpresaFormulario } from "../../componentes/EmpresaFormulario";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import "../../assets/css/screens/public/StyleEmpresaRegister.css";
import { Header } from "../../componentes/Header";
import { useNavigate } from "react-router-dom";

export const EmpresasRegister = () => {
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const show = true;

  const redirect = () => {
    navigate("/contact")
  }

  return (
    <div className="planes-register">
      {/* <HeaderDashboard show={show}  /> */}
      <Header show={show} />

      <section
        className="planes__register-banner"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="planes__register-content">
                <h1>Requerimientos para el registro</h1>
                <p>
                  Regístrate y escoge el plan adecuado para lo que tu
                  organización necesita; podrás gestionar los cupos, equipos y
                  usuarios en los respectivos procesos de formación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="planes__register-container_option">
        <div className="container">
          <div className="row">
            <div className="col-md-6 planes__register-option">
              <div className="row">
                <div className="col-md-12">
                  <h2>
                    Regístrate y comienza a desarrollar tus proyectos en
                    innovación
                  </h2>
                  <div className="xln__separator__subtitle"></div>
                </div>

                <div className="col-md-6">
                  <div className="planes__option-group">
                    <h4 style={{ fontSize: "18px" }}>Monitorea tus equipos</h4>
                    <ul style={{ fontSize: "14px" }}>
                      <li>Evalúa el rendimiento</li>
                      <li>Desarrolla proyectos</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="planes__option-group">
                    <h4 style={{ fontSize: "18px" }}>
                      Accede a contenido de valor
                    </h4>
                    <ul style={{ fontSize: "14px" }}>
                      <li>Contenido exclusivo y especializado</li>
                      <li>Acompañamiento de consultores</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="planes__option-group">
                    <h4 style={{ fontSize: "18px" }}>
                      Haz seguimiento a tus proyectos
                    </h4>
                    <ul style={{ fontSize: "14px" }}>
                      <li>Genera nuevas ideas</li>
                      <li>Estrategias de mejora</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="planes__option-group">
                    <h4 style={{ fontSize: "18px" }}>
                      Genera reportes de progreso
                    </h4>
                    <ul style={{ fontSize: "14px" }}>
                      <li>Evalúa el progreso</li>
                      <li>Revisa las dinámicas de los equipos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 planes__form-container">
              <EmpresaFormulario />
            </div>
          </div>
        </div>
      </section>

      <section className="planes__container-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="planes__register-about">
                <h2>¿Necesitas asesoría?</h2>
                <div className="xln__separator__subtitle"></div>
                <p>
                  Déjanos tus datos y regístrate en nuestra plataforma; pronto
                  nos pondremos en contacto
                  <button className="btn ms-1 fw-bold" style={{backgroundColor:"#31fb84", color:"#002333"}} onClick={redirect} >Contáctanos</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
