import { Image } from "react-bootstrap";
import { mapCertificateShareUrlLinkendIn } from "./utils/mapper.utils";

import {
  iconLinkedinDashboard
} from "../../../../assets/img";


export const ShareCertificateProfile = ({certificate}) => {

    const url = mapCertificateShareUrlLinkendIn(certificate);

    return(
      
        <>
          {certificate?.status && (<a href={url} target="_blank" className="link-certificado" rel="noreferrer">
            <Image src={iconLinkedinDashboard} alt="LinkedIn Add to Profile button" />
          </a>)}
        </>
      
    )
}