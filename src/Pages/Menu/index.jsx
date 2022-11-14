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
        </li>
        <li className="categories">
          <Button
            onClick={(e) => {
              navigate("category/top_rated")
              e.stopPropagation()
            }}
            children="Top rated"
          />
        </li>
        <li className="categories">
          <Button
            onClick={(e) => {
              navigate("category/upcoming")
              e.stopPropagation()
            }}
            children="Upcoming"
          />
        </li>
        <li className="categories">
          <Button
            onClick={(e) => {
              navigate("category/popular")
              e.stopPropagation()
            }}
            children="Popular"
          />
        </li>
        <li className="categories">
          <Button
            onClick={(e) => {
              navigate("category/now_playing")
              e.stopPropagation()
            }}
            children="On demand"
          />
        </li>
        <li className="categories">
          <Button
            onClick={(e) => {
              navigate("movie")
              e.stopPropagation()
            }}
            children="movie"
          />
        </li>
    </ul>
    </nav>
  )
}

export default Menu