import { useState, useEffect  } from "react"
import YouTube from 'react-youtube'
import axios from 'axios'
import "./styles.css"
import Movies from "../../components/Movies"

const TopRated = () => {
  const [ loading, setLoading ] = useState(false)
  const [ movies, setMovies ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_MOVIES,
      url: '/movie/top_rated',
      params: {
        page: 1,
        api_key: process.env.REACT_APP_MOVIES_MY_KEY,
      }
    })
      .then(({data}) => {
        setMovies(data.results)
      })
      .catch(_ => {
        setError(true)
      })
  }, [])

  if(loading) <p>Cargando....</p>
  if(error) <p>Algo salio mal</p>

  return (
    <main className="container_top_rated">
      <Movies movies={movies} />
    </main>
  )
}

export default TopRated