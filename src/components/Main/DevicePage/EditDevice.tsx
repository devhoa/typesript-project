import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import Dropdown from "../../utils/Dropdown";
import { Select, SelectOption } from "../../utils/Select";

type Props = {};

const editDeviceOptions = ["Kiosk", "Display counter"];

const selectOptions = [
  { label: "Khám tim mạch", value: 1 },
  { label: "Khám sản phụ khoa", value: 2 },
  { label: "Khám răng hàm mặt", value: 3 },
  { label: "Khám tai mũi họng", value: 4 },
  { label: "Khám hô hấp", value: 5 },
  { label: "Khám tổng quát", value: 6 },
];

const EditDevice = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(editDeviceOptions[0]);
  const [value1, setValue1] = useState<SelectOption[]>([selectOptions[0]]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const navigate = useNavigate();
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
                      <h5 className="text-orange me-3">Cập nhật thiết bị</h5>
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
                <h3 className="text-orange">Quản lý thiết bị</h3>
                <div className="bdr-16 bg-white my-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 py-4">
                          <h5 className="text-orange">Thông tin thiết bị</h5>
                          <div className="row mt-3">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Mã thiết bị:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập mã thiết bị"
                                value="KIO_01"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                Loại thiết bị:
                                <span className="text-orange mx-2 fw-bolder">
                                  *
                                </span>
                              </label>
                              <Dropdown
                                options={editDeviceOptions}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Tên thiết bị:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên thiết bị"
                                value="Kiosk"
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
                                placeholder="Nhập tài khoản"
                                value="Linhkyo011"
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Địa chỉ IP:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập địa chỉ IP"
                                value="128.172.308"
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
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập mật khẩu"
                                value="CMS"
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Dịch vụ sử dụng:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <Select
                                multiple
                                options={selectOptions}
                                value={value1}
                                onChange={(o) => setValue1(o)}
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

export default EditDevice;
