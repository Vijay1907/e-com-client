import axios from 'axios';

const BASE_URL = 'https://e-com-server-9top.onrender.com/api/v1'; 
// const BASE_URL = 'http://localhost:5000/api/v1'; 


export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};


export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export const getSearchProduct = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/search?name=${query}`);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
