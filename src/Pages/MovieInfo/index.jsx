import { fetchMovie, getMovies } from "../../Utils/Api"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom";
import Text from "../../components/Text";
import ImgMovie from "../../components/MovieImage";
import YouTube from "react-youtube";
import "./styles.css"


const MoreInfoMovie = () => {
  const [ error, setError ] = useState(false)
  const [ trailer, setTrailer ] = useState([])
  const [playing, setPlaying ] = useState(false)
  const [ movie, setMovie ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchMovie(id)
    .then(({data}) => {
      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0])
        setMovie(data)
      }
    })
    .catch(_ => {
      setError(true)
    })
  }, [ id ])

  const {
      budget,
      original_language,
      overview,
      release_date,
      runtime,
      revenue,
      title,
      poster_path
   } = movie

  return (
    <div>
      {!playing &&
        <main className="contaner_movie_select">
          <div className="card_movie_select">
            <div className="container_image_title_movie">
              <Text
                className="movie_title"
                title={title}
              />
              <ImgMovie
                poster_path={poster_path}
              />
            </div>
            <div className="container_info_movie">
              <Text
                className="text_movie"
                overview={`Overview:  ${overview}`}
              />
              <Text
                className="text_movie"
                language={`Original language: ${original_language}`}
              />
              <Text
                className="text_movie"
                runtime={`Runtime: ${runtime} min`}
              />
              <Text
                className="text_movie"
                buget={`Budget: ${budget} USD`}
              />
              <Text
                className="text_movie"
                buget={`Revenue: ${revenue} USD`}
              />
              <Text
                className="text_movie"
                release_date={`Release date: ${release_date}`}
              />
            </div>
          </div>
        </main>
      }
      {playing ? (
        <>
          <YouTube
            videoId={trailer.key}
            className="reproductor container"
            containerClassName={"youtube-container amru"}
            opts={{
              width: "640",
              height: "420",
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
          <button onClick={() => setPlaying(false)} className="boton">
            Close
          </button>
        </>
      ) : (
        <div className="container">
          <div className="">
            {trailer && (
              <button
                className="boton"
                onClick={() => setPlaying(true)}
                type="button"
              >
                Play Trailer
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MoreInfoMovie
