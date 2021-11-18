/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  //useState
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "옷가게 추천",
  ]);
  let [like, likeUp] = useState(0);

  let [modal, modal변경] = useState(false);

  // function 제목바꾸기() {
  //   //state는 건들지 말 것 -> 권장사항이 아님. 나중에 꼬일수도 있음.
  //   var newArray = [...글제목]; //deep copy : 새로운 복사본을 생성해주세요. 그냥 쓰면 문제 발생
  //   newArray[0] = "여자코트 추천";
  //   글제목변경(newArray);
  // }

  //1.기존 state 카피본 만들기 -> 2.카피본에 수정사항 반영 -> 3.변경함수()에 집어넣기

  // function 순서대로정렬() {
  //   var newArray = [...글제목];
  //   var changeArray = newArray.sort();
  //   글제목변경(changeArray);
  // }

  return (
    <div className="App">
      <nav className="black-nav">
        <h1>개발 Blog</h1>
      </nav>
      {/* <button onClick={순서대로정렬}>클릭!</button> */}
      <section className="list_wrap">
        <article className="list_container">
          <div className="list">
            <h2>
              {글제목[0]}
              <span
                onClick={() => {
                  likeUp(like + 1);
                }}
              >
                {" "}
                👍{" "}
              </span>
              {like}
            </h2>
            <p>11월 17일</p>
            <hr />
          </div>
          <div className="list">
            <h2>{글제목[1]}</h2>
            <p>11월 17일</p>
            <hr />
          </div>
          <div className="list">
            <h2>{글제목[2]}</h2>
            <p>11월 17일</p>
            <hr />
          </div>
        </article>

        <button
          onClick={
            () => modal변경(modal === false ? true : false)
            // () => {modal변경(!modal)}
          }
        >
          눌러줘!
        </button>

        {modal === true ? <Modal /> : null}
      </section>
    </div>
  );
}

function Modal() {
  return (
    <>
      <article className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </article>
    </>
  );
}

export default App;
