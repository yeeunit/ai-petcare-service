"use client";
import React from "react";
import "./Main.css";

export default function MainPage() {
  return (
    <>
      <div className="main_wrapper">
        <div className="pet_info">
          <div className="pet_name">댕댕이</div>
          <div className="shortcut_to_mypet">바로보기{">"}</div>
        </div>
        <div className="search_bar">
          <input placeholder="병원 또는 증상을 검색하세요." />
        </div>
        <div className="main_contents">
          <div>동네 병원 추천</div>
          <div className="tags">
            <div>고양이</div>
            <div>푸들</div>
          </div>

          <div className="one_item">
            <div>
              <img className="hospital_img" />
            </div>
            <div>
              <div>동네병원1</div>
              <div>예약하기</div>
            </div>
          </div>
          {/*  */}
          <div className="one_item">
            <div>
              <img className="hospital_img" />
            </div>
            <div>
              <div>동네병원1</div>
              <div>예약하기</div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
