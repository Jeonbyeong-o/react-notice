import { useState } from "react";
import Add from "./resultAdd";
import Minus from "./resultMinus";

export default function Calculator() {
  const [addData, setAddData] = useState(0);
  const [minusData, setMinusData] = useState(0);
  const addPlus = () => {
    setAddData(addData + 1);
    console.log(addData + 1);
  };
  const minus = () => {
    setMinusData(minusData - 1);
    console.log(minusData - 1);
  };
  return (
    <>
      <h3>1씩 더하기</h3>
      <button onClick={addPlus}>더하기</button>
      <br />
      <button onClick={minus}>빼기</button>
      <Add inputData={addData} />
      <Minus inputData2={minusData} />
    </>
  );
}
