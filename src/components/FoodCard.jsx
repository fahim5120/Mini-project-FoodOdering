// import React from 'react'


// function FoodCard({food,handleAddToCart}) {
// const {id, name,price, rating,image } = food



//   return (
//     <div>
//       <img src={food.image} alt={food.name} width="100"/>
//         <h3>{food.name}</h3>
//         <p>Price: ₹{food.price}</p>
//         <p>Rating:{food.rating}</p>
//         <button onClick={() => handleAddToCart(food)}>Add to cart</button>
//     </div>
//   )
// }

// export default FoodCard
import React from "react";

function FoodCard({ food, handleAddToCart }) {
  const { name, price, rating, image } = food
  return (
    <div>
      <img src={image} alt={name} width="100" />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
    </div>
  )
}

export default FoodCard
