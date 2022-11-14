import "./styles.css"

const Text = ({
  title,
  buget,
  runtime,
  language,
  overview,
  revenue,
  className,
  release_date
}) => {
  return (
    <p
      className={className}
    >
      {runtime}
      {language}
      {overview}
      {buget}
      {revenue}
      {title}
      {release_date}
    </p>
  )
}

export default Text