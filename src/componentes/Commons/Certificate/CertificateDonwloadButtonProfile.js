import React, { useState, useEffect } from "react";
import { generateCertificate } from "../../../services/services";
import { useSelector } from "react-redux";
import { baseURL } from "../../../utils/route";
import { useNavigate } from "react-router-dom";

export const CertificateDonwloadButtonProfile = ({ courseId }) => {
  const { token, id } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const consultCertificate = async () => {
    try {
      const response = await generateCertificate(token, id, courseId);
      setShow(response?.paths?.download);
    } catch (error) {
      console.error(error, "error");
    }
  };

  useEffect(() => {
    consultCertificate();
  }, []);

  return (
    <div>
      <a
        href={baseURL + `/ ${show}`}
        className="btn p-0 border-0 text-secondary"
        target="_blank"
      >
        <p>Descargar Certificado</p>
      </a>
    </div>
  );
};
