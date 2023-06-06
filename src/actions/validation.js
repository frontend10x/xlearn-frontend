import { types } from "../types/types";

export const validateSubscription = (validation) => {
    return {
            type: types.unlock,
            payload: {
                validation
            }
    }
}