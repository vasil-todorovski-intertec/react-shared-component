import React from "react";

import "./Like.css";

function OutlineHeartIcon(props) {
  return (
    <svg
      data-name="Ebene 1"
      viewBox="0 0 250 250"
      width="1em"
      height="1em"
      {...props}
    >
      <circle
        cx={124.37}
        cy={125.79}
        r={121.21}
        fill="#fff"
        data-name="Ellipse 4"
      />
      <g data-name="Gruppe 245">
        <g data-name="Gruppe 245-2">
          <path
            d="M124.37 191.92a10.43 10.43 0 01-6.73-2.56 1236.7 1236.7 0 00-15-12.86C76.09 153.74 57 137.78 57 113.34A39.66 39.66 0 0194.74 72h1a39.59 39.59 0 0128.62 13.47A39 39 0 01152.59 72a39.8 39.8 0 0139.12 40.4v1c0 24.11-19.12 40.41-45.52 62.76l-15.08 12.93a10.13 10.13 0 01-6.74 2.83zm-2-12.66zM95.75 85.39h-.33a26.26 26.26 0 00-18.18 8.69A25.81 25.81 0 0070.5 113c0 18.52 16.23 32.32 40.81 53.2l13.06 11.24c4.51-4 8.89-7.74 13.07-11.24 24.57-20.88 40.8-34.68 40.8-52.86v-1a26.33 26.33 0 00-25.65-26.94 25.38 25.38 0 00-22.09 15.15h-12.32a25.46 25.46 0 00-22.43-15.16z"
            data-name="Pfad 274"
          />
        </g>
      </g>
    </svg>
  );
}

function FillHeartIcon(props) {
  return (
    <svg
      data-name="Ebene 1"
      viewBox="0 0 250 250"
      width="1em"
      height="1em"
      {...props}
    >
      <circle
        cx={124.61}
        cy={125.5}
        r={121.5}
        fill="#fff"
        data-name="Ellipse 4"
      />
      <g data-name="Gruppe 245">
        <g data-name="Gruppe 245-2">
          <g data-name="Pfad 274">
            <path d="M122.22 184.16C88 154.19 63.83 138.33 63.83 113a33.15 33.15 0 0131.46-34.68h.81a32.12 32.12 0 0128.48 19.24 32.14 32.14 0 0128.49-19.24 33.21 33.21 0 0132.33 33.75 3.66 3.66 0 000 .81c0 25.31-24.1 41.12-58.4 71.12a3.5 3.5 0 01-4.72 0z" />
            <path d="M124.58 191.78a10.43 10.43 0 01-6.75-2.56c-5.33-4.59-10.39-8.84-15.12-12.89-26.46-22.55-45.63-38.81-45.63-63.33A39.83 39.83 0 0195 71.57h1a39.38 39.38 0 0128.62 13.5 39.15 39.15 0 0128.29-13.5 39.89 39.89 0 0139.29 40.48V113.41c0 24.16-19.1 40.5-45.63 62.91l-15.05 13a10.45 10.45 0 01-6.94 2.46zm2.1-12.69zM95.9 85h-.34a26.32 26.32 0 00-25 27.6v.28c0 18.56 16.27 32.4 40.91 53.32l13.09 11.27c4.59-4 9-7.76 13.5-11.27 24.57-20.92 40.5-34.76 40.5-53v-1a26.39 26.39 0 00-25.71-27 25.44 25.44 0 00-22.14 15.19h-12.27A25.5 25.5 0 0095.9 85z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

const LikeIcon = ({ className = "", isLiked = false }) => {
  if (isLiked) {
    return <FillHeartIcon width="36px" height="36px" className={className} />;
  } else {
    return (
      <OutlineHeartIcon width="36px" height="36px" className={className} />
    );
  }
};

const Like = ({
  className = "",
  isLiked = false,
  id,
  handleClick = () => {},
  isAuth,
  isTouchDevice = false,
}) => {
  const icon = <LikeIcon isLiked={isLiked} />;
  const hoverIcon = <LikeIcon isLiked={true} className="showOnHover" />;
  return isAuth ? (
    <div
      className={`Like ${className} ${isTouchDevice ? "" : "hover-enabled"} ${
        isLiked ? "liked" : ""
      }`}
      onClick={handleClick}
    >
      {icon}
      {hoverIcon}
    </div>
  ) : null;
};

export default Like;
