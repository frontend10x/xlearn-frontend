import { types } from "../types/types";


export const diagnosticEvaluation = (answers, question_id, _rel) => {
    return {
        type: types.proyectoRoute,
        payload: {
            answers,
            question_id,
            _rel
        }

    }
}