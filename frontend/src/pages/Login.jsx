import { useState } from 'react'
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyHeader from "../components/Header"
import MyFooter from "../components/Footer";

const Login = () => {
    const [loginemail, setloginEmail] = useState('');
    const [loginpassword, setloginPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const LoginUrl = import.meta.env.VITE_APP_URI_LOGIN;

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${LoginUrl}`, {
            loginemail,
            loginpassword
          });
          if (response.status === 201) {
            console.log(response.data);
            localStorage.setItem("token", "barear " + response.data.token);
            toast.success("Logged in successfully", {
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
          } else if (response.status === 200 || response.status === 202) {
            toast.error('Wrong email or password', {
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
      }
      if (redirect) {
        return <Navigate to="/profile" />;
      }

    return (
        <>
        <MyHeader></MyHeader>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Login</h2>
                <form action='POST'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={loginemail} onChange={(e) => setloginEmail(e.target.value)} id="loginemail" name='loginemail' type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={loginpassword} onChange={(e) => { setloginPassword(e.target.value) }} id="loinpassword" name='loginpassword' type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={handleSignin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/recoverpassword">
                            Forgot Password?
                        </a>
                    </div>
                    <ToastContainer/>
                </form>
                <div className="mt-4">
                    <a href="/register"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register Now
                    </button></a>
                </div>
            </div>
        </div>
        <MyFooter></MyFooter>
        </>
    );
};

export default Login;
