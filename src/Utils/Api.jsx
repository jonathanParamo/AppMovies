import axios from "axios";

export const getMovies = (gender, page) => {
  return axios({
    method: 'GET',
    baseURL: process.env.REACT_APP_MOVIES,
    url: `/movie/${gender}`,
    params: {
      page: page || 1,
      api_key: process.env.REACT_APP_MOVIES_MY_KEY,
    }
  })
}

export const searchMovie = (search) => {
  return axios({
    method: "GET",
    baseURL: process.env.REACT_APP_MOVIES,
    url: `/search/movie`,
    params: {
      api_key: process.env.REACT_APP_MOVIES_MY_KEY,
      query: search,
    },
  })
}

export const fetchMovie = async (id) => {
  return axios({
    method: "GET",
    baseURL: process.env.REACT_APP_MOVIES,
    url: `/movie/${id}`,
    params: {
      api_key: process.env.REACT_APP_MOVIES_MY_KEY,
      append_to_response: "videos",
    },
  })
}