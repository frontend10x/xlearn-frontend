import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { generateCertificate } from "../../../services/services";
import { certificadoIcon } from "../../../assets/img";
import { baseURL } from "../../../utils/route";
import { ShareCertificateProfile } from "../SocialMedia/LinkendIn/ShareCertificateProfile";

import "../../../assets/css/componentes/StyleCertificateDowloadButton.css";


export const CertificateDownloadButton = ({courseId}) => {
    const [certificate, setCertificate] = useState(false);
    const { token, id } = useSelector(state => state.auth)

    const consultCertificate = async () => {
      try {
        const response = await generateCertificate(token, id, courseId);
        setCertificate(response)
      } catch (error){}
    }

    useEffect(()=>{
      consultCertificate()
    },[])
  
    return(
        <>
          {certificate?.status && 
            (<div className="Principal_CertificateDowloadButton">

              <div className="Container_CertificateDowloadButton">
                <a href={baseURL + certificate?.paths?.show} target="_blank" className="link-certificado" rel="noreferrer">
                  <Image src={certificadoIcon} alt="certificate" id='cart-icon' className="icon-certificado-courses" />
                </a>
              </div>

              <div className="Container_CertificateDowloadButton">
                <ShareCertificateProfile certificate={certificate}/>
              </div>
            </div>)}
        </>
      
    )
  }