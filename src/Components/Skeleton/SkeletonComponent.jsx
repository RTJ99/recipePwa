import React from "react";

function SkeletonComponent({ type }) {
  let classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}

export default SkeletonComponent;
