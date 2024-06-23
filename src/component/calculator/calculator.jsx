import { useEffect, useState } from "react";
import Result from "./result";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const nav = useNavigate();

  // const 지정한다.
  // 첫번째 변수는 진짜변수 값을 읽는 용도 (쓸 수 없음)
  // 두번째 변수는 값을 수정하는 용도(읽을 수 없음)
  // () 사이에 값은 초기 값
  const [resultData, setResultData] = useState(0);

  // useEffect의 의존성 배열이 아무것도 없으면 렌더링 될 때 최초 실행
  // 의존성 배열이 있으면 값이 바뀔 때 마다 실행
  useEffect(() => {
    if (resultData & (resultData % 3 === 0)) {
      nav("/dataTable");
      // window.location.href = "/dataTable";
    }
  }, [resultData]);

  function addPlus() {
    setResultData(resultData + 1);
  }

  return (
    <>
      <h2>1씩 더하기</h2>
      <button onClick={addPlus}>1씩 더하기</button>
      <Result inputData={resultData} />
    </>
  );
}
