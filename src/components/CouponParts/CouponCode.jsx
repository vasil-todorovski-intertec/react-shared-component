import React from "react";

function CouponCode({ className = "", children }) {
  return (
    <div className={`CardHorizontal__coupon-code ${className}`}>{children}</div>
  );
}
export default CouponCode;
