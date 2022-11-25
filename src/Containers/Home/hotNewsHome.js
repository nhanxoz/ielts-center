import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../../Components/Carousel/Carousel";
export default function HotNews(props) {
  const title = props.name;
  const url = props.url;

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/news`)
      .then((response) => {
        const temp = response.data;
        setItems(temp);
      })
      .catch((error) => {
        console.error("Lỗi gọi API!", error);
      });
  }, [window.location.pathname]);

  return (
    <div className="col-12 col-md-8">
      <div className="card card-news">
        <div className="card-header card-news-header">
          <a
            href={`/${url}`}
            style={{
              textDecorationLine: "none",
              color: "#000",
              borderBottom: "2px solid #ebbf77",
            }}
          >
            {title}
          </a>
        </div>
        <Carousel items={items} url={url} />
      </div>
    </div>
  );
}
