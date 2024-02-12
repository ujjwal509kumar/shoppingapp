import React, { useState } from 'react';

function FAQ() {
  const [expanded, setExpanded] = useState({});

  const toggleExpansion = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:ml-10">
          Frequently asked questions
        </h1>

        <div className="mt-8 space-y-8 lg:ml-12">
          {faqData.map((item, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-lg ">
              <button
                className="flex items-center justify-between w-full cursor-pointer"
                onClick={() => toggleExpansion(index)}
              >
                <h1 className="font-semibold text-gray-700 ">{item.question}</h1>

                <span className="text-white bg-blue-500 rounded-full">
                  {expanded[index] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                  
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                  )}
                </span>
              </button>

              {expanded[index] && (
                <p className="mt-6 text-sm text-gray-500 ">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods, including COD(Cash On Delivery), credit/debit cards (Rupay, Visa, Mastercard, American Express), PayPal, and bank transfers.',
  },
  {
    question: 'How long does shipping take?',
    answer: ' Shipping times vary depending on your location and the shipping method chosen. Generally, orders are processed and shipped within 1-3 business days. Once shipped, domestic orders typically arrive within 3-7 business days, while international orders may take longer.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return your item(s) within 7 days (including non business days) of delivery for a full refund or exchange. Please note that items must be in their original condition with tags attached.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to track your order on our website or through the carriers website.',
  },
  {
    question: 'Do you offer gift wrapping services?',
    answer: 'Yes, we offer gift wrapping services for an additional fee. During checkout, you will have the option to add gift wrapping to your order.',
  },
];

export default FAQ;
