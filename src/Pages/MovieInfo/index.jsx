import { fetchMovie } from "../../Utils/Api"
import { useState, useEffect  } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";


const MoreInfoMovie = () => {
  const [ error, setError ] = useState(false)
  const [ trailer, setTrailer ] = useState([])
  const [ movie, setMovie ] = useState([])
  const { id } = useParams()



  useEffect(() => {
    fetchMovie(id)
    .then(({data}) => {
      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
        //return data
        setMovie(data);
      }
    })
    .catch(_ => {
      setError(true)
    })

   }, [ id ])

  // const hasData = !!movieInfo && movieInfo.length > 0

  return (
    <div>
        <main>
        </main>
      </div>
  )
}

export default MoreInfoMovie
