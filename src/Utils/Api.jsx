import axios from "axios";

export const getMovies = (gender) => {
  return axios({
    method: 'GET',
    baseURL: process.env.REACT_APP_MOVIES,
    url: `/movie/${gender}`,
    params: {
      page: 1,
      api_key: process.env.REACT_APP_MOVIES_MY_KEY,
    }
  })
}