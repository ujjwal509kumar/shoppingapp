import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useRef } from "react";
import { useCart } from "../context/CartContext";
import PropTypes from 'prop-types';

const Header = () => {
  const { cart, subTotal, addToCart, removeFromCart, clearCart } = useCart();
  const closeCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();
  return (
    <div>
      <div className="flex flex-col px-10 py-5 md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 bg-white z-10">
        <a href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className="w-auto h-20 rounded" src="../src/assets/logo.png" alt=""></img>
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
        <div className="cart absolute right-0  px-5">
          <button><AiOutlineShoppingCart onClick={closeCart} className="cursor-pointer text-xl md:text-3xl" /></button>
        </div>

        <div ref={ref} className={`w-72 h-[100vh] sidebar absolute top-0 right-0 bg-slate-500 px-8 p-10 transform transition-transform ${Object.keys(cart).length != 0 ? 'translate-x-0' : 'translate-x-full'}`}>
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span onClick={closeCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-100"><IoIosCloseCircle /></span>
          <ol className="list-decimal font-semibold">
            {cart && Object.keys(cart).length === 0 && <div className="my-4 font-semibold">Cart is empty</div>}
            {cart && Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg cursor-pointer"><CiCircleMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="mx-2" />{cart[k].qty}<CiCirclePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="mx-2" /></div>
                </div>
              </li>
            })}
          </ol>
          <div className="font-bold my-2">Subtotal: ₹{subTotal}</div>
          <div className="flex">
            <a href="/checkout"><button className="flex mr-2 text-white bg-blue-900 border-0 py-2 px-2 focus:outline-none hover:bg-blue-950 rounded text-sm"><IoBagCheckOutline className="m-1" />Checkout</button></a>
            <button onClick={clearCart} className="flex mr-2 text-white bg-blue-900 border-0 py-2 px-2 focus:outline-none hover:bg-blue-950 rounded text-sm">Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
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

export default Header
