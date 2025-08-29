import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../features/cartSlice'

function Cart() {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const remove = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">My Cart</h2>


        {cart.length === 0 ? (
        <p className="text-gray-500 text-center italic">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
            >
            
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />

             
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="font-bold text-gray-800">₹{item.price}</p>
              </div>

            
              <button
                onClick={() => remove(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
