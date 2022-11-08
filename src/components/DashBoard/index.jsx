import { Outlet } from "react-router-dom"
import MainMenu from "../../Pages/MainMenu"
import React from "react"
import "./styles.css"

const Dashboard = () => {
  return (
    <div className="container_dashboard">
      <MainMenu />
      <Outlet />
    </div>
  )
}

export default Dashboard