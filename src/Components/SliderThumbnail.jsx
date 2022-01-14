import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../sass/components/SliderThumbnail.scss";

function SmallSliderImages({ images, onClickThumbnail }) {
  const [focus, setFocus] = useState(Array(images.length).fill(false));
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

SmallSliderImages.propTypes = {
  images: PropTypes.array.isRequired,
  onClickThumbnail: PropTypes.func.isRequired,
};

export default SmallSliderImages;
