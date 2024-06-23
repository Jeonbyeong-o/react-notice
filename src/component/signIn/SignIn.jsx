import React, { useEffect, useState } from "react";
import "../../css/signIn.css";
import { useNavigate } from "react-router-dom";

export default function SignIns() {
  const [loginData, setLoginData] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (loginData) {
      if (loginData.id !== "test" || loginData.pw !== "1234") {
        alert("아이디 또는 패스워드가 틀렸습니다");
      } else {
        nav("/dataTable");
      }
    }
  });
  const login = () => {
    const data = {
      id: document.getElementById("signId").value,
      pw: document.getElementById("signPw").value,
    };
    setLoginData(data);
  };
  const findid = () => {
    nav("/FindId");
  };
  const findpw = () => {
    nav("/FindPw");
  };
  return (
    <div className="signin-container">
      <h1>SignIn</h1>
      <div className="signin-box">
        <div className="input-field">
          <input type="text" id="signId" placeholder="id를 입력하세요" />
        </div>
        <div className="input-field">
          <input
            type="password"
            id="signPw"
            placeholder="password를 입력하세요"
          />
        </div>
        <div className="button-field">
          <button type="button" onClick={login}>
            로그인
          </button>
        </div>
        <br />
        <button type="button" onClick={findid}>
          아이디 찾기
        </button>
        &nbsp;
        <button type="button" onClick={findpw}>
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
}
