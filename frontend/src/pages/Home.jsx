import RightArrow from "../components/RightArrow";
import ProductSection from "../components/ProductSection";
import PureCount from "../components/PureCount";
import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Globe from "../models/Globe";
import FAQ from "../components/FAQ";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Home = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const formUrl = import.meta.env.VITE_APP_URI_CONTACT_FORM;

    try {
      const response = await axios.post(`${formUrl}`, {
        Name,
        Email,
        Message,
      });
      if (response.status === 201) {
        console.log(response.data);
        toast.success("email sent successfully to team", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (response.status === 200) {
        toast.error("Error sending message", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* FIRST SECTION START */}
      <div className="w-full bg-center bg-cover">
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src="../src/assets/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl mb-4">
              welcome to <span className="text-blue-400">Shop360</span> An
              In-House 360<sup>*</sup> Experience
            </h1>
            <a
              href="login"
              className="w-full h-full px-5 py-2 my-10 text-sm font-medium text-white bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
      {/* FIRST SECTION END */}

      {/* SECOND SECTION START */}
      <div className="container px-2 py-16">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full h-96 mt-6 lg:mt-0 lg:w-1/2">
            <Canvas
              camera={{
                fov: 75,
                position: [164.04, 62.01, 35.59],
                near: 0.1,
                far: 25000,
              }}
            >
              <ambientLight intensity={1} />
              <directionalLight intensity={2} position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Center>
                  <Globe />
                </Center>
              </Suspense>
              <OrbitControls
                minDistance={200}
                enableZoom={false}
                rotateSpeed={0.6}
                enablePan={false}
              />
            </Canvas>
          </div>
          <PureCount />
        </div>
      </div>
      {/* SECOND SECTION END */}

      {/* THIRD SECTION START */}
      <h1 className="ml-20 max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
        Explore The Hand Picked Just For You:
      </h1>
      <div className="flex mx-20 items-center gap-9">
        <div
          className="w-1/5 h-100 px-8 py-4 bg-white rounded-lg shadow-md categoriescard"
          style={{ height: "100+'px'" }}
        >
          <div className="flex items-center justify-between">
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/150/000000/external-hanger-clothes-and-fashion-kiranshastry-gradient-kiranshastry.png"
              alt=""
              className="animate__animated animate__swing animate__slow animate__repeat-3"
            ></img>
          </div>
          <h1 className="text-lg text-black font-semibold mt-3">
            Clothes &nbsp;
            <RightArrow />
          </h1>
          <h2 className=" text-md mt-3">
            We Have A Widre Range Of Choice For Men, Women, Kids, Pets,
            Etc...Check Out The Rage All In 360 View.
          </h2>
        </div>

        <div
          className="w-1/5 px-8 py-4 bg-white rounded-lg shadow-md categoriescard"
          style={{ height: "100+'px'" }}
        >
          <div className="flex items-center justify-between">
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/ios/150/22C3E6/mens-shoe.png"
              alt="shoes"
              className="animate__animated  animate__rotateInDownLeft animate__slow animate__repeat-3"
            ></img>
          </div>
          <h1 className="text-lg text-black font-semibold mt-3">
            Footwear &nbsp;
            <RightArrow />
          </h1>
          <h2 className=" text-md mt-3">
            Be It Shoes, Sandals, Chappals, Loofers, Ankle Neck's, We Got It
            All.Check The FIt's Now.
          </h2>
        </div>

        <div
          className="w-1/5 h-full px-8 py-4 bg-white rounded-lg shadow-md categoriescard"
          style={{ height: "100+'px'" }}
        >
          <div className="flex items-center justify-between">
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/ios/150/22C3E6/umbrella.png"
              alt="umbrella"
              className="animate__animated  animate__zoomInUp  animate__slow animate__repeat-3"
            ></img>
          </div>
          <h1 className="text-lg text-black font-semibold mt-3">
            Umbrella &nbsp;
            <RightArrow />
          </h1>
          <h2 className=" text-md mt-3">
            Raining Outside? Shinny Day? No Problem We Got You Covered.Thanks To
            Our Umbrella Range.
          </h2>
        </div>

        <div
          className="w-1/5 h-full px-8 py-4 bg-white rounded-lg shadow-md categoriescard"
          style={{ height: "100+'px'" }}
        >
          <div className="flex items-center justify-between">
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/ios/150/22C3E6/network-gateway.png"
              alt="computer hardware"
              className="animate__animated  animate__bounceIn animate__slow animate__repeat-3"
            ></img>
          </div>
          <h1 className="text-lg text-black font-semibold mt-3">
            IT Hardware &nbsp;
            <RightArrow />
          </h1>
          <h2 className=" text-md mt-3">
            Got Enough Ram? Processor? Server? Graphics Cards? Pc Cabinet's?
            .......
          </h2>
        </div>

        <div
          className="w-1/5 h-full px-8 py-4 bg-white rounded-lg shadow-md categoriescard"
          style={{ height: "100+'px'" }}
        >
          <div className="flex items-center justify-between">
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/ios/150/22C3E6/software-box.png"
              alt="computer software"
              className="animate__animated  animate__fadeInUp animate__slow animate__repeat-3"
            ></img>
          </div>
          <h1 className="text-lg text-black font-semibold mt-3">
            Shoes &nbsp;
            <RightArrow />
          </h1>
          <h2 className=" text-md mt-3">
            Windows 11, Microsoft Office 365, MineCraft, GTA-5, Adobe Photoshop,
            Premier Pro, Etc...
          </h2>
        </div>
      </div>

      {/* THIRD SECTION END */}

      {/* FOURTH SCETION SATRT */}
      <section className="bg-white">
        <div className="container flex flex-col items-center px-4 py-20 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
            Bring your Online Shoping to the{" "}
            <span className="text-blue-500">Next Level.</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 text-lg">
            We Have Re-Thought The Online Shoping Experienece To A Next Level
            Bring The Globe Of Products Areound You. All We Ask You To Do Is
            Spin-Around.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
      {/* FOURTH SECTION END */}

      {/* FIFTH SECTION SATRT */}
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:ml-10">
            Table of Collections
          </h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-18">
            <ProductSection></ProductSection>
          </div>
        </div>
      </section>
      {/* FIFTH SECTION END */}

      {/* SIXTH SECTION START */}
      <FAQ />
      {/* SIXTH SECTION END */}

      {/* SEVENTH SECTION SATRT */}
      <section className="bg-white ">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:ml-8">
            Why Sell With Us
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-12 my-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
              <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                Start Instantly
              </h1>

              <p className="mt-2 text-gray-500 ">
                In order to get started all you have to do is just create and
                update your inventory.done! we pick, we pack, we ship for you.
              </p>
            </div>

            <div>
              <svg className="w-10 h-10" viewBox="0 0 30 30" fill="none">
                <path
                  d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z"
                  fill="#2D3748"
                />
                <path
                  d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z"
                  fill="#4299E1"
                />
                <path
                  d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z"
                  fill="#4299E1"
                />
              </svg>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                Fully Responsive Site
              </h1>

              <p className="mt-2 text-gray-500 ">
                Our Site is fully responsive with multi platoform support.which
                renders the customer from all devices like smartphone, computer,
                laptop, etc with 99.99% of uptime.
              </p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                Multi Mode Shipping Integration
              </h1>

              <p className="mt-2 text-gray-500 ">
                We have tied up multiple Shipping frieght companies. giving our
                customers an competetive pocket friendly devliveryies and easy
                returns.
              </p>
            </div>
          </div>
          <center>
            <button className="bg-blue-500 rounded px-4 mt-5 py-5 text-white categoriescard">
              <a href="login">
                {" "}
                Get Started For Free <RightArrow />
              </a>
            </button>
          </center>
        </div>
      </section>
      {/* SEVENTH SECTION END */}

      {/* EIGTH SECTION START */}
      <TestimonialCarousel />
      {/* EIGHTH SECTION END */}

      {/* NINTH SECTION START */}
      <section className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900">
        <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6 pl-16">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Get in touch
              </h1>

              <p className="max-w-xl mt-6">
                Ask us everything and we would love to hear from you
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">India</span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    12345 67890
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    chirubhai@domain.com
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-white text-lg">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-black"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-black"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-green-500"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-pink-500"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-pink-500"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-threads"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700 ">
                  Contact form
                </h1>
                <form className="mt-4" onSubmit={submitForm}>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Full Name
                    </label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Sweet Name Please"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Email address
                    </label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email Id Please"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Message
                    </label>
                    <textarea
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      id="message"
                      name="message"
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    get in touch
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NINTH SECTION END */}
    </div>
  );
};

export default Home;
