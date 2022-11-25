import React from "react";

export default function LinkToWebsite(props) {
  const title = props.name;
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
        <div className="card-body card-news-body">
          <ul className="list-group list-group-flush col-12">
            <li className="list-group-item lgi-notification web-link">
              <i
                className="fa-regular fa-folder-closed col-2"
                style={{ fontSize: "1.5em" }}
              />{" "}
              QUẢN LÝ VĂN BẢN
            </li>
            <li className="list-group-item lgi-notification web-link ">
              <i
                className="fas fa-house-user col-2"
                style={{ fontSize: "1.5em" }}
              />
              HỆ THÔNG TIN CHỈ ĐẠO ĐIỀU HÀNH
            </li>
            <li className="list-group-item lgi-notification web-link">
              <i
                className="fa-regular fa-envelope col-2"
                style={{ fontSize: "1.5em" }}
              />
              THƯ ĐIỆN TỬ QUÂN SỰ
            </li>
            <li className="list-group-item lgi-notification web-link ">
              <i
                className="fas fa-cart-arrow-down col-2"
                style={{ fontSize: "1.5em" }}
              />
              KHO PHẦN MỀM SẠCH
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
