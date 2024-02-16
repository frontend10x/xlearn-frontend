import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  getCourse,
  getCourseDescription,
  getLessons,
} from "../services/services";
import { Button, Image, Row } from "react-bootstrap";
import { telefonoDos, playButton, flechaIzquierdaCourse } from "../assets/img";
import { Footer } from "../componentes/Footer";
import { useNavigate } from "react-router-dom";
import { CarouselDashboards } from "../componentes/CarouselDashboards";
import { Container } from "react-bootstrap";
import "../assets/css/screens/public/StyleInfoCourse.css";
import { Header } from "../componentes/Header";
import Col from "react-bootstrap/Col";

export const InfoCourse = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  // const [tutor, setTutor] = useState([]);
  const [lessons, setLessons] = useState([]);
  const redirect = (e) => {
    if (e.target.value === "login") {
      navigate("/login");
    } else {
      navigate("/plans/register");
    }
  };

  const [categorias, setCategorias] = useState([
    { title: "Gestion y Liderazgo" },
    { title: "Vigilancia" },
    { title: "Ciberseguridad" },
    { title: "Innovacion Abierta" },
    { title: "Excelencia Operacional" },
    { title: "Sostenibilidad" },
    { title: "IOT" },
  ]);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    async function getCourses() {
      const data = await getCourseDescription(id);
      setCourse(data?.response?._embedded?.course);
      // setTutor(JSON.parse(data?.response?._embedded?.course?.about_author));
    }

    async function getAllCourses() {
      const data = await getCourse();
      setCourses(data.response._embedded.courses);
    }

    async function getLessonsCourse() {
      const data = await getLessons("", id);
      setLessons(data.response._embedded.lesson);
    }

    getCourses();
    getAllCourses();
    getLessonsCourse();
  }, []); /* LOGICA DE CURSOS PUBLICOS */

  // Filtrar el array de cursos
  const filteredCourses = courses?.filter(
    (item) => parseInt(item?.id) !== parseInt(id)
  );

  const totalMinutes = Math.floor(
    lessons?.reduce((total, item) => total + item?.duration / 60, 0)
  );

  const secs = lessons?.[0]?.duration; // Obtener el valor en segundos

  // Calcular minutos y segundos
  const minutes = Math.floor(secs / 60);
  const restSeconds = secs % 60;

  // Formatear el resultado
  const trailerMinutes = `${minutes}:${
    restSeconds < 10 ? "0" : ""
  }${restSeconds}`;

  const trailerTime = trailerMinutes.split(":");
  const mins = parseInt(trailerTime[0]);
  const seconds = parseInt(trailerTime[1]);

  const show = true;
  return (
    <div className="xln__info_courses">
      <Header />
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4" style={{ position: "relative" }}>
              <Image
                className="xln_imgHeaderDescription"
                src={course.file_path}
                alt="image_description"
                style={{ width: "100%" }}
              />
              <button
                className="button__info-course"
                data-bs-toggle="modal"
                data-bs-target="#videoTrailer"
              >
                <Image src={playButton} />
              </button>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7 title">
              <div className="InfoCourse__innovacion-redirection">
                <Image
                  src={flechaIzquierdaCourse}
                  alt="image_description"
                  style={{ width: "10px", marginRight: "15px" }}
                />
                <a href="/" rel="noreferrer">
                  Home{" "}
                </a>
                <a href="/courses" rel="noreferrer">
                  | Cursos |{" "}
                </a>
                <a className="activarGreen" rel="noreferrer">
                  {course.name}
                </a>
              </div>
              <h2 className="xln__name_course">{course.name}</h2>
              <div className="">
                <br></br>
                <a
                  href="/login"
                  className="btn btn-primary btn-lg px-4 me-md-2 btn__cursos__descripcion"
                  rel="noreferrer"
                >
                  {" "}
                  Iniciar curso
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_descripction_course container">
        <div className="row">
          <div className="col-md-6">
            <p className="title_card" style={{ fontSize: "22px" }}>
              Acerca de este curso
            </p>
            <div className="col-md-12">
              <p dangerouslySetInnerHTML={{ __html: course?.description }} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center">
              {/* <h2 className="xln__description__tutor">Lecciones del curso</h2> */}
              <h2 className="fw-bold" style={{ color:"#002333"}}>Lecciones del curso</h2>
              <p style={{ fontSize: "20px", color:"#002333" }} className="fw-bold">
                {lessons?.length} lecciones ({totalMinutes}m)
              </p>
            </div>
            <button
              className="d-flex justify-content-end"
              data-bs-toggle="modal"
              data-bs-target="#videoTrailer"
            >
              <p className="me-5 pe-5" >{course?.name}</p>
              {/* <p>{trailerMinutes}min</p> */}
              <p className="ps-5 ms-5">
                {mins === 0 ? `${seconds}seg` : `${trailerMinutes}min`}
              </p>
            </button>
            {lessons &&
              lessons?.map((item, index) => {
                const minutes = Math.floor(item.duration / 60); // Extraer los minutos
                const seconds = item.duration % 60; // Extraer los segundos
                const formattedTime = `${minutes}:${
                  seconds < 10 ? "0" : ""
                }${seconds}`; // Formatear los segundos con un cero a la izquierda si es necesario
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <p>{item.name}</p>
                    <p>
                      {minutes > 0 ? formattedTime + " Min" : seconds + " Seg"}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <Container style={{ height: "25vh" }}>
        <Row>
          <Col>
            <div>
              <p style={{ fontSize: "22px" }} className="title_card text-start">
                Categorías relacionadas
              </p>
              <div className="d-flex flex-wrap mt-5 gap-2 ">
                {categorias &&
                  categorias?.map((item, index) => (
                    <Button
                      key={index}
                      className="title_card btn  category_button"
                      style={{
                        background: "transparent",
                        color: "#002333",
                        borderColor: "#D7D9DC",
                        fontSize: "14px",
                        minWidth: "100px", // Ancho mínimo para asegurar que los botones no sean demasiado estrechos
                      }}
                    >
                      {item?.title}
                    </Button>
                  ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="objetivos_de_curso">
        <div className="row align-items-center">
          <div className="row">
            <div className="col-md-12 title_objetivos_de_curso">
              <h2>En este curso desarrollarás :</h2>
            </div>

            <div className="col-sm">
              <div className="separador"></div>
              <p>Cuestionar</p>
            </div>
            <div className="col-sm">
              <div className="separador"></div>
              <p>Observar</p>
            </div>
            <div className="col-sm">
              <div className="separador"></div>
              <p>Experimentar</p>
            </div>
            <div className="col-sm">
              <div className="separador"></div>
              <p>Colaborar</p>
            </div>
            <div className="col-sm">
              <div className="separador"></div>
              <p>Asociar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section_cta_de_curso">
        <div className="row align-items-center">
          <div className="col-sm">
            <h2>Regístrate a nuestra plataforma</h2>
          </div>
          <div className="col-sm col-md-5">
            <div className="separador-left"></div>
            <p>
              Podrás conectarte desde cualquier lugar con nuestra versión
              mobile; ¡Ingresa a Xlearn y comienza a desarrollar tus proyectos!
            </p>
            <button
              onClick={redirect}
              className="section_introCursos-button"
              value="register"
            >
              Registrarme
            </button>
          </div>
          <div className="col-sm">
            <Image src={telefonoDos} alt="telf" />
          </div>
        </div>
      </section>

      {/* <section className="section_carousel_curso container"> */}
      <section className="d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <Container>
              <CarouselDashboards item={filteredCourses} />
            </Container>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="videoTrailer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border border-0 d-flex justify-content-end">
              <button
                type="button"
                className="btn rounded btn_coursevideo"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="100%"
                src={course?.video_path}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen={true}
              ></iframe>
            </div>
            {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
