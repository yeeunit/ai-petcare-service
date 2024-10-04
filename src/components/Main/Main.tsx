"use client";
import React from "react";
import "./Main.css";

export default function MainPage() {
  const hospitalData = [
    {
      id: 1,
      name: "동네병원1",
      imgSrc:
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: 343,
    },
    {
      id: 2,
      name: "동네병원2",
      imgSrc:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: 222,
    },
    {
      id: 3,
      name: "동네병원3",
      imgSrc:
        "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: 888,
    },
    {
      id: 4,
      name: "동네병원4",
      imgSrc:
        "https://images.unsplash.com/photo-1512677859289-868722942457?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: 790,
    },
    {
      id: 5,
      name: "동네병원5",
      imgSrc:
        "https://images.unsplash.com/photo-1606619788401-85dd53e9c8be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: 866,
    },
  ];

  return (
    <>
      <div className="main_wrapper ">
        <div className="pet_info ">
          <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/" />
          <span>댕댕이</span>
          <div className="shortcut_to_mypet">바로보기{">"}</div>
        </div>
        <div className="search_bar">
          <input placeholder="병원 또는 증상을 검색하세요." />
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
                    <span>{hospital.distance}m</span> |{" "}
                    <span>경기도 김포시 김포한강1로97번길 </span>
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
          </div>
        </div>
      </div>
    </>
  );
}
