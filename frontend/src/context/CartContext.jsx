import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const CartContext = createContext();


export const useCart = () => useContext(CartContext);



export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    try {
      const localCart = localStorage.getItem("cart");
      if (localCart) {
        const parsedCart = JSON.parse(localCart);
        setCart(parsedCart);
        saveCart(parsedCart);
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser({ value: null });
    setKey(Math.random());
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subtotal = 0;
    Object.keys(myCart).forEach(key => {
      subtotal += myCart[key].price * myCart[key].qty;
    });
    setSubTotal(subtotal);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    if (newCart[itemCode]) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {}
    newCart[itemCode] = { qty: 1, price, name, size, variant }
    setCart(newCart)
    saveCart(newCart)
    window.location.href = '/checkout';
    
  }

  const removeFromCart = (itemCode, qty) => {
    let newCart = { ...cart };
    if (newCart[itemCode]) {
      newCart[itemCode].qty -= qty;
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  // The value object includes everything that we want to provide through the context
  const value = {
    cart,
    subTotal,
    user,
    key,
    logout,
    addToCart,
    buyNow,
    removeFromCart,
    clearCart,
    setCart, 
    setSubTotal, 
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


