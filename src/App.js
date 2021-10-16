/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글정보, 글정보변경] = useState([
    {
      글제목: "남자 코트 추천",
      하트: 0,
    },
    {
      글제목: "강남 우동 맛집",
      하트: 0,
    },
    {
      글제목: "파이썬 독학",
      하트: 0,
    },
  ]);

  let [modal, modal변경] = useState(true);
  let [누른글정보, 누른글정보변경] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let [작성날짜, 작성날짜변경] = useState("2021. 10. 16");

  const 하트올리기 = (i) => {
    const newArr = 글정보.map((글) => {
      if (글.글제목 === 글정보[i].글제목) {
        return { ...글, 하트: 글.하트 + 1 };
      } else {
        return 글;
      }
    });
    글정보변경(newArr);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {글정보.map((글, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른글정보변경(i);
              }}
            >
              {글.글제목}
              <span onClick={() => 하트올리기(i)}> 💜</span>
              {글.하트}
            </h3>
            <p>{작성날짜} 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const arrayCopy = [...글정보];
            arrayCopy.unshift({ 글제목: 입력값, 하트: 0 });
            글정보변경(arrayCopy);
            // console.log(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          modal === false ? modal변경(true) : modal변경(false);
        }}
      >
        열고 닫기
      </button>
      {modal === true ? (
        <Modal 글정보={글정보} 누른글정보={누른글정보} 작성날짜={작성날짜} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>{props.글정보[props.누른글정보].글제목}</h2>
      <p>{props.작성날짜} 발행</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
