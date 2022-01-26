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
      className={`lightbox ${
        lightBoxState === true ? "lightbox-visible" : "lightbox-invisible"
      }`}
      data-testid="lightbox-component-test"
    >
      <div
        className="modal"
        onKeyUp={(event) => {
          if (event.key === "Escape") setLightBoxState(false);
        }}
      >
        <button
          data-testid="lightbox-hide-test"
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
          <div
            id="slider-lightbox"
            className="slider-lightbox"
            style={url}
            data-testid="lightbox-mainimage-test"
          >
            <div
              className={`white-circle-lightbox`}
              onClick={handlePreviousImage}
              onKeyUp={(event) => {
                if (event.key === "Enter") handlePreviousImage();
              }}
              tabIndex={0}
            >
              <svg
                viewBox="0 0 12 18"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`white-circle-lightbox`}
              tabIndex={0}
              onClick={handleNextImage}
              onKeyUp={(event) => {
                if (event.key === "Enter") handleNextImage();
              }}
              data-testid="lightbox-rarrow-test"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 18"
                className="arrow-icon"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
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
