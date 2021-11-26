import React from "react";
import NurInDenFilialenIcon from "../../icons/NurInDenFilialenIcon.jsx";
import NeukundenRabattIcon from "../../icons/NeukundenRabattIcon.jsx";

function CouponImageBadge({ className = "", coupon }) {
  return (
    <div>
      {coupon.isForNewCustomers && (
        <NeukundenRabattIcon className="image-badge" />
      )}
      {coupon.discountCodeType === "STATIONARY" && (
        <NurInDenFilialenIcon className="image-badge" />
      )}
    </div>
  );
}
export default CouponImageBadge;
