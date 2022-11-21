import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../../components/Button"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import SearchIcon from '@mui/icons-material/Search'
import Input from "../../components/Input"
import "./styles.css"


const Menu = () => {
  const navigate = useNavigate()
  const [ search, setSearch ] = useState("")

  const redirect2 = (search) =>{
    navigate(`category/${search}`)
  }

  return (
    <nav className="container_principal">
      <div className="title_app">
        <h1>Info Movies </h1>
        <LocalMoviesIcon sx={{ transform : "rotate(150deg)"}} />
      </div>
      <ul className="container_main_menu">
        <li className="search_menu">
          <Input
            className="search_movie"
            placeholder={"Search movie"}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon
            className="icon_search"
            onClick={() => {
              redirect2(search)
            }}
          />
        </li>
        <div className="options_menu">
          <li className="categories">
            <Button
              className="button_"
              onClick={(e) => {
                navigate("category/top_rated")
                e.stopPropagation()
              }}
              children="Top rated"
            />
          </li>
          <li className="categories">
            <Button
              className="button_"
              onClick={(e) => {
                navigate("category/upcoming")
                e.stopPropagation()
              }}
              children="Upcoming"
            />
          </li>
          <li className="categories">
            <Button
              className="button_"
              onClick={(e) => {
                navigate("category/popular")
                e.stopPropagation()
              }}
              children="Popular"
            />
          </li>
          <li className="categories">
            <Button
              className="button_"
              onClick={(e) => {
                navigate("category/now_playing")
                e.stopPropagation()
              }}
              children="Ondemand"
            />
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Menu