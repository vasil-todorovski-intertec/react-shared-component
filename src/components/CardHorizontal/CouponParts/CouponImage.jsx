import React from "react";
import LimitOverlay from "../LimitOverlay";

function CouponImage({ className = "", coupon, children, imageUrl }) {
  return (
    <div className={`CardHorizontal__image ${className}`}>
      <img id={`couponImage-${imageUrl}`} src={imageUrl} alt="image" />
      {children}
      <LimitOverlay
        message={
          //   getOverlayMessage({
          //   status: coupon.status,
          //   isBrandCopiesLimitReached: coupon.isBrandCopiesLimitReached,
          // })
          "getOverlayMessage()"
        }
      />
    </div>
  );
}
export default CouponImage;
