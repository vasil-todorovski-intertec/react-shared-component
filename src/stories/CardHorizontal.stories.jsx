import React from "react";
import { storiesOf } from "@storybook/react";

import { CardHorizontal } from "../components/CardHorizontal";

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
  imageUrl:
    "https://captaincoupon.de/uploads/Coupon-1624975380114-Coupon-1610548377863-Gutscheincodes-Zahne-DrSmile.png",
  isForNewCustomers: false,
  status: "ACTIVE",
  validationDate: "12/31/2021 23:59:59",
};

stories.add("Card Horizontal", () => (
  <CardHorizontal coupon={coupon} imageUrl="" brandLogo="" />
));
