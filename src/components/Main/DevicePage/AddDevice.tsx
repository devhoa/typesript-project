import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import { useDispatch } from "react-redux";
import { addDevice } from "../../../redux/DeviceSlice";

type Props = {};

const AddDevice = (props: Props) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [options, setOptions] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [ip, setIP] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [service, setService] = useState<string>("");

  const handleAddDevice = (e: any) => {
    e.preventDefault();
    let device = {
      id,
      name,
      ip,
      account,
      password,
      service,
    };
   
  
    setId("");
    setName("");
    setIP("");
    setAccount("");
    setPassword("");
    setService("");
    navigate("/device");
  };
  

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
                      <h5 className="text-orange me-3">Thêm thiết bị</h5>
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
                <form className="" onSubmit={handleAddDevice}>
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
                                  onChange={(e) => setId(e.target.value)}
                                  value={id}
                                />
                              </div>
                              <div className="col-md-6 mb-2">
                                <label className="form-label fw-bolder">
                                  Loại thiết bị:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </label>
                                <div
                                  className="d-flex flex-column gap-2 position-relative"
                                  onClick={() => setShowDropdown(!showDropdown)}
                                >
                                  <input
                                    className="form-control bg-white cursor-pointer border-orange"
                                    type="text"
                                    value={options}
                                    placeholder="Chọn loại thiết bị"
                                    disabled
                                  />
                                  <i
                                    className={`fa-solid fa-lg pds-12 text-orange cursor-pointer ${
                                      showDropdown
                                        ? "fa-caret-up "
                                        : "fa-caret-down "
                                    }  position-absolute top-50 end-0 translate-middle`}
                                  ></i>
                                  {showDropdown && (
                                    <>
                                      <div className="dropdown-options rounded border border-secondary ovf-170 cursor-pointer">
                                        <div
                                          className="dropdown-option rounded"
                                          onClick={() => setOptions("Kiosk")}
                                        >
                                          Kiosk
                                        </div>
                                        <div
                                          className="dropdown-option rounded"
                                          onClick={() =>
                                            setOptions("Display counter")
                                          }
                                        >
                                          Display counter
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
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
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
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
                                  onChange={(e) => setAccount(e.target.value)}
                                  value={account}
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
                                  onChange={(e) => setIP(e.target.value)}
                                  value={ip}
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
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={password}
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
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nhập dịch vụ"
                                  onChange={(e) => setService(e.target.value)}
                                  value={service}
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
                      type="submit"
                      className="btn btn-warning text-center mx-4 min-w-147 fw-bolder cs-pd-btn"
                    >
                      Thêm thiết bị
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddDevice;