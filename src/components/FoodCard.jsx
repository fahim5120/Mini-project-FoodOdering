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
import { FaStar } from "react-icons/fa"

function FoodCard({ food, handleAddToCart }) {
  const { name, price, rating, image } = food
  return (
     <div className="bg-white shadow-lg rounded-2xl p-4 w-72 md:w-80 lg:w-72 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
  {/* Image */}
  <div className="w-full h-44 overflow-hidden rounded-xl">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
    />
  </div>

  {/* Content */}
  <div className="mt-4 flex flex-col">
    <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
    <p className="text-gray-600 mt-1">Price: <span className="font-bold">₹{price}</span></p>
     <p className="flex items-center text-yellow-500 mt-1">
  <FaStar className="mr-1" /> {rating}
</p>

    {/* Button */}
    <button
      onClick={() => handleAddToCart(food)}
      className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
    >
      Add to Cart
    </button>
  </div>
</div>

  )
}

export default FoodCard
