import React, { useState, useEffect } from "react";
import { Image, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  getUserCourseById,
  getUserInformation,
  updateProfile,
} from "../../services/services";
import "../../assets/css/screens/dashboards/StylePerfil.css";
import { imagenUser } from "../../assets/img";
import { Footer } from "../../componentes/Footer";
import { Header } from "../../componentes/Header";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CertificateDonwloadButtonProfile } from "../../componentes/Commons/Certificate/CertificateDonwloadButtonProfile";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

export const Perfil = () => {
  const { token, id, roles, subcompanie_id /* phone */ } = useSelector(
    (state) => state.auth
  );
  const [routeCourses, setRouteCourses] = useState([]);
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [selectedOption, setSelectedOption] = useState("todos");
  const itemsPerPage = 6;
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const [showMore, setShowMore] = useState(false);

  const [formValues, handleInputChange] = useForm({
    name: userInfo?.name,
    rol_id: roles,
    subcompanies_id: subcompanie_id,
    phone: userInfo?.phone,
    email: userInfo?.email,
    emailConfirm: "",
    about_me: userInfo?.about_me,
  });

  const { name, phone, email, emailConfirm, about_me } = formValues;

  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
      setRouteCourses(data.response._embedded.courses);
    }
    getCourseRoute();

    async function getInfoUser() {
      const data = await getUserInformation(token, id);
      setUserInfo(data?.user);
    }

    getInfoUser();
  }, []);

  console.log(routeCourses, "ruta de cursos");

  const redirect = (name, course_id) => {
    navigate(`/course/videoplayer/${name}/${course_id}`);
  };

  const profileEdit = () => {
    if (editProfile) {
      setEditProfile(false);
    } else {
      setEditProfile(true);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const data = await updateProfile(
        token,
        id,
        name,
        email,
        roles,
        subcompanie_id,
        emailConfirm,
        phone,
        about_me
      );
      Swal.fire({
        icon: "success",
        title: `${data?.message}`,
        text: `Los cambios se veran reflejados al cerrar e iniciar sesión nuevamente`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opps",
        text: `${error?.response?.data?.message}`,
      });
    }
  };

  const seeCertificate = (idCourse) => {
    navigate(`/ver/certificado/${idCourse}`);
  };

  const buttons = "btn p-0 border-0 text-secondary";

  return (
    <div className="profile__section">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <Image src={imagenUser} className="mt-5" />
            {editProfile ? (
              <>
                <h3 className="mt-5">{name}</h3>
                <div className="">
                  <div className="w-50 mt-3">
                    <CircularProgressbarWithChildren
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 4,
                        strokeLinecap: "butt",
                        trailColor: "#fff",
                        pathColor: "#31fb84",
                        textSize: "25px",
                      })}
                      circleRatio={1}
                      value={90}
                      strokeWidth={12}
                      className="mt-1"
                    >
                      <h3 style={{ marginTop: 0 }}>{Math.floor(90)} %</h3>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    onChange={handleInputChange}
                    id="floatingInput"
                    // value={  ? "" : userInfo.name}
                  />
                  <label htmlFor="floatingInput"></label>
                </div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder="ingresa tu email"
                    name="email"
                  />
                  <label htmlFor="floatingInput">Ingresa tu email</label>
                </div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    className="form-control"
                    name="emailConfirm"
                    onChange={handleInputChange}
                    id="floatingInput"
                  />
                  <label htmlFor="floatingInput">Confirma tu email</label>
                </div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={handleInputChange}
                    id="floatingInput"
                  />
                  <label htmlFor="floatingInput">
                    <p>Ingresa tu número</p>
                  </label>
                </div>
                <button
                  className="border border-0 btn mt-2"
                  style={{ backgroundColor: "#002333", color: "#fff" }}
                  onClick={handleUpdateProfile}
                >
                  {" "}
                  Actualizar perfil{" "}
                </button>
              </div>
            )}
          </div>

          <div className="col-md-9 mt-5">
            <div className="position-relative">
              <button
                className="position-absolute top-0 end-0 btn btn-outline-dark"
                onClick={profileEdit}
              >
                {" "}
                Editar mi perfil{" "}
              </button>
            </div>
            <div className="d-flex flex-column mt-5 mb-5 ">
              <h2 className="fw-bold">Mi Perfil</h2>
              <h6>Hola, soy {userInfo?.name}</h6>
            </div>

            <div>
              <div className="mt-3 mb-5">
                {editProfile ? (
                  <>
                    <h2 className="walsheimProBold">Acerca de mi</h2>
                    <p>{userInfo?.about_me}</p>
                  </>
                ) : (
                  <>
                    <h2 className="walsheimProBold">Acerca de mi</h2>
                    <textarea
                      name="about_me"
                      cols={100}
                      rows={5}
                      onChange={handleInputChange}
                    ></textarea>
                  </>
                )}
              </div>
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold me-5">Cursos en ruta</h2>
                <Form.Select
                  id="input-filter"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    height: "40px",
                    position: "relative",
                    right: "40px",
                  }}
                  className="w-25 me-5"
                >
                  <option value="todos">Todos</option>
                  <option value="certificados">Certificados</option>
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {routeCourses &&
                  routeCourses
                    .filter((item) => {
                      const lowerSelectedOption = selectedOption.toLowerCase();

                      if (lowerSelectedOption === "certificados") {
                        // Aplica el filtro para "Certificados"
                        return item["progress:porcentage"] === 100;
                      } else if (lowerSelectedOption === "todos") {
                        // Mostrar todos los elementos
                        return true;
                      }

                      // Si ninguna opción coincide, no se filtra ningún elemento
                      return false;
                    })
                    .slice(0, showMore ? routeCourses.length : itemsToShow)
                    .map((item, index) => (
                      <div
                        className="card mb-5"
                        style={{ width: "18rem" }}
                        key={index}
                      >
                        <img
                          src={item.file_path}
                          onClick={() => seeCertificate(item.id)}
                          style={{ cursor: "pointer" }}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body h-25">
                          <h5 className="card-title fw-bold ">{item.name}</h5>
                        </div>
                        <div className="card-body">
                          <p
                            className="card-text fs-6"
                            style={{ color: "#8894ab" }}
                          >
                            Progress: {item["progress:porcentage"]}%
                          </p>

                          <LinearProgress
                            variant="determinate"
                            className="mb-2"
                            value={item["progress:porcentage"]}
                          />
                          {item?.certificate?.length ? (
                            <>
                              <button
                                onClick={() => seeCertificate(item.id)}
                                className={buttons}
                              >
                                <p>Ver certificado</p>
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => redirect(item.name, item.id)}
                              className={buttons}
                            >
                              <p>Continuar</p>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
              </div>
              {routeCourses.length > itemsToShow && (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "10vh" }}
                >
                  <button
                    className="btn"
                    onClick={() => setShowMore(!showMore)}
                    style={{
                      color: "002333",
                      backgroundColor: "#31fb84",
                      width: "160px",
                      height: "60px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {showMore ? "Ver Menos" : "Ver Más"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
