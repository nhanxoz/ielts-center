import Normal from "./normalHome";
import Science from "./scienceHome";
import LinkToWebsite from "./linkHome";
import Notification from "./notificationHome";
import HotNews from "./hotNewsHome";
import Document from "./documentHome";
import Introduction from "./introductionHome";
import Multimedia from "./multimediaHome";

import ReactTyped from "react-typed"
export default function Home() {
  return (
    <div>
  <div className="header-search__wrapper">
          <button
            id="btn-search-close"
            className="btn1 btn--search-close"
            aria-label="Close search form"
          >
            <svg className="icon icon--cross">
              <use xlinkHref="#icon-cross"></use>
              <svg id="icon-cross" viewBox="0 0 24 24">
                <title>close</title>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </svg>
          </button>
          <div className="search-inner search-inner--up">
            <form
              role="search"
              method="get"
              className="search-form"
              action="https://theieltsworkshop.com/"
            >
              <label>
                <input
                  type="search"
                  className="search__input"
                  placeholder="What are you looking for?"
                  defaultValue
                  name="s"
                />
                {/* <input type="hidden" name="post_type" value="post" /> */}
              </label>
              <span className="search__info">
                Hit enter to search or ESC to close
              </span>
              <div className="d-flex search-post-type">
                <label>
                  <input
                    type="radio"
                    name="post_type"
                    defaultValue="post"
                    defaultChecked
                  />
                  Blog
                </label>
                <label>
                  <input type="radio" name="post_type" defaultValue="book" />
                  Books
                </label>
                <label>
                  <input type="radio" name="post_type" defaultValue="course" />
                  Courses
                </label>
                <label>
                  <input type="radio" name="post_type" defaultValue="event" />
                  Events
                </label>
              </div>
              <button type="submit" className="search-submit">
                Search
              </button>
            </form>
          </div>
          <div className="search-inner search-inner--down">
            <div className="search__related row" />
          </div>
        </div>{" "}
        <section
          id="novus-banner-mb-block-7e79cddf-56b5-4510-9ce1-a018d2bcaaaf"
          className="novus-banner "
        >
          <div className="container">
            <div className="novus-banner__body">
              <div
                style={{
                  margin: 0,
                  color: "var(--color-yellow)",
                  textTransform: "uppercase",
                  width: "600px",
                  height: "240px",
                }}
              >
                <ReactTyped
                  className="typewriter h1 bold"
                  strings={["GOLDEN STANDARD FOR IELTS PREPARATION"]}
                  typeSpeed={50}
                  style={{
                    margin: 0,
                    color: "var(--color-yellow)",
                    textTransform: "uppercase",
                  }}
                  showCursor={false}
                ></ReactTyped>
              </div>

              <p style={{ margin: 0, fontSize: 18 }}>
                Chất lượng vàng trong luyện thi IELTS
              </p>
              <a
                className="novus-banner__cta tiw-button"
                data-href="test.onthiielts.com.vn/?UTM_Source=web1&UTM_medium=ctw&UTM_campaign=data&UTM_content=testielts"
              >
                ĐI CÙNG TIW NHÉ
              </a>
              {/* <div className="novus-banner__content">
                <a
                  className="novus-banner__content-link"
                  data-href="sub-banner-1"
                >
                  Free IELTS Test{" "}
                  <span
                    style={{ fontWeight: 700, fontSize: 24, lineHeight: 25 }}
                  >
                    01
                  </span>
                </a>
                <a
                  className="novus-banner__content-link"
                  data-href="sub-banner-2"
                >
                  Lộ trình học IELTS{" "}
                  <span
                    style={{ fontWeight: 700, fontSize: 24, lineHeight: 25 }}
                  >
                    02
                  </span>
                </a>
                <a
                  className="novus-banner__content-link"
                  data-href="sub-banner-3"
                >
                  Học IELTS thôi{" "}
                  <span
                    style={{ fontWeight: 700, fontSize: 24, lineHeight: 25 }}
                  >
                    03
                  </span>
                </a>
              </div> */}
            </div>
            <div className="scroll-down">
              <div className="chevron" />
              <div className="chevron" />
              <div className="chevron" />
              <p>scroll down</p>
            </div>
          </div>
          <div
            id="sub-banner-1"
            className="novus-sub-banner"
            style={{
              background:
                "url(/wp-content/uploads/2021/05/test-trinh-do.jpg) center center/cover no-repeat",
            }}
          >
            <div className="container">
              <div className="novus-sub-banner__top">
                <a className="cly">← back</a>
                <h1 className="txt-72 clw">Kiểm tra trình độ miễn phí</h1>
                <span
                  className="txt-288 cly bolder"
                  style={{ marginRight: "-5px" }}
                >
                  1
                </span>
              </div>
              <div className="novus-sub-banner__bottom">
                <a
                  className="tiw-button"
                  href="https://test.onthiielts.com.vn/?UTM_Source=web1&UTM_medium=ctw&UTM_campaign=data&UTM_content=testielts"
                >
                  Test thử ngay
                </a>
                <p className="clw">
                  Bài kiểm tra giúp bạn xác định chính xác trình độ tiếng Anh
                  của bản thân, từ đó lựa chọn chương trình học phù hợp.
                </p>
                <svg
                  width={49}
                  height={38}
                  viewBox="0 0 49 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.6406 37.8125L25.2344 32.1875C29.0781 25.25 31.0703 18.7578 31.2109 12.7109L31.2109 0.265623L48.5078 0.265624L48.5078 11.8672C48.4609 16.1328 47.1953 20.7031 44.7109 25.5781C42.2266 30.5 39.2031 34.5781 35.6406 37.8125ZM10.9609 37.8125L0.55469 32.1875C4.39844 25.25 6.39063 18.7578 6.53125 12.7109L6.53126 0.265621L23.8281 0.265622L23.8281 11.8672C23.7813 16.1328 22.5156 20.7031 20.0313 25.5781C17.5469 30.5 14.5234 34.5781 10.9609 37.8125Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="sub-banner-2"
            className="novus-sub-banner"
            style={{
              background:
                "url(/wp-content/uploads/2021/05/lo-trinh-hoc-ielts-banner.jpg) center center/cover no-repeat",
            }}
          >
            <div className="container">
              <div className="novus-sub-banner__top">
                <a className="cly">← back</a>
                <h1 className="txt-72 clw">
                  Lộ trình học IELTS bài bản từ 0 đến 7.5
                </h1>
                <span
                  className="txt-288 cly bolder"
                  style={{ marginRight: "-5px" }}
                >
                  2
                </span>
              </div>
              <div className="novus-sub-banner__bottom">
                <a
                  className="tiw-button"
                  href="https://lotrinh.onthiielts.com.vn/?UTM_Source=web1&UTM_medium=button&UTM_campaign=trangchu&UTM_content=seo"
                >
                  Nhận lộ trình
                </a>
                <p className="clw">
                  Lộ trình ôn luyện IELTS bài bản từ 0 đến 7.5
                </p>
                <svg
                  width={49}
                  height={38}
                  viewBox="0 0 49 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.6406 37.8125L25.2344 32.1875C29.0781 25.25 31.0703 18.7578 31.2109 12.7109L31.2109 0.265623L48.5078 0.265624L48.5078 11.8672C48.4609 16.1328 47.1953 20.7031 44.7109 25.5781C42.2266 30.5 39.2031 34.5781 35.6406 37.8125ZM10.9609 37.8125L0.55469 32.1875C4.39844 25.25 6.39063 18.7578 6.53125 12.7109L6.53126 0.265621L23.8281 0.265622L23.8281 11.8672C23.7813 16.1328 22.5156 20.7031 20.0313 25.5781C17.5469 30.5 14.5234 34.5781 10.9609 37.8125Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="sub-banner-3"
            className="novus-sub-banner"
            style={{
              background:
                "url(/wp-content/uploads/2021/03/b3.jpg) center center/cover no-repeat",
            }}
          >
            <div className="container">
              <div className="novus-sub-banner__top">
                <a className="cly">← back</a>
                <h1 className="txt-72 clw">
                  Lịch khai giảng <br />
                </h1>
                <span
                  className="txt-288 cly bolder"
                  style={{ marginRight: "-5px" }}
                >
                  3
                </span>
              </div>
              <div className="novus-sub-banner__bottom">
                <a className="tiw-button" href="schedule/index.html">
                  Lịch khai giảng toàn quốc
                </a>
                <p className="clw">
                  Các lớp học mới được khai giảng hàng tháng trên toàn hệ thống
                  cơ sở của trung tâm.
                </p>
                <svg
                  width={49}
                  height={38}
                  viewBox="0 0 49 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.6406 37.8125L25.2344 32.1875C29.0781 25.25 31.0703 18.7578 31.2109 12.7109L31.2109 0.265623L48.5078 0.265624L48.5078 11.8672C48.4609 16.1328 47.1953 20.7031 44.7109 25.5781C42.2266 30.5 39.2031 34.5781 35.6406 37.8125ZM10.9609 37.8125L0.55469 32.1875C4.39844 25.25 6.39063 18.7578 6.53125 12.7109L6.53126 0.265621L23.8281 0.265622L23.8281 11.8672C23.7813 16.1328 22.5156 20.7031 20.0313 25.5781C17.5469 30.5 14.5234 34.5781 10.9609 37.8125Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t.novus-banner {\n\t\t\tbackground-image: url( /wp-content/uploads/2021/05/banner-home-page.jpg);\n\t\t\tbackground-position: center center;\n\t\t\tbackground-size: cover;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t@media all and (min-height: 700px) {\n\t\t\t.novus-banner {\n\t\t\t\theight: 100vh;\n\t\t\t}\n\t\t}\n\n\t\t@media all and (max-height: 699px) {\n\t\t\t.novus-banner {\n\t\t\t\tpadding: 100px 0;\n\t\t\t}\n\t\t}\n\n\t\t\n\t\t.novus-banner .container {\n\t\t\tdisplay:flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\theight: 100%;\n\t\t\tposition: relative;\n\t\t\tz-index: 1;\n\t\t}\n\n\t\t.novus-banner__cta {\n\t\t\tmargin-top: 100px;\n\t\t}\n\n\t\t.novus-banner__content {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tmargin-top: 65px;\n\t\t}\n\n\t\t.novus-banner__content a {\n\t\t\tdisplay: flex;\n\t\t\twidth: 195px;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: flex-end;\n\t\t\tborder-bottom: 1px solid #000;\n\t\t\tpadding: 8px 0 8px 20px;\n\t\t\tmargin-bottom: 27px;\n\t\t\tposition: relative;\n\t\t\tcursor: pointer;\n\t\t\ttransition: .3s;\n\t\t}\n\n\t\t.novus-banner__content a:hover {\n\t\t\tbackground: #000;\n\t\t\tcolor: #fff;\n\t\t}\n\n\t\t.novus-banner__content a::before {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-top: 5px solid transparent;\n\t\t\tborder-bottom: 5px solid transparent; \n\t\t\tborder-left:10px solid var(--color-yellow);\n\t\t\tposition: absolute;\n\t\t\ttop: 55%;\n\t\t\ttransform: translateY(-50%);\n\t\t\tleft: 0;\n\t\t}\n\n\t\t.novus-sub-banner {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tz-index: 15;\n\t\t\ttransition: .3s;\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\n\t\t.novus-sub-banner.active {\n\t\t\topacity: 1;\n\t\t\tvisibility: visible;\n\t\t}\n\n\t\t.novus-sub-banner div {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.novus-sub-banner__top {\n\t\t\talign-items: center;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.novus-sub-banner__top a {\n\t\t\tposition: absolute;\n\t\t\ttop: -20px;\n\t\t\tleft: 0;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.novus-sub-banner__top a:hover {\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\t.novus-sub-banner__top::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: 14px;\n\t\t\twidth: 100%;\n\t\t\tborder-top: 1px solid var(--color-yellow);\n\t\t}\n\n\t\t.novus-sub-banner__bottom {\n\t\t\talign-items: flex-start;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.novus-sub-banner__bottom p {\n\t\t\tmax-width: 350px;\n\t\t\ttext-align: justify;\n\t\t}\n\n\t\t.novus-sub-banner__bottom svg {\n\t\t\tposition: absolute;\n\t\t\ttop: 100%;\n\t\t\tright: -50px;\n\t\t}\n\n\t\t.typewriter {\n\t\t\theight: 140px;\n\t\t}\n\n\t\t@media all and ( max-width: 1100px ) {\n\t\t\t.typewriter {\n\t\t\t\theight: 90px;\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\n\t\t\t.novus-sub-banner .tiw-button {\n\t\t\t\tmargin: 15px 0;\n\t\t\t}\n\n\t\t\t.novus-sub-banner__top::after {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\n\t\t\t",
          }}
        />
        <div
          style={{ height: 100 }}
          aria-hidden="true"
          className="wp-block-spacer"
        />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <div className="is-layout-flex wp-container-5 wp-block-columns">
          <div className="is-layout-flow wp-block-column" />
          <div className="is-layout-flow wp-block-column wow fadeInUp">
            {" "}
            <div
              id="novus-title-mb-block-a668df31-69ee-4942-9087-0ca93384fd3d"
              className="novus-title wow FadeInUp"
            >
              <h2
                className="title-style-1 txt-72"
                style={{
                  margin: "0 48px 0 0",
                  color: "var(--color-yellow)",
                  textTransform: "uppercase",
                }}
              >
                WHY TIW{" "}
                <img
                  decoding="async"
                  src="/wp-content/uploads/2021/03/logo-512.png"
                  alt="tiw-logo"
                />
              </h2>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n\t\t\t\t.novus-title {\n\t\t\ttext-align: right;\n\t\t}\n\n\t\t.title-style-1 {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.title-style-1 img {\n\t\t\tposition: absolute;\n\t\t\twidth: 50px;\n\t\t\ttop: -20px;\n\t\t\tright: -48px;\n\t\t}\n\n\t\t.title-style-1:after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\twidth: calc( 100% + 48px);\n\t\t\tborder-bottom: 1px solid var(--color-yellow);\n\t\t}\n\t\t\n\t\t@media all and ( max-width: 1099px ) {\n\t\t\t.novus-title > img {\n\t\t\t\tmax-width: 100px;\n\t\t\t\ttop: 0;\n\t\t\t}\n\t\t}\n\t",
              }}
            />
          </div>
        </div>
        <div
          style={{ height: 100 }}
          aria-hidden="true"
          className="wp-block-spacer mobile-space"
        />
        <div className="wp-block-kadence-rowlayout alignwide container">
          <div
            id="kt-layout-id_5f9a5a-d8"
            className="kt-row-layout-inner kt-layout-id_5f9a5a-d8"
          >
            <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
              <div className="wp-block-kadence-column inner-column-1 kadence-column_e6c7cb-4c">
                <div className="kt-inside-inner-col">
                  {" "}
                  <div
                    id="novus-info-mb-block-1029c625-93bc-4e67-9aeb-1646e0e77424"
                    className="novus-info "
                  >
                    <span>01</span>
                    <h4>
                      Đội ngũ giảng viên &amp; trợ giảng tài năng{" "}
                      <img
                        decoding="async"
                        src="/wp-content/uploads/2021/03/icon1.png"
                        alt="tiw-image"
                      />
                    </h4>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n.novus-info {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid var(--color-grey);\n\tcursor: pointer;\n}\n\n.novus-info img {\n\tmax-width: 60px;\n\tmax-height: 45px;\n\tobject-fit: contain;\n}\n\n.novus-info span {\n\tfont-size: 64px;\n\tfont-weight: 300;\n\tcolor: #dcdcdc;\n\ttransition: .3s;\n}\n\n.novus-info h4 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tflex: 1;\n\ttransition: .3s;\n}\n\n.novus-info:hover img {\n\ttransform: translateX( -10px );\n}\n\n.novus-info:hover h4 {\n\tcolor: var(--color-yellow);\n}\n\n.novus-info:hover span {\n\ttransform: translateX( 10px );\n}\n\n.novus-info h4:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 10px;\n\theight: 10px;\n\tbackground: var(--color-yellow);\n\tbottom: 0;\n\tright: 0;\n}\n\n@media all and (min-width: 1100px) {\n\t.novus-info {\n\t\tmax-width: 90%;\n\t}\n\t.novus-info h4 {\n\t\tflex: 0 0 75%;\n\t}\n}\n\n@media all and (max-width: 1280px) {\n\t.novus-info span {\n\t\tfont-size: 58px;\n\t}\n}\n",
                    }}
                  />
                  <div
                    id="novus-info-mb-block-66df0bd1-3519-40f9-8e91-ccf6f5b187e4"
                    className="novus-info "
                  >
                    <span>02</span>
                    <h4>
                      Giáo trình thân thiện với người Việt{" "}
                      <img
                        decoding="async"
                        src="/wp-content/uploads/2021/03/icon2.png"
                        alt="tiw-image"
                      />
                    </h4>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n.novus-info {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid var(--color-grey);\n\tcursor: pointer;\n}\n\n.novus-info img {\n\tmax-width: 60px;\n\tmax-height: 45px;\n\tobject-fit: contain;\n}\n\n.novus-info span {\n\tfont-size: 64px;\n\tfont-weight: 300;\n\tcolor: #dcdcdc;\n\ttransition: .3s;\n}\n\n.novus-info h4 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tflex: 1;\n\ttransition: .3s;\n}\n\n.novus-info:hover img {\n\ttransform: translateX( -10px );\n}\n\n.novus-info:hover h4 {\n\tcolor: var(--color-yellow);\n}\n\n.novus-info:hover span {\n\ttransform: translateX( 10px );\n}\n\n.novus-info h4:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 10px;\n\theight: 10px;\n\tbackground: var(--color-yellow);\n\tbottom: 0;\n\tright: 0;\n}\n\n@media all and (min-width: 1100px) {\n\t.novus-info {\n\t\tmax-width: 90%;\n\t}\n\t.novus-info h4 {\n\t\tflex: 0 0 75%;\n\t}\n}\n\n@media all and (max-width: 1280px) {\n\t.novus-info span {\n\t\tfont-size: 58px;\n\t}\n}\n",
                    }}
                  />
                  <div
                    id="novus-info-mb-block-d1c25c4e-f214-4854-9f91-3ef7c165a547"
                    className="novus-info "
                  >
                    <span>03</span>
                    <h4>
                      Môi trường học tập cởi mở, sáng tạo{" "}
                      <img
                        decoding="async"
                        src="/wp-content/uploads/2021/03/icon3.png"
                        alt="tiw-image"
                      />
                    </h4>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n.novus-info {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid var(--color-grey);\n\tcursor: pointer;\n}\n\n.novus-info img {\n\tmax-width: 60px;\n\tmax-height: 45px;\n\tobject-fit: contain;\n}\n\n.novus-info span {\n\tfont-size: 64px;\n\tfont-weight: 300;\n\tcolor: #dcdcdc;\n\ttransition: .3s;\n}\n\n.novus-info h4 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tflex: 1;\n\ttransition: .3s;\n}\n\n.novus-info:hover img {\n\ttransform: translateX( -10px );\n}\n\n.novus-info:hover h4 {\n\tcolor: var(--color-yellow);\n}\n\n.novus-info:hover span {\n\ttransform: translateX( 10px );\n}\n\n.novus-info h4:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 10px;\n\theight: 10px;\n\tbackground: var(--color-yellow);\n\tbottom: 0;\n\tright: 0;\n}\n\n@media all and (min-width: 1100px) {\n\t.novus-info {\n\t\tmax-width: 90%;\n\t}\n\t.novus-info h4 {\n\t\tflex: 0 0 75%;\n\t}\n}\n\n@media all and (max-width: 1280px) {\n\t.novus-info span {\n\t\tfont-size: 58px;\n\t}\n}\n",
                    }}
                  />
                  <div
                    id="novus-info-mb-block-8c89e5c0-5172-4acf-a09c-c89e41c236b5"
                    className="novus-info "
                  >
                    <span>04</span>
                    <h4>
                      Thư viện ôn luyện miễn phí{" "}
                      <img
                        decoding="async"
                        src="/wp-content/uploads/2021/03/icon4.png"
                        alt="tiw-image"
                      />
                    </h4>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n.novus-info {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid var(--color-grey);\n\tcursor: pointer;\n}\n\n.novus-info img {\n\tmax-width: 60px;\n\tmax-height: 45px;\n\tobject-fit: contain;\n}\n\n.novus-info span {\n\tfont-size: 64px;\n\tfont-weight: 300;\n\tcolor: #dcdcdc;\n\ttransition: .3s;\n}\n\n.novus-info h4 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tflex: 1;\n\ttransition: .3s;\n}\n\n.novus-info:hover img {\n\ttransform: translateX( -10px );\n}\n\n.novus-info:hover h4 {\n\tcolor: var(--color-yellow);\n}\n\n.novus-info:hover span {\n\ttransform: translateX( 10px );\n}\n\n.novus-info h4:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 10px;\n\theight: 10px;\n\tbackground: var(--color-yellow);\n\tbottom: 0;\n\tright: 0;\n}\n\n@media all and (min-width: 1100px) {\n\t.novus-info {\n\t\tmax-width: 90%;\n\t}\n\t.novus-info h4 {\n\t\tflex: 0 0 75%;\n\t}\n}\n\n@media all and (max-width: 1280px) {\n\t.novus-info span {\n\t\tfont-size: 58px;\n\t}\n}\n",
                    }}
                  />
                </div>
              </div>
              <div className="wp-block-kadence-column inner-column-2 kadence-column_c3c9e7-19">
                <div className="kt-inside-inner-col">
                  <figure className="wp-block-video">
                    <video
                      controls
                      muted
                      preload="auto"
                      src="/wp-content/uploads/2021/05/hoc-ielts-tai-the-ielts-workshop.mp4"
                      playsInline
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: 125 }}
          aria-hidden="true"
          className="wp-block-spacer"
        />
        <section
          id="novus-info-mb-block-f97ab7ef-aabc-44d0-92c5-6fbc949d8398"
          className="novus-teacher "
        >
          <div className="container align-right section-title wow fadeInUp">
            <h2>
              Đội ngũ giảng viên{" "}
              <img
                decoding="async"
                src="/wp-content/uploads/2021/03/logo-512.png"
                alt="tiw-logo"
              />
            </h2>
            <p>
              The IELTS Workshop tự hào sở hữu đội ngũ giảng viên có chứng chỉ
              IELTS 8.0 trở lên, nhiệt huyết, tận tâm và có bề dày về kinh
              nghiệm giảng dạy.
            </p>
          </div>
          <div className="container wow fadeInUp" style={{ marginBottom: 60 }}>
            <div className="row align-center justify-center">
              <div className="col-left">
                <img
                  decoding="async"
                  src="https://theieltsworkshop.com/wp-content/uploads/2021/03/tung-1.jpg"
                />
                <p className="clw">
                  <span className="clw">“</span>
                  Phần thưởng lớn nhất của hành trình chinh phục IELTS không
                  phải là điểm số. IELTS là một công cụ, giúp đưa bạn chạm được
                  đến những giấc mơ, hoài bão của chính mình{" "}
                  <b>Founder – Dang Tran Tung</b>
                  <span className="clw">“</span>
                </p>
              </div>
              <div className="col-right">
                <div className="col-right__top">
                  <p style={{ textAlign: "center" }}>Giáo viên chủ nhiệm</p>
                  <h3 style={{ textAlign: "center" }}>
                    <strong>Đặng Trần Tùng</strong>
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    <strong>05 lần 9.0/9.0 overall</strong>
                  </p>{" "}
                </div>
                <div className="col-right__bottom">
                  <h5 className="clw">Nhà sáng lập The IELTS Workshop</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="novus-news-other"
          style={{ padding: "50px 0", background: "#FFFAE6" }}
        >
          <div className="container align-right section-title">
            <h2 className=" wow fadeInUp">
              TIN TỨC
              <img
                src="/wp-content/uploads/2021/03/logo-512.png"
                alt="tiw-logo"
              />
            </h2>
          </div>
          <div className="container">
            <div className="splide news-slider hidden-pc">
              <div className="splide__track">
                <ul className="splide__list">
                  <article className="splide__slide">
                    <a
                      className="entry-thumbnail"
                      href="recap-the-ielts-expo-2022/index.html"
                    >
                      <img
                        width={2048}
                        height={1152}
                        src="/wp-content/uploads/2022/09/expo.jpg"
                        className="responsive wp-post-image"
                        alt="the ielts expo"
                        decoding="async"
                        loading="lazy"
                        srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/09/expo.jpg 2048w, https://theieltsworkshop.com//wp-content/uploads/2022/09/expo-768x432.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/09/expo-1536x864.jpg 1536w"
                        sizes="(max-width: 2048px) 100vw, 2048px"
                      />{" "}
                    </a>
                    <a href="recap-the-ielts-expo-2022/index.html">
                      <h2 className="h5">
                        Khép lại THE IELTS EXPO 2022 – Sự kiện IELTS hoành tráng
                        tại Hà Nội
                      </h2>
                    </a>
                    <span className="line" />
                    <p>
                      Vậy là sự kiện The IELTS EXPO 2022 đã diễn ra vô cùng
                      thành công tốt đẹp vào chủ nhật ngày 25/09/2022 vừa qua
                      tại khách sạn Pullman, Hà Nội. Thay mặt ban tổ chức, The
                      IELTS Workshop xin gửi lời cảm ơn tới tất cả khán giả tham
                      dự chương trình, các vị diễn […]
                    </p>
                    <span>27/09/22</span>
                  </article>
                  <article className="splide__slide">
                    <a
                      className="entry-thumbnail"
                      href="giam-khao-the-ielts-expo-2022/index.html"
                    >
                      <img
                        width={1366}
                        height={768}
                        src="/wp-content/uploads/2022/09/the-ielts-expo.jpg"
                        className="responsive wp-post-image"
                        alt="ielts expo"
                        decoding="async"
                        loading="lazy"
                        srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/09/the-ielts-expo.jpg 1366w, https://theieltsworkshop.com//wp-content/uploads/2022/09/the-ielts-expo-768x432.jpg 768w"
                        sizes="(max-width: 1366px) 100vw, 1366px"
                      />{" "}
                    </a>
                    <a href="giam-khao-the-ielts-expo-2022/index.html">
                      <h2 className="h5">
                        Dàn diễn giả “cực hot” tại The IELTS EXPO 2022 – Họ là
                        ai?
                      </h2>
                    </a>
                    <span className="line" />
                    <p>
                      The IELTS Expo là sự kiện thường niên được The IELTS
                      Workshop tổ chức nhằm lan tỏa “”giá trị đích thực” của
                      tiếng Anh và IELTS tới thế hệ trẻ Việt Nam – giúp các bạn
                      biến tiếng Anh trở thành công cụ hữu hiệu trong cuộc sống.
                      Năm nay, sự kiện The IELTS Expo […]
                    </p>
                    <span>14/09/22</span>
                  </article>
                  <article className="splide__slide">
                    <a
                      className="entry-thumbnail"
                      href="su-kien-vui-choi-thang-9-tai-ha-noi/index.html"
                    >
                      <img
                        width={1200}
                        height={800}
                        src="/wp-content/uploads/2022/09/su-kien-vui-choi-thang-9-ha-noi.jpg"
                        className="responsive wp-post-image"
                        alt="sự kiện vui chơi tháng 9 hà nội"
                        decoding="async"
                        loading="lazy"
                        srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/09/su-kien-vui-choi-thang-9-ha-noi.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/09/su-kien-vui-choi-thang-9-ha-noi-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/09/su-kien-vui-choi-thang-9-ha-noi-300x200.jpg 300w"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />{" "}
                    </a>
                    <a href="su-kien-vui-choi-thang-9-tai-ha-noi/index.html">
                      <h2 className="h5">
                        Những sự kiện “chơi mà học” tại Hà Nội trong tháng 9
                        không thể bỏ lỡ
                      </h2>
                    </a>
                    <span className="line" />
                    <p>
                      Có rất nhiều sự kiện vui chơi tháng 9 tại Hà Nội bạn không
                      thể bỏ lỡ. Nếu chưa biết nên đi đâu, chơi gì, hãy cùng The
                      IELTS Workshop tìm hiểu ngay những sự kiện bổ ích tuy
                      “chơi mà học” trong bài viết dưới đây nhé. The IELTS EXPO
                      2022 – Sự kiện […]
                    </p>
                    <span>13/09/22</span>
                  </article>
                </ul>
              </div>
              <div
                className="splide__arrows d-flex justify-center"
                style={{ marginTop: 20 }}
              >
                <button className="splide__arrow splide__arrow--prev">
                  <img src="/wp-content/themes/novus/images/left.svg" alt />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <img src="/wp-content/themes/novus/images/right.svg" alt />
                </button>
              </div>
            </div>
            <div className="row hidden-mobile">
              <div className="col-6 wow fadeInUp">
                <article>
                  <p className="h3">MỚI NHẤT</p>
                  <a
                    className="entry-thumbnail"
                    href="recap-the-ielts-expo-2022/index.html"
                  >
                    <img
                      width={2048}
                      height={1152}
                      src="/wp-content/uploads/2022/09/expo.jpg"
                      className="responsive wp-post-image"
                      alt="the ielts expo"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/09/expo.jpg 2048w, https://theieltsworkshop.com//wp-content/uploads/2022/09/expo-768x432.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/09/expo-1536x864.jpg 1536w"
                      sizes="(max-width: 2048px) 100vw, 2048px"
                    />{" "}
                  </a>
                  <a href="recap-the-ielts-expo-2022/index.html">
                    <h2 className="h5">
                      Khép lại THE IELTS EXPO 2022 – Sự kiện IELTS hoành tráng
                      tại Hà Nội
                    </h2>
                  </a>
                  <span className="line" />
                  <p>
                    Vậy là sự kiện The IELTS EXPO 2022 đã diễn ra vô cùng thành
                    công tốt đẹp vào chủ nhật ngày 25/09/2022 vừa qua tại khách
                    sạn Pullman, Hà Nội. Thay mặt ban tổ chức, The IELTS
                    Workshop xin gửi lời cảm ơn tới tất cả khán giả tham dự
                    chương trình, các vị diễn […]
                  </p>
                  <span>27/09/22</span>
                </article>
              </div>
              <div className="col-6 wow fadeInUp">
                <article>
                  <p className="h3">MỚI NHẤT</p>
                  <a
                    className="entry-thumbnail"
                    href="giam-khao-the-ielts-expo-2022/index.html"
                  >
                    <img
                      width={1366}
                      height={768}
                      src="/wp-content/uploads/2022/09/the-ielts-expo.jpg"
                      className="responsive wp-post-image"
                      alt="ielts expo"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/09/the-ielts-expo.jpg 1366w, https://theieltsworkshop.com//wp-content/uploads/2022/09/the-ielts-expo-768x432.jpg 768w"
                      sizes="(max-width: 1366px) 100vw, 1366px"
                    />{" "}
                  </a>
                  <a href="giam-khao-the-ielts-expo-2022/index.html">
                    <h2 className="h5">
                      Dàn diễn giả “cực hot” tại The IELTS EXPO 2022 – Họ là ai?
                    </h2>
                  </a>
                  <span className="line" />
                  <p>
                    The IELTS Expo là sự kiện thường niên được The IELTS
                    Workshop tổ chức nhằm lan tỏa “”giá trị đích thực” của tiếng
                    Anh và IELTS tới thế hệ trẻ Việt Nam – giúp các bạn biến
                    tiếng Anh trở thành công cụ hữu hiệu trong cuộc sống. Năm
                    nay, sự kiện The IELTS Expo […]
                  </p>
                  <span>14/09/22</span>
                </article>
              </div>
              <div
                className="col-12 d-flex justify-center"
                style={{ margin: "60px 0" }}
              >
                <a className="tiw-button" href="news/index.html">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="novus-news-other" style={{ padding: "50px 0" }}>
          <div className="container align-right section-title">
            <h2 className=" wow fadeInUp">
              THƯ VIỆN
              <img
                src="/wp-content/uploads/2021/03/logo-512.png"
                alt="tiw-logo"
              />
            </h2>
          </div>
          <div className="container">
            <div className="splide library-slider hidden-pc">
              <div className="splide__track">
                <ul className="splide__list">
                  <article className="splide__slide">
                    <a
                      className="entry-thumbnail"
                      href="khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc/index.html"
                    >
                      <img
                        width={1200}
                        height={800}
                        src="/wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc.jpg"
                        className="responsive wp-post-image"
                        alt="Khóa luyện thi ielts cấp tốc cho người mất gốc"
                        decoding="async"
                        loading="lazy"
                        srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc-300x200.jpg 300w"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />{" "}
                    </a>
                    <a href="khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc/index.html">
                      <h2 className="h5">
                        Khóa luyện thi IELTS cấp tốc dành cho người mất gốc
                      </h2>
                    </a>
                    <span className="line" />
                    <p>Luyện thi IELTS cấp tốc cho người mất gốc</p>
                    <span>11/11/2022</span>
                  </article>
                  <article className="splide__slide">
                    <a
                      className="entry-thumbnail"
                      href="luyen-thi-ielts-cap-toc/index.html"
                    >
                      <img
                        width={1200}
                        height={800}
                        src="/wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1.jpg"
                        className="responsive wp-post-image"
                        alt="luyện thi ielts cấp tốc"
                        decoding="async"
                        loading="lazy"
                        srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1-300x200.jpg 300w"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />{" "}
                    </a>
                    <a href="luyen-thi-ielts-cap-toc/index.html">
                      <h2 className="h5">
                        Kinh nghiệm luyện thi IELTS cấp tốc từ A – Z
                      </h2>
                    </a>
                    <span className="line" />
                    <p>
                      Nếu bạn đang cần có chứng chỉ IELTS gấp thì việc luyện thi
                      IELTS cấp tốc là điều vô cùng quan trọng. Để việc ôn luyện
                      IETLS của bạn trở nên hiệu quả hơn, hãy cùng The IELTS
                      Workshop tìm hiểu về kinh nghiệm luyện thi IELTS cấp tốc
                      cho 4 kỹ năng nhé. 1. […]
                    </p>
                    <span>11/11/2022</span>
                  </article>
                  <article className="splide__slide">
                    <a
                      className="entry-thumbnail"
                      href="cac-chung-chi-tieng-anh-duoc-cong-nhan/index.html"
                    >
                      <img
                        width={1200}
                        height={800}
                        src="/wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan.jpg"
                        className="responsive wp-post-image"
                        alt="các chứng chỉ tiếng anh được công nhận"
                        decoding="async"
                        loading="lazy"
                        srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan-300x200.jpg 300w"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />{" "}
                    </a>
                    <a href="cac-chung-chi-tieng-anh-duoc-cong-nhan/index.html">
                      <h2 className="h5">
                        06 chứng chỉ tiếng Anh được công nhận tại Việt Nam hiện
                        nay
                      </h2>
                    </a>
                    <span className="line" />
                    <p>
                      Hiện nay tại Việt Nam, có nhiều chứng chỉ khác nhau đánh
                      giá khả năng sử dụng ngôn ngữ tiếng Anh của người học. Tuy
                      nhiên, mỗi loại chứng chỉ được sử dụng với mục đích khác
                      nhau. Hãy cùng The IELTS Workshop tìm hiểu thông tin về
                      các chứng chỉ tiếng Anh được công […]
                    </p>
                    <span>06/11/2022</span>
                  </article>
                </ul>
              </div>
              <div
                className="splide__arrows d-flex justify-center"
                style={{ marginTop: 20 }}
              >
                <button className="splide__arrow splide__arrow--prev">
                  <img src="/wp-content/themes/novus/images/left.svg" alt />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <img src="/wp-content/themes/novus/images/right.svg" alt />
                </button>
              </div>
            </div>
            <div className="row hidden-mobile">
              <div className="col-4 wow fadeInUp">
                <article>
                  <a
                    className="entry-thumbnail"
                    href="khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc/index.html"
                  >
                    <img
                      width={1200}
                      height={800}
                      src="/wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc.jpg"
                      className="responsive wp-post-image"
                      alt="Khóa luyện thi ielts cấp tốc cho người mất gốc"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/11/Khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc-300x200.jpg 300w"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />{" "}
                  </a>
                  <a href="khoa-luyen-thi-ielts-cap-toc-cho-nguoi-mat-goc/index.html">
                    <h2 className="h5">
                      Khóa luyện thi IELTS cấp tốc dành cho người mất gốc
                    </h2>
                  </a>
                  <span className="line" />
                  <p>Luyện thi IELTS cấp tốc cho người mất gốc</p>
                  <span>11/11/2022</span>
                </article>
              </div>
              <div className="col-4 wow fadeInUp">
                <article>
                  <a
                    className="entry-thumbnail"
                    href="luyen-thi-ielts-cap-toc/index.html"
                  >
                    <img
                      width={1200}
                      height={800}
                      src="/wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1.jpg"
                      className="responsive wp-post-image"
                      alt="luyện thi ielts cấp tốc"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/11/luyen-thi-ielts-cap-toc-1-300x200.jpg 300w"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />{" "}
                  </a>
                  <a href="luyen-thi-ielts-cap-toc/index.html">
                    <h2 className="h5">
                      Kinh nghiệm luyện thi IELTS cấp tốc từ A – Z
                    </h2>
                  </a>
                  <span className="line" />
                  <p>
                    Nếu bạn đang cần có chứng chỉ IELTS gấp thì việc luyện thi
                    IELTS cấp tốc là điều vô cùng quan trọng. Để việc ôn luyện
                    IETLS của bạn trở nên hiệu quả hơn, hãy cùng The IELTS
                    Workshop tìm hiểu về kinh nghiệm luyện thi IELTS cấp tốc cho
                    4 kỹ năng nhé. 1. […]
                  </p>
                  <span>11/11/2022</span>
                </article>
              </div>
              <div className="col-4 wow fadeInUp">
                <article>
                  <a
                    className="entry-thumbnail"
                    href="cac-chung-chi-tieng-anh-duoc-cong-nhan/index.html"
                  >
                    <img
                      width={1200}
                      height={800}
                      src="/wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan.jpg"
                      className="responsive wp-post-image"
                      alt="các chứng chỉ tiếng anh được công nhận"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://theieltsworkshop.com//wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan.jpg 1200w, https://theieltsworkshop.com//wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan-768x512.jpg 768w, https://theieltsworkshop.com//wp-content/uploads/2022/11/cac-chung-chi-tieng-anh-duoc-cong-nhan-300x200.jpg 300w"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />{" "}
                  </a>
                  <a href="cac-chung-chi-tieng-anh-duoc-cong-nhan/index.html">
                    <h2 className="h5">
                      06 chứng chỉ tiếng Anh được công nhận tại Việt Nam hiện
                      nay
                    </h2>
                  </a>
                  <span className="line" />
                  <p>
                    Hiện nay tại Việt Nam, có nhiều chứng chỉ khác nhau đánh giá
                    khả năng sử dụng ngôn ngữ tiếng Anh của người học. Tuy
                    nhiên, mỗi loại chứng chỉ được sử dụng với mục đích khác
                    nhau. Hãy cùng The IELTS Workshop tìm hiểu thông tin về các
                    chứng chỉ tiếng Anh được công […]
                  </p>
                  <span>06/11/2022</span>
                </article>
              </div>
              <div
                className="col-12 d-flex justify-center wow fadeInUp"
                style={{ margin: "60px 0" }}
              >
                <a className="tiw-button" href="library/index.html">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="partners"
          style={{ background: "#FFFAE6", padding: "90px 0", margin: 0 }}
        >
          <div className="container">
            <div className="row">
              <img
                className="col-3 wow fadeInUp"
                style={{ maxHeight: 40, objectFit: "contain" }}
                src="/wp-content/uploads/2021/03/p1.png"
              />
              <img
                className="col-3 wow fadeInUp"
                style={{ maxHeight: 40, objectFit: "contain" }}
                src="/wp-content/uploads/2021/03/p2.png"
              />
              <img
                className="col-3 wow fadeInUp"
                style={{ maxHeight: 40, objectFit: "contain" }}
                src="/wp-content/uploads/2021/03/p3.png"
              />
              <img
                className="col-3 wow fadeInUp"
                style={{ maxHeight: 40, objectFit: "contain" }}
                src="/wp-content/uploads/2021/03/p4.png"
              />
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.contact-form {\n\tmargin: 90px 0;\n}\n\n.contact-form.hide {\n\tdisplay: none;\n}\n\n.contact-form .container {\n\tbox-shadow: 0px 15px 20px rgba(0, 0, 0, 0.15);\n\tpadding: 45px 20px;\n}\n\n.col-3 .choices__inner {\n\tbackground: none;\n\tborder: 0;\n\tborder-bottom: 1px solid #ddd;\n\tborder-radius: 0;\n}\n\n.choices__list--dropdown .choices__item--selectable {\n\tpadding-right: 10px;\n}\n\n.choices__list--dropdown .choices__item--selectable::after {\n\tdisplay: none;\n}\n\n.wpcf7-form .choices__inner {\n\tbackground: none;\n\tmin-height: unset;\n\theight: 30px;\n\tpadding-top: 0;\n}\n\n.wpcf7-form input[type=text],\n.wpcf7-form input[type=tel],\n.wpcf7-form input[type=email] {\n\theight: 30px;\n\tline-height: 30px;\n\tpadding-left: 10px;\n\tfont-size: 16px;\n\twidth: 100%;\n\tborder: 1px solid #ddd;\n\tborder-radius: 2.5px;\n}\n\n.wpcf7-form .wpcf7-form-control-wrap {\n\tmargin-bottom: 14px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n.contact-form-success {\n\tdisplay:none;\n\tpadding-top: 90px;\n\tpadding-bottom: 90px;\n\tbackground: url( /wp-content/themes/novus/images/c-success.svg) #FFFAE6 center center / contain no-repeat;\n}\n\n.contact-form-success.active {\n\tdisplay: block;\n}\n\n.contact-form-success .container {\n\tbackground: #fff;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tpadding-top: 45px;\n\tpadding-bottom: 45px;\n\tposition: relative;\n}\n\n.contact-form-success .container:before {\n\tcontent: '';\n\twidth: 90%;\n\tposition: absolute;\n\ttop: 40px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tborder-top: 1px solid #b4b4b4;\n}\n\n.contact-form-success .row {\n\talign-items: center;\n}\n\n.contact-form-success button {\n\tbackground: none;\n\tposition: absolute;\n\ttop: 20px;\n\tright: 5%;\n\tborder: 0;\n\tcolor: #b4b4b4;\n\tcursor: pointer;\n}\n\n@media all and (min-width: 1100px) {\n\t.contact-form-success .col-6:first-of-type {\n\t\tpadding-left: 100px;\n\t}\n}\n\n.reviews {\n\tpadding-top: 60px;\n\tpadding-bottom: 90px;\n\tbackground: #FFFAE6;\n}\n\n.reviews .splide__pagination {\n\tflex-direction: column;\n\twidth: auto;\n\tposition: absolute;\n\tbottom: 0;\n\tleft: calc( 33.3333% + 15px );\n}\n\n.reviews .splide__pagination button {\n\twidth: 8px;\n\theight: 8px;\n\tbackground: var(--color-grey);\n\tborder-radius: 50%;\n\tmargin-top: 10px;\n}\n\n.reviews .splide__pagination button.is-active {\n\tbackground: var(--color-yellow);\n}\n\n.reviews .splide__arrows {\n\tposition: absolute;\n\tbottom: -5px;\n\tleft: calc( 33.3333% + 40px );\n\tz-index: 2;\n}\n\n.reviews .splide__slide {\n\theight: 415px;\n}\n\n.reviews .entry-thumbnail {\n\tposition: relative;\n}\n\n.reviews .entry-thumbnail img {\n\theight: 500px;\n}\n\n.reviews .entry-thumbnail p {\n\tposition: absolute;\n\ttop: 385px;\n\tleft: 0;\n\ttext-align: center;\n\tbackground: var(--color-yellow);\n\twidth: 100%;\n\tpadding: 5px 0;\n}\n\n.reviews .entry-content {\n\tbackground: #FFFAE6;\n\tpadding: 0 40px 40px;\n}\n\n.reviews .entry-content h5 {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.reviews .entry-content h5:before {\n\tcontent: '';\n\twidth: 10px;\n\theight: 10px;\n\tdisplay: block;\n\tbackground: var(--color-yellow);\n\tmargin-right: 20px;\n}\n\n.reviews .entry-content img {\n    max-width: 150px;\n}\n\n.comment {\n\tmargin-top: 40px;\n}\n\n.comment:before {\n\tcontent: url( /wp-content/themes/novus/images/quote-left.svg);\n\tdisplay: block;\n\tmargin-bottom: 10px;\n}\n\n.comment:after {\n\tcontent: url( /wp-content/themes/novus/images/quote-right.svg);\n\tdisplay: block;\n\tmargin-top: 10px;\n\ttext-align: right;\n}\n\n.reviews .entry-content p:first-of-type {\n\tmargin: 10px 0 20px;\n}\n\n.course-other {\n\tpadding: 60px 0;\n}\n\n.course-other article {\n\tposition: relative;\n}\n\n.course-other article:before {\n\tcontent: '';\n\twidth: 15px;\n\theight: 15px;\n\tdisplay: block;\n\tbackground: var(--color-yellow);\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n}\n\n.course-other .splide__arrows { \n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 30px;\n}\n\n#secondary-slider {\n\tmargin-bottom: 50px;\n}\n\n#secondary-slider .splide__list {\n\tposition: relative;\n}\n\n#secondary-slider .splide__list:before {\n\tcontent: '';\n\twidth: 100%;\n\theight: 1px;\n\tdisplay: block;\n\tbackground: #878787;\n\tposition: absolute;\n\ttop: 10px;\n}\n\n#secondary-slider .splide__list:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 3px;\n\tright: -8px;\n\tborder-top: 7px solid transparent;\n\tborder-bottom: 7px solid transparent;\n\tborder-left: 10px solid var(--color-yellow);\n\tborder-right: 7px solid transparent;\n}\n\n#secondary-slider .splide__slide:before {\n\tcontent: '';\n\twidth: 20px;\n\theight: 20px;\n\tdisplay: block;\n\tborder: 1px solid #878787;\n\tbackground: #fff;\n\tmargin-bottom: 10px;\n}\n\n#secondary-slider .splide__slide h3 {\n\tfont-weight: normal;\n}\n\n#secondary-slider .splide__slide.is-active:before,\n#secondary-slider .splide__slide:hover:before {\n\tborder-color: var(--color-yellow);\n\tbackground: var(--color-yellow);\n}\n\n#secondary-slider .splide__slide.is-active h3,\n#secondary-slider .splide__slide:hover h3 {\n\tfont-weight: bold;\n}\n\n#secondary-slider .splide__slide:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 0;\n\tborder-top: 7px solid transparent;\n\tborder-bottom: 7px solid transparent;\n\tborder-left: 10px solid var(--color-yellow);\n\tborder-right: 7px solid transparent;\n}\n\n.novus-workshop .entry-thumbnail {\n\tposition: relative;\n\tdisplay: block;\n}\n\n.novus-workshop .entry-thumbnail:after {\n\tcontent: '';\n\twidth: 20px;\n\theight: 20px;\n\tdisplay: block;\n\tbackground: var(--color-yellow);\n\tposition: absolute;\n\tright: -5px;\n\ttop: -5px;\n\tz-index: 2;\n}\n\n.novus-workshop p:last-of-type {\n\tmargin-top: 10px;\n}\n\n.novus-workshop article span {\n\tcolor: #8B8B8B;\n\tdisplay: block;\n\tmargin-top: 15px;\n}\n\n.novus-news-other .col-6 a:first-of-type {\n\tdisplay:block;\n\theight: 300px;\n\tposition: relative;\n}\n\n.novus-news-other .col-6 a:first-of-type:after {\n\tcontent: '';\n\twidth: 20px;\n\theight: 20px;\n\tdisplay: block;\n\tbackground: var(--color-yellow);\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tz-index: 2;\n}\n\n.novus-news-other .col-6 img {\n\theight: 100%;\n}\n\n.novus-news-other article h2 {\n\tdisplay: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;  \n  overflow: hidden;\n\tcolor: #000;\n\tmargin-top: 15px;\n}\n\n.line {\n\tcontent: '';\n\tdisplay: block;\n\twidth: 38px;\n\theight: 2px;\n\tbackground: var(--color-yellow);\n\tmargin: 15px 0 11px;\n}\n\n.novus-news-other article span {\n\tcolor: #8B8B8B;\n\tdisplay: block;\n\tmargin-top: 15px;\n}\n\t\n@media all and (min-width: 1000px) {\n\t.novus-workshop p:last-of-type,\n\t.novus-news-other article p {\n\t\tdisplay: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;  \n  overflow: hidden;\n\t}\n}\n\n@media all and (max-width:991px) {\n\t.reviews .splide__slide {\n\t\theight: 100%;\n\t}\n\t.reviews .splide__arrows {\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tbottom: -50px;\n\t}\n\n\t.partners {\n\t\tpadding: 0 0 30px !important;\n\t}\n\n\t.partners .col-3 {\n\t\tflex: 0 0 25%;\n\t\tmax-width: 25%;\n\t}\n\t#secondary-slider {\n\t\tmargin-bottom: 15px !important;\n\t}\n\t\n\t#secondary-slider p {\n\t\tdisplay: none;\n\t}\n\t\n\t#primary-slider article {\n\t\tborder: 0 !important;\n\t}\n\t#primary-slider article .col-6:first-of-type {\n\t\tpadding: 0 15px 15px !important;;\n\t}\n\t#primary-slider article:before {\n\t\tdisplay: none;\n\t}\n\t#primary-slider img.col-6 {\n\t\theight: 240px;\n\t}\n\t\n\t#secondary-slider .splide__list::after {\n\t\tright: -5px !important;\n\t}\n\t\n\t.section-title {\n\t\tmargin-bottom: 50px;\n\t}\n\n}\n\n",
          }}
        />
</div>

  );
}
