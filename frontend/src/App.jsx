import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartProvider } from './context/CartContext';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import RecoverPassword from './pages/RecoverPassword';
import OtpVerification from './pages/OptVerification';
import Dashboard from './pages/Dashboard';
import SetPassword from './pages/SetPassword';
import Shoes from './pages/Shoes';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import TrackOrder from './pages/TrackOrder';


// Private Route
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token');
  if (!isLoggedIn) {
    return <Navigate to='/login' />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

//Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/recoverpassword',
    element: <RecoverPassword></RecoverPassword>
  },
  {
    path: '/otpverify',
    element: <OtpVerification></OtpVerification>
  },
  {
    path: '/profile',
    element: <PrivateRoute><Dashboard /></PrivateRoute>
  },
  {
    path: '/forgotpassword',
    element: <RecoverPassword></RecoverPassword>
  },
  {
    path: '/setpassword',
    element: <SetPassword></SetPassword>
  },
  {
    path: '/shoes',
    element: <Shoes></Shoes>
  },
  {
    path: '/product/:slug',
    element: <Product />
  },
  {
    path: '/checkout',
    element: <Checkout></Checkout>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
  {
    path: '/TrackOrder',
    element: <TrackOrder></TrackOrder>
  },
]);


function App() {
  return (
    <main>
      <CartProvider>
        <Header />
        <RouterProvider router={router}> </RouterProvider>
        <Footer />
      </CartProvider>
    </main>
  )
}

export default App
