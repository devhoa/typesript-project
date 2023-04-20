import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import SideBar from "../SideBar";

type Props = {};

const EditService = (props: Props) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState<boolean>(false);

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="service" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Dịch vụ</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Danh sách dịch vụ</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Chi tiết</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Cập nhật</h5>
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
              <div className="col-12">
                <h3 className="text-orange">Quản lý dịch vụ</h3>
                <div className="bdr-16 bg-white my-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 py-4">
                          <h5 className="text-orange">Thông tin dịch vụ</h5>
                          <div className="row mt-3">
                            <div className="d-flex justify-content-between">
                              <div className="col-md-6 mb-2">
                                <div className="col-12 mb-3 pde-12">
                                  <label className="form-label fw-bolder">
                                    <div className="d-flex">
                                      Mã dịch vụ:
                                      <span className="text-orange mx-2 fw-bolder">
                                        *
                                      </span>
                                    </div>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập mã dịch vụ"
                                    value="201"
                                  />
                                </div>
                                <div className="col-12 pde-12">
                                  <label className="form-label fw-bolder">
                                    <div className="d-flex">
                                      Tên dịch vụ:
                                      <span className="text-orange mx-2 fw-bolder">
                                        *
                                      </span>
                                    </div>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập tên dịch vụ"
                                    value="Khám tim mạch"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-2">
                                <div className="col-12 pds-12">
                                  <label className="form-label fw-bolder">
                                    Mô tả:
                                  </label>
                                  <div className="input-group">
                                    <textarea
                                      className="form-control h-123"
                                      placeholder="Mô tả dịch vụ"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="text-orange mt-3">Quy tắc cấp số</h5>
                          <div className="row mt-3">
                            <div className="col-md-8 mb-2">
                              <div className="d-flex align-items-center">
                                <div className="row g-2 align-items-center">
                                  <div className="col-auto">
                                    <input
                                      className="form-check-input my-checkbox"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  <div className="col-auto">
                                    <label className="col-form-label w-140 fw-bolder">
                                      Tăng tự động từ:
                                    </label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      type="text"
                                      className="form-control inputNumber"
                                      value="0001"
                                    />
                                  </div>
                                  <div className="col-auto">
                                    <label className="col-form-label">
                                      đến
                                    </label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      type="text"
                                      className="form-control inputNumber"
                                      value="9999"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8 my-2">
                              <div className="d-flex align-items-center">
                                <div className="row g-2 align-items-center">
                                  <div className="col-auto">
                                    <input
                                      className="form-check-input my-checkbox"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  <div className="col-auto">
                                    <label className="col-form-label w-140 fw-bolder">
                                      Prefix:
                                    </label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      type="text"
                                      className="form-control inputNumber"
                                      value="0001"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8 my-2">
                              <div className="d-flex align-items-center">
                                <div className="row g-2 align-items-center">
                                  <div className="col-auto">
                                    <input
                                      className="form-check-input my-checkbox"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  <div className="col-auto">
                                    <label className="col-form-label w-140 fw-bolder">
                                      Surfix:
                                    </label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      type="text"
                                      className="form-control inputNumber"
                                      value="0001"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8 my-2">
                              <div className="d-flex align-items-center">
                                <div className="row g-2 align-items-center">
                                  <div className="col-auto">
                                    <input
                                      className="form-check-input my-checkbox"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  <div className="col-auto">
                                    <label className="col-form-label w-140 fw-bolder">
                                      Reset mỗi ngày
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row my-2">
                            <div className="col ">
                              <div className="d-flex">
                                <span className="text-orange me-2 fw-bolder">
                                  *
                                </span>
                                Là trường thông tin bắt buộc
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
