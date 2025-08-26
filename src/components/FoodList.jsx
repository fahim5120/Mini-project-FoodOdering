import React, { useState } from 'react'
import foods from '../data/Food'
import FoodCard from './FoodCard'


function FoodList() {
  const[cart,setCart]=useState([])

  const addToCart=(item)=>{
    setCart(previous=>[...previous,item])
      console.log("Cart:",[...cart,item])
      }

  return (
    <>
    <div>
        <h2>Food Menu</h2>
        {foods.map(
          (food)=>(
            <FoodCard
             key={food.id}
             name={food.name}
             price={food.price}
             rating={food.rating}
             image={food.image}
             addToCart={addToCart}
            />
          )
        )}

    </div>
    <h2>Cart Item: {cart.length}</h2>
    </>
  )
}

export default FoodList