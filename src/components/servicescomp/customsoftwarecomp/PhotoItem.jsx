import React from "react";
import "../../../styles/slide.css";

const PhotoItem = ({ title, imgSrc }) => {
  return (
    <div className="work__photo-item" title={title}>
      <img src={imgSrc} alt={title} />
    </div>
  );
};

export default PhotoItem;