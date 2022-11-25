import { Route, Routes, useLocation } from "react-router-dom";
import Article from "../Containers/Article";
import Documents from "../Containers/Document";
import Home from "../Containers/Home";
import Introductions from "../Containers/Introduction/introductions";
import DetailMultimedia from "../Containers/Multimedia/detailMultimedia";
import Multimedias from "../Containers/Multimedia/multimedias";
import News from "../Containers/News";
import Page404 from "../Containers/Pages/page404";
import Layouts from "../Layouts";

export default function publicRouter() {
  const normalRoutes = [
    {
      title: "TIN TỨC - SỰ KIỆN",
      url: "tin-tuc-su-kien",
    },
    {
      title: "KHOA HỌC CÔNG NGHỆ",
      url: "khoa-hoc-cong-nghe",
    },
    {
      title: "HOẠT ĐỘNG NGÀNH",
      url: "hoat-dong-nganh",
    },
    {
      title: "HOẠT ĐỘNG NỘI BỘ",
      url: "hoat-dong-noi-bo",
    },
    {
      title: "THÔNG TIN KHOA HỌC QUÂN SỰ",
      url: "thong-tin-khqs",
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        // element={idToken ? <Dashboard /> : <Navigate to="/login" />}
        element={<Layouts />}
      >
        <Route index element={<Home />} />
        <Route path="trang-chu" element={<Home />} />
        {normalRoutes.map((router, index) => (
          <>
            <Route
              path={router.url}
              element={<News name={router.title} url={router.url} />}
            />
            <Route
              path={router.url + "/:id"}
              element={<Article name={router.title} url={router.url} />}
            />
          </>
        ))}

        <Route
          path="van-ban-phap-luat-huong-dan-chi-dao-nganh"
          element={
            <Introductions
              name={"VĂN BẢN PHÁP LUẬT, HƯỚNG DẪN CHỈ ĐẠO NGÀNH"}
              url={"van-ban-phap-luat-huong-dan-chi-dao-nganh"}
            />
          }
        />
        <Route
          path="thu-vien-tai-lieu"
          element={
            <Documents name={"THƯ VIỆN TÀI LIỆU"} url={"thu-vien-tai-lieu"} />
          }
        />

        <Route
          path="da-phuong-tien"
          element={
            <Multimedias name={"ĐA PHƯƠNG TIỆN"} url={"da-phuong-tien"} />
          }
        />

        <Route
          path="da-phuong-tien/:id"
          element={
            <DetailMultimedia name={"ĐA PHƯƠNG TIỆN"} url={"da-phuong-tien"} />
          }
        />
      </Route>

      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
}
