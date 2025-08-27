import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../features/cartSlice'

function Cart() {
  const cart =useSelector((state)=>state.cart.items)
  const dispatch=useDispatch()
  const remove=(id)=>{
    dispatch(removeItem(id))
  }
  return (
    <div>
      <h2>My cart</h2>
      {cart.length===0 ?(
        <p>Empty cart</p>
      ):(
        <ul>
          {cart.map((item)=>(
            <li key={item.id}>
              {item.name} -{item.price}
              <button onClick={()=>remove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart