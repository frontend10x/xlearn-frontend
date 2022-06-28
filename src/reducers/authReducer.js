import { types } from "../types/types";

const initialState = {}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                email: action.payload.email,
                token: action.payload.token,
                name: action.payload.name,
            }
        
        case types.logout:
            return {}
        
        default:
            return state;
    }
}