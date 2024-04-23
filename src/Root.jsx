import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";



function Root() {


  return (
    <>
     <Navbar/>
     <Outlet></Outlet>
    </>
  )
}

export default Root;
