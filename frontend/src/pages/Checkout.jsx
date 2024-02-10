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
            <h1>Please add a form here to take users details about delivery</h1>
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
    );
};

export default Checkout;
