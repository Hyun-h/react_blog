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
  let [like, likeUp] = useState([0, 0, 0]);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

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
          {글제목.map((title, index) => {
            return (
              <div key={index} className="list">
                <h2
                  onClick={() => {
                    누른제목변경(index);

                    //모달창 열고 닫기 이쪽으로
                    modal변경(!modal);
                  }}
                >
                  {title}
                </h2>
                <span
                  onClick={() => {
                    const likeCopy = [...like];
                    likeCopy[index]++;
                    likeUp(likeCopy);
                  }}
                >
                  {" "}
                  👍{" "}
                </span>
                {like[index]}
                <p>11월 17일</p>
                <hr />
              </div>
            );
          })}
        </article>

        {/* 자식의 부모의 state를 쓰고 싶으면 반드시 이야기 해줘야 함.
        props로 자식에게 state 전해주는 법
        1. <자식컴포넌트 작명={state명} /> */}
        {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
      </section>
    </div>
  );
}

// props로 자식에게 state 전해주는 법
// 2. 자식컴포넌트에서 props 파라미터 입력 후 사용
//부모에게 전달받은 props는 여기에 다 들어있음
function Modal(props) {
  return (
    <>
      <article className="modal">
        {/* 3. 가져다 쓸 때는 꼭 props.state명 */}
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </article>
    </>
  );
}

export default App;
