import React from "react";
import DownloadIcon from "../../icons/DownloadIcon";

function BarCode({ className = "", children }) {
  return (
    <div className={`CardHorizontal__barcode ${className}`}>
      {children}
      <div className="CardHorizontal__download">
        <DownloadIcon />
      </div>
    </div>
  );
}
export default BarCode;
