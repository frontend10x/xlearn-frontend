import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { generateCertificate } from "../../../services/services";
import { certificadoIcon } from "../../../assets/img";
import { baseURL } from "../../../utils/route";

export const CertificateDownloadButton = ({courseId}) => {
    const [show, setShow] = useState(false);
    const { token, id } = useSelector(state => state.auth)

    const consultCertificate = async () => {
      try {
        const response = await generateCertificate(token, id, courseId);
        setShow(response)
      } catch (error){}
    }

    useEffect(()=>{
      consultCertificate()
    },[])
  
    return(
        <>
          {show?.status && (<a href={baseURL + show?.paths?.show} target="_blank" style={{ backgroundColor: "#D4AF37", padding: "3px", borderRadius: "3px", height: "fit-content"}}>
            <Image src={certificadoIcon} alt="certificate" id='cart-icon' />
          </a>)}
        </>
      
    )
  }