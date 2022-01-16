import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../sass/components/LightBox.scss";
import SliderThumbnail from "./SliderThumbnail";

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
          onKeyUp={(event) => {
            if (event.key === "Enter") setLightBoxState(false);
          }}
          tabIndex={0}
        >
          &times;
        </button>
        <div className="modal-content">
          <div id="slider-lightbox" style={url}>
            <div
              className={`white-circle-lightbox`}
              onClick={handlePreviousImage}
              onKeyUp={(event) => {
                if (event.key === "Enter") handlePreviousImage();
              }}
              tabIndex={0}
            >
              <img
                id="left-arrow"
                className="arrow-icon"
                src="./images/icon-previous.svg"
              />
            </div>
            <div
              className={`white-circle-lightbox`}
              tabIndex={0}
              onClick={handleNextImage}
              onKeyUp={(event) => {
                if (event.key === "Enter") handleNextImage();
              }}
            >
              <img
                id="right-arrow"
                className="arrow-icon"
                src="./images/icon-next.svg"
              />
            </div>
          </div>
          <div className="slider-photos">
            <SliderThumbnail
              onClickThumbnail={onClickThumbnail}
              images={images}
              currentThumbnailActive={currentImageIndex}
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
