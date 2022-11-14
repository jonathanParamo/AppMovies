import "./styles.css"

const ImgMovie = ({
  poster_path,
}) => {
  console.log(poster_path);
  return (
    <>
      <img
        className="background_movie"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
    </>
  )
}

export default ImgMovie