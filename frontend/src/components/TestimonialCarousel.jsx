import React, { useState } from 'react';

function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: 'Shop360 Is The Best',
      feedback:
        'Shop360 helped us increase our sale drastically. It is the only space where we see some drastic sales apart from our other equally well-reputed channels. Thanks to Shop360 for making this possible. I sincerely would like to further our interests with Shop360 more in the near future.',
      author: 'Peter Shananighan',
      position: 'Marketing Manager at Amazonia Labs Pvt.Ltc.',
      image: 'https://plus.unsplash.com/premium_photo-1661265882272-baf497d7a0a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote: 'The Best Site Ever',
      feedback:
        'I Shop In Shop360 So Often. Thier Delivery Is Always On Time And Thier Prices Are Most Affordable.Loved Shoping.',
      author: 'Alina Markz',
      position: 'Citizen Based Out Of Maldives',
      image:'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const totalSlides = testimonials.length;

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-blue-500 lg:block"></div>

        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">customers</span> <br></br> are saying
          </h1>

          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img className="testimonial-image object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"  src={testimonials[currentSlide].image} alt=""></img>

            <div className="mt-8 lg:px-10 lg:mt-0 testimonial-content">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                {testimonials[currentSlide].quote}
              </h1>

              <p className="max-w-lg mt-6 text-white">
                {testimonials[currentSlide].feedback}
              </p>

              <h3 className="mt-6 text-lg font-medium text-white">{testimonials[currentSlide].author}</h3>
              <p className="text-gray-600 dark:text-gray-300">  {testimonials[currentSlide].position}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-12 lg:justify-start">
            <button  onClick={goToPrevSlide} title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button onClick={goToNextSlide} title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
