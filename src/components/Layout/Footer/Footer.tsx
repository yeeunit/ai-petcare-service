// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <Link href="/">
          <div className="ft_icon">
            <img src="/icons/home.png" alt="home" loading="lazy" />홈
          </div>
        </Link>
        <Link href="/hospital_page">
          <div className="ft_icon">
            <img src="/icons/hospital-sign.png" alt="hospital" />
            병원찾기
          </div>
        </Link>
        <Link href="/diary_page">
          <div className="ft_icon">
            <img src="/icons/diary.png" alt="diary" />
            다이어리
          </div>
        </Link>
        <Link href="/market_page">
          <div className="ft_icon">
            <img src="/icons/cart.png" alt="mypage" />
            펫마켓
          </div>
        </Link>
        <Link href="/mypage_page">
          <div className="ft_icon">
            <img src="/icons/info.png" alt="mypage" />
            마이페이지
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
