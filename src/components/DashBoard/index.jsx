import { Outlet } from "react-router-dom"
import Menu from "../../Pages/Menu"
import React from "react"
import "./styles.css"

const Dashboard = () => {
  return (
    <div className="container_dashboard">
      <Menu />
      <Outlet />
    </div>
  )
}

export default Dashboard