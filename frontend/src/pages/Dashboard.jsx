import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyHeader from "../components/Header"
import MyFooter from "../components/Footer";

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState('');
  const ProfileUrl = import.meta.env.VITE_APP_URI_PROFILE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: token
        };
        const response = await axios.get(`${ProfileUrl}`, { headers });
        const { email, name } = response.data;
        setEmail(email);
        setName(name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    toast.info('Logged out successfully', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <MyHeader></MyHeader>
      <h1>Hi {name}</h1>
      <h1>Your email is : {email}</h1>
      <button type="button" onClick={logout} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Logout</button>
      <ToastContainer />
      <MyFooter></MyFooter>
    </div>
  )
}

export default Dashboard
