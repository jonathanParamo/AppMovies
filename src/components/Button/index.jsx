import "./styles.css"

const Button = ({
  onClick,
  children,
  className
}) => {
  return(
    <button
      id="button_option"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button