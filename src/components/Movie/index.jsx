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

  const redirect = (id) =>{
    navigate(`movie/${id}`)
  }
  return (
    <article
      className="card_movie"
      onClick={(e) => {
        redirect(id)
        e.stopPropagation()
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