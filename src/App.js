import { useState } from "react";
import { dataSet } from "./DataSet";

export default function App() {
  const [currPage, setCurrPage] = useState(1);
  const recordsPerPage = 5;
  const lastIdx = currPage * recordsPerPage;
  const firstIdx = lastIdx - recordsPerPage;
  const currDataSet = dataSet.slice(firstIdx, lastIdx);
  const npage = Math.ceil(dataSet.length / recordsPerPage);
  const pageNum = [...Array(npage + 1).keys()].slice(1);

  const handelPageNum = (e) => {
    const n = e.target.value;
    setCurrPage(n);
  };

  const handelPrev = () => {
    if (currPage === 1) {
      alert("You cannot go back");
      return;
    }
    setCurrPage(currPage - 1);
  };

  const handelNext = () => {
    if (currPage === npage) {
      alert("You cannot go forward");
      return;
    }
    setCurrPage(currPage + 1);
  };

  return (
    <div className="m-10 flex flex-col gap-10 items-center">
      <h1 className="text-5xl font-bold underline">Phonebook</h1>
      <table className="border-separate border-spacing-y-10">
        <thead className="text-3xl font-bold ">
          <th>Id</th>
          <th className="">Name</th>
          <th className="pl-20">Contact</th>
        </thead>
        <tbody className="text-xl ">
          {currDataSet.map((data, idx) => {
            return (
              <tr key={idx} className="">
                <td className="">{data.id}</td>
                <td className="pl-20">{data.name}</td>
                <td className="pl-20">{data.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex gap-10 text-blue-600">
        <button
          onClick={handelPrev}
          className="px-2 py-1 border-[1px] border-black"
        >
          Prev
        </button>
        <div className="flex gap-1">
          {pageNum.map((num, idx) => {
            return (
              <button
                onClick={handelPageNum}
                className="px-2 py-1 border-[1px] border-black"
              >
                {num}
              </button>
            );
          })}
        </div>
        <button
          onClick={handelNext}
          className="px-2 py-1 border-[1px] border-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}
