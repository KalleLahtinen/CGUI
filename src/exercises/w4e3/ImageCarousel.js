import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Import the external CSS file

const images = [
    { url: 'https://images.freeimages.com/images/large-previews/ab3/puppy-2-1404644.jpg', caption: "Who's a good boy?" },
    { url: 'https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg', caption: 'Historic scenery' },
    { url: 'https://images.freeimages.com/images/large-previews/83f/paris-1213603.jpg', caption: 'Beautiful architecture' },
  ];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
        nextImage();
        } else if (event.key === 'ArrowLeft') {
        prevImage();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
  
  
    return (
        <div className="carousel-container">
          <img 
            className="carousel-img"
            src={images[currentImageIndex].url} 
            alt="Carousel"
          />
          <div className="carousel-caption">
            {images[currentImageIndex].caption}
          </div>
          <div className="carousel-index">
            {`${currentImageIndex + 1}/${images.length}`}
          </div>
        </div>
      );
};

export default ImageCarousel;