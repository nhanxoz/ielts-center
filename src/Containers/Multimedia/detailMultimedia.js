import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
export default function DetailMultimedia(props) {
  const url = props.url;
  const title = props.name;
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
			<p>Thư viện tài liệu</p>
            <video
              controls
              muted
              autoPlay
              style={{ width: "100%", border: "2px solid #ebbf77" }}
            >
              <source
                src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4`}
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
