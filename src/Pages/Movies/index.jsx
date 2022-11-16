import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import "./styles.css"
import Movie from "../../components/Movie"
import PaginationMovies from "../../components/PaginationMovies"
import { getMovies, searchMovie } from "../../Utils/Api"

const Movies = () => {
  const { name } = useParams()
  const [ loading, setLoading ] = useState(false)
  const [ movies, setMovies ] = useState([])
  const [ pages, setPages ] = useState(1)
  const [ page, setPage ] = useState(1)
  const [ error, setError ] = useState(null)
  const arr = ["top_rated", "upcoming", "popular", "now_playing"]

  useEffect(() => {
    setLoading(true)
    if(arr.includes(name)) {
      getMovies(name, page)
      .then(({data}) => {
        setMovies(data.results)
        setPages(data.total_pages)
      })
      .catch(_ => {
        setError(true)
      })
    } else {
      searchMovie(name, page)
      .then(({data}) => {
        setMovies(data.results)
        setPages(data.total_pages)
      })
      .catch(_ => {
        setError(true)
      })
    }
  }, [ name, page ])

  if(loading) <p>Cargando....</p>
  if(error) <p>Algo salio mal</p>

  const hasData = !!movies && movies.length > 0
  const handleChange = ( event, value) => {
  console.log(value, "aa1a")
    setPage(value);
  };

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
          id={id}
          title={title}
          popularity={popularity}
          vote_count={vote_count}
          poster_path={poster_path}
          overview={overview}
        />
      ))}
      <PaginationMovies
        handleChange={handleChange}
        page={page}
        pages={pages}
        color="primary"
      />
    </main>
  )
}

export default Movies