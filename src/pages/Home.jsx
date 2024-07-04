import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Category from '../components/Category.jsx';
import Product from '../components/Product.jsx';
import { getAllCategories, getAllProducts } from '../services/apiServices.js';

const Home = () => {

  const [categories ,setCategories] = useState([])
  const [products ,setProducts] = useState([])

    useEffect(()=>{
  const getData = async()=>{
  try{
    const res = await  getAllCategories()
    setCategories(res?.data?.categories)
   
    const res2 = await  getAllProducts()
    setProducts(res2?.data?.products)
    console.log(res,res2)
  }catch(err){
   console.log("Some error in fetching data")
  }
  }
 
  getData()
       
    },[])

  return (
    <div className="home">
     <Header/>

      <section className="py-16 text-center">
        <h2 className="text-3xl mb-8">Shop by Category</h2>
        <div className="flex flex-wrap justify-around mx-5 p-4 rounded bg-gray-100 ">
         {categories?.map((item)=>(
            <Category key={item?._id} name={item?.name } />
         ))}
       
        </div>
      </section>

      <section className="py-4 text-center">
        <h2 className="text-3xl mb-8">Featured Products</h2>
        <div className="flex flex-wrap justify-around mx-5">
        {products?.map((item)=>(
            <Product key={item?._id} name={item?.name } imgUrl={item?.image} price={item?.price}  />
         ))}
     
         
        </div>
      </section>
    </div>
  );
}

export default Home;