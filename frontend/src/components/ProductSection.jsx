import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Menblazer1 from "../models/Menblazer1";
import FormalPant1 from "../models/Formalpant1";
import Cap1 from "../models/Cap1";
import Kidspant1 from "../models/Kidspant1";
import Watergun1 from "../models/Watergun1";
import Xylophone1 from "../models/Xylophone1";

function ProductSection() {
  const [selectedSection, setSelectedSection] = useState("mens");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const isSelected = (section) => {
    return section === selectedSection;
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "mens":
        return (
          <section className="flex justify-between ml-14 gap-4">
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [6.27, 0.31, 0.88],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  minDistance={8}
                  enablePan={false}
                  enableZoom={false}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Menblazer1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Normal Shirt collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                500₹ - 1000₹
              </p>
            </div>
            {/* second */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [2.95, 50.66, 90.07],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  minDistance={100}
                  enableZoom={false}
                  enablePan={false}
                />
                <Suspense fallback={null}>
                  <Center>
                    <FormalPant1 scale={0.9} />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Formal Pant collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                500₹ - 2000₹
              </p>
            </div>
            {/* third */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [-163.75, 90.34, 248.27],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 50, 1]} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <Suspense fallback={null}>
                  <Center>
                    <Cap1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Cap collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                500₹ - 1500₹
              </p>
            </div>
          </section>
        );
      case "kids":
        return (
          <section className="flex justify-between ml-14 gap-4">
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [-0.11, 2.9, 3.03],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  minDistance={18}
                  enablePan={false}
                  enableZoom={false}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Xylophone1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Xylophone collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                500₹ - 1000₹
              </p>
            </div>
            {/* second */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [2.05, 4.08, 35.88],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  minDistance={10}
                  enableZoom={false}
                  enablePan={false}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Kidspant1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Kids Pant collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                500₹ - 2000₹
              </p>
            </div>
            {/* third */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [0.01, 2.15, 0],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 50, 1]} />
                <OrbitControls minDistance={4} enableZoom={false} enablePan={false} />
                <Suspense fallback={null}>
                  <Center>
                    <Watergun1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                WaterGun collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                500₹ - 1500₹
              </p>
            </div>
          </section>
        );
      // case "womens":
      //   return (
      //     <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
      //       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
      //         <div>
      //           <img
      //             className="object-cover w-full rounded-lg h-96"
      //             src="data:image/jpeg;base64,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"
      //             alt=""
      //           ></img>
      //           <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
      //             Women HandBag
      //           </h2>
      //           <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">
      //             5000₹ - 10000₹
      //           </p>
      //         </div>

      //         <div>
      //           <img
      //             className="object-cover w-full rounded-lg h-96 "
      //             src="https://m.media-amazon.com/images/I/31SFknsCNtL._AC_UY1100_.jpg"
      //             alt=""
      //           ></img>
      //           <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
      //             Womens Kurta Collections
      //           </h2>
      //           <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">
      //             200₹ - 10000₹
      //           </p>
      //         </div>

      //         <div>
      //           <img
      //             className="object-cover w-full rounded-lg h-96 "
      //             src="https://m.media-amazon.com/images/I/612kefBXFQL._AC_UF1000,1000_QL80_.jpg"
      //             alt=""
      //           ></img>
      //           <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
      //             Women's Makeup Kit
      //           </h2>
      //           <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">
      //             99₹ - 2000₹
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   );
      // case "pets":
      //   return (
      //     <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
      //       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
      //         <div>
      //           <img
      //             className="object-cover w-full rounded-lg h-96"
      //             src="https://m.media-amazon.com/images/I/618-8ClnyxS._AC_UF1000,1000_QL80_.jpg"
      //             alt=""
      //           ></img>
      //           <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
      //             Pet Food
      //           </h2>
      //           <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">
      //             50₹ - 10000₹
      //           </p>
      //         </div>

      //         <div>
      //           <img
      //             className="object-cover w-full rounded-lg h-96 "
      //             src="https://m.media-amazon.com/images/I/71bJM7xMVIL._AC_UF1000,1000_QL80_.jpg"
      //             alt=""
      //           ></img>
      //           <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
      //             Pet's grooming Kits
      //           </h2>
      //           <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">
      //             200₹ - 10000₹
      //           </p>
      //         </div>

      //         <div>
      //           <img
      //             className="object-cover w-full rounded-lg h-96 "
      //             src="https://m.media-amazon.com/images/I/51mI3VIVIbL._AC_UF1000,1000_QL80_.jpg"
      //             alt=""
      //           ></img>
      //           <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
      //             Pet's Dresses
      //           </h2>
      //           <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase  ">
      //             99₹ - 2000₹
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="lg:mx-12">
        <div className="mt-4 space-y-4 lg:mt-8">
          <a
            onClick={() => handleSectionChange("mens")}
            className={`block ${
              isSelected("mens") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Mens
          </a>
          <a
            onClick={() => handleSectionChange("kids")}
            className={`block ${
              isSelected("kids") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Kids
          </a>
          <a
            onClick={() => handleSectionChange("womens")}
            className={`block ${
              isSelected("womens") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Womens
          </a>
          <a
            onClick={() => handleSectionChange("pets")}
            className={`block ${
              isSelected("pets") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Pets
          </a>
        </div>
      </div>

      <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
        {renderSectionContent()}
      </div>
    </div>
  );
}

export default ProductSection;
