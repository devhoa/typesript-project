import React, { useState } from "react";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import userProfile from "../../../assets/img/profile.png";
import camera from "../../../assets/img/camera.png";
import "../../../css/Profile.css";
import { useNavigate } from "react-router-dom";

export interface IProps {}

const Profile: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState<boolean>(false);

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <h5 className="text-orange text-center">
                      Thông tin cá nhân
                    </h5>
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
          <div className="container-fluid bdr-12 bg-white my-5 col-11 mx-3">
            <div className="row">
              <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center py-4">
                  <div className="position-relative">
                    <img className="rounded-circle" src={userProfile} alt="" />
                    <img
                      className="position-absolute bottom-0 end-0 transform-icon cursor-pointer"
                      src={camera}
                      alt=""
                    />
                  </div>
                  <h4 className="mt-4">Lê Quỳnh Ái Vân</h4>
                </div>
              </div>
              <div className="col-md-8">
                <div className="p-3 py-4">
                  <div className="row mt-2">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Tên người dùng:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lê Quỳnh Ái Vân"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Tên đăng nhập:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="lequynhaivan01"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Số điện thoại:</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0767375921"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Mật khẩu:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="311940211"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="adminSSO1@domain.com"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Vai trò:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Kế toán"
                        disabled
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
  );
};

export default Profile;
