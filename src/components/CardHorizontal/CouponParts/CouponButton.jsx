import React, { useState, useEffect } from "react";

import { htmlToPngDataUri } from "../utils/htmlToImage.js";
import { copyTextToClipboard } from "../utils/helpers.js";

export const wrapCouponRegulations = (couponReg, fontSize = 12) =>
  `<div style="word-wrap:break-word; text-align:center; margin:0px; padding:0px; font-size:${fontSize}px; font-family:Montserrat; color: #000000">${couponReg}</div>`;

function CouponButton({
  coupon = {},
  customButtonClass = "",
  onClick = () => {},
  addMessage,
  PDFDownloadButton,
}) {
  const [regUri, setRegUri] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      if (coupon.codeURL) {
        const uri = await htmlToPngDataUri(
          wrapCouponRegulations(coupon.couponRegulations, 13),
          300,
          document.getElementById("htmlToPrint-" + coupon.id).offsetHeight
        );
        setRegUri(uri);
      }
    })();
  }, [coupon.codeURL]);

  return coupon.code ? (
    <>
      <div className={`CardHorizontal__coupon-code-btn ${customButtonClass}`}>
        <div className="coupon-code">{coupon.code}</div>
        <div
          className="copy-btn"
          onClick={() => {
            copyTextToClipboard(coupon.code);
            addMessage("Code erfolgreich kopiert!", "success");
          }}
        >
          <p className="rabatte-button-brand">Code kopieren</p>
        </div>
      </div>
      <a
        href={coupon.couponLink}
        target="_blank"
        className={"btn CardHorizontal__zum-shop-btn"}
      >
        Zum Shop
      </a>
    </>
  ) : coupon.codeURL ? (
    <>
      <img
        src={coupon.codeURL}
        alt="Coupon image"
        // className="col-12"
        id={`codeUrl-${coupon.codeURL}`}
        onLoad={() => setImgLoaded(true)}
      />
      <div className="pdf-btn">
        {regUri && imgLoaded && (
          <PDFDownloadButton {...coupon} couponRegulations={regUri} />
        )}
      </div>
    </>
  ) : (
    <div
      className={`CardHorizontal__coupon-code-btn ${customButtonClass}`}
      onClick={onClick}
    >
      <p className="rabatte-button-brand">Gutscheincode</p>
    </div>
  );
}
export default CouponButton;
