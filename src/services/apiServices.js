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


export const addToCart = async (product) => {
  try {
    const response = await axios.post(`${BASE_URL}/cart/add`, product);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const removeFromCart = async (userId,productId) => {
  try {
    const response = await axios.post(`${BASE_URL}/cart/remove`, {userId,productId});
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const checkout = async (obj) => {
  try {
    const response = await axios.post(`${BASE_URL}/cart/checkout`, obj);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getCartItems = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/cart/getCartItems/${userId}`);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};




