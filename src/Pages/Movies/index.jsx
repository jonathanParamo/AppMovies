import { useState, useEffect  } from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import Movie from "../../components/Movie"
import { getMovies } from "../../Utils/Api"

const Movies = ({ gender }) => {
  const [ loading, setLoading ] = useState(false)
  const [ movies, setMovies ] = useState([])
  // const [ pages, setPages ] = useState(0)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    getMovies(gender)
      .then(({data}) => {
        setMovies(data.results)
        // setPages(data.total_pages)
      })
      .catch(_ => {
        setError(true)
      })
  }, [gender])

  if(loading) <p>Cargando....</p>
  if(error) <p>Algo salio mal</p>

  const hasData = !!movies && movies.length > 0

  return (
    <main className="container_movies">
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
      {/* {Array.from({ length: pages }, (_, index) => (
        <Link to={`/popular?page=${index + 1}`}>{index + 1}</Link>
      ))} */}
    </main>
  )
}

export default Movies