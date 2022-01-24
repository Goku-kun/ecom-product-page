import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../sass/components/Slider.scss";
import { selectCurrentProduct } from "../features/page/pageSlice";
import SliderThumbail from "./SliderThumbnail";
import LightBox from "./LightBox";

function Slider() {
  // The array of images will either come from props or redux
  // I tried a few approaches to managing the state and have more
  // questions than answers at this point

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightBoxState, setLightBoxState] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const imagesArray = useSelector(selectCurrentProduct).displayPictures;

  const handlePreviousImage = () => {
    let length = imagesArray.length;
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(length - 1);
    }
  };

  const handleNextImage = () => {
    let length = imagesArray.length;
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
    backgroundImage: `url(${imagesArray[currentImageIndex]})`,
  };

  return (
    <div className="slider-container" data-testid="slider-component-test">
      <div
        className="slider"
        tabIndex={0}
        style={url}
        onClick={() => {
          if (window.innerWidth > 1020) setLightBoxState(true);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            setLightBoxState(true);
          } else if (event.key === "Escape") setLightBoxState(false);
        }}
        data-testid="lightbox-visibility-test"
      >
        <div className={`white-circle`} onClick={handlePreviousImage}>
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
        images={imagesArray}
        setLightBoxState={setLightBoxState}
        lightBoxState={lightBoxState}
      />
      <div className="slider-photos">
        <SliderThumbail
          onClickThumbnail={onClickThumbnail}
          images={imagesArray}
          currentThumbnailActive={currentImageIndex}
        />
      </div>
    </div>
  );
}

export default Slider;
