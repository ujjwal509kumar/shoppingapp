import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Menshirt1 from "../models/Menshirt1";
import FormalPant1 from "../models/Formalpant1";
import Cap1 from "../models/Cap1";
import Kidspant1 from "../models/Kidspant1";
import Watergun1 from "../models/Watergun1";
import Xylophone1 from "../models/Xylophone1";
import Sweater1 from "../models/Sweater1";
import Slippers1 from "../models/Slippers1";
import Lipstick1 from "../models/Lipstick1";
import Dogtoy1 from "../models/Dogtoy1";
import Dogbone1 from "../models/Dogbone1";

function ProductSection() {
  const [selectedSection, setSelectedSection] = useState("mens");
  const menshirt1 = useRef(null);
  const formalpant1 = useRef(null);
  const cap1 = useRef(null);
  const kidspant1 = useRef(null);
  const watergun1 = useRef(null);
  const xylophone1 = useRef(null);
  const sweater1 = useRef(null);
  const slippers1 = useRef(null);
  const lipstick1 = useRef(null);
  const dogtoy1 = useRef(null);
  const dogbone1 = useRef(null);

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
          <section
            className="flex justify-between ml-14 gap-4"
            key={selectedSection}
          >
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [240.17, 2.19, 3],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (menshirt1.current.autoRotate = true)}
                onPointerLeave={() => (menshirt1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 10, 1]} />
                <OrbitControls
                  ref={menshirt1}
                  enablePan={false}
                  enableZoom={false}
                  autoRotateSpeed={10}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Menshirt1 />
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
                onPointerEnter={() => (formalpant1.current.autoRotate = true)}
                onPointerLeave={() => (formalpant1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  ref={formalpant1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
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
                onPointerEnter={() => (cap1.current.autoRotate = true)}
                onPointerLeave={() => (cap1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 50, 1]} />
                <OrbitControls
                  ref={cap1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
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
          <section
            className="flex justify-between ml-14 gap-4"
            key={selectedSection}
          >
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [-0.11, 2.9, 3.03],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (xylophone1.current.autoRotate = true)}
                onPointerLeave={() => (xylophone1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  ref={xylophone1}
                  enablePan={false}
                  enableZoom={false}
                  autoRotateSpeed={10}
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
                onPointerEnter={() => (kidspant1.current.autoRotate = true)}
                onPointerLeave={() => (kidspant1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  ref={kidspant1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
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
                onPointerEnter={() => (watergun1.current.autoRotate = true)}
                onPointerLeave={() => (watergun1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 50, 1]} />
                <OrbitControls
                  ref={watergun1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
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
          <section
            className="flex justify-between ml-14 gap-4"
            key={selectedSection}
          >
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [0, 0, 0.63],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (sweater1.current.autoRotate = true)}
                onPointerLeave={() => (sweater1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 1000, 10]} />
                <OrbitControls
                  ref={sweater1}
                  enablePan={false}
                  enableZoom={false}
                  autoRotateSpeed={10}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Sweater1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Sweater collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                1500₹ - 2000₹
              </p>
            </div>
            {/* second */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [1.8, 0.26, -0.35],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (lipstick1.current.autoRotate = true)}
                onPointerLeave={() => (lipstick1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  ref={lipstick1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Lipstick1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Lipstick collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                1500₹ - 2700₹
              </p>
            </div>
            {/* third */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [0.27, 0.2, -0.13],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (slippers1.current.autoRotate = true)}
                onPointerLeave={() => (slippers1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 1, 1]} />
                <OrbitControls
                  ref={slippers1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Slippers1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Slippers collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                1500₹ - 2000₹
              </p>
            </div>
          </section>
        );
      case "pets":
        return (
          <section
            className="flex justify-between ml-14 gap-4"
            key={selectedSection}
          >
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [0.01, 0.74, 0.33],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (dogbone1.current.autoRotate = true)}
                onPointerLeave={() => (dogbone1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  ref={dogbone1}
                  enablePan={false}
                  enableZoom={false}
                  autoRotateSpeed={10}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Dogbone1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Dog bone collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                50₹ - 150₹
              </p>
            </div>
            {/* second */}
            <div className="w-[20vw] h-[55vh]">
              <Canvas
                camera={{
                  fov: 75,
                  position: [0.92, 0.3, 0.95],
                  near: 0.1,
                  far: 25000,
                }}
                onPointerEnter={() => (dogtoy1.current.autoRotate = true)}
                onPointerLeave={() => (dogtoy1.current.autoRotate = false)}
              >
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[10, 10, 10]} />
                <OrbitControls
                  ref={dogtoy1}
                  enableZoom={false}
                  enablePan={false}
                  autoRotateSpeed={10}
                />
                <Suspense fallback={null}>
                  <Center>
                    <Dogtoy1 />
                  </Center>
                </Suspense>
              </Canvas>
              <h2 className="mt-4 text-xl text-center font-semibold text-gray-800 capitalize ">
                Dog toy collections
              </h2>
              <p className="mt-2 text-lg text-center tracking-wider text-blue-500 uppercase  ">
                100₹ - 500₹
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
          <span
            onClick={() => handleSectionChange("mens")}
            className={`block ${
              isSelected("mens") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Mens
          </span>
          <span
            onClick={() => handleSectionChange("kids")}
            className={`block ${
              isSelected("kids") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Kids
          </span>
          <span
            onClick={() => handleSectionChange("womens")}
            className={`block ${
              isSelected("womens") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Womens
          </span>
          <span
            onClick={() => handleSectionChange("pets")}
            className={`block ${
              isSelected("pets") ? "text-blue-500" : "text-gray-500"
            } hover:bg-blue-500 hover:text-white hover:rounded hover:px-2 hover:py-2`}
          >
            Pets
          </span>
        </div>
      </div>

      <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
        {renderSectionContent()}
      </div>
    </div>
  );
}

export default ProductSection;
