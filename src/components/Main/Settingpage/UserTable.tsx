import React, { useRef, useState } from "react";
import data from "../../../data/user_data.json";
import "../../../css/Table.css";

type Data = typeof data;

type SortKeys = keyof Data[0];

const UserTable = ({ data }: { data: Data }) => {
  const headers: { key?: SortKeys; label: string }[] = [
    { key: "username", label: "Tên đăng nhập" },
    { key: "operation_time", label: "Thời gian tác động" },
    { key: "IP", label: "IP thực hiện" },
    { key: "operations", label: "Thao tác thực hiện" },
  ];

  const quantityPageRef = useRef(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(10);

  const handlePagination = (index: any) => {
    setEndPosition((index + 1) * quantityPageRef.current);
    setCurrentIndex(
      (index + 1) * quantityPageRef.current - quantityPageRef.current
    );
  };

  const handlePrev = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - quantityPageRef.current);
      setEndPosition(endPosition - quantityPageRef.current);
    }
  };

  const handleNext = () => {
    if (endPosition < data.length) {
      setCurrentIndex(currentIndex + quantityPageRef.current);
      setEndPosition(endPosition + quantityPageRef.current);
    }
  };
  return (
    <div className="col-11">
      {/* Table */}
      <div className="d-flex justify-content-center">
        <div className="overflow-table w-100 bdr-table mb-4">
          <table className="table table-striped table-hover table-bordered mb-0">
            <thead className="my-background-orange text-white">
              <tr>
                {headers.map((row) => {
                  return (
                    <td className="py-17 ps-17" key={row.key}>
                      {row.label}
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody className="">
              {data.slice(currentIndex, endPosition).map((user: any) => {
                return (
                  <tr key={user.id}>
                    <td className="py-17 ps-17">{user.username}</td>
                    <td className="py-17 ps-17">{user.operation_time}</td>
                    <td className="py-17 ps-17">{user.IP}</td>
                    <td className="py-17 ps-17">{user.operations}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end">
        <div className="d-flex flex-wrap">
          <button
            className="btnPaginate mx-0 px-1"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-play fa-rotate-180 d-flex align-items-center fa-xs"></i>
          </button>
          {Array(Math.ceil(data.length / quantityPageRef.current))
            .fill(null)
            .map((_, index) => (
              <div
                className={`btnPaginate pagin ${
                  currentIndex === 0 && index === currentIndex
                    ? "active"
                    : index === currentIndex / quantityPageRef.current &&
                      "active"
                }`}
                onClick={() => handlePagination(index)}
              >
                {index + 1}
              </div>
            ))}
          <button
            className="btnPaginate mx-0 px-1"
            onClick={handleNext}
            disabled={endPosition > data.length}
          >
            <i className="fa-solid fa-play d-flex align-items-center fa-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
