import { useState } from 'react'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RecoverPassword = () => {
  const [forgotemail, setForgotemail] = useState('');
  const [redirect, setRedirect] = useState('');

  const RecoverPassUrl = import.meta.env.VITE_APP_URI_FORGOT_PASS;

  const RecoverPass = async (e) => {
    e.preventDefault();
    try {
      const approverequest = await axios.post(`${RecoverPassUrl}`, {
        forgotemail
      });
      console.log(approverequest.data);
      if (approverequest.data.status === "User Not Exists!!") {
        toast.error("Dude don't fuck with us! First register yourself", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (approverequest.data.status === "Email Sent") {
        toast.success("Email with password re-setting link has been sent to your mail", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setRedirect(true);
        console.log(approverequest.data.status);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">Forgot Password</h2>
          <form method="POST">
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required value={forgotemail} onChange={(e) => setForgotemail(e.target.value)}
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button onClick={RecoverPass} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline" type="submit">
                Send Reset Link
              </button>
            </div>
          </form>
          <div className="text-center">
            <a href='login'><button className="text-blue-600 hover:text-blue-800 font-semibold py-2 underline focus:outline-none transition duration-300 ease-in-out" onClick={() => {/* Implement navigation logic here */ }}>
              Back to Login
            </button></a>
          </div>
        </div>
      </div>
      <ToastContainer />
    
    </>
  )
}

export default RecoverPassword
