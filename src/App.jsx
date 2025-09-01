
import React, { useState } from "react"

import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useSelector } from "react-redux"

function App() {
const cart=useSelector((state)=>state.cart.items)
const [searchTerm,setSearchTerm]=useState("")
const [filter,setFilter]=useState("")

const handleSearch=(value)=>{
 setSearchTerm(value)
}
const handlefilter=(value)=>{
setFilter(value)
}
 

  return (
    <>
      <div>
       
        <Navbar onSearch={setSearchTerm}
                onFilter={setFilter}
                cartCount={cart.length}/>
        <div>
        <Outlet context={{searchTerm,filter}}/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
