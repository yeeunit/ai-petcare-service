"use client";

import { useEffect, useState } from "react";
import "./Hospital.css";

export default function Hospital() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514328525431-eac296c01d82?q=80&w=1618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // 버튼 클릭 시 해당 이미지로 이동
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="img_slider_wrap">
          <div
            className="img_slider"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / images.length)
              }%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((img, index) => (
              <div className="img_div" key={index}>
                <span className="img_slider_text">동물병원 {index + 1}</span>
                <img src={img} />
              </div>
            ))}
          </div>

          {/* 동그란 버튼 */}
          <div className="dots_container">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="check_health">
          <div>
            <div className="check_health_btn">마이펫 건강체크 {">"}</div>
          </div>
        </div>

        <div className="check_health">
          <div>
            <div className="check_health_btn">동물병원 지도 {">"}</div>
          </div>
        </div>

        <div className="check_health">
          <div>
            <div className="check_health_btn">다니는 병원 {">"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
