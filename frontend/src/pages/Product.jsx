import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MyHeader from "../components/Header"
import MyFooter from "../components/Footer";

const ProductPage = () => {

    const { slug } = useParams();
    const [productDetails, setProductDetails] = useState({
        variant: null,
        color: '',
        size: '',
        price: '',
        title: '',
        desc: '',
        category: '',
        image: '',
        availableSizes: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${slug}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                setProductDetails({
                    variant: Object.keys(data.variants),
                    color: data.product.color,
                    size: data.product.size,
                    price: data.product.price,
                    title: data.product.title,
                    desc: data.product.description,
                    category: data.product.category,
                    image: data.product.image,
                    availableSizes: Object.keys(data.variants[data.product.color] || {})
                });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [slug]);

    const refreshPage = (newSize) => {
        fetch(`http://localhost:5000/api/products/${slug}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const updatedSlug = data.variants[productDetails.color][newSize].slug;
                let url = `http://localhost:5173/product/${updatedSlug}`;
                window.location = url;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    const reloadPage = (newColor) => {
        fetch(`http://localhost:5000/api/products/${slug}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                let size = Object.keys(data.variants[newColor])[0];
                const updatedSlug = data.variants[newColor][size].slug;
                let url = `http://localhost:5173/product/${updatedSlug}`;
                window.location = url;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };


    return (
        <div>
            <MyHeader />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-screen h-64 object-cover object-center rounded" src={productDetails.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{productDetails.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails.title}</h1>
                            <p className="leading-relaxed">{productDetails.desc}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {productDetails.variant && productDetails.variant.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => reloadPage(color)}
                                            className={`border-2 ml-1 rounded-full w-6 h-6 focus:outline-none ${productDetails.color === color ? 'border-black' : 'border-gray-300'}`}
                                            style={{ backgroundColor: color }}
                                        ></button>
                                    ))}
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select
                                            value={productDetails.size}
                                            onChange={(e) => refreshPage(e.target.value)}
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                                        >
                                            {productDetails.availableSizes.map(size => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
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
                                <span className="title-font font-medium text-2xl text-gray-900">₹{productDetails.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MyFooter />
        </div>
    );
};

export default ProductPage;
