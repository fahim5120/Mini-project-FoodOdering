
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../features/cartSlice";
import { fetchFoods } from "../Api/FoodAPI";
import FoodCard from "./FoodCard"
import { useOutlet, useOutletContext } from "react-router-dom";



function FoodList() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)
 const [foods, setFoods] = useState([])
const {searchTerm,filter}= useOutletContext()  //get from app.jsx

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFoods()
      setFoods(data)
    }
   getData()
  }, [])

  const handleAddToCart = (food) => {
    dispatch(addItem(food))
  }
  //filter foods based On searchTerm anf FilTer category
  const filterdFood=foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .filter(food=>filter ===""? true :food.category===filter)

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-6">Food Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterdFood.length > 0 ? (
          filterdFood.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              handleAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>Loading food menu</p>
        )}
        </div>
      </div>
      <h2>Cart Item: {cart.length}</h2>
    </>
  )
}

export default FoodList
