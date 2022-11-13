
import { useNavigate } from "react-router-dom"
import "./styles.css"

const Movie = ({
  id,
  poster_path,
  title,
  popularity,
  vote_count,
  overview
}) => {
  const navigate = useNavigate()
  return (
    <article
      className="card_movie"
      onClick={() => {
        // dispatch({ type: "MOVIE_ID", payload: id})
        navigate(`movie/${id}`)
      }}
    >
      <img
        className="card_image"
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={`${title} poster`}
      />
      <p className="title_card">
        {title}
      </p>
      <p className="card_movie_text">
        Popularidad: {popularity}. Num votos: {vote_count}
      </p>
      <p className="card_movie_overview">
        {overview}
      </p>
    </article>
  )
}

export default Movie