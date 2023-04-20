import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import Editbutton from "../../../assets/img/EditSquare.png";
import Addbutton from "../../utils/Addbutton";

type Props = {};

const ViewDevice = (props: Props) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState<boolean>(false);

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="device" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Thiết bị</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Danh sách thiết bị</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Chi tiết thiết bị</h5>
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
                <h3 className="text-orange">Quản lý thiết bị</h3>
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
                                  Thông tin thiết bị
                                </h5>
                                <div className="row mt-3">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Mã thiết bị:
                                      </label>
                                      <span className="text-muted col-3">
                                        KIO_01
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Loại thiết bị:
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
                                        Tên thiết bị:
                                      </label>
                                      <span className="text-muted col-3">
                                        Kiosk
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Tên đăng nhập:
                                      </label>
                                      <span className="text-muted col-3">
                                        Linhkyo011
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Địa chỉ IP:
                                      </label>
                                      <span className="text-muted col-3">
                                        128.172.308
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Mật khẩu:
                                      </label>
                                      <span className="text-muted col-3">
                                        CMS
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col">
                                    <label className="form-label fw-bolder">
                                      <div className="d-flex">
                                        Dịch vụ sử dụng:
                                      </div>
                                    </label>
                                  </div>
                                  <span className="text-muted me-2">
                                    Khám tim mạch, Khám sản - Phụ khoa, Khám
                                    răng hàm mặt, Khám tai mũi họng, Khám hô
                                    hấp, Khám tổng quát.
                                  </span>
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
                        onClick={() => navigate("/edit-device")}
                      >
                        <Addbutton
                          icon={Editbutton}
                          title="Cập nhật thiết bị"
                        />
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

export default ViewDevice;
