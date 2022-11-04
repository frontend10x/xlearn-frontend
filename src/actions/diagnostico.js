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

export const diagnosticTraining = (answers,diagnostic_id, _relA) => {
    return {
        type: types.entrenamientoRoute,
        payload: {
            answers,
            diagnostic_id,
            _relA
        }
    }
}

export const coursesByArea = (filter_id, _rel) => {
    return {
        type: types.entrenamientoRoute,
        payload:{
            filter_id,
            _rel,
        }
    }
}

export const cleanQuestions = () => {
    return {
        type: types.proyectoRoute,
        payload:{}
    }
}

export const cleanRoute = () => {
    return {
        type: types.ruta,
        payload: {}
    }
}

export const cleanTraining = () => {
    return {
        type: types.entrenamientoRoute,
        payload: {}
    }
}