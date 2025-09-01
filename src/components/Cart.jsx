import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementQty, decrementQty } from "../features/cartSlice";

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // const totalPrice = items.reduce((total, item) => {
  //   return total + (item.price * item.quantity);
  // }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div 
              key={item.id} 
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => dispatch(decrementQty(item.id))} 
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-6 text-center">{item.quantity || 1}</span>
                <button 
                  onClick={() => dispatch(incrementQty(item.id))} 
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button 
                  onClick={() => dispatch(removeItem(item.id))} 
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Cart;
