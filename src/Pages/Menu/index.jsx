import { useNavigate } from "react-router-dom"
import Input from "../../components/Input"
import Button from "../../components/Button"
import "./styles.css"

const Menu
 = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <ul className="container_main_menu">
        <li className="categories">
          <Input
            className="search_menu"
            type="search"
            placeholder="Search movie"
            // onChange={}
          />
        </li>
        <li className="categories">
          <Button
            onClick={() => navigate("top_rated")}
            children="Top rated"
          />
        </li>
        <li className="categories">
          <Button
            onClick={() => navigate("upcoming")}
            children="Upcoming"
          />
        </li>
        <li className="categories">
          <Button
            onClick={() => navigate("popular")}
            children="Popular"
          />
        </li>
        <li className="categories">
          <Button
            onClick={() => navigate("on_demand")}
            children="On demand"
          />
        </li>
    </ul>
    </nav>
  )
}

export default Menu
