import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchProduct } from '../services/apiServices';

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');

  const [originalProducts, setOriginalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = originalProducts;

      if (selectedCategories.length > 0) {
        
        filteredProducts = filteredProducts.filter(product =>
          selectedCategories === product.category
        );
        console.log("selected category---",selectedCategories)
        console.log("category---",filteredProducts)
      }

      if (selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
          selectedColors.includes(product.color)
        );
        console.log("colors---",filteredProducts)
      }

      if (selectedSizes.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
          selectedSizes.includes(product.size)
        );
        console.log("sizes---",filteredProducts)
      }

      setProducts(filteredProducts);
    };

    filterProducts();
  }, [selectedCategories, selectedColors, selectedSizes, originalProducts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getSearchProduct(keyword);
        setOriginalProducts(res?.data?.products || []);
        setProducts(res?.data?.products || []);
        setCategories(res?.data?.categories || []);
        setColors(res?.data?.colors || []);
        setSizes(res?.data?.sizes || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (keyword) {
      console.log(`Fetching products for keyword: ${keyword}`);
      fetchData();
    } else {
      navigate('/');
    }
  }, [keyword,navigate]);



  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategories(selectedCategory)
  };

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setSelectedColors((prevSelected) =>
      prevSelected.includes(selectedColor)
        ? prevSelected.filter((color) => color !== selectedColor)
        : [...prevSelected, selectedColor]
    );
  };

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(selectedSize)
        ? prevSelected.filter((size) => size !== selectedSize)
        : [...prevSelected, selectedSize]
    );
  };

  return (

<div className='flex justify-between'>
 
  <div className="px-5 py-3 flex flex-col space-x-4 mb-8 border-r-[2px]">
       
        <select onChange={handleCategoryChange} className="px-4 py-2 border rounded-lg focus:outline-none my-1">
          <option value="">Select Category</option>
          {categories?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
       
        <div className='my-1'>
          <span className="block mb-2 font-bold">Color:</span>
          {colors?.map((color) => (
            <div key={color} className="flex items-center">
              <input type="checkbox" id={color} value={color} onChange={handleColorChange} className="mr-2" />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
        
      
        <div className='my-1'>
          <span className="block mb-2 font-bold">Size:</span>
          {sizes.map((size) => (
            <div key={size} className="flex items-center">
              <input type="checkbox" id={size} value={size} onChange={handleSizeChange} className="mr-2" />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
      </div>




      <div className="max-w-4xl mx-auto my-16 px-8 bg-white shadow-md rounded-lg">

{products?.length > 0 ? (
  products?.map((item) => (
    <div key={item?._id} className="flex flex-wrap border-b-[1px] py-3">
      <div className="w-full md:w-1/2">
        <img src={item?.image} alt={item?.name} className="rounded-lg h-[250px] w-[220px]" />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h3 className="text-3xl font-bold mb-4">{item?.name}</h3>
        <p className="text-xl text-gray-600 mb-4">${item?.price}</p>
        <p className="text-gray-700 mb-4">{item?.description}</p>
        <button className="bg-red-500 hover:bg-red-600 text-sm text-white py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  ))
) : (
  <p>No products found</p>
)}
</div>
</div>

  
  );
};

export default ProductPage;

