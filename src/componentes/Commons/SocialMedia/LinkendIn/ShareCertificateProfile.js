import { Image } from "react-bootstrap";
import { mapCertificateShareUrlLinkendIn } from "./utils/mapper.utils";

export const ShareCertificateProfile = ({certificate}) => {

    const url = mapCertificateShareUrlLinkendIn(certificate);

    return(
        <>
          {certificate?.status && (<a href={url} target="_blank" className="link-certificado" rel="noreferrer">
            <Image src="https://download.linkedin.com/desktop/add2profile/buttons/en_US.png " alt="LinkedIn Add to Profile button" />
          </a>)}
        </>
      
    )
}