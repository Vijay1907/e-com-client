import React, { useEffect, useState } from 'react';
import { checkout, getCartItems, removeFromCart } from '../services/apiServices';
import { userId } from '../constants/constant';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate()
  const [ cartItems, setCartItems ] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + item?.product?.price * item?.quantity, 0);


  const handleRemoveFromCart = async(productId) => {
    try {
       await removeFromCart(userId,productId);
       setCartUpdated(!cartUpdated);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCheckout = async () => {
    const products = cartItems.map(item => ({
      product: item.product._id,
      quantity: item.quantity,
    }));
    const totalAmount = totalPrice;

    try {
      const response = await checkout({ userId, products, totalAmount });
      if (response?.data?.success) {
        toast.success("Checked out successfully..", {
          position: "bottom-center"
        });
        setCartItems([]);
        navigate("/")
      } else {
        toast.error("Checkout failed.", {
          position:"bottom-center"
          });
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error("Some error in checkout", {
        position:"bottom-center"
        });
    }
  };

  useEffect(() => {
    const getCart = async () => {
      try {
        let res = await getCartItems(userId);
        setCartItems(res?.data?.cartItems)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCart();
  }, [cartUpdated]);


  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems?.map((item) => (
            <div key={item?.product?._id} className="flex items-center border-b border-gray-200 py-4">
              <div className="flex-shrink-0">
                <img src={item?.product?.image} alt={item?.product?.name} className="h-16 w-16 rounded-lg" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item?.product?.name}</h2>
                <p className="text-gray-600">${item?.product?.price}</p>
                <div className="mt-2">
                  <label htmlFor={`quantity-${item?.product?._id}`} className="mr-2 font-semibold">Quantity:</label>
                  <input
                    id={`quantity-${item?.product?._id}`}
                    type="number"
                    min="1"
                    value={item?.quantity}
                    disabled
                    className="w-16 py-1 px-2 border border-gray-300 rounded"
                  />
                  <button onClick={() => handleRemoveFromCart(item?.product?._id)} className="ml-4 text-red-600 hover:text-red-800">
                    Remove
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">${(item?.product?.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center">
            <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Proceed to Checkout
            </button>
            <div className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
