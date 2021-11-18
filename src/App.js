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

  function 제목바꾸기() {
    글제목변경(["여자 코트 추천", "강남 우동 맛집", "옷가게 추천"]);
  }

  return (
    <div className="App">
      <nav className="black-nav">
        <h1>개발 Blog</h1>
      </nav>
      <button onClick={제목바꾸기}>클릭!</button>
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
                👍
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
      </section>
    </div>
  );
}

export default App;
