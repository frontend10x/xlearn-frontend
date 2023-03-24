import { types } from "../types/types";

export const holdState = (event) => {
    return {
        type: types.resize,
        payload: {
            event
        }
    }
}