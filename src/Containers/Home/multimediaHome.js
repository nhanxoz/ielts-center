import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card_v4";
export default function Multimedia(props) {
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
    <div className="col-12">
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
        <div className="card-body card-news-body">
          <div className="row gy-1 gx-1">
            {items.length > 0 ? (
              items.map((item, index) => {
                return index < 4 ? (
                  <Card
                    key={index}
                    url={url}
                    article={{
                      title: item.title,
                      summary: item.summary,
                      thumnail: item.thumnail,
                      uuid: item.uuid,
                    }}
                  ></Card>
                ) : (
                  ""
                );
              })
            ) : (
              <p>Không tìm thấy nội dung</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
