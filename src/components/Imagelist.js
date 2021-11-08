import React from "react";
import ImageCard from "./ImageCard";
import "./imagelist.css";
const Imagelist = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  // console.log(props);
  return <div className="image-list">{images}</div>;
};
export default Imagelist;
