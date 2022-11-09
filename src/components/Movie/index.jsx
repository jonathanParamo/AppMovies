import "./styles.css"

const Movie = ({
  poster_path,
  title,
  popularity,
  vote_count,
  overview
}) => {
  return (
    <article className="card_movie">
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