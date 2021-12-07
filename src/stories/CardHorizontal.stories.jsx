import React from "react";
import { storiesOf } from "@storybook/react";

import { CardHorizontal } from "../components/CardHorizontal";

import "./CardHorizontal.stories.scss";

const stories = storiesOf("App test", module);

const coupon = {
  amountCondition: "keiner",
  brandId: 45,
  brandSlug: "drsmile",
  brandLogo:
    "https://captaincoupon.de/uploads/BrandPartner-1624975360766-BrandPartner-1610548224390-DrSMile-auf-CaptainCoupon.png",
  couponRegulations:
    "<p>Buche online einen Info-Termin in Deiner Nähe und <strong>nenne</strong> den Rabattcode bei Deinem Termin. Diese Aktion ist nicht mit anderen Aktionen kombinierbar. Die Barauszahlung ist nicht möglich.&nbsp;Wie oft einlösbar: Pro Person nur einmalig einlösbar.&nbsp;</p>",
  discountCodeType: "GENERIC",
  discountType: "AMOUNT",
  discountValue: 300,
  id: 95,
  image:
    "https://captaincoupon.de/uploads/Coupon-1624975380114-Coupon-1610548377863-Gutscheincodes-Zahne-DrSmile.png",
  isForNewCustomers: false,
  status: "EXPIRED",
  validationDate: "12/31/2021 23:59:59",
};

const coupons = [
  {
    amountCondition: "keiner",
    brandId: 45,
    brandSlug: "drsmile",
    brandLogo:
      "https://captaincoupon.de/uploads/BrandPartner-1624975360766-BrandPartner-1610548224390-DrSMile-auf-CaptainCoupon.png",
    couponRegulations:
      "<p>Buche online einen Info-Termin in Deiner Nähe und <strong>nenne</strong> den Rabattcode bei Deinem Termin. Diese Aktion ist nicht mit anderen Aktionen kombinierbar. Die Barauszahlung ist nicht möglich.&nbsp;Wie oft einlösbar: Pro Person nur einmalig einlösbar.&nbsp;</p>",
    discountCodeType: "GENERIC",
    discountType: "AMOUNT",
    discountValue: 300,
    id: 95,
    image:
      "https://captaincoupon.de/uploads/Coupon-1624975380114-Coupon-1610548377863-Gutscheincodes-Zahne-DrSmile.png",
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
    isForNewCustomers: false,
    status: "EXPIRED",
    validationDate: "11/22/2021 23:59:59",
  },
];

// const [liked, setLiked] = useState(false);
const state = (function () {
  let isLiked = false;

  function setIsLiked() {
    isLiked = !isLiked;
  }

  return {
    isLiked,
    setIsLiked,
  };
})();

stories.add("Card Horizontal", () => (
  <div className="background">
    {coupons.map((coupon, index) => (
      <div className="col-lg-8 col-12" id="coupons">
        <CardHorizontal
          key={coupon.id}
          coupon={coupon}
          imageUrl=""
          brandLogo=""
          handleLikeClick={state.setIsLiked}
          isAuth={true}
          isLiked={state.isLiked}
          isTouchDevice={!!(index % 2)}
        />
      </div>
    ))}
  </div>
));
