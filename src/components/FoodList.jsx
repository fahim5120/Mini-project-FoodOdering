// import React, { useState } from 'react'
// import foods from '../data/Food'
// import FoodCard from './FoodCard'
// import { useDispatch, useSelector } from 'react-redux'
// import { addItem } from '../features/cartSlice'

// function FoodList() {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.items);


//   const handleAddToCart=(food)=>{
//     dispatch(addItem(food))
//   }
   

   

//   return (
//     <>
//     <div>
//         <h2>Food Menu</h2>
//         {foods.map(
//           (food)=>(
//             <FoodCard
//              key={food.id}
//             food={food}
//             handleAddToCart={handleAddToCart}//redux storil add cheyyum
//             />
//           )
//         )}

//     </div>
//     <h2>Cart Item: {cart.length}</h2>
//     </>
//   )
// }


// export default FoodList
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../features/cartSlice";
import { fetchFoods } from "../Api/FoodAPI";
import FoodCard from "./FoodCard"



function FoodList() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)

  const [foods, setFoods] = useState([])

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

  return (
    <>
      <div>
        <h2>Food Menu</h2>
        {foods.length > 0 ? (
          foods.map((food) => (
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
      <h2>Cart Item: {cart.length}</h2>
    </>
  )
}

export default FoodList
