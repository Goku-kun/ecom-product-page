import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./../sass/components/SliderThumbnail.scss";

function SliderThumbnail({ images, onClickThumbnail, currentThumbnailActive }) {
  let focusArray = Array(images.length).fill(false);
  focusArray[currentThumbnailActive] = true;
  const [focus, setFocus] = useState(focusArray);

  useEffect(() => {
    let focusArray = Array(images.length).fill(false);
    focusArray[currentThumbnailActive] = true;
    setFocus(focusArray);

    return () => {};
  }, [currentThumbnailActive]);
  return (
    <div className="small-images-container">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            className={`slider-thumbnail ${focus[index] ? "image-active" : ""}`}
            key={image}
            onClick={() => {
              onClickThumbnail(index);
              let newFocus = Array(images.length).fill(false);
              newFocus[index] = true;
              setFocus(newFocus);
            }}
          />
        );
      })}
    </div>
  );
}

SliderThumbnail.propTypes = {
  images: PropTypes.array.isRequired,
  onClickThumbnail: PropTypes.func.isRequired,
  currentThumbnailActive: PropTypes.number,
};

export default SliderThumbnail;
