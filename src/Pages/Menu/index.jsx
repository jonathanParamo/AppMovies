// import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import "./styles.css"


const Menu = () => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const [ search, setSearch ] = useState("")

  // const searchMovie = () => {
  //   const data = !!search && search.split("") > 0
  //   if(data) {
  //     dispatch({type: "SEARCH_MOVIE", payload: search})
  //     navigate("search")
  //   }
  // }

  return (
    <nav>
      <ul className="container_main_menu">
        <li>
          <Input
            className="search_movie"
            placeholder={"Search movie"}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <Button
            onClick={dispatch({type: "SEARCH_MOVIE", payload: search})}
          /> */}
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
        <li className="categories">
          <Button
            onClick={() => navigate("movie")}
            children="movie"
          />
        </li>
    </ul>
    </nav>
  )
}

export default Menu