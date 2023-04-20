import React, { useRef, useState } from "react";
import data from "../../../data/device_data.json";
import "../../../css/Table.css";
import Off from "../../../assets/img/off.png";
import On from "../../../assets/img/on.png";

type Data = typeof data;

type SortKeys = keyof Data[0];

const DeviceTable = ({ data }: { data: Data }) => {
  const headers: { key?: SortKeys; label: string }[] = [
    { key: "id", label: "Mã thiết bị" },
    { key: "name", label: "Tên thiết bị" },
    { key: "IP", label: "Địa chỉ IP" },
    { key: "status", label: "Trạng thái hoạt động" },
    { key: "connect", label: "Trạng thái kết nối" },
    { key: "service", label: "Dịch vụ sử dụng" },
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
                <td className="py-17 ps-17"></td>
              </tr>
            </thead>
            <tbody className="">
              {data.slice(currentIndex, endPosition).map((device: any) => {
                return (
                  <tr key={device.id}>
                    <td className="py-17 ps-17">{device.id}</td>
                    <td className="py-17 ps-17">{device.name}</td>
                    <td className="py-17 ps-17">{device.IP}</td>
                    <td className="py-17 ps-17">
                      {device.status ? (
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
                      {device.connect ? (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={On} />
                          Kết nối
                        </div>
                      ) : (
                        <div className="d-flex align-items-center">
                          <img className="me-2" alt="" src={Off} />
                          Mất kết nối
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="col">{device.service}</div>
                      <a
                        href="*"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        Xem thêm
                      </a>

                      <div
                        className="modal fade"
                        id="myModal"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm
                              mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng
                              quát
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-17 ps-17">
                      <a href="/view-device">Chi tiết</a>
                    </td>
                    <td className="py-17 ps-17">
                      <a href="/edit-device">Cập nhật</a>
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
            {/* <i className="fa-solid fa-caret-left d-flex align-items-center fa-lg"></i> */}
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
            {/* <i className="fa-solid fa-caret-right d-flex align-items-center fa-lg"></i> */}
            <i className="fa-solid fa-play d-flex align-items-center fa-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceTable;
