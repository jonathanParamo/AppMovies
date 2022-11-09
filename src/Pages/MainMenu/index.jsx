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
          placeholder="Search movie"
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
          children="Upcoming"
        />
      </li>
      <li className="categories">
        <Button
          onclick={() => navigate("/dashboard/popular")}
          children="Popular"
        />
      </li>
      <li className="categories">
        <Button
          onclick={() => navigate("/dashboard/ondemand")}
          children="On demand"
        />
      </li>
    </ul>
  )
}

export default MainMenu