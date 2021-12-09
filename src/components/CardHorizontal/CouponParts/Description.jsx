import React, { useState, useEffect } from "react";

import { htmlToPngDataUri } from "../utils/htmlToImage";

export const wrapCouponRegulations = (couponReg, fontSize = 12) =>
  `<div style="word-wrap:break-word; text-align:center; margin:0px; padding:0px; font-size:${fontSize}px; font-family:Montserrat; color: #000000">${couponReg}</div>`;

function Description({ className = "", reg, id, children }) {
  const [regUri, setRegUri] = useState(null);
  useEffect(() => {
    (async function () {
      if (reg) {
        const uri = await htmlToPngDataUri(
          wrapCouponRegulations(reg, 13),
          300,
          document.getElementById("htmlToPrint-" + id).offsetHeight
        );
        setRegUri(uri);
      }
    })();
  }, []);

  return (
    <div
      id={"htmlToPrint-" + id}
      className={`CardHorizontal__description ${className}`}
    >
      {reg ? regUri && <img src={regUri} /> : children}
    </div>
  );
}
export default Description;
