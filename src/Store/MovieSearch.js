const MOVIE_SEARCH = "MOVIE_SEARCH"
const MOVIE_ID = "MOVIE_ID"

const initialState = {
  movieSearch: "",
  movieId: []
}

export function MovieReducer(state = initialState, action){
  switch(action.type) {
    case MOVIE_SEARCH:
      return {
        ...state,
        movieSearch: action.payload,
      }
    case MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
      }
    default:
      return state
  }
}