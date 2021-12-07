import React from "react";

function CouponImage({ className = "", src, children }) {
  return (
    <div className={`CardHorizontal__image ${className}`}>
      <img
        id={`couponImage-${src}`}
        src={src ? src : "coupon_image_placeholder.png"}
        alt="image"
      />
      {children}
    </div>
  );
}
export default CouponImage;
