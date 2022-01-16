import PropTypes from "prop-types";
import React from "react";
import "./../sass/components/SecondaryButton.scss";

function SecondaryButton({ disabled, children, onClick }) {
  return (
    <button onClick={onClick} className="secondary-button" disabled={disabled}>
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryButton;
