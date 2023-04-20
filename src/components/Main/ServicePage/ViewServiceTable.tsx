import React, { useRef, useState } from "react";
import data from "../../../data/view_service_data.json";
import "../../../css/Table.css";
import On from "../../../assets/img/on.png";
import Blue from "../../../assets/img/Blue.png";
import Gray from "../../../assets/img/Gray.png";

type Data = typeof data;

type SortKeys = keyof Data[0];

const ViewServiceTable = ({ data }: { data: Data }) => {
  const headers: { key?: SortKeys; label: string }[] = [
    { key: "number", label: "Số thứ tự" },
    { key: "status", label: "Trạng thái" },
  ];

  const quantityPageRef = useRef(8);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(8);

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
    <div className="col-12">
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
              </tr>
            </thead>
            <tbody className="">
              {data.slice(currentIndex, endPosition).map((service: any) => {
                return (
                  <tr key={service.id}>
                    <td className="py-17 ps-17">{service.number}</td>
                    <td className="py-17 ps-17">
                      {service.status === "Đã hoàn thành" ? (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={On} />
                          Đã hoàn thành
                        </div>
                      ) : service.status === "Đang thực hiện" ? (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Blue} />
                          Đang thực hiện
                        </div>
                      ) : (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Gray} />
                          Vắng
                        </div>
                      )}
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

export default ViewServiceTable;
