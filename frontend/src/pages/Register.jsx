import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useGoogleLogin } from '@react-oauth/google';

import MyHeader from "../components/Header"
import MyFooter from "../components/Footer";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitRegForm = async (e) => {
    //Prevent default form submission behavior
    e.preventDefault();
    const RegUrl = import.meta.env.VITE_APP_URI_REGESTRATION;

    //request to the backend API
    try {
      const response = await axios.post(`${RegUrl}`, {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        console.log(response.data);
        toast.success("email sent successfully", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/otpverify', { state: { enteredemail: email } });
      } else if (response.status === 200) {
        toast.error('Email already exists!', {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      else {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }

  };

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      // console.log("Token Response:", tokenResponse);
      const accessToken = tokenResponse.access_token;
      try {
        const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const userData = await response.json();
        // console.log("User Data:", userData);

        // Navigate to /setpassword with userData in state
        navigate('/setpassword', { state: { googleemail: userData.email, googlename: userData.name } });

      } catch (error) {
        console.error("Error fetching user data:", error);
      }

    },
    onFailure: error => {
      console.error("Login Failed:", error);
    },
  });

  return (
    <main>
      <MyHeader></MyHeader>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration</h2>
          <form action="POST">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => { setName(e.target.value) }} id="name" name="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" type="email" placeholder="Your Email" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" type="password" placeholder="******************" required />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button type='submit' onClick={submitRegForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto">
                Register Now
              </button>
              <a href="/login" className="w-full sm:w-auto">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                  Back to Login
                </button>
                <ToastContainer />
              </a>
            </div>
            <p className="text-center mb-4 mt-4">OR</p>
            <div className="mb-4 mt-4">
              <button type="button" onClick={() => login()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Register with Google
              </button>
            </div>

          </form>
        </div>
      </div>
      <MyFooter></MyFooter>
    </main>
  );
}

export default Register;
