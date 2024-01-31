import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MyHeader from "../components/Header"
import MyFooter from "../components/Footer";

const ProductPage = () => {

    const { slug } = useParams();
    const [variant, setvariant] = useState();
    const [color, setColor] = useState();
    const [size, setsize] = useState();
    const [availableSizes, setAvailableSizes] = useState([]);
    const [price, setprice] = useState();
    const [Title, setTitle] = useState();
    const [Desc, setDesc] = useState();
    const [category, setCategory] = useState();
    const [Image, setImage] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${slug}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);

                setsize(data.product.size);
                setColor(data.product.color);
                setprice(data.product.price);
                setTitle(data.product.title);
                setDesc(data.product.description);
                setCategory(data.product.category);
                setImage(data.product.image);

                const variants1 = Object.keys(data.variants);
                setvariant(variants1);

                const initialColor = data.product.color
                if (data.variants[initialColor]) {
                    setAvailableSizes(Object.keys(data.variants[initialColor]));
                }

            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const refreshPage = (newsize) => {
        fetch(`http://localhost:5000/api/products/${slug}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const updatedslug = data.variants[color][newsize].slug;
            let url = `http://localhost:5173/product/${updatedslug}`;
            window.location = url;
            
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    const reloadPage = (newcolor) => {
        fetch(`http://localhost:5000/api/products/${slug}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let size1 = Object.keys(data.variants[newcolor])[0];
            const updatedslug = data.variants[newcolor][size1].slug;
            let url = `http://localhost:5173/product/${updatedslug}`;
            window.location = url;
            
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }


    return (
        <div>
            <MyHeader></MyHeader>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={Image} width={100} height={100} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{Title}</h1>
                            
                            <p className="leading-relaxed">{Desc}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {Array.isArray(variant) && variant.includes("White") && <button onClick={()=>{reloadPage('White')}} className={`border-2 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-grey-300'}`}></button>}
                                    {Array.isArray(variant) && variant.includes("Green") && <button onClick={()=>{reloadPage('Green')}} className={`border-2 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none ${color === 'Green' ? 'border-black' : 'border-grey-300'}`}></button>}
                                    {Array.isArray(variant) && variant.includes("Red") && <button onClick={()=>{reloadPage('Red')}} className={`border-2 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${color === 'Red' ? 'border-black' : 'border-grey-300'}`}></button>}
                                    {Array.isArray(variant) && variant.includes("Blue") && <button onClick={()=>{reloadPage('Blue')}} className={`border-2 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color === 'Blue' ? 'border-black' : 'border-grey-300'}`}></button>}
                                    {Array.isArray(variant) && variant.includes("Black") && <button onClick={()=>{reloadPage('Black')}} className={`border-2 ml-1 bg-slate-800 rounded-full w-6 h-6 focus:outline-none ${color === 'Black' ? 'border-black' : 'border-grey-300'}`}></button>}
                                    {Array.isArray(variant) && variant.includes("Yellow") && <button onClick={()=>{reloadPage('Yellow')}} className={`border-2 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color === 'Yellow' ? 'border-black' : 'border-grey-300'}`}></button>}
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select value={size} onChange={(e) => { refreshPage(e.target.value) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            {availableSizes.includes('S') && <option value={'S'}>S</option>}
                                            {availableSizes.includes('M') && <option value={'M'}>M</option>}
                                            {availableSizes.includes('L') && <option value={'L'}>L</option>}
                                            {availableSizes.includes('XL') && <option value={'XL'}>XL</option>}
                                            {availableSizes.includes('XXL') && <option value={'XXL'}>XXL</option>}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MyFooter></MyFooter>
        </div>
    );
};

export default ProductPage;
