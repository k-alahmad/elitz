import React, { useEffect } from "react";
import "./Loader.css";

const Loader = ({ h, w }) => {
  let loaderHeight = h ?? `96px`;
  let loaderWidth = w ?? `96px`;

  return (
    <div
      className={`container  animate-spin`}
      style={{
        maxHeight: h ?? "96px",
        height: h ?? "96px",
        maxWidth: w ?? "96px",
        width: w ?? "96px",
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
