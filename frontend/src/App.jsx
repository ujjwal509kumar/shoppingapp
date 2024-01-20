import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import RecoverPassword from './pages/RecoverPassword';
import OtpVerification from './pages/OptVerification';
import Dashboard from './pages/Dashboard';

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
    path: '/recovepassword',
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
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
  // {
  //   path: '/profile',
  //   element: <PrivateRoute><Profile /></PrivateRoute>
  // }
]);


function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
