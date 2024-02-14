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
  const [selectedSection, setSelectedSection] = useState("kids");

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
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                />
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
                  position: [0.01, 3.15, 0],
                  near: 0.1,
                  far: 25000,
                }}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 50, 1]} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                />
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
      case "womens":
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
                <OrbitControls
                  minDistance={4}
                  enableZoom={false}
                  enablePan={false}
                />
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
      case "pets":
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
                <OrbitControls
                  minDistance={4}
                  enableZoom={false}
                  enablePan={false}
                />
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
