import React, { useState } from "react";
import { Header } from "../../componentes/Header";
import { Image } from "react-bootstrap";
import { imagenUser } from "../../assets/img";
import { useSelector } from "react-redux";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useForm } from "../../hooks/useForm";
import { Footer } from "../../componentes/Footer";
import { ShareCertificateProfile } from "../../componentes/Commons/SocialMedia/LinkendIn/ShareCertificateProfile";
import { useEffect } from "react";
import { generateCertificate } from "../../services/services";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../utils/route";
import { CertificateDonwloadButtonProfile } from "../../componentes/Commons/Certificate/CertificateDonwloadButtonProfile";

export const VerCertificado = () => {
  const { token, name, id } = useSelector((state) => state.auth);
  const [formValue, handleInputChange] = useForm();
  const [editProfile, setEditProfile] = useState(true);
  const { idCourse } = useParams();
  const [path, setPath] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function seeCertificate() {
      const data = await generateCertificate(token, id, idCourse);
      setPath(data)
      console.log(data, "datos");
    }
    seeCertificate();
  }, [id, token]);

  const goBack = () => {
    navigate(`/profile/${name}`);
  };

  return (
    <div className="profile__section">
      <Header />
      <div className="container mt-5" style={{ height: "95vh" }}>
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
                <div class="form-floating mt-5 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="nameUser"
                    onChange={handleInputChange}
                    id="floatingInput"
                    placeholder={name}
                  />
                  <label for="floatingInput">{name}</label>
                </div>
                <button
                  className="border border-0 btn"
                  style={{ backgroundColor: "#002333", color: "#fff" }}
                >
                  {" "}
                  Actualizar perfil{" "}
                </button>
              </div>
            )}
          </div>

          <div className="col-md-9 mt-5">
            <div>
              <h3>Mis Certificados</h3>
              <h5>Compartele a todos tus nuevos logros</h5>
              {/* <ShareCertificateProfile /> */}
            </div>
            {/* IFRAME */}

            {path?.status ? (
              <iframe
                src={baseURL + path?.paths?.show}
                className="w-100 h-100"
              />
            ) : (
              <p style={{ color: "#8894ab" }}>
                Al parecer aun no tienes certificado para este curso
              </p>
            )}

            <div className="d-flex justify-content-between ">
              {path?.status ? (
                <>
                  <h2 className="fw-bold">¡Felicidades!</h2>
                  {/* <button className='border-0' style={{ borderColor: "#270bc4", color: "#270bc4" }} >Descargar certificado</button> */}
                  <ShareCertificateProfile certificate={path} />
                  <CertificateDonwloadButtonProfile courseId={idCourse} />
                </>
              ) : (
                <div className="d-flex flex-column">
                  <h3 style={{ color: "#8894ab" }}>
                    Presenta la evaluación para obtener el certificado
                  </h3>
                  <button
                    style={{
                      backgroundColor: "#31fb84",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "15px",
                      height: "35px",
                    }}
                    className="fw-bold w-25 mt-3"
                    onClick={goBack}
                  >
                    Volver al perfil
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
