import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FoodList from "./components/FoodList"
import Home from "./components/Home"
import { Provider } from "react-redux"
import { store } from "./store"
import Cart from "./components/Cart"

import "./index.css";
import Review from "./components/Order"
import Order from "./components/Order"
import About from "./components/About"
const router =createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/menu",element:<FoodList/>},
        {path:"/cart",element:<Cart/>},
        {path:"/order",element:<Order/>},
        {path:"/review",element:<Review/>},
         {path:"/about",element:<About/>},

    ]}]
)


const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)

