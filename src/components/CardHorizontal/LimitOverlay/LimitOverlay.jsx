import React from "react";

import "./LimitOverlay.css";

export const getOverlayMessage = (coupon) => {
  if (coupon.status === "SPENT_ALL_DAILY_COUPONS") {
    return "Maximale Downloadzahl erreicht";
  } else if (coupon.isBrandCopiesLimitReached) {
    return "Maximale Downloadzahl pro Marke erreicht";
  } else {
    switch (coupon.status) {
      case "EXPIRED":
        return "Leider nicht mehr gültig";
      case "SOLD_OUT":
        return "Maximale Downloadanzahl erreicht";
      case "DISCOUNT_CODE_NOT_FOUND":
        return "Gutschein nicht gefunden";
      case "CONSUMER_NOT_FOUND":
        return "Der Nutzer konnte nicht gefunden werden!";
      case "COUPON_NOT_FOUND":
        return "Gutschein nicht gefunden";
      case "NO_ACTIVE_SUBSCRIPTION":
        return "Du hast keine gültige Mitgliedschaft!";
      case "SERVER_ERROR":
        return "Serverfehler!";
      case "AUTHENTICATION_ERROR":
        return "Bei der Authentifizierung ist ein Fehler aufgetreten!";
      case "UNKNOWN_ERROR":
        return "Unbekannter Fehler";
      default:
        return "";
    }
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
