import React, { useState, useEffect } from 'react';

function TextRecycler() {
  const texts = [
    "Clothes",
    "Shoes",
    "House",
    "Hardware",
    "Software",
    "Much More"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <p  key={currentTextIndex} className="animate__animated animate__fadeInDown pt-3">
      {texts[currentTextIndex]} 
    </p>
  );
}

export default TextRecycler;
