import "./styles.css"

const Input = ({
  placeholder,
  type,
  onChange,
  className
}) => {
  return (
    <form>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </form>
  )
}

export default Input