import React from "react";

function Discount({
  className = "",
  type = "PERCENTAGE",
  hasLongWords,
  children,
}) {
  return type === "FREE" ? (
    <div
      className={`CardHorizontal__discount-free ${
        hasLongWords ? "CardHorizontal__discount-free--long-words" : ""
      } ${className}`}
    >
      {children}
    </div>
  ) : (
    <div className={`CardHorizontal__discount ${className}`}>
      {type === "PERCENTAGE"
        ? children + "%"
        : (children % 1 != 0
            ? children.toLocaleString("de-DE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : children) + "€"}
    </div>
  );
}
export default Discount;
