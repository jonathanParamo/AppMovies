import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import "./styles.css"

const MainMenu = () => {
  const navigate = useNavigate()

  return (
    <ul className="container_main_menu">
      <li className="categories">
        <input
          className="search_menu"
          type="search"
          placeholder="Buscar pelicula"
        />
      </li>
      <li className="categories">
        <Button
          onclick={() => navigate("/dashboard/top_rated")}
          children="Top rated"
        />
      </li>
      <li className="categories">
        <Button
          onclick={() => navigate("/dashboard/upcoming")}
          children="Proximamente"
        />
      </li>
      <li className="categories">
        <Button
          onclick={() => navigate("/dashboard/popular")}
          children="Populares"
        />
      </li>
      <li className="categories">
        <Button
          onclick={() => navigate("/dashboard/ondemand")}
          children="Lo mas buscado"
        />
      </li>
    </ul>
  )
}

export default MainMenu