import { types } from "../types/types";

const initialState = {}

export const sizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.resize:
            return {
                event: action.payload.event
            }
            
    
        default:
        return state;
    }
}