import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import Dropdown from "../../utils/Dropdown";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import "../../../css/Setting.css";

type Props = {};

const roleOptions = ["Chọn loại vai trò", "Kế toán", "Quản lý", "Admin"];

const statusOptions = ["Chọn loại tình trạng", "Hoạt động", "Ngưng hoạt động"];

const AddAccount = (props: Props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(roleOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(statusOptions[0]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle_1 = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const [types, setTypes] = useState("password");
  const [icons, setIcons] = useState(eyeOff);

  const handleToggle_2 = () => {
    if (types === "password") {
      setIcons(eye);
      setTypes("text");
    } else {
      setIcons(eyeOff);
      setTypes("password");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="setting" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Cài đặt hệ thống</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Quản lý tài khoản</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Thêm tài khoản</h5>
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
                <h3 className="text-orange">Quản lý tài khoản</h3>
                <div className="bdr-16 bg-white my-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 py-4">
                          <h5 className="text-orange">Thông tin tài khoản</h5>
                          <div className="row mt-3">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Họ tên:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập họ tên"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Tên đăng nhập:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên đăng nhập"
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Số điện thoại:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập số điện thoại"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Mật khẩu:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <div className="input-field-settings form-control rounded">
                                <input
                                  autoComplete="new-password"
                                  type={type}
                                  name="password"
                                  placeholder="Nhập mật khẩu"
                                />
                                <span
                                  className="cursor-pointer"
                                  onClick={handleToggle_1}
                                >
                                  <Icon icon={icon} size={25} />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Email:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập email"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Nhập lại mật khẩu:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <div className="input-field-settings form-control rounded">
                                <input
                                  autoComplete="new-password"
                                  type={types}
                                  name="password"
                                  placeholder="Nhập lại mật khẩu"
                                />
                                <span
                                  className="cursor-pointer"
                                  onClick={handleToggle_2}
                                >
                                  <Icon icon={icons} size={25} />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                Vai trò:
                                <span className="text-orange mx-2 fw-bolder">
                                  *
                                </span>
                              </label>
                              <Dropdown
                                options={roleOptions}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                Tình trạng:
                                <span className="text-orange mx-2 fw-bolder">
                                  *
                                </span>
                              </label>
                              <Dropdown
                                options={statusOptions}
                                selectedOption={selectedOptions}
                                setSelectedOption={setSelectedOptions}
                              />
                            </div>
                          </div>
                          <div className="row mt-2 mb-5">
                            <div className="col mb-2">
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
                    Thêm
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

export default AddAccount;
