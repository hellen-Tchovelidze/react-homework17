import React, { useState } from "react";
import mainPhoto from "../../../assets/images/mainPhoto.png";
import secendPhoto from "../../../assets/images/secendPhoto.png";
import therdPhoto from "../../../assets/images/therdPhoto.png";
import fourPhoto from "../../../assets/images/fourPhoto.png";

function ImageSlider() {
  const [activeImage, setActiveImage] = useState(mainPhoto);

  const images = [mainPhoto, secendPhoto, therdPhoto, fourPhoto];

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[500px] h-[400px] overflow-hidden mb-6 max-sm:w-[340px] max-sm:h-[300px]">
        <img
          src={activeImage}
          alt="active"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex gap-4 justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer transform transition-transform hover:scale-110 ${
              img === activeImage ? "opacity-100" : "opacity-60"
            }`}
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img}
              alt={`thumb-${index + 1}`}
              className="w-[80px] h-[80px] object-cover rounded-xl max-sm:hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
