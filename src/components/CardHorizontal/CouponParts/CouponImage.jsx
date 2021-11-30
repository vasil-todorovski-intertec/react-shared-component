import React from "react";
import LimitOverlay, { getOverlayMessage } from "../LimitOverlay";

function CouponImage({ className = "", coupon, children, imageUrl }) {
  return (
    <div className={`CardHorizontal__image ${className}`}>
      <img id={`couponImage-${imageUrl}`} src={imageUrl} alt="image" />
      {children}
      <LimitOverlay
        message={getOverlayMessage({
          status: coupon.status,
          isBrandCopiesLimitReached: coupon?.isBrandCopiesLimitReached,
          validationDate: coupon?.validationDate,
        })}
      />
    </div>
  );
}
export default CouponImage;
