import React, { useEffect } from 'react';
import TextRecycler from '../components/TextRecycler'


function Home() {
  useEffect(() => {
    // Start PureCounter for each element
    new PureCounter({ selector: "#salesCount", duration: 2, delay: 10, once: true, pulse: 20, legacy: true,});
    new PureCounter({ selector: "#totalEconomics", duration: 2, delay: 10, once: true, pulse: 20, legacy: true,});
    new PureCounter({ selector: "#productsAvailable", duration: 2, delay: 10, once: true, pulse: 20, legacy: true,});
    new PureCounter({ selector: "#customerSatisfaction", duration: 2, delay: 10, once: true, pulse: 20, legacy: true,});
  }, []);

  return (
    <div className="w-full lg:w-1/2">
    <div className="lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-black lg:text-4xl">Best place to choose your: <span className="text-blue-500 animate__animated animate__fadeInDown pt-3">{<TextRecycler></TextRecycler>}</span></h1>
        
        
        <div className="flex">
        <div className="flex w-full max-w-sm pt-12">
        <div className="flex items-center justify-center w-2 bg-gradient-to-b from-cyan-500 to-blue-500 rounded">
        </div>

        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <h1 className="font-semibold text-black text-3xl " ><span className='purecounter' id="salesCount" data-purecounter-start="0" data-purecounter-end="10000"></span>&nbsp;+</h1>
                <p className="text-lg text-gray-600">Sales Count</p>
            </div>
        </div>
       </div>



       <div className="flex w-full max-w-sm pt-12">
        <div className="flex items-center justify-center w-2 bg-gradient-to-b from-cyan-500 to-blue-500 rounded">
        </div>

        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <h1 className="font-semibold text-black text-3xl "><span className='purecounter' id="totalEconomics" data-purecounter-start="0" data-purecounter-end="100"></span>&nbsp;+</h1>
                <p className="text-lg text-gray-600">Total Economics</p>
            </div>
        </div>
       </div>
       </div>



      <div className="flex">
       <div className="flex w-full max-w-sm pt-12">
        <div className="flex items-center justify-center w-2 bg-gradient-to-b from-cyan-500 to-blue-500 rounded">
        </div>

        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <h1 className="font-semibold text-black text-3xl"><span className='purecounter' id="productsAvailable" data-purecounter-start="0" data-purecounter-end="1"></span>&nbsp;Million +</h1>
                <p className="text-lg text-gray-600">Products Available</p>
            </div>
        </div>
       </div>




       <div className="flex w-full max-w-sm pt-12">
        <div className="flex items-center justify-center w-2 bg-gradient-to-b from-cyan-500 to-blue-500 rounded">
        </div>

        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <h1 className="font-semibold text-black text-3xl"><span className='purecounter' id="customerSatisfaction" data-purecounter-start="0" data-purecounter-end="4"></span>⭐</h1>
                <p className="text-lg text-gray-600">Average Customer Satisfaction</p>
            </div>
        </div>
       </div>
       </div>













        
        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
    </div>
</div>
  );
}

export default Home;
