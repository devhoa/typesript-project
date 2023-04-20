import React, { useRef, useState } from "react";
import data from "../../../data/number_data.json";
import "../../../css/Table.css";
import Off from "../../../assets/img/off.png";
import Blue from "../../../assets/img/Blue.png";
import Gray from "../../../assets/img/Gray.png";

type Data = typeof data;

type SortKeys = keyof Data[0];

const NumberTable = ({ data }: { data: Data }) => {
  const headers: { key?: SortKeys; label: string }[] = [
    { key: "number", label: "STT" },
    { key: "customer_name", label: "Tên khách hàng" },
    { key: "service_name", label: "Tên dịch vụ" },
    { key: "time", label: "Thời gian cấp" },
    { key: "expiry", label: "Hạn sử dụng" },
    { key: "status", label: "Trạng thái" },
    { key: "supply", label: "Nguồn cấp" },
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
                <td></td>
              </tr>
            </thead>
            <tbody className="">
              {data.slice(currentIndex, endPosition).map((number: any) => {
                return (
                  <tr key={number.id}>
                    <td className="py-17 ps-17">{number.number}</td>
                    <td className="py-17 ps-17">{number.customer_name}</td>
                    <td className="py-17 ps-17">{number.service_name}</td>
                    <td className="py-17 ps-17">{number.time}</td>
                    <td className="py-17 ps-17">{number.expiry}</td>
                    <td className="py-17 ps-17">
                      {number.status === "Đang chờ" ? (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Blue} />
                          Đang chờ
                        </div>
                      ) : number.status === "Bỏ qua" ? (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Off} />
                          Bỏ qua
                        </div>
                      ) : (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Gray} />
                          Đã sử dụng
                        </div>
                      )}
                    </td>
                    <td className="py-17 ps-17">{number.supply}</td>
                    <td className="py-17 ps-17">
                      <a href="/view-number">Chi tiết</a>
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

export default NumberTable;
