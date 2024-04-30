import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footersection"

function MainLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout
