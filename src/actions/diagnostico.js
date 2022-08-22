import { types } from "../types/types";


export const diagnosticQuestions = (answers, diagnostic_id) => {
    return {
        type: types.proyectoRoute,
        payload: {
            answers,
            diagnostic_id
        }

    }
}

export const coursesByArea = (filter_id) => {
    return {
        type: types.entrenamientoRoute,
        payload:{
            filter_id
        }
    }
}