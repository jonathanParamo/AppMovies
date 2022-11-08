import "./styles.css"

const Button = ({
  onClick,
  children,
}) => {
  return(
    <button
      className="button_"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button