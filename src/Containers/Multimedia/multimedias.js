import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
export default function Multimedias(props) {
  const url = props.url;
  const title = props.name;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/video`)
      .then((response) => {
        const temp = response.data;
        setItems(temp);
      })
      .catch((error) => {
        console.error("Lỗi gọi API!", error);
      });
  }, [window.location.pathname]);
  return (
    <motion.div
      className="row gy-1"
      initial={{ opacity: 0, minHeight: 1000 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="col-12">
        <div className="card card-news">
          <div
            className="card-header card-news-header"
            style={{ display: "flex", alignItems: "center" }}
          >
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a
                    href={`/`}
                    style={{
                      textDecorationLine: "none",
                      color: "#000",
                      borderBottom: "2px solid #ebbf77",
                    }}
                  >
                    TRANG CHỦ
                  </a>
                </li>
                <li class="breadcrumb-item active">
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
                </li>
              </ol>
            </nav>
          </div>
          <div className="card-body news-area">
            <div className="row">
              {items.map((video, index) => (
                <div className="col-md-4 my-1" key={index}>
                  <a
                    href={`/${url}/${index}`}
                    style={{
                      textDecorationLine: "none",
                      color: "#000",
                    }}
                  >
                    <div
                      className="card"
                      style={{
                        // backgroundColor: "#ebbf77",
                        height: 350,
                        border: "2px solid #ebbf77",
                      }}
                    >
                      <img
                        src={`https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA`}
                        alt={video.title}
                      />
                      <div className="card-body">
                        <p>Tiêu đề : {video.title}</p>
                        <p>Phụ đề : {video.subtitle}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
