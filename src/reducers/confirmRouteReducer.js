import { types } from "../types/types";

const initialState = {
}

export const confirmedRouteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ruta:
            return {
                course_route: action.payload.course_route
            }
            
        default:
            return state
    }
}