import "../../css/table.css";
import { Data } from "../util/tableData";
export default function Table() {
  const impData = Data;
  return (
    <>
      <table>
        <thead>
          <tr style={{ fontWeight: "bold" }}>
            <td>순서</td>
            <td>나이</td>
            <td>성별</td>
            <td>이름</td>
            <td>키</td>
            <td>몸무게</td>
          </tr>
        </thead>
        <tbody>
          {impData.map((data, index) => (
            <tr key={index}>
              <td>{data.no}</td>
              <td>{data.age}</td>
              <td>{data.sex}</td>

              <td>{data.name === "박혁거세" ? "XXX" : data.name}</td>

              <td>{data.height}</td>
              <td>{data.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
