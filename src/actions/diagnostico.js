import { types } from "../types/types";


export const diagnosticQuestions = (answers, diagnostic_id, _rel) => {
    return {
        type: types.proyectoRoute,
        payload: {
            answers,
            diagnostic_id,
            _rel
        }

    }
}

export const coursesByArea = (filter_id, _rel) => {
    return {
        type: types.entrenamientoRoute,
        payload:{
            filter_id,
            _rel
        }
    }
}