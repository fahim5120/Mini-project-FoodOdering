
import React from "react";

import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
      <div>
        <Header/>
        <Navbar/>
        <div>
        <Outlet/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
