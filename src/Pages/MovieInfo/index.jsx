import { fetchMovie } from "../../Utils/Api"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom";
import Text from "../../components/Text";
import ImgMovie from "../../components/MovieImage";
import YouTube from "react-youtube";
import Button from "../../components/Button"
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
    <div className="container_movie_select">
      {!playing &&
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
              <div className="container">
                {trailer && (
                  <Button
                    className="boton"
                    onClick={() => setPlaying(true)}
                    children="Play trailer"
                    type="button"
                    Play Trailer
                  />
                )}
              </div>
            </div>
          </div>
        }
        {playing &&
          <div className="card_movie_select_trailer">
            <div className="container_image_title_movie">
              <Text
              className="movie_title"
              title={title}
              />
            </div>
            <div className="container_vid_button">
              <YouTube
                videoId={trailer.key}
                className="reproductor_container"
                containerClassName={"youtube-container"}
                opts={{
                  width: "640",
                  height: "400",
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
              <div className="close_trailer">
                <Button onClick={() =>
                  setPlaying(false)}
                  className="boton"
                  children="Close"
                />
              </div>
            </div>
          </div>
        }
        {error && <p>{error}</p>}
    </div>
  )
}

export default MoreInfoMovie
