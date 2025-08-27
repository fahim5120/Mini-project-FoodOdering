import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FoodList from "./components/FoodList"
import Home from "./components/Home"
const router =createBrowserRouter({
    path:"/",
    element:<App/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/menu",element:<FoodList/>},
        {path:"/cart",element:<Cart/>},
        {path:"/about",element:<About/>},

    ]
})


const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router}/>
)

