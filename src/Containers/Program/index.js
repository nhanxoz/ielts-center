import React, { useEffect, useState } from "react";
import axios from "axios";
import Normal from "../Home/normalHome";
import Notification from "../Home/notificationHome";

export default function Program() {
 
  return (
    <><div>
  <section className="course-main">
    <div className="container">
      <div className="col-12" style={{textAlign: 'right'}}>
        <h2 className="title-style-5" style={{textTransform: 'uppercase'}}>
          Các khoá học chính
          <img src="../wp-content/uploads/2021/03/logo-512.png" alt="tiw-logo" />
        </h2>
        <p>Hệ thống các khóa học IELTS được phân làm 4 giai đoạn, theo trình độ từ thấp đến cao, giúp học viên cải thiện cả 4 kỹ năng Nghe, Nói, Đọc, Viết.</p>
      </div>
      <div id="secondary-slider" className="splide ">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide d-flex align-center flex-column" style={{cursor: 'pointer'}}>
              <h3>0 - 3.0</h3>
              <p>Tiếng Anh nền tảng <br />
                chuẩn bị cho IELTS</p>
            </li>
            <li className="splide__slide d-flex align-center flex-column" style={{cursor: 'pointer'}}>
              <h3>3.0 - 5.0</h3>
              <p>IELTS cơ bản</p>
            </li>
            <li className="splide__slide d-flex align-center flex-column" style={{cursor: 'pointer'}}>
              <h3>5.0 - 6.5</h3>
              <p>IELTS chuyên sâu</p>
            </li>
            <li className="splide__slide d-flex align-center flex-column" style={{cursor: 'pointer'}}>
              <h3>6.5 - 7.5</h3>
              <p>IELTS nâng cao</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="primary-slider" className="splide ">
        <div className="splide__track">
          <ul className="splide__list">
            <div className="row splide__slide" style={{height: '100%'}}>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/foundation/index.html">
                  <h4>Khoá Foundation</h4>
                  <img src="../wp-content/uploads/2021/05/foundation.jpg" />
                </a>
              </article>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/freshman/index.html">
                  <h4>Khoá Freshman</h4>
                  <img src="../wp-content/uploads/2021/03/Freshman-1.jpg" />
                </a>
              </article>
            </div>
            <div className="row splide__slide" style={{height: '100%'}}>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/sophomore/index.html">
                  <h4>Khóa Sophomore</h4>
                  <img src="../wp-content/uploads/2021/03/Sophomore-2.jpg" />
                </a>
              </article>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/junior/index.html">
                  <h4>Khóa Junior</h4>
                  <img src="../wp-content/uploads/2021/05/Junior.jpg" />
                </a>
              </article>
            </div>
            <div className="row splide__slide" style={{height: '100%'}}>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/pre-senior/index.html">
                  <h4>Khóa Pre-senior</h4>
                  <img src="../wp-content/uploads/2021/05/pre-senior.jpg" />
                </a>
              </article>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/senior/index.html">
                  <h4>Khóa Senior</h4>
                  <img src="../wp-content/uploads/2021/05/senior-1.jpg" />
                </a>
              </article>
            </div>
            <div className="row splide__slide" style={{height: '100%'}}>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/master/index.html">
                  <h4>Khóa Master Writing</h4>
                  <img src="../wp-content/uploads/2021/05/master.jpg" />
                </a>
              </article>
              <article className="col-6 d-flex align-center justify-center " style={{padding: 35}}>
                <a className="d-block relative" style={{color: '#000', marginBottom: 22}} href="../course/master/index.html">
                  <h4>Khóa Master Speaking</h4>
                  <img src="../wp-content/uploads/2021/05/master-1.jpg" />
                </a>
              </article>
            </div>
          </ul>
        </div>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <img src="../wp-content/themes/novus/images/left.svg" alt />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <img src="../wp-content/themes/novus/images/right.svg" alt />
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="course-other">
    <div className="container">
      <div className="row">
        <div className="col-12" style={{textAlign: 'right'}}>
          <img style={{width: 150, margin: '0 30px 0 30%', float: 'left'}} src="../wp-content/themes/novus/images/pencil.gif" />
          <h2 className="title-style-5" style={{textTransform: 'uppercase'}}>
            Các khoá học khác
            <img src="../wp-content/uploads/2021/03/logo-512.png" alt="tiw-logo" />
          </h2>
          <p>Các khóa học IELTS chuyên biệt được thiết kế theo nhu cầu của học viên và bổ trợ kiến thức ngoài chương trình học chính cho học viên.</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <article className="entry-thumbnail">
            <a href="../course/passing-foot/index.html" />
            <div className="entry-title">
              <p className="clw">Luyện đề Writing &amp; Speaking</p>
              <h4>Passing Foot</h4>
            </div>
            <img width={350} height={350} src="../wp-content/uploads/2021/03/Passing-foot-1-350x350.jpg" className="attachment-thumb-350 size-thumb-350 wp-post-image" alt="passing foot" decoding="async" loading="lazy" srcSet="https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1-350x350.jpg 350w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1-300x300.jpg 300w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1-150x150.jpg 150w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1-768x768.jpg 768w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1-450x450.jpg 450w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1-200x200.jpg 200w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Passing-foot-1.jpg 900w" sizes="(max-width: 350px) 100vw, 350px" />				</article>
        </div>
        <div className="col-3">
          <article className="entry-thumbnail">
            <a href="../course/intensive/index.html" />
            <div className="entry-title">
              <p className="clw">Khóa học IELTS Cấp tốc</p>
              <h4>IELTS Intensive</h4>
            </div>
            <img width={350} height={350} src="../wp-content/uploads/2021/03/Ielts-cap-toc-350x350.jpg" className="attachment-thumb-350 size-thumb-350 wp-post-image" alt="ielts cấp tốc" decoding="async" loading="lazy" srcSet="https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc-350x350.jpg 350w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc-300x300.jpg 300w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc-150x150.jpg 150w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc-768x768.jpg 768w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc-450x450.jpg 450w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc-200x200.jpg 200w, https://theieltsworkshop.com/wp-content/uploads/2021/03/Ielts-cap-toc.jpg 900w" sizes="(max-width: 350px) 100vw, 350px" />				</article>
        </div>
        <div className="col-3">
          <article className="entry-thumbnail">
            <a href="../course/ielts-online/index.html" />
            <div className="entry-title">
              <p className="clw">Học trực tuyến</p>
              <h4>IELTS Online</h4>
            </div>
            <img width={350} height={350} src="../wp-content/uploads/2021/03/ielts-online-350x350.jpg" className="attachment-thumb-350 size-thumb-350 wp-post-image" alt="ielts online" decoding="async" loading="lazy" srcSet="https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online-350x350.jpg 350w, https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online-300x300.jpg 300w, https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online-150x150.jpg 150w, https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online-768x768.jpg 768w, https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online-450x450.jpg 450w, https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online-200x200.jpg 200w, https://theieltsworkshop.com/wp-content/uploads/2021/03/ielts-online.jpg 900w" sizes="(max-width: 350px) 100vw, 350px" />				</article>
        </div>
        <div className="col-3">
          <article className="entry-thumbnail">
            <a href="../course/pronunciation/index.html" />
            <div className="entry-title">
              <p className="clw">Phát âm</p>
              <h4>Pronunciation</h4>
            </div>
            <img width={350} height={350} src="../wp-content/uploads/2021/03/pronunciation-350x350.jpg" className="attachment-thumb-350 size-thumb-350 wp-post-image" alt="pronunciation" decoding="async" loading="lazy" srcSet="https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation-350x350.jpg 350w, https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation-300x300.jpg 300w, https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation-150x150.jpg 150w, https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation-768x768.jpg 768w, https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation-450x450.jpg 450w, https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation-200x200.jpg 200w, https://theieltsworkshop.com/wp-content/uploads/2021/03/pronunciation.jpg 900w" sizes="(max-width: 350px) 100vw, 350px" />				</article>
        </div>
      </div>
    </div>
  </section>
</div>
</>
  );
}
