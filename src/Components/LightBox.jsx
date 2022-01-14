import React, { useState } from "react";
import PropTypes from "prop-types";
import SmallSliderImages from "./SliderThumbnail";
import "./../sass/components/LightBox.scss";

function LightBox({ images, setLightBoxState, lightBoxState }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    let length = images.length;
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(length - 1);
    }
  };

  const handleNextImage = () => {
    let length = images.length;
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
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div
      className={`lightbox ${lightBoxState === true ? "lightbox-visible" : ""}`}
    >
      <div className="modal">
        <button
          className="remove-lightbox"
          onClick={() => {
            setLightBoxState(false);
          }}
        >
          &times;
        </button>
        <div className="modal-content">
          <div id="slider-lightbox" style={url}>
            <div
              className={`white-circle-lightbox`}
              onClick={handlePreviousImage}
            >
              <img
                id="left-arrow"
                className="arrow-icon"
                src="./images/icon-previous.svg"
              />
            </div>
            <div className={`white-circle-lightbox`} onClick={handleNextImage}>
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
              images={images}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

LightBox.propTypes = {
  images: PropTypes.array.isRequired,
  setLightBoxState: PropTypes.func.isRequired,
  lightBoxState: PropTypes.bool.isRequired,
};

export default LightBox;
