import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import "../../../css/Number.css";

type Props = {};

const AddNumber = (props: Props) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [options, setOptions] = useState<string>("");

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="provide-number" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Cấp số</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Danh sách cấp số</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Cấp số mới</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center my-4 px-2">
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <img
                        className="me-4 cursor-pointer"
                        src={showNotification === true ? bell2 : bell1}
                        alt=""
                        onClick={() => setShowNotification(!showNotification)}
                      />
                      {showNotification && (
                        <>
                          <div className="dropdown-options-bell rounded border ovf-170 cursor-pointer">
                            <div className="noti-title fw-bolder">
                              Thông báo
                            </div>
                            <div className="overflow-385">
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                              <div className="dropdown-option-bell">
                                <div className="d-flex flex-wrap align-items-center">
                                  <p className="text-brown fw-bolder mb-1">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                  </p>
                                  <p className="text-muted fw-bolder mb-0">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      onClick={() => navigate("/")}
                      className="d-flex align-items-center text-decoration-none cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <img className="w-100 h-100" src={avatar} alt="" />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <p className="m-0 text-muted">Xin chào</p>
                        <h5 className="m-0 text-dark">Lê Quỳnh Ái Vân</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="container-fluid m-2 pe-0">
            <div className="row w-100">
              <div className="col-md-11">
                <h3 className="text-orange">Quản lý dịch vụ</h3>
              </div>
              <div className="col-md-12 my-3">
                <div className="bdr-16 bg-white w-100 h-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="col-12 my-5">
                          <h1 className="text-orange text-center">
                            CẤP SỐ MỚI
                          </h1>
                        </div>
                        <div className="col-6 text-center relative-25 mb-5">
                          <label className="form-label fw-bolder">
                            Dịch vụ khách hàng lựa chọn
                          </label>
                          <div
                            className="d-flex flex-column gap-2 position-relative"
                            onClick={() => setShowDropdown(!showDropdown)}
                          >
                            <input
                              className="form-control bg-white cursor-pointer border-orange"
                              type="text"
                              value={options}
                              placeholder="Chọn dịch vụ"
                              disabled
                            />
                            <i
                              className={`fa-solid fa-lg pds-12 text-orange cursor-pointer ${
                                showDropdown ? "fa-caret-up " : "fa-caret-down "
                              }  position-absolute top-50 end-0 translate-middle`}
                            ></i>
                            {showDropdown && (
                              <>
                                <div className="dropdown-options rounded border border-secondary ovf-170 cursor-pointer">
                                  <div
                                    className="dropdown-option rounded"
                                    onClick={() => setOptions("Khám tim mạch")}
                                  >
                                    Khám tim mạch
                                  </div>
                                  <div
                                    className="dropdown-option rounded"
                                    onClick={() =>
                                      setOptions("Khám sản - Phụ khoa")
                                    }
                                  >
                                    Khám sản - Phụ khoa
                                  </div>
                                  <div
                                    className="dropdown-option rounded"
                                    onClick={() =>
                                      setOptions("Khám răng hàm mặt")
                                    }
                                  >
                                    Khám răng hàm mặt
                                  </div>
                                  <div
                                    className="dropdown-option rounded"
                                    onClick={() =>
                                      setOptions("Khám tai mũi họng")
                                    }
                                  >
                                    Khám tai mũi họng
                                  </div>
                                  <div
                                    className="dropdown-option rounded"
                                    onClick={() => setOptions("Khám hô hấp")}
                                  >
                                    Khám hô hấp
                                  </div>
                                  <div
                                    className="dropdown-option rounded"
                                    onClick={() => setOptions("Khám tổng quát")}
                                  >
                                    Khám tổng quát
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="col-12 pt-5 mt-5 mb-5">
                          <div className="d-flex  justify-content-center">
                            <button
                              type="button"
                              className="btn btn-outline-warning text-center mx-4 min-w-147 fw-bolder cs-pd-btn"
                              onClick={() => navigate(-1)}
                            >
                              Hủy bỏ
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning text-center mx-4 min-w-147 fw-bolder cs-pd-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#numberModal"
                            >
                              In số
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id="numberModal"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content bdr-24">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="text-center">
                                <h3 className="text-muted mb-3">
                                  Số thứ tự được cấp
                                </h3>
                                <h1 className="text-orange mb-3 fw-bolder">
                                  2001201
                                </h1>
                                <span className="text-muted d-flex justify-content-center">
                                  DV: {options}
                                  <p className="ps-1 fw-bolder">
                                    (tại quầy số 1)
                                  </p>
                                </span>
                              </div>
                            </div>
                            <div className="modal-footer my-background-orange bdr-bot-24">
                              <h5 className="col-12 text-center text-white my-2">
                                Thời gian cấp: 09:30 30/03/2023
                              </h5>
                              <h5 className="col-12 text-center text-white mb-2">
                                Hạn sử dụng: 17:30 30/03/2023
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNumber;