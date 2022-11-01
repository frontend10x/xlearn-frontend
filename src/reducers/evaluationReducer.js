import { types } from "../types/types";

const initialState = {
}

export const evaluationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.evaluation:
            return {
                evaluation_id: action.payload.evaluation_id,
                user_id: action.payload.user_id,
                course_id: action.payload.course_id,
                answers: action.payload.answers
            }

        case types.logout:
            return {}
        default:
            return state;
    }
}