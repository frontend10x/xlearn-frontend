import React, { useState, useEffect } from "react";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Header } from "../../componentes/Header";
import { useSelector } from "react-redux";
import { getCourse } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../componentes/Footer";
import { hand, vistaEmpresa } from "../../assets/img";
import { Container, Carousel, Image, Button, Row } from "react-bootstrap";
import styles from "../../assets/css/screens/dashboards/VerCursosStyles.module.css";

export const VerCursos = () => {
  const { event } = useSelector((state) => state.size);
  const { name } = useSelector((state) => state.auth);
  const [allCourses, setAllCourses] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5;
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllCoursesForEnterprises() {
      const data = await getCourse();
      setAllCourses(data.response._embedded.courses);
      console.log(data, "datos");
    }

    getAllCoursesForEnterprises();
  }, []);

  const adjustClass = event ? "xln_add_menuLateral" : "col-md-10";

  const redirectTo = (e) =>
    navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex - 1 < 0
        ? Math.ceil(allCourses.length / itemsPerSlide) - 1
        : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex + 1 >= Math.ceil(allCourses.length / itemsPerSlide)
        ? 0
        : currentIndex + 1
    );
  };

  return (
    <div>
      <Header />

      <div className="container xln-content-dash">
        <div className="row">
          <div
            className="col-md-2 xln-container-navDashboard"
            style={{ padding: "0" }}
          >
            <NavegacionDashboard />
          </div>
          <div className={`${adjustClass}`}>
            <div className="row dashboard__container-nav_banner">
              <div className="col-md-12">
                <div
                  className="dashboard__banner-content"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgb(0 35 51), rgb(0 0 0 / 0%)), url("${vistaEmpresa}")`,
                  }}
                >
                  <div className="dashboard__banner-title">
                    <h1 style={{ color: "white" }}>
                      ¡<span className="style-name">Hola</span> {name}!{" "}
                      <Image src={hand} alt="gradiente" />
                    </h1>
                    <p>
                      Es el momento de gestionar y desarrollar tus proyectos con
                      Xlearn
                    </p>
                  </div>
                </div>
              </div>
              <hr className="xln_sp_DB" />
            </div>

            <div className="d-flex justify-content-center mb-5">
              <h2 className="text-center w-50" style={{ fontSize: "48px" }}>
                Continúa con tu ruta de aprendizaje y afianza nuevos
                conocimientos
              </h2>
            </div>

            <div className="xlrn__dashborad__lider-container-block mb-5">
              <div className="xlrn__dashboard__lider-block d-flex ">
                {allCourses ? (
                  allCourses?.map((item, index) => (
                    <div
                      className="xlrn__dashboard__lider-block-content d-flex"
                      key={index}
                    >
                      <Image
                        src={item.file_path}
                        className="xlrn__dashboard__lider-block-image"
                      />
                      <div className="xlrn__dashboard__lider-block-content-titles">
                        <p>Curso </p>
                        <h3>{item.name}</h3>
                        <div className=" xlrn__dashboard__lider-content-info d-flex gap-2">
                          {/* <h4>Progreso: <span>{item['progress:porcentage']}%</span></h4> | <h4> Lecciones: {item["lessons:amount"]} </h4> */}
                        </div>

                        <button
                          onClick={redirectTo}
                          className="xlrn__dashboard__lider-block-button"
                          value={item.name}
                          id={item.id}
                        >
                          Iniciar
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p
                    style={{ color: "#8894ab", fontSize: "20px" }}
                    className="fw-bold ms-5"
                  >
                    Ve a la sección de cursos y valida el contenido disponible
                  </p>
                )}
              </div>
            </div>

            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
