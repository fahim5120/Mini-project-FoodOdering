
import React from "react";
import FoodList from "./components/FoodList";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
 

  return (
    <>
      <div>
        <Header/>
        <Outlet/>
        <FoodList/>
      </div>
    </>
  )
}

export default App
