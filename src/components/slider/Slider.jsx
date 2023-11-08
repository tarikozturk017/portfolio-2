import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./slider.scss";

import { IMAGES } from "./Images";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }), // Missing closing parenthesis here
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Slider = () => {
  const [imageCount, setImageCount] = useState(0);

  const activeImageIndex = imageCount;

  const swipeToImage = (swipeDirection) => {
    const newIndex = imageCount + swipeDirection;
    if (newIndex >= 0 && newIndex < IMAGES.length) {
      setImageCount(newIndex);
    }
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    setImageCount(imageId);
  };

  return (
    <main>
      <div className="slider-container">
        <div className="slider">
          <AnimatePresence initial={false}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
              }}
              custom={imageCount}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>

        <div className="buttons">
          <button onClick={() => swipeToImage(-1)}>PREV</button>
          <button onClick={() => swipeToImage(1)}>NEXT</button>
        </div>
      </div>

      <div className="thumbnails">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container"
          >
            <img src={image.imageSrc} alt="Musician" />
            <div
              className={`active-indicator ${
                image.id === activeImageIndex ? "active" : null
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Slider;
