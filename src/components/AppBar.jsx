import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?keyword=${searchTerm}`);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        E-Com Store
      </div>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-[350px]">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
          placeholder="Search products..."
          className="py-1 px-2 w-full focus:outline-none"
        />
      </div>
      <div className="flex space-x-4 items-center">
        <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
        <a href="#categories" className="text-gray-600 hover:text-gray-800">Categories</a>
        <a href="#products" className="text-gray-600 hover:text-gray-800">Products</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        <div className="text-gray-600 hover:text-gray-800 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l1.4-7H6.6l-.2-1H3m3 7v1a4 4 0 104 4h6a4 4 0 104-4v-1H6z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
