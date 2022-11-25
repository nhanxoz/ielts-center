import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Document(props) {
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
    <div className="col-12 col-md-6">
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
          <div className="card-body card-news-body">
            <div className="card-body card-news-body" style={{ fontSize: 14 }}>
              <table
                className="table table-bordered table-hover"
                width={"100%"}
              >
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="img-container"
                        src="assets/image/img-sach.webp"
                      />
                    </td>
                    <td className="lgi-notification-2">
                      Hướng dẫn thực hành sửa chữa vào bảo trì động cơ xăng / Đỗ
                      Dũng, Trần Thế San
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="img-container"
                        src="assets/image/img-sach.webp"
                      />
                    </td>
                    <td className="lgi-notification-2">
                      Hướng dẫn thực hành sửa chữa vào bảo trì động cơ xăng / Đỗ
                      Dũng, Trần Thế San
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
