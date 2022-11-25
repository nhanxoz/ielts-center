import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Row } from "antd";
import { motion } from "framer-motion";
export default function Introductions(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/introduction`)
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
          <div className="card-body news-area">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "center" }}>
                    TT
                  </th>
                  <th scope="col">Số văn bản</th>
                  <th scope="col">Trích yếu</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Ngày ban hành
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <th
                      scope="row"
                      style={{ textAlign: "center", verticalAlign: "middle" }}
                    >
                      {index + 1}
                    </th>
                    <td>{item.code}</td>
                    <td>
                      <span>{item.summary}</span>
                      <div className="bl-doc-file">
                        <a
                          href="https://datafiles.chinhphu.vn/cpp/files/vbpq/2022/11/1076.signed.pdf"
                          target="_blank"
                          download=""
                        >
                          Tài liệu đính kèm
                        </a>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="card-footer"
            style={{ backgroundColor: "#fff", border: "none" }}
          >
            <Row>
              <Pagination
                defaultCurrent={1}
                total={50}
                style={{ margin: "auto" }}
              />
            </Row>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
