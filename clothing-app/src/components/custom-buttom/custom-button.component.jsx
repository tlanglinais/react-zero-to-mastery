import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-buttom`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
