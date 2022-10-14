import { types } from "../types/types";

export const confirmedRoute = (course_route) => {
    return {
        type: types.ruta,
        payload: {course_route}
    }
}