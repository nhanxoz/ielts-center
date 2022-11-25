import React, { useEffect, useState } from "react";
import SlideItemCarousel from "./SlideItem.Carousel";
import ThumbnailCarousel from "./Thumbnail.Carausel";
import uuid from "react-uuid";
import CheckItemCarosel from "./CheckItem.Carousel";
export default function Carousel(props) {
  const items = props.items;
  const url = props.url;

  function checked(count, index) {
    return index == count % 6
      ? { defaultChecked: "checked" }
      : { defaultChecked: "" };
  }

  return items.length ? (
    <div className="carousel">
      <CheckItemCarosel items={items} />

      <ul className="carousel__slides">
        {items.slice(0, 6).map((item, index) => {
          return (
            <SlideItemCarousel
              item={item}
              index={index}
              key={uuid()}
              url={url}
            />
          );
        })}
      </ul>
      <ul className="carousel__thumbnails">
        {items.slice(0, 6).map((item, index) => {
          return <ThumbnailCarousel index={index} item={item} key={uuid()} />;
        })}
      </ul>
    </div>
  ) : (
    <div>Not found</div>
  );
}
