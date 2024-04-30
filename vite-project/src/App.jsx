import { RouterProvider } from "react-router-dom";
import './App.css'
import { Router } from "./routers/ROUTER";

function App() {

  return (
    <>
    <RouterProvider router={Router} />
    </>
  )
}

export default App
