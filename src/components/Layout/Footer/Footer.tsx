// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="ft_icon">
          <Link href="/">
            <img src="/icons/home.png" />홈
          </Link>
        </div>
        <div>
          <Link href="/hospital">병원찾기</Link>
        </div>
        <div>
          <Link href="/mypet_diary">
            마이펫
            <br />
            다이어리
          </Link>
        </div>
        <div>
          <Link href="/mypage">
            마이
            <br />
            페이지
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
