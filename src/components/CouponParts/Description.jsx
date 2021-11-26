import React from "react";
export const wrapCouponRegulations = (couponReg, fontSize = 12) =>
  `<div style="word-wrap:break-word; text-align:center; margin:0px; padding:0px; font-size:${fontSize}px; font-family:Montserrat; color: #000000">${couponReg}</div>`;

function Description({ className = "", reg, id, children }) {
  return (
    <div
      id={"htmlToPrint-" + id}
      className={`CardHorizontal__description ${className}`}
    >
      {children}
    </div>
  );
}
export default Description;
