import React, { useState } from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";

const images = [
  "https://i.ibb.co/qCkd9jS/img6.jpg",
  "https://i.ibb.co/jrRb11q/img5.jpg",
  "https://i.ibb.co/NSwVv8D/img4.jpg",
  "https://i.ibb.co/Bq4Q0M8/img3.jpg",
  "https://i.ibb.co/jTQfmTq/img2.jpg",
];

const textData = [
  {
    title: "Komodo",
    discrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit, sed do elit tellus",
  },
  {
    title: "Kerala",
    discrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit, sed do elit tellus",
  },
  {
    title: "Matterhorn",
    discrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit, sed do elit tellus",
  },
  {
    title: "Cappado",
    discrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit, sed do elit tellus",
  },
  {
    title: "Malgovik",
    discrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit, sed do elit tellus",
  },
];

const backgrounds = [
  "https://i.ibb.co/jrRb11q/img5.jpg",
  "https://i.ibb.co/NSwVv8D/img4.jpg",
  "https://i.ibb.co/Bq4Q0M8/img3.jpg",
  "https://i.ibb.co/jTQfmTq/img2.jpg",
  "https://i.ibb.co/RNkk6L0/img1.jpg",
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [textIndex, settextIndex] = useState(0);

  const prevbackground = () => {};

  const prevImage = () => {
    setCurrentImageIndex((prevImageIndex) =>
      prevImageIndex === 0 ? images.length - 1 : prevImageIndex - 1
    );
    setCurrentBackgroundIndex((prevBackgroundIndex) =>
      prevBackgroundIndex === 0
        ? backgrounds.length - 1
        : prevBackgroundIndex - 1
    );
    settextIndex((prevtextIndex) =>
      prevtextIndex === 0 ? textData.length - 1 : prevtextIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((nextImageIndex) =>
      nextImageIndex === 4 ? 0 : nextImageIndex + 1
    );
    setCurrentBackgroundIndex((nextBackgroundIndex) =>
      nextBackgroundIndex === 4 ? 0 : nextBackgroundIndex + 1
    );
    settextIndex((nexttextIndex) =>
      nexttextIndex === 4 ? 0 : nexttextIndex + 1
    );
  };

  return (
    <div className="app">
      <div
        className="background"
        style={{
          backgroundImage: `url(${backgrounds[currentBackgroundIndex]})`,
        }}
      >
        <ImageSlider
          images={images}
          currentImageIndex={currentImageIndex}
          prevbackground={prevbackground}
          prev={prevImage}
          next={nextImage}
          text={textData[textIndex]}
        />
      </div>
    </div>
  );
}

export default App;
