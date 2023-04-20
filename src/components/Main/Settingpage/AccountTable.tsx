import React, { useRef, useState } from "react";
import data from "../../../data/account_data.json";
import "../../../css/Table.css";
import Off from "../../../assets/img/off.png";
import On from "../../../assets/img/on.png";

type Data = typeof data;

type SortKeys = keyof Data[0];

const AccountTable = ({ data }: { data: Data }) => {
  const headers: { key?: SortKeys; label: string }[] = [
    { key: "username", label: "Tên đăng nhập" },
    { key: "name", label: "Họ tên" },
    { key: "phone", label: "Số điện thoại" },
    { key: "email", label: "Email" },
    { key: "role", label: "Vai trò" },
    { key: "status", label: "Trạng thái hoạt động" },
  ];

  const quantityPageRef = useRef(9);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(9);

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
                      {row.label}{" "}
                    </td>
                  );
                })}
                <td className="py-17 ps-17"></td>
              </tr>
            </thead>
            <tbody className="">
              {data.slice(currentIndex, endPosition).map((account: any) => {
                return (
                  <tr key={account.id}>
                    <td className="py-17 ps-17">{account.username}</td>
                    <td className="py-17 ps-17">{account.name}</td>
                    <td className="py-17 ps-17">{account.phone}</td>
                    <td className="py-17 ps-17">{account.email}</td>
                    <td className="py-17 ps-17">{account.role}</td>
                    <td className="py-17 ps-17">
                      {account.status ? (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={On} />
                          Hoạt động
                        </div>
                      ) : (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Off} />
                          Ngưng hoạt động
                        </div>
                      )}
                    </td>
                    <td className="py-17 ps-17">
                      <a href="/edit-account">Cập nhật</a>
                    </td>
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

export default AccountTable;
