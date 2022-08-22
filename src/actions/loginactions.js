import { types } from "../types/types";

export const login = (email,password,token,name,roles, id) => {
    return {
        type: types.login,
        payload: {
            email,
            password,
            token,
            name,
            roles,
            id,
        }
    }
}

export const logout = () => ({
    type : types.logout,
})

export const register = ( name, lastname, company, email, website, size, country, content, plan_id, quotas, password, observation ) => ({
    type: types.register,
    payload: {
        name, lastname, company, email, website, size, country, content, plan_id, quotas, password, observation
    }
})
