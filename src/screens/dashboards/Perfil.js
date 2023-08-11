import React, { useState, useEffect } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserCourseById, getUserInformation, updateProfile } from "../../services/services";
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
  const { name, token, id, email, roles, subcompanie_id, phone } = useSelector(
    (state) => state.auth
  );
  const [routeCourses, setRouteCourses] = useState([]);
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  const [userInfo, setUserInfo] = useState();

  const [formValues, handleInputChange] = useForm({
    nameUser: "",
    rol_id: roles,
    subcompanies_id: subcompanie_id,
    newPhone: "",
    emailUser: "",
    emailConfirm: "",
    about_me: "",
  });

  const { nameUser, newPhone, emailUser, emailConfirm, about_me } = formValues;

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

  }, [formValues]);


  console.log(userInfo,'informacion de usuario');


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
    // try {
    //   const data = await updateProfile(
    //     token,
    //     id,
    //     nameUser,
    //     emailUser,
    //     roles,
    //     subcompanie_id,
    //     emailConfirm,
    //     newPhone,
    //     about_me
    //   );
    //   Swal.fire({
    //     icon: "success",
    //     title: `${data?.message}`,
    //     text: `Los cambios se veran reflejados al cerrar e iniciar sesión nuevamente`
    //   });
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Opps",
    //     text: `${error?.response?.data?.message}`
    //   });
    // }

    console.log(formValues,'valores');

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
                    name="nameUser"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={email}
                  />
                  <label htmlFor="floatingInput">{name}</label>
                </div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    nameName="emailUser"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={email}
                  />
                  <label htmlFor="floatingInput">{email}</label>
                </div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    className="form-control"
                    name="emailConfirm"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={email}
                  />
                  <label htmlFor="floatingInput">{email}</label>
                </div>
                <div className="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    className="form-control"
                    name="newPhone"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={phone}
                  />
                  <label htmlFor="floatingInput">
                    {phone === "" ? <p>Ingresa tu número</p> : phone}
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
              <h6>Hola, soy {name}</h6>
            </div>

            <div>
              <div className="mt-3 mb-5">
                {editProfile ? (
                  <>
                    <h2 className="walsheimProBold">Acerca de mi</h2>
                    <p>{}</p>
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
              <h2 className="fw-bold">Cursos en ruta</h2>
              <div className="d-flex flex-wrap gap-2">
                {routeCourses &&
                  routeCourses.map((item, index) => (
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
                        {item["progress:porcentage"] === 100 ? (
                          <CertificateDonwloadButtonProfile
                            courseId={item.id}
                          />
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
