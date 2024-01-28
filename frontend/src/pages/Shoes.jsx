import { useEffect, useState } from 'react';
import axios from 'axios';

const Shoes = () => {
  const [products, setProducts] = useState({});

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('http://localhost:5000/getproduct/shoes');
        const fetchedProducts = response.data;
        let shoes = {};
        
        for (let item of fetchedProducts) {
          if (item.title in shoes) {
            if (!shoes[item.title].color.includes(item.color) && item.avaibility > 0) {
              shoes[item.title].color.push(item.color);
            }
            if (!shoes[item.title].size.includes(item.size) && item.avaibility > 0) {
              shoes[item.title].size.push(item.size);
            }
          } else {
            shoes[item.title] = JSON.parse(JSON.stringify(item));
            if (item.avaibility > 0) {
              shoes[item.title].color = [item.color];
              shoes[item.title].size = [item.size];
            } 
          }
        }

        setProducts(shoes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && <p>Sorry! All the Shoes are Currently out of Stock. Stay tuned!</p>}
            {Object.keys(products).map((item) => (
              <div key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                <a href={`/product/${products[item].slug}`} className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto h-[36vh] block" src={products[item].image} />
                </a>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Shoes</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">₹{products[item].price}</p>
                  <div className='mt-1'>
                    {/* Sizes */}
                    {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                    {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                    {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                    {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                    {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                  </div>
                  <div className='mt-1'>
                    {/* Colors */}
                    {products[item].color.includes('Red') && <button className='border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                    {products[item].color.includes('Blue') && <button className='border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                    {products[item].color.includes('Black') && <button className='border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none'></button>}
                    {products[item].color.includes('Green') && <button className='border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                    {products[item].color.includes('Yellow') && <button className='border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shoes;
