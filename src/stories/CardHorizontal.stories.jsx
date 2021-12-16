import React, { useState } from "react";

import { CardHorizontal as CH } from "../components/CardHorizontal";

import "./CardHorizontal.stories.scss";

const coupons = [
  {
    brandId: "",
    brandLogo: "https://stg.captaincoupon.de/douglas.png",
    couponLink: "",
    couponQuality: {
      title: "NONE",
      label: "None",
      color: "gray",
      text: "CaptainCoupon did not yet provide feedback for this coupon.",
    },
    couponRegulations: "<p><br></p>",
    discountCodeType: "",
    discountType: "",
    discountValue: undefined,
    freeDescription: "",
    image: "https://stg.captaincoupon.de/coupon_image_placeholder.png",
    isForNewCustomers: false,
    isVisible: true,
    releaseDate: "12/15/2021 23:59:59",
    shortDescription: "",
    showOnHomePage: true,
    showOnHomePageUntilDate: null,
    validationDate: "12/31/2021 23:59:59",
  },
  {
    amountCondition: "keiner",
    brandId: 45,
    brandSlug: "drsmile",
    brandLogo:
      "https://captaincoupon.de/uploads/BrandPartner-1624975360766-BrandPartner-1610548224390-DrSMile-auf-CaptainCoupon.png",
    couponRegulations:
      "<p>Buche online einen Info-Termin in Deiner Nähe und <strong>nenne</strong> den Rabattcode bei Deinem Termin. Diese Aktion ist nicht mit anderen Aktionen kombinierbar. Die Barauszahlung ist nicht möglich.&nbsp;Wie oft einlösbar: Pro Person nur einmalig einlösbar.&nbsp;</p>",
    discountCodeType: "STATIONARY",
    discountType: "AMOUNT",
    discountValue: 300,
    id: 95,
    image:
      "https://captaincoupon.de/uploads/Coupon-1624975380114-Coupon-1610548377863-Gutscheincodes-Zahne-DrSmile.png",
    isBrandCopiesLimitReached: false,
    isFavourite: false,
    isForNewCustomers: false,
    status: "EXPIRED",
    validationDate: "12/31/2021 23:59:59",
  },
  {
    amountCondition: "AC",
    brandId: 261,
    brandLogo:
      "https://stg.captaincoupon.de/uploads/BrandPage-1635343822550-images(21).jpeg",
    brandSlug: "okt26",
    couponLink: "http://youtube.com",
    couponRegulations: "<p>Coupon regulations</p>",
    discountCodeType: "UNIQUE",
    discountType: "AMOUNT",
    discountValue: 99.99,
    id: 631,
    image:
      "https://stg.captaincoupon.de/uploads/Coupon-1635414057643-urn_aaid_sc_US_32618942-f605-4751-8d40-73bf35f06800.png",
    isBrandCopiesLimitReached: false,
    isFavourite: true,
    isForNewCustomers: false,
    status: "ACTIVE",
    validationDate: "11/22/2021 23:59:59",
  },
  {
    amountCondition: "Amount conditio",
    brandId: 211,
    brandLogo:
      "https://stg.captaincoupon.de/uploads/BrandPage-1634625322362-images(13).jpeg",
    brandSlug: "g23",
    couponLink: "https://www.adidas.com/us",
    couponRegulations: "<p>dedede</p>",
    discountCodeType: "GENERIC",
    discountType: "PERCENTAGE",
    discountValue: 1,
    id: 587,
    image:
      "https://stg.captaincoupon.de/uploads/Coupon-1634565589043-images(22).jpeg",
    isBrandCopiesLimitReached: false,
    isFavourite: false,
    isForNewCustomers: false,
    status: "EXPIRED",
    validationDate: "12/31/2021 23:59:59",
  },
];

export default {
  title: "App test",
};

export const CardHorizontal = () => {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className="background">
      {coupons.map((coupon, index) => (
        <CH
          key={coupon.id}
          coupon={coupon}
          handleLikeClick={() => setIsLiked((l) => !l)}
          isAuth={true}
          isLiked={isLiked}
          isTouchDevice={!!(index % 2)}
          status={coupon.id === 587 ? "NO_ACTIVE_SUBSCRIPTION" : ""}
          code={index === 2 ? "23874618461" : undefined}
        />
      ))}
    </div>
  );
};
