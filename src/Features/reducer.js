import { ALL_DATA_ERROR, ALL_DATA_LOADING, ALL_DATA_SUCCESS } from "./actionType";

const init = { loading: false, books: [], error: false };

export const reducer = (state = init, { type, payload }) => {
    switch(type) {
        case ALL_DATA_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            }

        case ALL_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                books: payload,
                error: false,
            }

        case ALL_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return state;
    }
}