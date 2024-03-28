import { useState, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import axios from 'axios';

const Checkout = () => {
  const { cart, subTotal, addToCart, removeFromCart } = useCart();
  const [owneremail, setownerEmail] = useState('');
  const razorpaykey = import.meta.env.VITE_APP_URI_RAZORPAY_KEY;
  const ProfileUrl = import.meta.env.VITE_APP_URI_PROFILE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: token
        };
        const response = await axios.get(`${ProfileUrl}`, { headers });
        const { email } = response.data;
        setownerEmail(email);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      originaluser: owneremail
    }));
  }, [owneremail]);


  function generateUniqueOrderId() {
    let receiptId = localStorage.getItem('receiptId');

    if (!receiptId) {
      const date = new Date();
      const year = date.getFullYear().toString(36).toUpperCase();
      const month = (date.getMonth() + 1).toString(16).padStart(2, '0').toUpperCase();
      const day = date.getDate().toString(16).padStart(2, '0').toUpperCase();
      const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();

      receiptId = `${year}${month}${day}${randomChars}`;

      localStorage.setItem('receiptId', receiptId);
    }
    return receiptId;
  }
  const receiptId = generateUniqueOrderId();

  const TotalAmt = subTotal * 100;
  const currency = "INR";


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    companyname: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    pincode: "",
    deliveryNotes: "",
    reciptid: receiptId,
    paymentid: "",
    orderid: "",
    paymentstatus: "initiated",
    originaluser: owneremail,
  });


  const initiateTransaction = async (e) => {
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount: TotalAmt,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const neworder = await response.json();
    console.log(neworder);

    var options = {
      key: razorpaykey,
      amount: subTotal,
      currency,
      name: "Shop 360",
      description: "Shop 360 Payment Gateway",
      image: "https://raw.githubusercontent.com/ujjwal509kumar/shoppingapp/main/frontend/src/assets/logo.png",
      order_id: neworder.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);

        const orderDetails = {
          orderId: neworder.id,
          paymentId: response.razorpay_payment_id,
          reciptid: neworder.receipt,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          deliveryNotes: formData.deliveryNotes,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          country: formData.country,
        };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        window.location.href = 'thankyou';
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  const sendData = () => {
    fetch('http://localhost:5000/orderdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Order placed successfully:', data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  const handleButtonClick = () => {
    initiateTransaction();
    sendData();
  };

  return (
    <div>
      <div>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-6 rounded-lg">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
            <div className="sideCart rounded-lg mt-8 space-y-3 border bg-white px-2 py-4 sm:px-6">
              <ol className='list-decimal font-semibold'>
                {Object.keys(cart).length === 0 && <div className='my-4 font-normal'>No Items in the cart</div>}
                {Object.keys(cart).map((k) => (
                  <li key={k}>
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                      {/* <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
                      <div className="flex w-full flex-row px-4 py-4">
                        <span className="font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant})</span>
                        <div className='flex mx-4 text-lg'>
                          <CiCircleMinus onClick={() => removeFromCart(k, 1)} className='cursor-pointer text-black' />
                          <span className='mx-2 text-sm'>{cart[k].qty}</span>
                          <CiCirclePlus onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-black' />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <div className="relative">
              <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                <img className="w-14 object-contain" src="../src/assets/standard-shipping.svg" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Standard Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 3-5 Days</p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                <img className="w-14 object-contain" src="../src/assets/express-shipping.svg" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Speed Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 2-3 Days</p>
                </div>
              </label>
            </div>
            <p className="mt-8 text-lg font-medium">Additional Delivery Notes</p>
            <div className="relative">
              <label htmlFor="additional-notes" className="mt-4 mb-2 block text-sm font-medium">Anything Else To Let Us Know Regarding This Order?</label>
              <textarea type="text" id="additional-notes" value={formData.deliveryNotes} onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })} name="additional-notes" maxLength="1000" placeholder="Ex. Is This Order An Gift? Do We Need To Pack It For You? Now Worries...Got It Covered At Free Of Cost.." className="w-full overflow-hidden h-96 rounded-md border border-gray-200 px-4 py-3 text-xlg shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <p className="text-lg p-4 rounded-lg bg-blue-200 capitalize"><span className="font-semibold">NOTE:&nbsp;</span>It is not necessary that we shall follow all the delivery notes.however we shall try our best to ensure we get your notes considerd.</p>

          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl text-bold">Contact Information</p>
            <div>
              <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
              <div className="relative">
                <input type="text" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <label htmlFor="phone" className="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
              <div className="relative">
                <input type="number" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <hr className="border-t border-gray-300 my-12"></hr>

              <p className="text-xl text-bold">Shipping Information</p>
              <div className="flex flex-row w-full gap-4">
                <div className="flex-grow">
                  <label htmlFor="first-name" className="mt-4 mb-2 block text-sm font-medium">First Name</label>
                  <input type="text" id="first-name" name="first-name" value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>

                <div className="flex-grow">
                  <label htmlFor="last-name" className="mt-4 mb-2 block text-sm font-medium">Last Name</label>
                  <input type="text" id="last-name" name="last-name" value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex flex-row w-full">
                <div className="flex-grow">
                  <label htmlFor="company-name" className="mt-4 mb-2 block text-sm font-medium">Company Name</label>
                  <input type="text" id="company-name" name="company-name" value={formData.companyname} onChange={(e) => setFormData({ ...formData, companyname: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex flex-row w-full">
                <div className="flex-grow">
                  <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Adress</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex flex-row w-full">
                <div className="flex-grow">
                  <label htmlFor="address-type" className="mt-4 mb-2 block text-sm font-medium">Apartment,Suite,etc.</label>
                  <input type="text" id="address-type" name="address-type" value={formData.apartment} onChange={(e) => setFormData({ ...formData, apartment: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>


              <div className="flex flex-row w-full gap-4">
                <div className="flex-grow">
                  <label htmlFor="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>

                <div className="flex-grow">
                  <label htmlFor="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
                  <div className="relative">
                    <select value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm capitalize shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                      <option value="" disabled selected>Select a country</option>
                      <option value="INDIA">India</option>
                      <option value="USA">United States Of America</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 12l-6-6H4l6 6 6-6h2l-6 6-6-6h2l6 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex flex-row w-full gap-4">
                <div className="flex-grow">
                  <label htmlFor="state" className="mt-4 mb-2 block text-sm font-medium">State</label>
                  <input type="text" id="state" name="state" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>

                <div className="flex-grow">
                  <label htmlFor="pin-code" className="mt-4 mb-2 block text-sm font-medium">Pin Code</label>
                  <input type="number" id="pin-code" name="pin-code" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <hr className="border-t border-gray-300 my-12 opacity-0"></hr>


              <p className="text-xl text-bold mb-4">Billing Information</p>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between my-8">
                  <p className="text-lg font-large text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">₹{subTotal}</p>
                </div>
                <div className="flex items-center justify-between my-8">
                  <p className="text-lg font-large text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">₹8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-large text-gray-900 my-8">Total</p>
                <p className="text-2xl font-semibold text-gray-900">{subTotal}</p>
              </div>
            </div>
            <div className="flex flex-row flex-grow">
              <input type="checkbox" id="tndc" checked className="text-large font-large"></input>
              <label htmlFor="tndc" className="text-black text-lg">I hereby Agree To The <a className="text-blue-500" href="checkout">Terms And Conditions</a> Of &quot;Shop360&quot;</label>
            </div>
            <button onClick={handleButtonClick} className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white items-center justify-between flex flex-row flex-grow">Pay & Place Order&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
