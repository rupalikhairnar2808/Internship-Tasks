import React, { useState, useEffect } from 'react';
import './App.css';

// Countdown Timer Component
const CountdownTimer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(duration); // Reset after expiration
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, duration]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      {timeLeft <= 0 ? 'Event Expired!' : `${hours}h ${minutes}m ${seconds}s`}
    </div>
  );
};

// Product Card Component with Hover Effects
const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="images/product-img.jpg"
        alt="Product"
      />
      <div className="product-info">
        <h3 className="product-title">Sample Product</h3>
        <p className="product-price">$29.99</p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

// Image Gallery Component with Filters
const ImageGallery = () => {
  const [category, setCategory] = useState('all');
  
  const images = [  
    { src: "images/art1.jpg", category: "art"}
    , { src: "images/art2.jpg", category: "art"}
    , { src: "images/nature-1.jpg", category: "Nature"}
    , { src: "images/nature-2.jpg", category: "Nature"}
    , { src: "images/tech1.jpg", category: "Technology"}
    , { src: "images/tech1.jpg", category: "Technology"}
  
  ];

  const handleFilter = (filter) => {
    setCategory(filter);
  };

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('Nature')}>Nature</button>
        <button onClick={() => handleFilter('Technology')}>Technology</button>
        <button onClick={() => handleFilter('art')}>Art</button>
      </div>

      <div className="gallery">
        {images
          .filter((image) => category === 'all' || image.category === category)
          .map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.category} className="gallery-image" />
            </div>
          ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Interactive Components</h1>
      <CountdownTimer duration={10} />
      <ProductCard />
      <ImageGallery />
    </div>
  );
};

export default App;
