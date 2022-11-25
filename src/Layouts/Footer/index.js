import { useState, useEffect } from "react";

export default function Footer() {
  // const [date, setDate] = useState(new Date().toDateString());
  
  return (
    <footer id="colophon" className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-4 flex-3">
        <a href="index.html" className="custom-logo-link" rel="home" aria-current="page">
          <img width="{512}" height="{512}" src="/wp-content/uploads/2021/03/logo-512.png" className="custom-logo" alt="The IELTS Workshop" decoding="async" srcSet="https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512.png 512w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-300x300.png 300w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-150x150.png 150w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-450x450.png 450w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-350x350.png 350w, https://theieltsworkshop.com//wp-content/uploads/2021/03/logo-512-200x200.png 200w" sizes="(max-width: 512px) 100vw, 512px" />
        </a>
        <div className="site-footer__social">
          <a href="#" target="_blank">
            <svg width="{23}" height="{23}" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5556 4.42676C14.5531 4.47026 14.5488 4.51462 14.5488 4.55812C14.5488 5.26786 14.5462 5.97759 14.5505 6.68647C14.5514 6.78542 14.5215 6.81016 14.4261 6.8093C14.0408 6.80504 13.6547 6.80589 13.2695 6.81272C13.1382 6.81528 13.0061 6.83575 12.8766 6.85963C12.6337 6.9057 12.4564 7.10275 12.4462 7.37743C12.4274 7.87646 12.43 8.3772 12.4206 8.87708C12.4189 8.96835 12.4794 8.953 12.5323 8.953C13.1604 8.95385 13.7885 8.953 14.4167 8.953C14.4593 8.953 14.5019 8.953 14.559 8.953C14.4747 9.75571 14.392 10.5397 14.3085 11.3313C13.6777 11.3313 13.0581 11.3313 12.4232 11.3313C12.4232 11.3876 12.4232 11.4336 12.4232 11.4797C12.4223 13.6934 12.4215 15.9061 12.4206 18.1198C12.4206 18.1599 12.418 18.2008 12.4172 18.2409C11.5572 18.2409 10.6972 18.2409 9.83726 18.2409C9.83812 18.0353 9.83982 17.8289 9.83982 17.6233C9.83982 15.5854 9.83982 13.5483 9.83982 11.5104C9.83982 11.4558 9.83982 11.4021 9.83982 11.3347C9.26196 11.3347 8.69432 11.3347 8.12072 11.3347C8.11816 11.2861 8.11475 11.2511 8.1139 11.2153C8.1139 10.5021 8.11561 9.78813 8.11135 9.07498C8.11049 8.97603 8.14032 8.95129 8.23578 8.95215C8.72841 8.95641 9.22105 8.95044 9.71283 8.95641C9.81766 8.95726 9.84067 8.92229 9.84067 8.82419C9.84323 8.18441 9.84067 7.54463 9.86368 6.90484C9.88073 6.43994 9.97789 5.98697 10.1927 5.56642C10.4296 5.10493 10.797 4.79101 11.2862 4.6349C11.5572 4.54874 11.8436 4.51206 12.1231 4.45235C12.1623 4.44382 12.2007 4.43529 12.2399 4.4259C13.0121 4.42676 13.7834 4.42676 14.5556 4.42676Z" fill="black" />
              <path d="M22.6678 11.3405C22.6482 12.6891 22.6346 14.0386 22.6064 15.3873C22.5877 16.2753 22.5314 17.1616 22.2962 18.0249C21.8138 19.7975 20.7723 21.1146 19.1094 21.9165C18.437 22.2406 17.7202 22.4257 16.9804 22.5145C15.7846 22.6586 14.582 22.6595 13.3802 22.6637C11.587 22.6697 9.79288 22.668 7.99963 22.6441C7.22233 22.6339 6.44162 22.5972 5.66943 22.5068C4.2887 22.3456 3.04348 21.8533 2.0156 20.8758C1.0542 19.9622 0.510429 18.8327 0.251329 17.5489C0.108994 16.8443 0.0723448 16.1303 0.0510372 15.4146C-0.0214087 12.893 -0.00691956 10.3705 0.0339911 7.84895C0.0459233 7.12301 0.0834247 6.39451 0.168655 5.67369C0.329741 4.31224 0.807884 3.07959 1.75991 2.05765C2.67869 1.07238 3.82078 0.515345 5.1231 0.250902C5.82711 0.108444 6.54048 0.0717628 7.25557 0.0512898C9.79032 -0.0220719 12.3251 -0.00671712 14.8598 0.035082C15.5698 0.0470246 16.2832 0.0837054 16.988 0.168157C18.8051 0.386535 20.324 1.15769 21.4038 2.68207C21.9502 3.45408 22.257 4.32418 22.4291 5.24717C22.5953 6.1386 22.6124 7.04283 22.6269 7.94534C22.6448 9.07648 22.6311 10.2085 22.6311 11.3405C22.6431 11.3405 22.6559 11.3405 22.6678 11.3405ZM11.3211 20.6036C11.3211 20.6173 11.3211 20.6318 11.3211 20.6454C12.6984 20.6241 14.0766 20.6062 15.4539 20.5798C16.0906 20.567 16.7255 20.5243 17.3486 20.3776C18.2102 20.1737 18.9526 19.7685 19.5288 19.0827C20.0325 18.483 20.295 17.7792 20.4305 17.0192C20.549 16.3521 20.5694 15.6773 20.5805 15.0034C20.6231 12.3803 20.6419 9.75721 20.5617 7.1341C20.543 6.52759 20.5004 5.92278 20.364 5.32736C20.1501 4.39413 19.7001 3.60848 18.9338 3.01817C18.3654 2.57971 17.7074 2.35792 17.0119 2.22996C16.3386 2.10712 15.6559 2.08921 14.9757 2.07812C12.3626 2.03632 9.74941 2.01755 7.13625 2.09689C6.526 2.11565 5.9183 2.15745 5.31998 2.2965C4.3833 2.51402 3.59748 2.96699 3.00768 3.73985C2.57471 4.30797 2.35567 4.96311 2.22868 5.65578C2.10765 6.31859 2.08975 6.98994 2.07867 7.65958C2.0352 10.2904 2.0173 12.9211 2.09742 15.5511C2.11617 16.1576 2.15879 16.7624 2.29686 17.357C2.51675 18.3021 2.977 19.0938 3.76027 19.6824C4.32449 20.1063 4.97224 20.323 5.6575 20.4458C6.37173 20.5738 7.09533 20.59 7.81724 20.5985C8.98489 20.6147 10.1534 20.6036 11.3211 20.6036Z" fill="black" />
            </svg>
          </a>
          <a href="#" target="_blank">
            <svg width="{24}" height="{23}" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.4473 11.3408C23.4277 12.6895 23.414 14.039 23.3859 15.3877C23.3672 16.2757 23.3109 17.162 23.0757 18.0253C22.5933 19.7979 21.5517 21.115 19.8889 21.9168C19.2164 22.241 18.4996 22.4261 17.7598 22.5148C16.564 22.659 15.3614 22.6598 14.1596 22.6641C12.3664 22.6701 10.5723 22.6684 8.77899 22.6445C8.00169 22.6342 7.22097 22.5976 6.44877 22.5071C5.06803 22.3459 3.8228 21.8537 2.79491 20.8761C1.83351 19.9625 1.28973 18.8331 1.03063 17.5493C0.888292 16.8447 0.851642 16.1307 0.830334 15.4149C0.757888 12.8934 0.772377 10.3709 0.813288 7.84932C0.825221 7.12338 0.862722 6.39488 0.947954 5.67406C1.10904 4.3126 1.58719 3.07996 2.53922 2.05801C3.45801 1.07275 4.60011 0.515711 5.90244 0.251268C6.60645 0.10881 7.31984 0.072129 8.03493 0.051656C10.5697 -0.0217057 13.1045 -0.00635091 15.6393 0.0354482C16.3492 0.0473908 17.0626 0.0840716 17.7675 0.168523C19.5846 0.386902 21.1034 1.15805 22.1833 2.68244C22.7296 3.45444 23.0365 4.32455 23.2086 5.24754C23.3748 6.13897 23.3919 7.04319 23.4064 7.94571C23.4243 9.07685 23.4106 10.2088 23.4106 11.3408C23.4226 11.3408 23.4354 11.3408 23.4473 11.3408ZM12.1005 20.604C12.1005 20.6177 12.1005 20.6322 12.1005 20.6458C13.4778 20.6245 14.856 20.6066 16.2333 20.5801C16.87 20.5673 17.505 20.5247 18.128 20.378C18.9897 20.1741 19.7321 19.7689 20.3082 19.083C20.8119 18.4833 21.0744 17.7796 21.21 17.0195C21.3284 16.3524 21.3489 15.6777 21.36 15.0038C21.4026 12.3807 21.4213 9.75757 21.3412 7.13447C21.3225 6.52795 21.2799 5.92315 21.1435 5.32772C20.9296 4.3945 20.4795 3.60884 19.7133 3.01854C19.1448 2.58007 18.4868 2.35828 17.7913 2.23033C17.118 2.10749 16.4353 2.08957 15.7552 2.07849C13.142 2.03669 10.5288 2.01792 7.9156 2.09725C7.30535 2.11602 6.69765 2.15782 6.09933 2.29686C5.16264 2.51439 4.3768 2.96736 3.787 3.74021C3.35403 4.30834 3.13499 4.96347 3.00799 5.65615C2.88696 6.31896 2.86906 6.9903 2.85798 7.65994C2.81452 10.2907 2.79662 12.9215 2.87674 15.5514C2.89549 16.1579 2.9381 16.7628 3.07618 17.3573C3.29607 18.3025 3.75632 19.0941 4.5396 19.6827C5.10383 20.1067 5.75158 20.3234 6.43684 20.4462C7.15108 20.5742 7.87469 20.5904 8.5966 20.5989C9.76427 20.6151 10.9328 20.604 12.1005 20.604Z" fill="black" />
              <path d="M6.29492 11.3374C6.29577 8.12741 8.91063 5.51369 12.1144 5.51881C15.325 5.52478 17.9305 8.13765 17.9254 11.3468C17.9194 14.5551 15.3157 17.1586 12.111 17.1603C8.90551 17.1611 6.29407 14.5457 6.29492 11.3374ZM12.1025 15.1164C14.1821 15.1215 15.8773 13.4333 15.8841 11.3493C15.8918 9.26793 14.206 7.57037 12.1229 7.56184C10.0399 7.55331 8.33873 9.24745 8.33532 11.334C8.33277 13.4154 10.0212 15.1113 12.1025 15.1164Z" fill="black" />
              <path d="M18.1578 6.64897C17.4095 6.65238 16.7992 6.04586 16.7949 5.29604C16.7907 4.54707 17.3967 3.93714 18.1476 3.93373C18.8984 3.93032 19.5061 4.53342 19.5087 5.2858C19.5121 6.03648 18.9095 6.64555 18.1578 6.64897Z" fill="black" />
            </svg>
          </a>
          <a href="#" target="_blank">
            <svg width="{24}" height="{23}" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2244 11.3405C23.2048 12.6891 23.1912 14.0386 23.1631 15.3873C23.1443 16.2753 23.0881 17.1616 22.8528 18.0249C22.3704 19.7975 21.3289 21.1146 19.6661 21.9165C18.9936 22.2406 18.2768 22.4257 17.537 22.5145C16.3412 22.6586 15.1386 22.6595 13.9369 22.6637C12.1436 22.6697 10.3495 22.668 8.55627 22.6441C7.77897 22.6339 6.99826 22.5972 6.22607 22.5068C4.84534 22.3456 3.60012 21.8533 2.57224 20.8758C1.61084 19.9622 1.06707 18.8327 0.807969 17.5489C0.665635 16.8443 0.628985 16.1303 0.607678 15.4146C0.535232 12.893 0.549721 10.3705 0.590632 7.84895C0.602564 7.12301 0.640065 6.39451 0.725296 5.67369C0.886381 4.31224 1.36452 3.07959 2.31655 2.05765C3.23533 1.07238 4.37742 0.515345 5.67974 0.250902C6.38375 0.108444 7.09713 0.0717628 7.81221 0.0512898C10.347 -0.0220719 12.8817 -0.00671712 15.4165 0.035082C16.1264 0.0470245 16.8398 0.0837054 17.5447 0.168157C19.3618 0.386535 20.8806 1.15769 21.9605 2.68207C22.5068 3.45408 22.8136 4.32418 22.9858 5.24717C23.152 6.1386 23.169 7.04282 23.1835 7.94534C23.2014 9.07648 23.1878 10.2085 23.1878 11.3405C23.1997 11.3405 23.2125 11.3405 23.2244 11.3405ZM11.8777 20.6036C11.8777 20.6173 11.8777 20.6318 11.8777 20.6454C13.255 20.6241 14.6332 20.6062 16.0105 20.5798C16.6472 20.567 17.2822 20.5243 17.9052 20.3776C18.7669 20.1737 19.5092 19.7685 20.0854 19.0827C20.5891 18.483 20.8516 17.7792 20.9871 17.0192C21.1056 16.3521 21.1261 15.6773 21.1371 15.0034C21.1798 12.3803 21.1985 9.75721 21.1184 7.1341C21.0996 6.52759 21.057 5.92278 20.9207 5.32736C20.7067 4.39413 20.2567 3.60848 19.4905 3.01817C18.922 2.57971 18.264 2.35792 17.5685 2.22996C16.8952 2.10712 16.2125 2.08921 15.5324 2.07812C12.9192 2.03632 10.3061 2.01755 7.69289 2.09689C7.08264 2.11565 6.47494 2.15745 5.87663 2.2965C4.93994 2.51402 4.15412 2.96699 3.56432 3.73984C3.13135 4.30797 2.91231 4.96311 2.78532 5.65578C2.66429 6.31859 2.64639 6.98994 2.63531 7.65957C2.59184 10.2904 2.57394 12.9211 2.65406 15.5511C2.67281 16.1576 2.71543 16.7624 2.8535 17.357C3.0734 18.3021 3.53364 19.0938 4.31691 19.6824C4.88113 20.1063 5.52889 20.323 6.21414 20.4458C6.92837 20.5738 7.65198 20.59 8.37388 20.5985C9.54154 20.6147 10.71 20.6036 11.8777 20.6036Z" fill="black" />
              <path d="M15.6228 11.3338L9.23047 7.64014V15.0275L15.6228 11.3338Z" fill="black" />
            </svg>
          </a>
          <a href="tel:19000353" target="_blank">
            <svg width="{24}" height="{23}" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.0037 11.3405C22.9841 12.6891 22.9705 14.0386 22.9424 15.3873C22.9236 16.2753 22.8674 17.1616 22.6321 18.0249C22.1497 19.7975 21.1082 21.1146 19.4454 21.9165C18.7729 22.2406 18.0561 22.4257 17.3163 22.5145C16.1205 22.6586 14.9179 22.6595 13.7162 22.6637C11.9229 22.6697 10.1288 22.668 8.33557 22.6441C7.55827 22.6339 6.77755 22.5972 6.00537 22.5068C4.62463 22.3455 3.37942 21.8533 2.35154 20.8758C1.39014 19.9621 0.846367 18.8327 0.587266 17.5489C0.444931 16.8443 0.408282 16.1303 0.386975 15.4146C0.314529 12.893 0.329018 10.3705 0.369929 7.84895C0.381861 7.12301 0.419362 6.39451 0.504593 5.67369C0.665678 4.31224 1.14382 3.07959 2.09585 2.05765C3.01463 1.07238 4.15672 0.515345 5.45904 0.250902C6.16304 0.108444 6.87642 0.0717628 7.59151 0.0512898C10.1263 -0.0220719 12.661 -0.00671712 15.1958 0.035082C15.9057 0.0470245 16.6191 0.0837054 17.324 0.168157C19.1411 0.386535 20.6599 1.15769 21.7398 2.68207C22.2861 3.45408 22.5929 4.32418 22.7651 5.24717C22.9313 6.1386 22.9483 7.04282 22.9628 7.94534C22.9807 9.07648 22.9671 10.2085 22.9671 11.3405C22.979 11.3405 22.9918 11.3405 23.0037 11.3405ZM11.657 20.6036C11.657 20.6173 11.657 20.6318 11.657 20.6454C13.0343 20.6241 14.4125 20.6062 15.7898 20.5798C16.4265 20.567 17.0615 20.5243 17.6845 20.3776C18.5462 20.1737 19.2885 19.7685 19.8647 19.0827C20.3684 18.483 20.6309 17.7792 20.7664 17.0192C20.8849 16.3521 20.9054 15.6773 20.9164 15.0034C20.9591 12.3803 20.9778 9.7572 20.8977 7.1341C20.8789 6.52759 20.8363 5.92278 20.7 5.32736C20.486 4.39413 20.036 3.60848 19.2698 3.01817C18.7013 2.57971 18.0433 2.35792 17.3478 2.22996C16.6745 2.10712 15.9918 2.08921 15.3117 2.07812C12.6985 2.03632 10.0853 2.01755 7.47218 2.09688C6.86193 2.11565 6.25424 2.15745 5.65592 2.2965C4.71924 2.51402 3.93341 2.96699 3.34362 3.73984C2.91065 4.30797 2.69161 4.96311 2.56461 5.65578C2.44359 6.31859 2.42569 6.98994 2.41461 7.65957C2.37114 10.2904 2.35324 12.9211 2.43336 15.5511C2.45211 16.1576 2.49472 16.7624 2.6328 17.357C2.85269 18.3021 3.31294 19.0938 4.0962 19.6824C4.66043 20.1063 5.30818 20.323 5.99343 20.4458C6.70767 20.5738 7.43127 20.59 8.15317 20.5985C9.32083 20.6147 10.4893 20.6036 11.657 20.6036Z" fill="black" />
              <path d="M7.38676 4.0166C7.84956 4.14967 8.19986 4.44312 8.528 4.78349C9.08285 5.35929 9.64025 5.93339 10.2241 6.47848C10.8522 7.06537 11.0576 8.09244 10.2335 8.80473C9.83202 9.15192 9.47491 9.55029 9.08881 9.93416C10.1874 11.5003 11.5051 12.8157 13.0665 13.9187C13.4782 13.505 13.8788 13.0998 14.2819 12.6972C14.8887 12.0915 15.7274 12.0446 16.3479 12.6315C17.1081 13.3506 17.8454 14.0953 18.5647 14.8562C18.7574 15.0601 18.846 15.3638 18.9824 15.6214C18.9824 15.8116 18.9824 16.0027 18.9824 16.1929C18.7582 16.5017 18.5485 16.8233 18.3048 17.1168C18.0994 17.3642 17.8471 17.5714 17.6264 17.8069C17.2633 18.195 16.8124 18.4177 16.3061 18.5465C16.1698 18.5806 16.0342 18.6164 15.8979 18.6514C15.5553 18.6514 15.2126 18.6514 14.87 18.6514C14.8274 18.6343 14.7856 18.6147 14.7413 18.6011C14.0509 18.398 13.3333 18.2607 12.6745 17.9826C10.7312 17.162 9.12461 15.8568 7.70211 14.3205C6.36485 12.8746 5.26964 11.2726 4.67558 9.37029C4.53751 8.92927 4.46336 8.46863 4.35938 8.01737C4.35938 7.7316 4.35938 7.44583 4.35938 7.16006C4.48637 6.76681 4.53751 6.32408 4.7557 5.99054C5.28498 5.18271 5.93955 4.47639 6.81572 4.01575C7.00578 4.0166 7.1967 4.0166 7.38676 4.0166ZM5.26623 7.63862C5.27901 8.47289 5.51425 9.25513 5.86369 10.0007C7.143 12.7253 9.12802 14.8229 11.6517 16.4233C12.6702 17.0699 13.7586 17.5655 14.9757 17.7105C15.8092 17.8094 16.5661 17.6764 17.1499 16.9931C17.3655 16.7406 17.6187 16.5196 17.8531 16.2825C18.1301 16.0027 18.1565 15.74 17.8846 15.461C17.1806 14.7376 16.4664 14.0236 15.7445 13.319C15.4734 13.0546 15.1973 13.081 14.9211 13.3557C14.5291 13.7447 14.1421 14.1388 13.7492 14.5269C13.3708 14.9014 12.9412 14.9475 12.5117 14.6455C10.8838 13.5007 9.49622 12.1137 8.35668 10.4818C8.06179 10.0604 8.10866 9.63644 8.4726 9.26708C8.87403 8.86018 9.28058 8.45925 9.68287 8.0532C9.92066 7.81349 9.9539 7.53711 9.71867 7.29484C8.99677 6.54928 8.26293 5.81481 7.51802 5.09314C7.26232 4.8449 7.00067 4.88073 6.74157 5.13664C6.49099 5.38403 6.25575 5.64932 5.99154 5.88135C5.45544 6.34967 5.25174 6.94595 5.26623 7.63862Z" fill="black" />
            </svg>
          </a>
        </div>
        <h4>
          Hotline: <a href="tel:19000353">0853286925</a>
        </h4>
        <p  style={{marginBottom:"30px"}} >
          Trung tâm luyện thi Ielts Nhân Anh - Theo giấy phép số
          2482/GCN-SGDĐT
        </p>
        <p className="d-flex align-center site-info">
          
          Copyright 2021 © The IELTS WORKSHOP |{'{'}" "{'}'}
          <a href="privacy-policy/index.html">Privacy</a>
        </p>
      </div>
      <div className="col-4 flex-1">
        <section id="nav_menu-2" className="widget widget_nav_menu">
          <h2 className="widget-title">ABOUT</h2>
          <div className="menu-footer-menu-container">
            <ul id="menu-footer-menu" className="menu">
              <li id="menu-item-423" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-423">
                <a href="introduction/index.html">
                  Về The IELTS Workshop
                </a>
              </li>
              <li id="menu-item-424" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-424">
                <a href="ielts-program/index.html">Chương trình học</a>
              </li>
              <li id="menu-item-426" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-426">
                <a href="https://test.onthiielts.com.vn//?UTM_Source=onthi&UTM_medium=webtiw&UTM_campaign=khoahoc&UTM_content=seo">
                  Kiểm tra trình độ
                </a>
              </li>
              <li id="menu-item-425" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425">
                <a href="schedule/index.html">Lịch khai giảng</a>
              </li>
              <li id="menu-item-132" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-132">
                <a href="contact/index.html">Liên hệ</a>
              </li>
            </ul>
          </div>
        </section>{'{'}" "{'}'}
      </div>
      <div className="col-4 flex-2">
        <section id="text-2" className="widget widget_text">
          <h2 className="widget-title">CƠ SỞ THE IELTS WORKSHOP</h2>{'{'}" "{'}'}
          <div className="textwidget">
            <p>
              <strong>Tại Hà Nội:</strong>
              <br />
              *55A Võ Văn Dũng, Đống Đa
              <br />
              *236 Hoàng Quốc Việt, Cầu Giấy
              <br />
              *27/17 Đại Cồ Việt, Hai Bà Trưng
              <br />
              <strong>Tại Nghệ An:</strong>
              <br />
              *356 Nguyễn Văn Cừ, TP Vinh
            </p>
          </div>
        </section>{'{'}" "{'}'}
      </div>
    </div>
  </div>
</footer>

  );
}