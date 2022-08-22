import { types } from "../types/types";

const initialState = {
}

export const diagnosticReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.proyectoRoute:
            return {
                answers: action.payload.answers,
                id: action.payload.diagnostic_id
            }

        case types.entrenamientoRoute:
            return {
                filter_id: action.payload.filter_id
            }

        default:
            return state;
    }
}