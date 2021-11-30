import React from "react";

function Discount({ className = "", type = "PERCENTAGE", children }) {
  return type === "FREE" ? (
    <div className={`CardHorizontal__discount-free ${className}`}>
      {children}
    </div>
  ) : (
    <div className={`CardHorizontal__discount ${className}`}>
      {children
        ? type === "PERCENTAGE"
          ? children + "%"
          : (children % 1 != 0
              ? children.toLocaleString("de-DE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : children) + "€"
        : null}
    </div>
  );
}
export default Discount;
