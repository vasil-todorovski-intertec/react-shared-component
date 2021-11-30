import React from "react";

import "./LimitOverlay.css";

export const getOverlayMessage = (coupon) => {
  if (coupon?.status === "SPENT_ALL_DAILY_COUPONS") {
    return "Maximale Downloadzahl erreicht";
  } else if (coupon?.isBrandCopiesLimitReached) {
    return "Maximale Downloadzahl pro Marke erreicht";
  } else if (
    new Date().getTime() > new Date(coupon?.validationDate).getTime() ||
    coupon?.status === "EXPIRED"
    // new Date().toISOString().slice(0, 10) >
    //   `${coupon?.validationDate.slice(0, 10)}`
  ) {
    return "Leider nicht mehr gültig";
  } else if (coupon?.status === "SOLD_OUT") {
    return "Maximale Downloadanzahl erreicht";
  } else if (coupon?.status === "DISCOUNT_CODE_NOT_FOUND") {
    return "Gutschein nicht gefunden";
  } else if (coupon?.status === "CONSUMER_NOT_FOUND") {
    return "Der Nutzer konnte nicht gefunden werden!";
  } else if (coupon?.status === "COUPON_NOT_FOUND") {
    return "Gutschein nicht gefunden";
  } else if (coupon?.status === "NO_ACTIVE_SUBSCRIPTION") {
    return "Du hast keine gültige Mitgliedschaft!";
  } else if (coupon?.status === "SERVER_ERROR") {
    return "Serverfehler!";
  } else if (coupon?.status === "AUTHENTICATION_ERROR") {
    return "Bei der Authentifizierung ist ein Fehler aufgetreten!";
  } else if (coupon?.status === "UNKNOWN_ERROR") {
    return "Unbekannter Fehler";
  } else {
    return "";
  }
};

const LimitOverlay = ({ message = "", className = "" }) => {
  return (
    message && (
      <div className={`LimitOverlay ${className}`}>
        <p>{message}</p>
      </div>
    )
  );
};
export default LimitOverlay;
