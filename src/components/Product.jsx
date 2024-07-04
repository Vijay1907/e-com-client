import React from 'react'
import {addToCart} from "..//services/apiServices"
import { userId } from '../constants/constant'
import {  toast } from "react-toastify";

const Product = ({ name="Product", imgUrl="", price="1.00",_id=""}) => {

const addItemToCart = async()=>{
   try{
    const res = await addToCart({userId,productId:_id,quantity:1})
    toast.success("Item added to cart successfully..", {
      position: "bottom-center"
    });
  
  }catch(err){
   console.log("Some error in fetching data")
   toast.error("Some error in adding data to cart", {
    position:"bottom-center"
    });
  }
}

  return (
    <div className="bg-gray-100 rounded-lg p-6 m-4 flex-1 min-w-200 max-w-300 text-center ">
    <img src={imgUrl} alt={name} className="rounded-lg mb-4 h-[200px] w-[200px]" />
    <h3 className="text-xl mb-2 text-gray-800">{name}</h3>
    <p className="text-lg mb-4 text-gray-600">${price}</p>
    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 text-sm rounded-lg" onClick={addItemToCart}>Add to Cart</button>
  </div>
  )
}

export default Product
