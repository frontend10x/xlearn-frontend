import React, { useEffect, useState } from "react";
import { Footer } from "../componentes/Footer";
import { Image } from "react-bootstrap";
import { banner_cursos, logologin } from "../assets/img";
import { getCourse } from "../services/services";
import { useNavigate } from "react-router-dom";
import "../assets/css/screens/public/StyleCursosScreen.css";
import { Header } from "../componentes/Header";
import Card from "react-bootstrap/Card";

export const CursosScreen = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const [pageSize] = useState(6);
  const [showMoreAdds, setShowMoreAdds] = useState(false);
  const [showMorePopulars, setShowMorePopulars] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    async function getCourses() {
      const data = await getCourse();
      setCourses(data.response._embedded.courses);
      console.log(data, "cursos");
    }

    getCourses();
  }, []); /* LOGICA DE CURSOS PUBLICOS */

  const filterCourses = () => {
    alert(`Filtro hecho este es el id`);
  };

  const redirect = (item) => {
    navigate(`/course/info/${item}`);
  };

  const startRegister = () => {
    navigate("/plans/register");
  };

  const handleClickShowMoreAdds = () => {
    setShowMoreAdds(!showMoreAdds);
  };

  const handleClickShowMorePopulars = () => {
    setShowMorePopulars(!showMorePopulars);
  };

  const visibleAddsCourses = showMoreAdds ? courses : courses.slice(0, pageSize);
  const visiblePopularsCourses = showMorePopulars ? courses : courses.slice(0, pageSize);

  const show = true;

  return (
    <div className="cursos__section">
      <Header show={show} />
      <section className="container_Cursos">
        <div className="container">
          <div className="row">
            <div className="col-md-4 none">
              <div className="cursos__filter-content">
                <ul className="cursos__filter-buttons">
                  <div className="cursos__filter-title">
                    <h3>Todas Las áreas</h3>
                  </div>

                  <h4 className="">Innovación</h4>

                  {/* <input
                    className="text-start"
                    // onClick={filterCourses}
                    // value="Sistemas de innovación"
                    // type="button"
                  /> */}
                  <p
                    className="text-start"
                    // onClick={filterCourses}
                    // value="Sistemas de innovación"
                  >
                    Sistemas de innovación
                  </p>

                  <p
                    className="text-start"
                    // onClick={filterCourses}
                    // value="Emprendimiento Corporativo"
                  >
                    Emprendimiento corporativo
                  </p>
                  <p className="text-start" value="Excelencia Operacional">
                    Excelencia operacional
                  </p>
                  <p className="text-start" value="Innovacion Abierta">
                    Innovacion abierta
                  </p>
                  <p
                    className="text-start"
                    value="Oportunidades, retos y Priorizacion"
                  >
                    Oportunidades, retos y priorizacion
                  </p>

                  {/* <h4>Transformacion Digital</h4>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="IOT"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Analitica y Big Data"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Inteligencia Artificial"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Marketing Digital"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Ciberseguridad"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Blockchain"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Robotica"
/>
<h4>Gestion De Proyectos</h4>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Agilismo"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Gestion y Liderazgo"
/>
<h4>Inteligencia y Estrategia</h4>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Estrategia"
/>
<input
className="text-start"
type="button"
onClick={filterCourses}
value="Vigilancia"
/> */}
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="cursos__banner">
                <Image
                  src={banner_cursos}
                  alt="banner__cursos"
                  className="cursos__banner-image"
                />
                <div className="cursos__banner-content">
                  <h3>Cursos Online</h3>
                  <p>
                    Conoce nuestra oferta de cursos y encuentra lo que tu
                    empresa necesita
                  </p>
                  <button
                    className="cursos__banner-button"
                    onClick={startRegister}
                  >
                    Registrarme
                  </button>
                </div>
              </div>

              {/* <div className="map_content"> */}
              <div className="">
                <h4 className="cursos__section-recently">
                  Agregados recientemente
                </h4>

                <div className="row">
                  {visibleAddsCourses.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                      <div className="d-flex flex-wrap" key={item?.id}>
                        {/* Aquí va tu código para renderizar cada curso */}
                        <Card
                          className="mb-4 rounded"
                          style={{
                            width: "100%",
                            minHeight: "300px",
                            cursor: "pointer",
                          }}
                          onClick={() => redirect(item?.id)}
                        >
                          <Card.Img variant="top" src={item?.file_path} />
                          <Card.Body>
                            <div className="d-flex justify-content-between">
                              <Card.Text
                                style={{ fontSize: "14px", color: "#394649" }}
                              >
                                366 Usuarios
                              </Card.Text>
                              <Card.Text
                                style={{ fontSize: "14px", color: "#394649" }}
                              >
                                250m
                              </Card.Text>
                            </div>
                            <Card.Title
                              className="title_card"
                              style={{
                                fontSize: "16px",
                                color: "#002333",
                                height: "40px",
                              }}
                            >
                              {item?.name}
                            </Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                              <Card.Img
                                variant="bottom"
                                className="w-25"
                                src={logologin}
                              />
                              <i className="fa fa-bookmark mt-2 "></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
                {!showMoreAdds ? (
                  <div className="d-flex justify-content-center">
                    <button onClick={handleClickShowMoreAdds} className="w-25 fw-bold" style={{border:"none",color:"#002333",backgroundColor:"#31fb84", height:"40px", borderRadius:"10px"}} >Ver más</button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center">
                    <button onClick={handleClickShowMoreAdds} className="w-25 fw-bold" style={{border:"none",color:"#002333",backgroundColor:"#31fb84", height:"40px", borderRadius:"10px"}} >Ver menos</button>
                  </div>
                )}
              </div>

              <div className="map_content2">
                <h4 className="cursos__section-populars">Cursos Populares</h4>
                <div className="row">
                  {visiblePopularsCourses.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                      <div className="d-flex flex-wrap" key={item?.id}>
                        {/* Aquí va tu código para renderizar cada curso */}
                        <Card
                          className="mb-4 rounded"
                          style={{
                            width: "100%",
                            minHeight: "300px",
                            cursor: "pointer",
                          }}
                          onClick={() => redirect(item?.id)}
                        >
                          <Card.Img variant="top" src={item?.file_path} />
                          <Card.Body>
                            <div className="d-flex justify-content-between">
                              <Card.Text
                                style={{ fontSize: "14px", color: "#394649" }}
                              >
                                366 Usuarios
                              </Card.Text>
                              <Card.Text
                                style={{ fontSize: "14px", color: "#394649" }}
                              >
                                250m
                              </Card.Text>
                            </div>
                            <Card.Title
                              className="title_card"
                              style={{
                                fontSize: "16px",
                                color: "#002333",
                                height: "40px",
                              }}
                            >
                              {item?.name}
                            </Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                              <Card.Img
                                variant="bottom"
                                className="w-25"
                                src={logologin}
                              />
                              <i className="fa fa-bookmark mt-2 "></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
                {!showMorePopulars ? (
                  <div className="d-flex justify-content-center">
                    <button onClick={handleClickShowMorePopulars} className="w-25 fw-bold" style={{border:"none",color:"#002333",backgroundColor:"#31fb84", height:"40px", borderRadius:"10px"}} >Ver más</button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center">
                    <button onClick={handleClickShowMorePopulars} className="w-25 fw-bold" style={{border:"none",color:"#002333",backgroundColor:"#31fb84", height:"40px", borderRadius:"10px"}} >Ver menos</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
