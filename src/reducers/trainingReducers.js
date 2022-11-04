import { types } from "../types/types";

const initialState = {
}

export const trainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.entrenamientoRoute:
            return {
                filter_id: action.payload.filter_id,
                _rel: action.payload._rel
            }

        case types.logout: 
            return {}
        default:
            return state;
    }
}