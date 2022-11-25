import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <div className="header-top">
          <a
            href="index.html"
            className="custom-logo-link"
            rel="home"
            aria-current="page"
          >
            <img
              width="{512}"
              height="{512}"
              src="/wp-content/uploads/2021/03/logo-512.png"
              className="custom-logo"
              alt="The IELTS Workshop"
              decoding="async"
              srcSet="https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512.png 512w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-300x300.png 300w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-150x150.png 150w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-450x450.png 450w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-350x350.png 350w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-200x200.png 200w"
              sizes="(max-width: 512px) 100vw, 512px"
            />
          </a>
          <button id="m-open">
            <span>
              <span>
                <span></span>
              </span>
            </span>
          </button>
        </div>
        <header id="masthead" className="site-header">
          <div className="container">
            <a
              href="index.html"
              className="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                width="{512}"
                height="{512}"
                src="/wp-content/uploads/2021/03/logo-512.png"
                className="custom-logo"
                alt="The IELTS Workshop"
                decoding="async"
                srcSet="https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512.png 512w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-300x300.png 300w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-150x150.png 150w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-450x450.png 450w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-350x350.png 350w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-200x200.png 200w"
                sizes="(max-width: 512px) 100vw, 512px"
              />
            </a>
            <div className="menu-header-container">
              <ul id="menu-header" className="menu">
                <li
                  id="menu-item-143"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-143"
                >
                  <a href="index.html" aria-current="page">
                    Trang chủ
                  </a>
                </li>
                <li
                  id="menu-item-165"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-165"
                >
                  <a href="#">Về TIW</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-144"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                    >
                      <a href="introduction/index.html">Giới thiệu</a>
                    </li>
                    <li
                      id="menu-item-167"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167"
                    >
                      <a href="ielts-trainers/index.html">Giáo viên IELTS</a>
                    </li>
                    <li
                      id="menu-item-166"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"
                    >
                      <a href="students/index.html">Học viên</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-145"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-145"
                >
                  <a href="#">Khóa học</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-146"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-146"
                    >
                      <a href="schedule/index.html">Lịch khai giảng</a>
                    </li>
                    <li
                      id="menu-item-147"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-147"
                    >
                      <a href="ielts-program/index.html">Chương trình học</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-497"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-497"
                >
                  <a href="#">Thư viện</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-351"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-351"
                    >
                      <a href="library/index.html">Tài liệu</a>
                    </li>
                    <li
                      id="menu-item-500"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"
                    >
                      <a href="blogs/index.html">Blog</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-150"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-150"
                >
                  <a href="#">Sự kiện</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-155"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"
                    >
                      <a href="workshop/index.html">Workshop</a>
                    </li>
                    <li
                      id="menu-item-158"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-158"
                    >
                      <a href="news/index.html">Tin tức</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-153"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-153"
                >
                  <a href="jobs/index.html">Tuyển dụng</a>
                </li>
                <li
                  id="menu-item-154"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-154"
                >
                  <a href="contact/index.html">Liên hệ</a>
                </li>
              </ul>
            </div>
            <button id="search-control" className="b0" name="search-control">
              <svg
                width="{21}"
                height="{21}"
                viewBox="0 0 21 21"
                fill="#000000"
              >
                <path d="M20.6656 18.5392L16.889 14.7449C18.1075 13.1807 18.7686 11.249 18.7662 9.26049C18.7662 7.48954 18.245 5.75836 17.2686 4.28587C16.2922 2.81337 14.9044 1.6657 13.2807 0.98799C11.657 0.310276 9.87031 0.132955 8.14659 0.478451C6.42287 0.823947 4.83953 1.67674 3.5968 2.92899C2.35407 4.18125 1.50776 5.77671 1.16489 7.51364C0.822018 9.25056 0.997991 11.0509 1.67055 12.6871C2.34312 14.3232 3.48206 15.7217 4.94336 16.7056C6.40466 17.6894 8.12268 18.2146 9.88017 18.2146C11.8536 18.2171 13.7705 17.5508 15.3229 16.323L19.0883 20.1285C19.1916 20.2334 19.3144 20.3167 19.4498 20.3735C19.5851 20.4303 19.7303 20.4596 19.8769 20.4596C20.0236 20.4596 20.1688 20.4303 20.3041 20.3735C20.4395 20.3167 20.5623 20.2334 20.6656 20.1285C20.7697 20.0245 20.8523 19.9007 20.9087 19.7643C20.9651 19.6279 20.9941 19.4816 20.9941 19.3339C20.9941 19.1861 20.9651 19.0398 20.9087 18.9034C20.8523 18.767 20.7697 18.6432 20.6656 18.5392ZM3.21565 9.26049C3.21565 7.93228 3.60652 6.63389 4.33882 5.52952C5.07113 4.42515 6.11199 3.5644 7.32977 3.05612C8.54755 2.54783 9.88756 2.41484 11.1804 2.67396C12.4731 2.93308 13.6606 3.57268 14.5927 4.51187C15.5247 5.45106 16.1595 6.64766 16.4166 7.95035C16.6738 9.25305 16.5418 10.6033 16.0374 11.8304C15.533 13.0575 14.6788 14.1064 13.5828 14.8443C12.4868 15.5822 11.1983 15.9761 9.88017 15.9761C8.11263 15.9761 6.41748 15.2685 5.16764 14.0091C3.9178 12.7497 3.21565 11.0416 3.21565 9.26049Z" />
              </svg>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
