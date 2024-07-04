import React from 'react'

// const imgUrl= "https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg"

const Header = () => {
  return (
    <header className="bg-cover bg-center h-60vh flex items-center justify-center text-white text-center my-4 py-6" style={{ backgroundImage: "url('https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg')" }}>
    <div className="bg-black bg-opacity-50 p-8 rounded-lg">
      <h1 className="text-4xl md:text-5xl">Welcome to E-com store</h1>
      <p className="mt-4 text-lg md:text-xl">Your one-stop shop for all medical supplies</p>
      <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
    </div>
  </header>
  )
}

export default Header


// 