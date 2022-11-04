import { types } from "../types/types";

const initialState = {
}

export const confirmedRouteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ruta:
            return {
                course_route: action.payload.course_route
            }

        case types.clearRoute:
            return {
                course_route:{}
            }    
        case types.logout:
            return {}
        default:
            return state;
    }
}