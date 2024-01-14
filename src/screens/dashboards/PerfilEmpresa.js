import React, { useState, useEffect } from "react";
import { Header } from "../../componentes/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image,Form } from "react-bootstrap";
import { imagenUser } from "../../assets/img";
import "../../assets/css/screens/dashboards/StylePerfilEmpresa.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useForm } from "../../hooks/useForm";
import { LinearProgress } from "@mui/material";
import { CertificateDonwloadButtonProfile } from "../../componentes/Commons/Certificate/CertificateDonwloadButtonProfile";
import { Footer } from "../../componentes/Footer";
import Swal from "sweetalert2";
import {
  getEnterpriseInformation,
  getUserCourseById,
  getUserInformation,
  updateEnterprise,
} from "../../services/services";


export const PerfilEmpresa = () => {
  const { token, id, roles, subcompanie_id} = useSelector(
    (state) => state.auth
  );
  const [routeCourses, setRouteCourses] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  const [selectedOption, setSelectedOption] = useState("todos");
  const itemsPerPage = 6;
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const [showMore, setShowMore] = useState(false);
  const [formValues, handleInputChange] = useForm({
    name: "",
    rol_id: roles,
    subcompanies_id: subcompanie_id,
    phone: "",
    email: "",
    emailConfirm: "",
    information: "",
  });

  const { name, phone, email, emailConfirm, information } = formValues;

  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
      setRouteCourses(data.response._embedded.courses);
    }

    async function getEnterpriseInfo() {
      const data = await getEnterpriseInformation(token, subcompanie_id);
      setInfoUser(data?.sub_company);
    }

    getCourseRoute();
    getEnterpriseInfo();
  }, [token,infoUser]);

  const profileEdit = () => {
    if (editProfile) {
      setEditProfile(false);
    } else {
      setEditProfile(true);
    }
  };

  const seeCertificate = (idCourse) => {
    navigate(`/ver/certificado/${idCourse}`);
  };

  const redirect = (name, course_id) => {
    navigate(`/course/videoplayer/${name}/${course_id}`);
  };

  const handleUpdateProfile = async () => {
    try {
      const data = await updateEnterprise(
        token,
        id,
        name,
        email,
        roles,
        subcompanie_id,
        emailConfirm,
        phone,
        information
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

  console.log(infoUser,'info de usuarios');

  const buttons = "btn p-0 border-0 text-secondary";
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <Image src={imagenUser} className="mt-5" />
            {editProfile ? (
              <>
                <h3 className="mt-5">{infoUser?.name}</h3>
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
                <div class="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={email}
                  />
                  <label htmlFor="floatingInput">Nombre</label>
                </div>
                <div class="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={email}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div class="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    name="emailConfirm"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={email}
                  />
                  <label htmlFor="floatingInput">Confirmación de email</label>
                </div>
                <div class="form-floating mt-5 mb-1">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={phone}
                  />
                  <label htmlFor="floatingInput">Contacto</label>
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
                Editar mi perfil
              </button>
            </div>
            <div className="d-flex flex-column mt-5 mb-5 ">
              <h2 className="fw-bold">Mi Perfil</h2>
              <h6>Hola, soy {infoUser?.name}</h6>
            </div>

            <div>
              <div className="mt-3 mb-5">
                {editProfile ? (
                  <>
                    <div>
                      <h2
                        className="walsheimProBold"
                        style={{ fontSize: "28px" }}
                      >
                        Acerca de mi
                      </h2>
                      <h3>{infoUser?.information}</h3>
                    </div>
                    <div>
                      <h2
                        className="walsheimProBold"
                        style={{ fontSize: "28px" }}
                      >
                        Contacto
                      </h2>
                      <h3 style={{ fontSize: "16px" }}>{infoUser?.email}</h3>
                      <h3 style={{ fontSize: "16px" }}>{infoUser?.phone}</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="walsheimProBold">Acerca de mi</h2>
                    <textarea
                      cols={100}
                      rows={5}
                      name="information"
                      placeholder="Ingresa una descripción breve"
                      onChange={handleInputChange}
                    />
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
