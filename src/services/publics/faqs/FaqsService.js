import axios from "axios"
import { baseURL } from "../../../utils/route"

export const faqs = () => {
    const response = axios.get(baseURL + '/api/v1/questions/list_faqs');
    return response
}