import { baseURL } from "../../../../../utils/route";

export const mapCertificateShareUrlLinkendIn = (certificate) => {

    const { 
        paths: { show }, 
        code, 
        date, 
        course, 
        share: { linkedIn : { companieId, urlBase }}
    } = certificate;

    const formattedDate = new Date(date);
    const year = formattedDate?.getFullYear();
    const month = formattedDate?.getMonth();
    const startTask = "CERTIFICATION_NAME";

    const urlCertificate = baseURL + show;

    return `${urlBase}?startTask=${startTask}&name=${course}&organizationId=${companieId}&issueYear=${year}&issueMonth=${month}&expirationYear=${year}&expirationMonth=${month}&certUrl=${urlCertificate}&certId=${code}`

}
