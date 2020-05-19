import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } from './actions';
import axios from 'axios';

export const fetchMovies = () => {
    console.log('in dispatcher')
    return dispatch => {
        dispatch(fetchMoviesStart())

    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f0e9df924f1433497841b38265f2e5d3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(res => {
        dispatch(fetchMoviesSuccess(res.data))
    })
    .catch(err => {
        dispatch(fetchMoviesError(err))
    })
    }
}