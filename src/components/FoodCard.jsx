import React from 'react'

function FoodCard({name,price,rating,addToCart,image}) {
  return (
    <div>
      <img src={image} alt={name} width="100"/>
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        <p>Rating:{rating}</p>
        <button onClick={()=>addToCart({name,price})}>Add to cart</button>
    </div>
  )
}

export default FoodCard