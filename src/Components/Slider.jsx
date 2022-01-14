import React, { useState } from "react";
import PropTypes from "prop-types";
import "../sass/components/Slider.scss";
import SmallSliderImages from "./SliderThumbnail";
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
      <LightBox
        images={props.imagesArray}
        setLightBoxState={setLightBoxState}
        lightBoxState={lightBoxState}
      />
      <div id="slider" style={url} onClick={() => setLightBoxState(true)}>
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
        <div
          className={`white-circle ${
            props.type === "lightbox" ? "lightbox-show-button" : ""
          }`}
          onClick={handleNextImage}
        >
          <img
            id="right-arrow"
            className="arrow-icon"
            src="./images/icon-next.svg"
          />
        </div>
      </div>
      <div className="slider-photos">
        <SmallSliderImages
          onClickThumbnail={onClickThumbnail}
          images={props.imagesArray}
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  imagesArray: PropTypes.array.isRequired,
  type: PropTypes.string,
};
