import React from "react";
import PropTypes from "prop-types";
import "../sass/components/PrimaryButton.scss";

function PrimaryButton(props) {
  // can add a custom class in addition to main-button.
  // width will depend on context, so pass it as a prop.
  // handleCLick can be customized to whatever is needed.
  // using props.children inside the component ensures we can pass multiple child
  // elements into it (i.e. an icon plus text).

  const myClass = `main-button ${props.type}`;

  return (
    <button
      type="button"
      className={myClass}
      style={{ width: props.width }}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  type: PropTypes.string,
};

export default PrimaryButton;
