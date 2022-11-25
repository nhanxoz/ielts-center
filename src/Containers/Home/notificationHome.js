import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card_Noti";
export default function Notification(props) {
  const title = props.name;

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/notifications`)
      .then((response) => {
        const temp = response.data;
        setItems(temp);
      })
      .catch((error) => {
        console.error("Lỗi gọi API!", error);
      });
  }, [window.location.pathname]);

  return (
    <div className="col-12 col-md-4">
      <div className="card card-news">
        <div className="card-header card-news-header">
          <span
            style={{
              borderBottom: "2px solid #ebbf77",
            }}
          >
            {title}
          </span>
        </div>
        <div
          className="card-body card-news-body custom-scrollbars__content"
          style={{ maxHeight: "670px" }}
        >
          <ul className="list-group list-group-flush">
            {items.length > 0 ? (
              items.map((item, index) => {
                return index < 10 ? (
                  <Card key={index} title={item.title}></Card>
                ) : (
                  ""
                );
              })
            ) : (
              <p>Không tìm thấy nội dung</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
