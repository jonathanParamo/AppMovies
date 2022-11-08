import { useState, useEffect  } from "react"
import YouTube from 'react-youtube'
import axios from 'axios'

const TopRated = () => {
  const [ loading, setLoading ] = useState(false)
  const [ movie, setMovie ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      baseURL: 'https://api.themoviedb.org/3',
      url: '/movie/top_rated',
      params: {
        page: 1,
        api_key: "c3e7bfb4583ea1e77a45fa4392d7e6a4"
      }
    })
      .then(({data}) => {
        setMovie(data.results)
      })
      .catch(_ => {
        setError(true)
      })
  }, [])

  if(loading) <p>Cargando....</p>
  if(error) <p>Algo salio mal</p>
  console.log(movie);
  const hasData = !!movie && movie.length > 0

  return (
    <main className="container_top_rated">
    {hasData && movie.map(({
      id,
      title,
      popularity,
      vote_count,
      poster_path
    }) => (
      <article key={id} className="card_movie">
        <img
          className="card_image"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`${title} poster`}
        />
        <h2 className="title_card">
          {title}
        </h2>
        <p className="card_movie_popularity">
          Popularidad: {popularity}
          /
          Num votos: {vote_count}
        </p>
      </article>
    ))}
    </main>
  )
}

export default TopRated