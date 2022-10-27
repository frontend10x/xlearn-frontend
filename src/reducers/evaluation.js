import { types } from "../types/types";

const initialState = {
}

export const diagnosticReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.evaluation:
            return {
                answers: action.payload.answers.id,
                question: action.payload.evaluation.id,
                _rel:action.payload._rel
            }

        case types.logout: 
            return {}
        default:
            return state;
    }
}