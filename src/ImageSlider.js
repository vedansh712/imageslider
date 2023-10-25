import React from "react";
import "./ImageSlider.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ImageSlider = ({ images, currentImageIndex, prev, next, text }) => {
  return (
    <div className="container">
      <div className="textDisplay">
        <h1>{text.title}</h1>
        <p className="spam-text">{text.discrip}</p>
      </div>

      <div className="imageDisplay">
        <div className="image-row">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Img ${index}`}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>
        <div className="btn">
          <button onClick={prev}>Previous </button>
          <button onClick={next}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
