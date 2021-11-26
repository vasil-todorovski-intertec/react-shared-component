import React from "react";

function BrandLogo({ className = "", src }) {
  return (
    <img
      src={src}
      id={`brandLogo-${src}`}
      className={`CardHorizontal__logo ${className}`}
    />
  );
}
export default BrandLogo;
