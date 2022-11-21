import "./styles.css"

const ImgMovie = ({
  poster_path,
}) => {
  console.log(poster_path);
  return (
    <div className="container_image_movie_component">
      <img
        className="background_movie"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
    </div>
  )
}

export default ImgMovie