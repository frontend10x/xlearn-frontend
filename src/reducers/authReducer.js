import { types } from "../types/types";

const initialState = {}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                email: action.payload.email,
                token: action.payload.token,
                name: action.payload.name,
                roles: action.payload.roles,
                id: action.payload.id,
                subcompanie_id: action.payload.subcompanie_id,
                groups: action.payload.groups,
                type: action.payload.type,
                diagnostic: action.payload.diagnostic,
                phone: action.payload.phone
            }

        case types.logout:
            return {}
            
        case types.register:
            return {
                name: action.payload.name
            }

        default:
            return state;
    }
}