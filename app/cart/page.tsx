'use client'
import styles from './cart.module.css'
// import Link from 'next/link'
// import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};
const page = () => {

// Sample product data
const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      name: "Ur atom consequat",
      color: "Brown",
      size: "XL",
      price: 53.0,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 53.0,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
  ]);

  // Calculate subtotal and total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + 10; // Add fixed shipping cost or taxes

  // Handle quantity change
  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };



  return (
    <div>
    <Navbar/>
    <div className={styles.abcd}>
      <div className={styles.efgh}>
          <h1 className='text-4xl font-semibold'>Blog</h1>
          <p className='font-semibold'>Home . page <span className='text-rose-600 font-bold'>. blog</span></p>
      </div>
      </div>
      <div className={styles.main_container}>
      <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left font-bold">Product</th>
                <th className="p-4 text-left font-bold">Price</th>
                <th className="p-4 text-left font-bold">Quantity</th>
                <th className="p-4 text-left font-bold">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Color: {item.color}, Size: {item.size}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="p-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
              onClick={() => alert("Cart updated!")}
            >
              Update Cart
            </button>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="space-y-8">
          {/* Cart Totals */}
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotals:</p>
              <p className="font-bold">£{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Totals:</p>
              <p className="font-bold">£{total.toFixed(2)}</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Proceed To Checkout
            </button>
          </div>

          {/* Calculate Shipping */}
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-4">Calculate Shipping</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
              >
                Calculate Shipping
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    <Footer/>
  </div>
  )
}

export default page
