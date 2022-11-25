import React from "react";

export default function ThumbnailCarousel(props) {
  return (
    <li key={props.index}>
      <label htmlFor={`slide-${props.index}`}>
        <img src={`data:image/jpeg;base64,${props.item.thumnail}`} />
      </label>
    </li>
  );
}
