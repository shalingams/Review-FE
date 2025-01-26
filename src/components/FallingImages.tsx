import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FallingImages = () => {
  const [images, setImages] = useState<{ id: number; url: string; left: number }[]>([]);

  // List of image URLs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const imageUrls = [
    "🥐",
    "🥙",
    "🥘",
    "🍳",
    "🍲",
    "🥗",
    "🍤",
    "🍥",
    "🍜",
    "🍚",
    "🍱",
    "🍰",
    "🍟",
    "🍔",
    "🥓"
  ];

  useEffect(() => {
    // Simulate falling images
    const interval = setInterval(() => {
      setImages((prevImages) => [
        ...prevImages,
        {
          id: Math.random(),
          url: imageUrls[Math.floor(Math.random() * imageUrls.length)],
          left: Math.random() * 90,
        },
      ]);
    }, 500);

    // Stop after a certain number of images
    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, [imageUrls]);

  const handleAnimationComplete = (id: number) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  }

  return (
    <div className="absolute h-screen overflow-hidden w-screen top-0 left-0">
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="absolute w-12 h-12 text-6xl"
          initial={{
            top: -50, // Start above the viewport
            left: `${image.left}%`, // Random horizontal position
          }}
          animate={{
            top: "100%", // Move out of the viewport
          }}
          transition={{
            duration: 3, // Falling duration
            ease: "easeOut",
          }}
          onAnimationComplete={() => handleAnimationComplete(image.id)} // Remove after animation
        >{image.url}</motion.div>
      ))}
    </div>
  );
};

export default FallingImages;
