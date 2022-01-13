import PropTypes from "prop-types";
import React from "react";
import "./../sass/components/SecondaryButton.scss";

function SecondaryButton({ quantity, children, onClick }) {
  return (
    <button onClick={onClick} className="secondary-button" disabled={quantity}>
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryButton;
