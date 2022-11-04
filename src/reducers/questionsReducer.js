import { types } from "../types/types";

const initialState = {
}

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.proyectoRoute:
            return {
                answers: action.payload.answers,
                id: action.payload.diagnostic_id,
                _rel:action.payload._rel
            }

        case types.logout: 
            return {}
        default:
            return state;
    }
}