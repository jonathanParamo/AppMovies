import "./styles.css"

const Input = ({
  placeholder,
  type,
  onChange,
  className,
  label
}) => {
  return (
    <form>
      <input
        id="search"
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      {label}
    </form>
  )
}

export default Input