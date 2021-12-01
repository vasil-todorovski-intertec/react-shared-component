import React from "react";

function CouponButton({ coupon = {}, customButtonClass = "" }) {
  return coupon.couponCode ? (
    <div className={`CardHorizontal__coupon-code-btn ${customButtonClass}`}>
      <div className="coupon-code">{coupon.couponCode}</div>
      <div className="copy-btn">
        <p className="rabatte-button-brand">Code kopieren</p>
      </div>
    </div>
  ) : coupon.codeURL ? (
    <>
      <img
        src={coupon.codeURL}
        alt="Coupon image"
        className="col-12"
        id={`codeUrl-${coupon.codeURL}`}
      />
    </>
  ) : (
    <div className={`CardHorizontal__coupon-code-btn ${customButtonClass}`}>
      <p className="rabatte-button-brand">Gutscheincode</p>
    </div>
  );
}
export default CouponButton;
