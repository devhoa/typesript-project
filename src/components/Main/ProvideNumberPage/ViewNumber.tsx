import React, { useState } from "react";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import { useNavigate } from "react-router-dom";
import Addbutton from "../../utils/Addbutton";
import Backbutton from "../../../assets/img/back-square.png";
import Blue from "../../../assets/img/Blue.png";

type Props = {};

const ViewNumber = (props: Props) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState<boolean>(false);

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
                      <h5 className="text-orange me-3">Chi tiết</h5>
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
                <h3 className="text-orange">Quản lý cấp số</h3>
              </div>
              <div className="col-12 my-3 pe-md-0">
                <div className="d-flex flex-wrap-reverse justify-content-between">
                  <div className="col-11">
                    <div className="d-flex justify-content-center">
                      <div className="bdr-16 bg-white mb-4 w-100">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">
                              <div className="p-3 py-4">
                                <h5 className="text-orange">
                                  Thông tin cấp số
                                </h5>
                                <div className="row mt-3">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Họ tên:
                                      </label>
                                      <span className="text-muted col-3">
                                        Nguyễn Thị Dung
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Nguồn cấp:
                                      </label>
                                      <span className="text-muted col-3">
                                        Kiosk
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Tên dịch vụ:
                                      </label>
                                      <span className="text-muted col-3">
                                        Khám tim mạch
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Trạng thái:
                                      </label>
                                      <span className="text-muted col-3">
                                        <div className="d-flex align-items-center">
                                          <img
                                            className="me-2"
                                            alt=""
                                            src={Blue}
                                          />
                                          Đang chờ
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Số thứ tự:
                                      </label>
                                      <span className="text-muted col-3">
                                        2001201
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Số điện thoại:
                                      </label>
                                      <span className="text-muted col-3">
                                        0948523623
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Thời gian cấp:
                                      </label>
                                      <span className="text-muted col-3">
                                        14:35 - 27/03/2023
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Địa chỉ Email:
                                      </label>
                                      <span className="text-muted col-3">
                                        nguyendung@gmail.com
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Hạn sử dụng:
                                      </label>
                                      <span className="text-muted col-3">
                                        18:00 - 27/03/2023
                                      </span>
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
                  <div className="col-1 custom-add-btn">
                    <div className="d-flex justify-content-end mb-4">
                      <div
                        className="max-width-77"
                        onClick={() => navigate(-1)}
                      >
                        <Addbutton icon={Backbutton} title="Quay lại" />
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

export default ViewNumber;
