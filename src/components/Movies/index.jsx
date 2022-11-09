import Movie from "../Movie"

const Movies = ({ movies }) => {

  const hasData = !!movies && movies.length > 0
  return (
    <main className="container_top_rated">
      {hasData && movies.map(({
        id,
        title,
        popularity,
        vote_count,
        poster_path,
        overview
      }) => (
        <Movie
          key={id}
          title={title}
          popularity={popularity}
          vote_count={vote_count}
          poster_path={poster_path}
          overview={overview}
        />
      ))}
    </main>
  )
}

export default Movies