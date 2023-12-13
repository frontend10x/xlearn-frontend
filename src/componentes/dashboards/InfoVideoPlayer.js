import React, { useState, useEffect } from "react";
import { Col, Container, Image } from "react-bootstrap";
import {
  arrowFront,
  fileZip,
  imagenUser,
  ImageProyectos,
  manageSearch,
  robot,
} from "../../assets/img";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseDescription, getCourse } from "../../services/services";
import "../../assets/css/componentes/StyleInfoVideoPlayer.css";
import { CarouselDashboards } from "../CarouselDashboards";
import { baseURL } from "../../utils/route";
import Resources from "./components/Resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { RichText } from "../Commons/NoteEditor/RichText";

export const InfoVideoPlayer = ({videoCurrent}) => {
  const navigate = useNavigate();
  const { course_id } = useParams();
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [resources, setResources] = useState();
  const [questions, setQuestions] = useState([
    {
      title: "Correcion",
      description:
        "Quiero saber como poder hacer las correcciones necesarias a un titulo",
      answers: "6",
    },
    {
      title: "Actualizacion",
      description: "El video numero 4 tiene buen contenido",
      answers: "6",
    },
    {
      title: "Recursos",
      description:
        "En que parte puedo encontrar los recursos para descargarlos",
      answers: "6",
    },
    {
      title: "Profesor",
      description: "Que clase de proyecto vamos a estar desarrollando",
      answers: "6",
    },
    {
      title: "Examen",
      description:
        "Quiero poder presentar el examen sin tener que ver todos los videos",
      answers: "6",
    },
  ]);

  const redirect = (e) =>
    navigate(`/course/videoplayer/${e.target.value}/${e.target.id}`);

  const activeChatBox = () => {
    const event = new Event("x10_bot_open");
    window.dispatchEvent(event);
  };

  const [pages, setPages] = useState("Proyecto");

  const pageSelected = (e) => {
    if (e.target.value === "Proyecto") {
      setPages("Proyecto");
    } else if (e.target.value === "Recursos") {
      setPages("Recursos");
    } else if (e.target.value === "Glosario") {
      setPages("Glosario");
    } else if (e.target.value === "Notas") {
      setPages("Preguntas");
    }
  };

  useEffect(() => {
    async function getCourses() {
      try {
        const data = await getCourseDescription(course_id);
        setCourse(data.response._embedded.course);
        setResources(data.response._embedded.course.resources);
        console.log("que paso aqui", data.response._embedded.course);
      } catch (error) {
        console.error(error);
      }
    }

    async function getAllCourses() {
      const data = await getCourse();
      setCourses(data.response._embedded.courses);
    }

    getCourses();
    getAllCourses();
  }, []); /* LOGICA DE CURSOS PUBLICOS */

  const donwloadResource = async (e) => {
    await window.open(resources[`${e.target.id}`].file_path, "_blank");
  };

  return (
    <div className="xlrn__infovideoplayer-section">
      <div className="xlrn__infovideoplayer-container">
        <div className="xlrn__infovideo-nav d-flex justify-content-around">
          <div className="xlrn__infovideo-nav-container-buttons mt-5 d-flex gap-3 h-25">
            <input
              type="button"
              className="xlrn__infovideo-nav__button"
              value="Proyecto"
              onClick={pageSelected}
            />
            {course?.resources?.length > 0 && (
              <input
                type="button"
                className="xlrn__infovideo-nav__button"
                value="Recursos"
                onClick={pageSelected}
              />
            )}

            <input
              type="button"
              className="xlrn__infovideo-nav__button"
              value="Notas"
              onClick={pageSelected}
            />
          </div>
        </div>
        {pages === "Proyecto" && (
          <div className="xlrn__infovideoplayer-container-content">
            <div className="xlrn__infovideoplayer-content">
              <div className="xlnPlayer__content__proyectos">
                <div className="proyectos__text">
                  <div
                    className="w-75"
                    dangerouslySetInnerHTML={{ __html: course.description }}
                  />
                </div>
                <div className="proyectos__img">
                  {/* <h3>Estudiantes 1.540</h3> */}
                  <img src={ImageProyectos} />
                </div>
              </div>
              <div className="xlrn__infovideoplayer-content-users flex-column ">
                <h2 className="fw-bold ms-5 ">Acerca del tutor</h2>
                <div className="description__infovideoplayer-content">
                  <div className="d-flex mt-5">
                    <Col md={6} className="">
                      {course?.about_author &&
                        JSON.parse(course?.about_author).map((item, index) => (
                          <div className="d-flex gap-5 mb-3">
                            <Image
                              key={index}
                              src={item?.image}
                              className="w-25 h-25 ms-5 img-fluid "
                              alt="usuario"
                            />
                            <div>
                              <div
                                dangerouslySetInnerHTML={{ __html: item?.name }}
                              />
                              <div
                                className="w-75"
                                dangerouslySetInnerHTML={{
                                  __html: item?.profile,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-start ms-5 mt-5"
                    >
                      <div className=" ms-5 mt-5 border-bottom container__buttons d-flex ">
                        <Image
                          src={manageSearch}
                          alt=""
                          className="icon_manageSearch"
                        />
                        <button
                          className="consultor__button "
                          onClick={activeChatBox}
                        >
                          Modo consultor <span className="ms-5"> </span>{" "}
                        </button>
                        <Image
                          src={arrowFront}
                          alt=""
                          className="icon_arrowFront mt-1"
                        />
                      </div>
                      <Image
                        src={robot}
                        alt="bot"
                        className="robot__icon"
                        onClick={activeChatBox}
                      />
                    </Col>
                  </div>
                </div>
              </div>

              <div className="xln__internos__CursosRecomendadosPlayer">
                <h2 className="dashboard__lider-container-title">
                  Cursos recomendados
                </h2>
                <div className="dashboard__lider-container_courses">
                  <Container>
                    <CarouselDashboards item={courses} action={redirect} />
                  </Container>
                </div>
              </div>

              {/* <div className="" > 
                                <h2>Tener Presente</h2>
                            </div> */}
            </div>
          </div>
        )}
        {pages === "Recursos" && (
          <div className="xlrn__infovideoplayer-container-content">
            <div className="xlrn__infovideoplayer-content">
              <div className="xlnPlayer__content__proyectos">
                <div className="proyectos__text">
                  <Resources
                    title="Recursos"
                    download={donwloadResource}
                    data={resources}
                  />
                </div>
                <div className="proyectos__text">
                  <Resources
                    title="Realidad aumentada"
                    download={donwloadResource}
                    data={resources}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {pages === "Glosario" &&
                   <div className="xlrn__infovideoplayer-container-content" >
                   <div className="xlrn__infovideoplayer-content" >
                       <div className="xlnPlayer__content__proyectos" >
                           <div className="proyectos__text">
                              <h3>glosario</h3>
                           </div>
                           <div className="proyectos__img">
                               <h3>Estudiantes 1.540</h3>
                               <img src={ImageProyectos}/>
                           </div>
                       </div>
                       <div className="xlrn__infovideoplayer-content-users" >
                           <div>
                               {proffesor}
                           </div>
                       </div>
                   </div>
               </div>

                } */}

        {pages === "Preguntas" && (
          <div className="xlrn__infovideoplayer-container-content">
            <div className="xlrn__infovideoplayer-content">
              <div className="xlnPlayer__content__proyectos">
                <RichText videoCurrent={videoCurrent} />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Contenedor fin */}
    </div>
  );
};
