import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <h1>LOGO</h1>
        <div className="header_icon">
          <img src="/icons/bell.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
