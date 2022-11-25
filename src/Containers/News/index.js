import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card_Item";
import { motion } from "framer-motion";
export default function News(props) {
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
    <motion.div
      className="row gy-1"
      initial={{ opacity: 0, minHeight: 800 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="col-12">
        <div className="card card-news">
          <div
            className="card-header card-news-header"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ borderBottom: "2px solid #ebbf77" }}>
              {props.name}
            </span>
          </div>
          <div className="news-area">
            {items.map((item, index) => (
              <Card url={props.url} item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
