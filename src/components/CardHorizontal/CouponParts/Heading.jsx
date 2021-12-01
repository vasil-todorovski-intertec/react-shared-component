import React from "react";

function Heading({ className = "", children }) {
  return (
    <div className={`CardHorizontal__heading ${className}`}>{children}</div>
  );
}
export default Heading;
