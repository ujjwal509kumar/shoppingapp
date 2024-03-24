import { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const { cart, subTotal, user, logout, addToCart, removeFromCart, clearCart } = useCart();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        // You can add additional effects here if needed, for example, to handle the disabled state
    }, [cart, subTotal]);

    const initiateTransaction = () => {
        console.log('initiating transaction');
        // Implement your transaction initiation logic here
    };

    return (
<div>
        <div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-6 rounded-lg">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="text-lg font-bold">$138.99</p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="mt-auto text-lg font-bold">$238.99</p>
        </div>
      </div>
    </div>

    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl text-bold">Contact Information</p>
    <div>
      <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div className="relative">
        <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
      </div>
      <label for="phone" className="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
      <div className="relative">
        <input type="number" id="phone" name="phone" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
      </div>
      <hr class="border-t border-gray-300 my-12"></hr>

      <p className="text-xl text-bold">Shipping Information</p>
      <div className="flex flex-row w-full gap-4">
        <div className="flex-grow">
      <label for="first-name" className="mt-4 mb-2 block text-sm font-medium">First Name</label>
        <input type="text" id="first-name" name="first-name" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>

        <div className="flex-grow">
        <label for="last-name" className="mt-4 mb-2 block text-sm font-medium">Last Name</label>
        <input type="text" id="last-name" name="last-name" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow">
      <label for="company-name" className="mt-4 mb-2 block text-sm font-medium">Company Name</label>
        <input type="text" id="company-name" name="company-name" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow">
      <label for="address" className="mt-4 mb-2 block text-sm font-medium">Adress</label>
        <input type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow">
      <label for="address-type" className="mt-4 mb-2 block text-sm font-medium">Apartment,Suite,etc.</label>
        <input type="text" id="address-type" name="address-type" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>
      </div>


      <div className="flex flex-row w-full gap-4">
        <div className="flex-grow">
      <label for="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
        <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>

        <div className="flex-grow">
        <label for="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
            <div class="relative">
            <select class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm capitalize shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
            <option value="" disabled selected>Select a country</option>
                    <option value="INDIA">India</option>
                    <option value="USA">United States Of America</option>
            </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6H4l6 6 6-6h2l-6 6-6-6h2l6 6z"/>
                    </svg>
                </div>
            </div>
        </div>
      </div>


      <div className="flex flex-row w-full gap-4">
        <div className="flex-grow">
      <label for="state" className="mt-4 mb-2 block text-sm font-medium">State</label>
        <input type="text" id="state" name="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>

        <div className="flex-grow">
        <label for="pin-code" className="mt-4 mb-2 block text-sm font-medium">Pin Code</label>
        <input type="number" id="pin-code" name="pin-code" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
        </div>
      </div>

      <hr class="border-t border-gray-300 my-12"></hr>


      <p className="text-xl text-bold mb-4">Payment Information</p>

      <div class="flex flex-row gap-2">
      <div className="relative flex-grow">
        <input className="peer hidden" id="card" type="radio" name="radio"/>
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="card">
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div>
            <span className="mt-2 font-semibold">Card</span>
          </div>
        </label>
      </div>
      <div className="relative  flex-grow">
        <input className="peer hidden" id="wallet" type="radio" name="radio"/>
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="wallet">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div>
            <span className="mt-2 font-semibold">Wallet</span>
          </div>
        </label>
      </div>
      <div className="relative  flex-grow">
        <input className="peer hidden" id="upi" type="radio" name="radio"/>
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="upi">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div>
            <span className="mt-2 font-semibold">UPI</span>
          </div>
        </label>
      </div>
      <div className="relative  flex-grow">
        <input className="peer hidden" id="cod" type="radio" name="radio"/>
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="cod">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div>
            <span className="mt-2 font-semibold">COD</span>
          </div>
        </label>
      </div>
        </div>

        {/* http://localhost:5173/checkout
        https://tailwindui.com/components/ecommerce/components/shopping-carts
        https://tailwindui.com/components/ecommerce/components/checkout-forms
        https://merakiui.com/components/application-ui/dropdowns */}


      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">$399.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">$8.00</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">$408.00</p>
      </div>
    </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>










          















            <div className="container m-auto">
                <h2 className="font-semibold text-xl">Review Cart Items</h2>
            </div>

            <div className="sideCart bg-slate-500 p-6 m-2">
                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length === 0 && <div className='my-4 font-normal'>No Items in the cart</div>}
                    {Object.keys(cart).map((k) => (
                        <li key={k}>
                            <div className="item flex my-5">
                                <div className='font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                                    <CiCircleMinus onClick={() => removeFromCart(k, 1)} className='cursor-pointer text-white' />
                                    <span className='mx-2 text-sm'>{cart[k].qty}</span>
                                    <CiCirclePlus onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer text-white' />
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                <span className="font-bold">Subtotal: ₹{subTotal}</span>
                <div className="mx-4">
                    <button onClick={initiateTransaction} disabled={disabled} className="disabled:bg-blue-300 flex mr-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">
                        <BsBagCheckFill className='m-1' />Pay
                    </button>
                </div>
            </div>
        </div>
</div>
    );
};

export default Checkout;
