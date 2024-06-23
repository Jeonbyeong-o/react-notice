import { useEffect, useState } from "react";

export default function FindId() {
  const [findData, setFindData] = useState();
  useEffect(() => {
    if (findData) {
      if (findData.Nm !== "전병오" || findData.Pn !== "01047457414") {
        alert("성명 또는 핸드폰번호가 일치하지 않습니다");
      } else {
        alert("5555");
      }
    }
  });
  const firstCode = () => {
    const data = {
      Nm: document.getElementById("name").value,
      Pn: document.getElementById("phoneNumber").value,
    };
    setFindData(data);
  };
  const secondCode = () => {
    let codev = document.getElementById("code").value;
    if (codev !== "5555") {
      alert("인증코드가 틀렸습니다");
    } else {
      alert("귀하의 패스워드는 '1234' 입니다");
    }
  };
  return (
    <div className="signin-container">
      <h1>본인인증</h1>
      <div className="signin-box">
        <div className="input-field">
          <input type="text" id="name" placeholder="성명" />
        </div>
        <div className="input-field">
          <input
            type="password"
            id="phoneNumber"
            placeholder="핸드폰번호(-)제외"
          />
        </div>
        <div className="button-field">
          <button type="button" onClick={firstCode}>
            인증코드발송
          </button>
        </div>
        <br />
        <div className="input-field">
          <input type="text" id="code" placeholder="인증코드" />
        </div>
        <div className="button-field">
          <button type="button" onClick={secondCode}>
            인증
          </button>
        </div>
      </div>
    </div>
  );
}
