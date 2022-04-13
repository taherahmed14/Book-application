import { ALL_DATA_ERROR, ALL_DATA_LOADING, ALL_DATA_SUCCESS } from "./actionType";


export const allDataLoading = () => ({
    type: ALL_DATA_LOADING
});

export const allDataSuccess = (data) => ({
    type: ALL_DATA_SUCCESS,
    payload: data
});

export const allDataError = () => ({
    type: ALL_DATA_ERROR
});