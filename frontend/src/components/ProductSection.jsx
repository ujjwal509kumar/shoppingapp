import React, { useState } from 'react';

function ProductSection() {
  const [selectedSection, setSelectedSection] = useState('mens');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const isSelected = (section) => {
    return section === selectedSection;
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'mens':
        return (
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                        <img className="object-cover w-full rounded-lg h-96" src="https://m.media-amazon.com/images/I/51pXJTmIW6L._AC_UY1100_.jpg" alt=""></img>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Blazers collections</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">5000₹ - 10000₹</p>
                    </div>

                    <div>
                        <img className="object-cover w-full rounded-lg h-96 " src="data:image/jpeg;base64,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" alt=""></img>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Formals collections</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">200₹ - 10000₹</p>
                    </div>

                    <div>
                        <img className="object-cover w-full rounded-lg h-96 " src="https://assets.ajio.com/medias/sys_master/root/h1d/hc2/13233321738270/-473Wx593H-460365676-black-MODEL.jpg" alt=""></img>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Caps</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">99₹ - 2000₹</p>
                    </div>
                </div>
            </div>
        );
      case 'kids':
        return (
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                        <img className="object-cover w-full rounded-lg h-96" src="https://m.media-amazon.com/images/I/71ipyBXW0BL._AC_UF1000,1000_QL80_.jpg" alt=""></img>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Kids Toys</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">5000₹ - 10000₹</p>
                    </div>

                    <div>
                        <img className="object-cover w-full rounded-lg h-96 " src="https://www.bigbasket.com/media/uploads/p/l/40193197_3-doms-pencil-smart-kit.jpg" alt=""></img>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Kids Stationaryies</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">200₹ - 1000₹</p>
                    </div>

                    <div>
                        <img className="object-cover w-full rounded-lg h-96 " src="https://m.media-amazon.com/images/I/61zvuAxZHVL._AC_UY1100_.jpg" alt=""></img>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Kid's Clothes</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">99₹ - 20000₹</p>
                    </div>
                </div>
            </div>
        );
      case 'womens':
        return (
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
              <div>
                  <img className="object-cover w-full rounded-lg h-96" src="data:image/jpeg;base64,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" alt=""></img>
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Women HandBag</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">5000₹ - 10000₹</p>
              </div>

              <div>
                  <img className="object-cover w-full rounded-lg h-96 " src="https://m.media-amazon.com/images/I/31SFknsCNtL._AC_UY1100_.jpg" alt=""></img>
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Womens Kurta Collections</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">200₹ - 10000₹</p>
              </div>

              <div>
                  <img className="object-cover w-full rounded-lg h-96 " src="https://m.media-amazon.com/images/I/612kefBXFQL._AC_UF1000,1000_QL80_.jpg" alt=""></img>
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Women's Makeup Kit</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">99₹ - 2000₹</p>
              </div>
          </div>
      </div>
        );
      case 'pets':
        return (
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
              <div>
                  <img className="object-cover w-full rounded-lg h-96" src="https://m.media-amazon.com/images/I/618-8ClnyxS._AC_UF1000,1000_QL80_.jpg" alt=""></img>
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Pet Food</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">50₹ - 10000₹</p>
              </div>

              <div>
                  <img className="object-cover w-full rounded-lg h-96 " src="https://m.media-amazon.com/images/I/71bJM7xMVIL._AC_UF1000,1000_QL80_.jpg" alt=""></img>
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Pet's grooming Kits</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">200₹ - 10000₹</p>
              </div>

              <div>
                  <img className="object-cover w-full rounded-lg h-96 " src="https://m.media-amazon.com/images/I/51mI3VIVIbL._AC_UF1000,1000_QL80_.jpg" alt=""></img>
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">Pet's Dresses</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">99₹ - 2000₹</p>
              </div>
          </div>
      </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex'>
      <div className="lg:mx-12">
      <div className="mt-4 space-y-4 lg:mt-8">
          <a onClick={() => handleSectionChange('mens')} className={`block ${isSelected('mens') ? 'text-blue-500' : 'text-gray-500'} hover:underline`}>Mens</a>
          <a onClick={() => handleSectionChange('kids')} className={`block ${isSelected('kids') ? 'text-blue-500' : 'text-gray-500'} hover:underline`}>Kids</a>
          <a onClick={() => handleSectionChange('womens')} className={`block ${isSelected('womens') ? 'text-blue-500' : 'text-gray-500'} hover:underline`}>Womens</a>
          <a onClick={() => handleSectionChange('pets')} className={`block ${isSelected('pets') ? 'text-blue-500' : 'text-gray-500'} hover:underline`}>Pets</a>
        </div>
      </div>

      <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
        {renderSectionContent()}
      </div>
    </div>
  );
}

export default ProductSection;
