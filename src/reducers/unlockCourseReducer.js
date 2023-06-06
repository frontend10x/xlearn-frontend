import { types } from "../types/types";

const initialState = {}

export const unlockCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.unlock:
            return {
                validation: action.payload.validation
            }

        default:
            return state;
    }
}