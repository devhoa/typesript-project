import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import Dropdown from "../../utils/Dropdown";
import SideBar from "../SideBar";
import "../../../css/Service.css";
import calendar from "../../../assets/img/calendar.png";
import Vector from "../../../assets/img/Vector.png";
import Search from "../../utils/Search";
import ViewServiceTable from "./ViewServiceTable";
import data from "../../../data/view_service_data.json";
import Addbutton from "../../utils/Addbutton";
import Editbutton from "../../../assets/img/EditSquare.png";
import Backbutton from "../../../assets/img/back-square.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

const numberOptions = ["Tất cả", "Đã hoàn thành", "Đang thực hiện", "Vắng"];

const ViewService = (props: Props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(numberOptions[0]);
  const [startDate1, setStartDate1] = useState<Date>(new Date());
  const [startDate2, setStartDate2] = useState<Date>(new Date());
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
                <h3 className="text-orange">Quản lý dịch vụ</h3>
              </div>
              <div className="col-12 my-3 pe-md-0">
                <div className="d-flex flex-wrap-reverse justify-content-between">
                  <div className="col-md-4 pe-2">
                    <div className="d-flex justify-content-center">
                      <div className="bdr-16 bg-white mb-4 w-100 h-100">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">
                              <div className="px-3 pt-4 pb-2">
                                <h5 className="text-orange">
                                  Thông tin dịch vụ
                                </h5>
                                <div className="row mt-3">
                                  <div className="col mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Mã dịch vụ:
                                      </label>
                                      <span className="text-muted col-8">
                                        201
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Tên dịch vụ:
                                      </label>
                                      <span className="text-muted col-8">
                                        Khám tim mạch
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col mb-2">
                                    <div className="d-flex">
                                      <label className="form-label fw-bolder col-4">
                                        Mô tả:
                                      </label>
                                      <span className="text-muted col-8">
                                        Chuyên các bệnh lý về tim
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="px-3 pt-2 pb-4">
                                <h5 className="text-orange">Quy tắc cấp số</h5>
                                <div className="row mt-3">
                                  <div className="col-md-12 mb-2">
                                    <div className="d-flex align-items-center">
                                      <div className="row g-2 align-items-center">
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
                                  <div className="col-md-12 my-2">
                                    <div className="d-flex align-items-center">
                                      <div className="row g-2 align-items-center">
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
                                  <div className="col-md-12 mt-2">
                                    <label className="col-form-label fw-bolder">
                                      Reset mỗi ngày
                                    </label>
                                  </div>
                                  <div className="col-md-12 mt-2">
                                    <label className="col-form-label">
                                      Ví dụ: 201-2001
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 ps-3">
                    <div className="d-flex justify-content-center">
                      <div className="bdr-16 bg-white mb-4 w-100 h-100">
                        <div className="container-fluid px-4">
                          <div className="row w-100">
                            <div className="d-flex justify-content-between">
                              <div className="col-3 me-2 mt-3">
                                <Dropdown
                                  options={numberOptions}
                                  selectedOption={selectedOption}
                                  setSelectedOption={setSelectedOption}
                                  label={"Trạng thái"}
                                />
                              </div>
                              <div className="col-5 me-2 mt-3">
                                <label className="form-label fw-bolder">
                                  Chọn thời gian
                                </label>
                                <div className="row g-2 align-items-center">
                                  <div className="col-auto">
                                    <div className="input-field-service-view form-control rounded px-2">
                                      <span className="d-flex flex-wrap align-items-center">
                                        <img src={calendar} alt=""></img>
                                      </span>
                                      <DatePicker
                                        selected={startDate1}
                                        onChange={(date: Date) =>
                                          setStartDate1(date)
                                        }
                                        dateFormat="dd/MM/yyyy"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center my-2">
                                      <img src={Vector} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="input-field-service-view form-control rounded px-2">
                                      <span className="d-flex flex-wrap align-items-center">
                                        <img src={calendar} alt=""></img>
                                      </span>
                                      <DatePicker
                                        selected={startDate2}
                                        onChange={(date: Date) =>
                                          setStartDate2(date)
                                        }
                                        dateFormat="dd/MM/yyyy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 mt-3">
                                <div className="col-12">
                                  <Search />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 my-3">
                            <ViewServiceTable data={data} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 custom-add-btn">
                    <div className="d-flex justify-content-end">
                      <div
                        className="max-width-77"
                        onClick={() => navigate("/edit-service")}
                      >
                        <Addbutton
                          icon={Editbutton}
                          title="Cập nhật danh sách"
                        />
                      </div>
                    </div>
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

export default ViewService;
