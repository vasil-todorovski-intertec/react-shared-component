import React from "react";
import {
  CouponImage,
  BrandLogo,
  // Discount,
  // Heading,
  // Description,
  // CouponButton,
  Like,
  CouponImageBadge,
} from "./CouponParts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CardHorizontal.css";

// function createMarkup(value) {
//   return {
//     __html: value.toString(),
//   };
// }

// const Centered = ({ className = "", children }) => {
//   return (
//     <div className={`Centered ${className}`}>
//       <div className="Centered__children">{children}</div>
//     </div>
//   );
// };

export const CardHorizontal = ({ coupon, className = "" }) => {
  return coupon ? (
    <div className="container pad-lr-10">
      <div className="row">
        <div className="col-lg-8 col-12" id="coupons">
          <div className={`CardHorizontal ${className}`}>
            <CouponImage coupon={coupon} imageUrl={coupon.imageUrl}>
              <CouponImageBadge coupon={coupon} />
            </CouponImage>
            <div className="CardHorizontal__details">
              <BrandLogo src={coupon.brandLogo} />
              {/* <Discount type={coupon.discountType}>
                {coupon.discountType === "FREE"
                  ? coupon.freeDescription
                  : coupon.discountValue}
              </Discount>
              <Heading>
                Mindestbestellwert:{" "}
                {coupon &&
                coupon.amountCondition &&
                coupon.amountCondition !== 0 ? (
                  <b>{coupon.amountCondition.toLocaleString("de-DE")}</b>
                ) : (
                  <b>keiner</b>
                )}
                <br />
                Gültig bis:{" "}
                <b>
                  {Intl.DateTimeFormat("de-DE", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date(coupon.validationDate))}
                </b>
              </Heading>
              <Description id={coupon.id}>
                <div
                  style={{
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                  dangerouslySetInnerHTML={createMarkup(
                    coupon.couponRegulations
                  )}
                ></div>
              </Description>
              <CouponButton
                coupon={{
                  ...coupon,
                  ...(coupon.code && { code: coupon.code }),
                  ...(coupon.codeURL && { codeURL: coupon.codeURL }),
                }}
              /> */}
              <Like isLiked={coupon.isFavourite} id={coupon.id}></Like>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
