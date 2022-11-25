import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Introduction(props) {
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
        <div className="card-body card-news-body" style={{ fontSize: 14 }}>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">TT</th>
                <th scope="col">Số văn bản</th>
                <th scope="col">Tiêu đề</th>
                <th scope="col" style={{ width: "21%" }}>
                  Ngày ban hành
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1026/QĐ-TTg</td>
                <td>
                  Ban hành Kế hoạch triển khai thi hành Luật Cảnh sát cơ động{" "}
                </td>
                <td>31/08/2022</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>5657/VPCP-NN </td>
                <td>
                  V/v báo cáo về quản lý tổng hợp tài nguyên, bảo vệ môi trường
                  biển và hải đảo năm 2021
                </td>
                <td>31/08/2022</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={1}>5644/VPCP-CN</td>
                <td>
                  V/v đầu tư xây dựng Cảng hàng không Lai Châu theo hình thức
                  PPP và giao UBND tỉnh Lai Châu làm cơ quan có thẩm quyền triển
                  khai dự án
                </td>
                <td>31/08/2022</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={1}>5644/VPCP-CN</td>
                <td>
                  V/v đầu tư xây dựng Cảng hàng không Lai Châu theo hình thức
                  PPP và giao UBND tỉnh Lai Châu làm cơ quan có thẩm quyền triển
                  khai dự án
                </td>
                <td>31/08/2022</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={1}>5644/VPCP-CN</td>
                <td>
                  V/v đầu tư xây dựng Cảng hàng không Lai Châu theo hình thức
                  PPP và giao UBND tỉnh Lai Châu làm cơ quan có thẩm quyền triển
                  khai dự án
                </td>
                <td>31/08/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
