import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"

function Navbar({ onSearch, onFilter,cartCount }) {

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img
                                src="/images/logo1.jpg"
                                alt="logo"
                                width="60"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Menu Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-white hover:text-yellow-300 font-medium transition">
                            Home
                        </Link>
                        <Link to="/menu" className="text-white hover:text-yellow-300 font-medium transition">
                            Menu
                        </Link>
                        <Link to="/cart" className="relative text-white hover:text-yellow-300 font-medium transition flex items-center">
                            <FiShoppingCart className="mr-2 text-xl" />
                            Cart{cartCount>0 &&(<span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>)}
                        </Link>
                        <Link to="/review" className="text-white hover:text-yellow-300 font-medium transition">
                            Review
                        </Link>
                        <Link to="/order" className="text-white hover:text-yellow-300 font-medium transition">
                            Order
                        </Link>
                         <Link to="/about" className="text-white hover:text-yellow-300 font-medium transition">
                           About
                        </Link>
                    </div>

                    {/* search */}
                    
                        <input type="text"
                            placeholder="search..."

                            onChange={(e) => onSearch(e.target.value)}
                            className="w-64 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               bg-gray-50 text-gray-700 placeholder-gray-400 shadow-sm"
                        />
                       


<select onChange={(e)=>onFilter(e.target.value)}>
  <option value="">All</option>
  <option value="Fast Food">Fast Food</option>
  <option value="Chinese">Chinese</option>
  <option value="Chinese Snack">Chinese Snack</option>
  <option value="Indian">Indian</option>
  <option value="Indian Snack">Indian Snack</option>
  <option value="Dessert">Dessert</option>
  <option value="Beverage">Beverage</option>
</select>







                    
<div className="flex md:hidden relative">
            <Link to="/cart" className="text-white hover:text-yellow-300 transition">
                <FiShoppingCart className="text-2xl" />
                {cartCount >0 && <span>{cartCount}</span>}
                </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar

