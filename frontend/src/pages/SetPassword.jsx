import { useState } from 'react';
import axios from 'axios';
import { useLocation, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SetPassword = () => {

  const [newpassword, setNewpassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const location = useLocation();
  const Setpasswordurl = import.meta.env.VITE_APP_URI_SET_PASSWORD;
  const email = location.state ? location.state.googleemail : null;
  const name = location.state ? location.state.googlename : null;

  const RegNewUser = async (e) => {
    e.preventDefault();
    if (!email || !name) {
      toast('👽:Kitni baar smajau tujhe tu nhi hack kr sakta muje, ja jake acche se register kr ab', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const response2 = await axios.post(`${Setpasswordurl}`, {
        email,
        name,
        newpassword
      });
      if (response2.status === 201) {
        console.log(response2.data);
        toast.success("Account registered successfully", {
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
      } else if (response2.status === 200) {
        toast.error('Email already in use', {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log(response2.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }


  return (
    <div>
      
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-2xl">
                <p>Set a password</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                {email && name ? (
                  <p>Congratulations, you have skipped the email Verification part<br />But we need a password to log you in <br /> Please enter the password and make sure you remeber it, because you need this while login </p>
                ) : (
                  <p>Looks like someone is trying to be a smart***</p>
                )}
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-16 ">
                      <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" onChange={(e) => setNewpassword(e.target.value)} type="text" name="newpassword" id="newpassword" autoComplete='off'/>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button onClick={RegNewUser} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm" >
                        Complete Registration
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default SetPassword
