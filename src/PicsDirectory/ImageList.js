import "./ImagesList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  console.log(images);

  const imagesData = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imagesData}</div>;
};

export default ImageList;
