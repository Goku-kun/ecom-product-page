import React, { useState } from "react";
import PropTypes from "prop-types";
import "../sass/components/Slider.scss";
import SliderThumbail from "./SliderThumbnail";
import LightBox from "./LightBox";

export default function Slider(props) {
  // The array of images will either come from props or redux
  // I tried a few approaches to managing the state and have more
  // questions than answers at this point

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightBoxState, setLightBoxState] = useState(false);

  const handlePreviousImage = () => {
    let length = props.imagesArray.length;
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(length - 1);
    }
  };

  const handleNextImage = () => {
    let length = props.imagesArray.length;
    if (currentImageIndex < length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  function onClickThumbnail(index) {
    setCurrentImageIndex(index);
  }

  const url = {
    backgroundImage: `url(${props.imagesArray[currentImageIndex]})`,
  };

  return (
    <div className="slider-container">
      <div
        id="slider"
        tabIndex={0}
        style={url}
        onClick={() => {
          if (window.innerWidth > 1400) setLightBoxState(true);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            setLightBoxState(true);
          } else if (event.key === "Escape") setLightBoxState(false);
        }}
      >
        <div
          className={`white-circle ${
            props.type === "lightbox" ? "lightbox-show-button" : ""
          }`}
          onClick={handlePreviousImage}
        >
          <img
            id="left-arrow"
            className="arrow-icon"
            src="./images/icon-previous.svg"
          />
        </div>
        <div className={`white-circle`} onClick={handleNextImage}>
          <img
            id="right-arrow"
            className="arrow-icon"
            src="./images/icon-next.svg"
          />
        </div>
      </div>
      <LightBox
        images={props.imagesArray}
        setLightBoxState={setLightBoxState}
        lightBoxState={lightBoxState}
      />
      <div className="slider-photos">
        <SliderThumbail
          onClickThumbnail={onClickThumbnail}
          images={props.imagesArray}
          currentThumbnailActive={currentImageIndex}
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  imagesArray: PropTypes.array.isRequired,
  type: PropTypes.string,
};
