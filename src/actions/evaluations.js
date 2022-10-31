import { types } from "../types/types";


export const evaluationAnswers = (evaluation_id, user_id, course_id, answers) => {
    return {
        type: types.evaluation,
        payload: {
            evaluation_id,
            user_id,
            course_id,
            answers
        }
    }
}
