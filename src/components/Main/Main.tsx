"use client";
import React, { useEffect, useState } from "react";
import "./Main.css";
import { CiSearch } from "react-icons/ci";
import { hospitalData } from "./MainData";
import { pettalkData } from "./MainData";
import { FaLocationDot } from "react-icons/fa6";

export default function MainPage() {
  return (
    <>
      <div className="main_wrapper">
        <div className="pet_info_wrap">
          <img
            className="pet_photo"
            src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/"
          />
          <span className="pet_name">댕댕이</span>
          <div className="circle_wrap">
            <div className="circle">
              <img src="/icons/shot2.png" alt="예방접종" />
            </div>
            <div className="circle">
              <img src="/icons/heart.png" alt="심장사상충" />
            </div>
          </div>
          <span className="pet_number">동물등록번호 : 3952895800</span>
          <span className="pet_info">7년 / 2017년 9월 29일 생</span>
          <span className="shortcut_to_mypet">다니는 병원 {">"}</span>
          <div className="setting_location">
            <FaLocationDot size={13} className="location_dot" />
            위치설정
          </div>
        </div>
        <div className="relative  search_bar">
          <input placeholder="병원 또는 증상을 검색하세요." />
          <CiSearch
            size={24}
            className="absolute top-1/2 transform -translate-y-1/2 ml-3"
          />
        </div>
        <div className="main_contents">
          <div className="main_content_title">동네 병원 추천</div>
          <div className="tags">
            <div>#고양이</div>
            <div>#푸들</div>
            <div>#예방접종</div>
            <div>#미용</div>
          </div>

          <div className="contents_wrap">
            {hospitalData.map((hospital) => (
              <div className="one_item" key={hospital.id}>
                <div className="hospital_img">
                  <img src={hospital.imgSrc} alt={hospital.name} />
                </div>

                <div className="column_wrap">
                  <div className="hospital_name">{hospital.name}</div>
                  <div className="hospital_address">
                    <span>{hospital.distance}m</span>&nbsp;|&nbsp;
                    <span>{hospital?.address}</span>
                  </div>
                  <div className="flex_wrap">
                    <div className="telephone">
                      <img src="/icons/telephone.png" />
                      <span>전화</span>
                    </div>
                    <div className="reservation">예약하기</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="see_more">병원 더보기</div>
          </div>

          <div className="review_wrap">
            <div className="main_content_title">병원 리뷰</div>
            <div className="review_text ">
              <span className="review_hospital">펫러브의료센터</span>
              <span className="review_region">(강남구)</span> 의사쌤이 너무
              친절...
            </div>
            <div className="review_text ">
              <span className="review_hospital">서초동물병원</span>
              <span className="review_region">(서초구)</span> 슬개골 수술
              후기...
            </div>
            <div className="review_text ">
              <span className="review_hospital">동작바른동물병원</span>
              <span className="review_region">(동작구)</span> 최신 진단 장비
              보유...
            </div>
          </div>

          <div className="notice_wrap">
            <div className="main_content_title">공지사항</div>
            <div className="notice_text">
              <ul>
                <li>📌&nbsp; 반려동물 AI 응급 의료 서비스 오픈</li>
                <li>📌&nbsp; 새로워진 앱 사용법</li>
              </ul>
            </div>
          </div>

          <div className="pettalk_wrap">
            <div className="main_content_title">
              최신 펫톡<span>더보기</span>
            </div>
            <div className="pettalk">
              {pettalkData.map((talk) => (
                <div key={talk.id}>
                  <img src={talk.imgSrc} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="petbot_wrap">
          <div className="petbot_btn">
            <img src="/icons/doctor2.png" />
          </div>
        </div>
      </div>
    </>
  );
}
