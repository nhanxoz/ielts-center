import React from "react";

export default function SlideItemCarousel(props) {
  return (
    <li className="carousel__slide" key={props.index}>
      <article className="article-topstory">
        <div className="thumb-art">
          <a href={`/${props.url}/${props.item.uuid}}`}>
            <picture>
              <img
                src={`data:image/jpeg;base64,${props.item.thumnail}`}
                alt="Flowers"
                className="thumb-img"
                style={{ filter: "brightness(80%)" }}
              />
            </picture>
          </a>
          <div className="txt-in-thumb">
            <span className="title-news">{props.item.title}</span>
            <div className="description-news">{props.item.summary}</div>
          </div>
        </div>
      </article>
    </li>
  );
}
