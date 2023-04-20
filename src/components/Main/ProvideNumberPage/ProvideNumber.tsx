import React, { useState } from "react";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import { useNavigate } from "react-router-dom";
import Search from "../../utils/Search";
import Addbutton from "../../utils/Addbutton";
import addsquare from "../../../assets/img/add-square.png";
import Dropdown from "../../utils/Dropdown";
import calendar from "../../../assets/img/calendar.png";
import Vector from "../../../assets/img/Vector.png";
import data from "../../../data/number_data.json";
import NumberTable from "./NumberTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

const nameOptions = ["Tất cả", "Kiosk", "Hệ thống"];

const statusOptions = ["Tất cả", "Đang chờ", "Đã sử dụng", "Bỏ qua"];

const supplyOptions = [
  "Tất cả",
  "Khám sản - Phụ khoa",
  "Khám răng hàm mặt",
  "Khám tai mũi họng",
  "Khám hô hấp",
  "Khám tổng quát",
  "Khám tim mạch",
];

const ProvideNumber = (props: Props) => {
  const navigate = useNavigate();
  const [selectedOption1, setSelectedOption1] = useState(nameOptions[0]);
  const [selectedOption2, setSelectedOption2] = useState(statusOptions[0]);
  const [selectedOption3, setSelectedOption3] = useState(supplyOptions[0]);
  const [startDate1, setStartDate1] = useState<Date>(new Date());
  const [startDate2, setStartDate2] = useState<Date>(new Date());
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
                      <h5 className="text-orange me-3">Danh sách cấp số</h5>
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
              <div className="col-md-11 pe-0">
                <h3 className="text-orange">Quản lý cấp số</h3>
                <div className="d-flex">
                  <div className="col-6 mt-3 pe-3">
                    <div className="d-flex justify-content-between">
                      <div className="col-4 pe-3">
                        <Dropdown
                          options={nameOptions}
                          selectedOption={selectedOption1}
                          setSelectedOption={setSelectedOption1}
                          label={"Tên dịch vụ"}
                        />
                      </div>
                      <div className="col-4 pe-3">
                        <Dropdown
                          options={statusOptions}
                          selectedOption={selectedOption2}
                          setSelectedOption={setSelectedOption2}
                          label={"Tình trạng"}
                        />
                      </div>
                      <div className="col-4">
                        <Dropdown
                          options={supplyOptions}
                          selectedOption={selectedOption3}
                          setSelectedOption={setSelectedOption3}
                          label={"Nguồn cấp"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-6 mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-7">
                        <label className="form-label fw-bolder">
                          Chọn thời gian
                        </label>
                        <div className="row g-2 align-items-center">
                          <div className="col-auto">
                            <div className="input-field-number form-control rounded px-2">
                              <span className="d-flex flex-wrap align-items-center">
                                <img src={calendar} alt=""></img>
                              </span>
                              <DatePicker
                                selected={startDate1}
                                onChange={(date: Date) => setStartDate1(date)}
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
                            <div className="input-field-number form-control rounded px-2">
                              <span className="d-flex flex-wrap align-items-center">
                                <img src={calendar} alt=""></img>
                              </span>
                              <DatePicker
                                selected={startDate2}
                                onChange={(date: Date) => setStartDate2(date)}
                                dateFormat="dd/MM/yyyy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <Search />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-3 pe-md-0">
                <div className="d-flex flex-wrap-reverse justify-content-between">
                  <NumberTable data={data} />

                  <div className="col-1 custom-add-btn">
                    <div className="d-flex justify-content-end mb-4">
                      <div
                        className="max-width-77"
                        onClick={() => navigate("/add-number")}
                      >
                        <Addbutton icon={addsquare} title="Cấp số mới" />
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

export default ProvideNumber;
