import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../constants/constants';

export const fetchMoviesStart = () => {
    return {
        type: FETCH_MOVIES_START
    }
}

export const fetchMoviesSuccess = (data) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: data
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}