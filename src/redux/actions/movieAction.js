import { AllMOVIES, Api } from '../types/moviesType'
import axios from 'axios'


export const getAllMovie = () => {
    return async (re)=>{
        const res = await axios.get(Api);
        re({ type: AllMOVIES, data: res.data.results , page:res.data.total_pages})
    }
}
export const SearchMovie = (word) => {
    return async (re)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f9b842bc2cb16debe17693165a90be7a&language=en-US&query=${word}&page=1`);
        re({ type: AllMOVIES, data: res.data.results , page:res.data.total_pages})
    }
}
export const GetPage = (page) => {
    return async (re)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f9b842bc2cb16debe17693165a90be7a&language=ar-US&page=${page}`);
        re({ type: AllMOVIES, data: res.data.results , page:res.data.total_pages})
    }
}


