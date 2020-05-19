import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../constants/constants';

const initialState = {
    data: [],
    fetchMovieStart: false,
    err: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_START:
            return {
                ...state,
                fetchMovieStart: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                data: action.payload.results,
                fetchMovieStart: false
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                err: action.payload
            }
        default:
            return state
    }
}