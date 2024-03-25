import { useRef } from "react";
import { useCart } from "../context/CartContext";
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Header = () => {
  const { cart, subTotal, addToCart, removeFromCart, clearCart } = useCart();
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.classList.remove('hidden');
  };

  const closeModal = () => {
    modalRef.current.classList.add('hidden');
  };

  return (
    <div>
      <div className="flex flex-col px-10 py-5 md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 bg-white z-10">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-auto h-20 rounded" src="../src/assets/logo.png" alt="" />
        </a>
        <div className="nav">
          <ul className="flex items-center space-x-2 font-bold md:text-xl">
            <a href="/shoes"><li className="ml-3 md:ml-20">Shoes</li></a>
            <a href="#"><li className="ml-3">Mens</li></a>
            <a href="#"><li className="ml-3">Womens</li></a>
            <a href="#"><li className="ml-3">Kids</li></a>
            <a href="#"><li className="ml-3">Pets</li></a>
            <a href="/TrackOrder"><li className="ml-10 md:ml-30">Track Order</li></a>
          </ul>
        </div>
        <div className="cart absolute right-0 px-5">
          <button onClick={openModal}><AiOutlineShoppingCart className="cursor-pointer text-xl md:text-3xl" /></button>
        </div>
      </div>

      <div ref={modalRef} className="fixed z-50 inset-0 overflow-y-auto hidden">
        <div className="flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 bg-gray-400 opacity-75"></div>
          <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="absolute top-2 right-2">
              <button onClick={closeModal} className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              </button>
            </div>
            <h2 className="font-bold text-xl text-center mb-8">Shopping Cart</h2>
            <ol className="list-decimal font-semibold">
              {Object.keys(cart).length === 0 && <div className="my-4 font-semibold">Cart is empty</div>}
              {Object.keys(cart).map((k) => (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3 text-lg cursor-pointer">
                      <button onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}>
                        <CiCircleMinus className="h-6 w-6 mx-2 text-gray-500 hover:text-gray-700" />
                      </button>
                      {cart[k].qty}
                      <button onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}>
                        <CiCirclePlus className="h-6 w-6 mx-2 text-gray-500 hover:text-gray-700" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <hr class="border-t border-gray-300 my-4"></hr>
            <div className="font-bold my-4 text-right pr-4">Subtotal: ₹{subTotal}</div>
            <div className="flex justify-center my-8">
              <a href="/checkout">
                <button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>&nbsp;Checkout
                </button>
              </a>
              <button onClick={clearCart} className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>&nbsp;Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
  cart: PropTypes.object,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  clearCart: PropTypes.func,
  SubTotal: PropTypes.number,
};

export default Header;
