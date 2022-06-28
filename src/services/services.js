import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../utils/route";

export const loginPost = async (email, password) => {

        const response = await axios.post(baseURL + '/api/v1/login' , {
            email,
            password
        })   
        
        return response.data;
}

export const registerPost = async (name,lastname, company, email, website, size, country, content, plan_id, quotas, observation, password) => {
    const response = await axios.post( baseURL + '/api/v1/register_requests/store', {
       name,lastname,company, email, website, size, country, content, plan_id, quotas, observation, password
    })

    return response.data;
}

export const getCountrys = async () => {
    const response = await axios.get(baseURL + '/api/v1/countries/list')
    return response.data.countries
}

export const getPlans = async () => {
    const response = await axios.get( baseURL + '/api/v1/plan/list')
    return response.data.plans;
}

export const getContent = async () => {
    const response = await axios.get(baseURL + '/api/v1/content/list')
    return response.data.contents;
}

export const getSize = async () => {
    const response = await axios.get(baseURL + '/api/v1/size/list')
    return response.data.sizes;
}