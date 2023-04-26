import React, { useState } from "react";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell1 from "../../../assets/img/bell.png";
import bell2 from "../../../assets/img/bell-active.png";
import { useNavigate } from "react-router-dom";
import "../../../css/Dashboard.css";
import DI1 from "../../../assets/img/dashboard-icon-1.png";
import DI2 from "../../../assets/img/dashboard-icon-2.png";
import DI3 from "../../../assets/img/dashboard-icon-3.png";
import DI4 from "../../../assets/img/dashboard-icon-4.png";
import C1 from "../../../assets/img/chart-1.png";
import C2 from "../../../assets/img/chart-2.png";
import C3 from "../../../assets/img/chart-3.png";
import monitorIcon from "../../../assets/img/monitor-3.png";
import serviceIcon from "../../../assets/img/service-3.png";
import numberIcon from "../../../assets/img/number-3.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export interface IProps {}

const DashBoard = (props: IProps) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [options, setOptions] = useState<string>("Ngày");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const [dataDay, setDataDay] = useState({
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "sl / ngày",
        data: [
          2800, 4000, 2500, 3300, 3600, 4221, 4000, 3700, 2900, 3000, 3600,
          3300, 2400, 1200, 2000, 3500, 3900, 2800, 3600, 5100, 4200, 3700,
          3200, 2100, 3800, 2222, 3333, 4444, 2000, 3500,
        ],
        backgroundColor: "#D2E0FE",
        borderColor: "#5185F7",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  const [dataWeek, setDataWeek] = useState({
    labels: ["tuần 1", "tuần 2", "tuần 3", "tuần 4"],
    datasets: [
      {
        label: "sl / ngày",
        data: [2300, 3800, 2700, 4221],
        backgroundColor: "#D2E0FE",
        borderColor: "#5185F7",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  const [dataMonth, setDataMonth] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "sl / ngày",
        data: [
          1, 4200, 2700, 1200, 3600, 4221, 4000, 3700, 3500, 3000, 3600, 3300,
        ],
        backgroundColor: "#D2E0FE",
        borderColor: "#5185F7",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="dashboard" />
        </div>
        <div className="col-lg-10 my-background px-0">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 pdx-20">
                    <h5 className="text-orange text-center">Dashboard</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 bg-white">
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 py-2">
                <h3 className="text-orange pdx-20">Biểu đồ cấp số</h3>
                <div className="d-flex">
                  <div className="row pdx-24">
                    <div className="col-md-3 my-4 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-12 py-2 px-3">
                            <div className="d-flex align-items-center">
                              <img src={DI1} alt="" />
                              <span className="fw-bolder px-3">
                                Số thứ tự đã cấp
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <h2 className="text-center">4.221</h2>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <span className="badge rounded-pill custom-badge-orange w-100 text-center">
                              <i className="fa-solid fa-arrow-up pe-1"></i>
                              32,41%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-4 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-12 py-2 px-3">
                            <div className="d-flex align-items-center">
                              <img src={DI2} alt="" />
                              <span className="fw-bolder px-3">
                                Số thứ tự đã sử dụng
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <h2 className="text-center">3.721</h2>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <span className="badge rounded-pill custom-badge-red w-100 text-center">
                              <i className="fa-solid fa-arrow-down pe-1"></i>
                              32,41%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-4 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-12 py-2 px-3">
                            <div className="d-flex align-items-center">
                              <img src={DI3} alt="" />
                              <span className="fw-bolder px-3">
                                Số thứ tự đang chờ
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <h2 className="text-center">468</h2>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <span className="badge rounded-pill custom-badge-orange w-100 text-center">
                              <i className="fa-solid fa-arrow-up pe-1"></i>
                              56,41%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-4 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-12 py-2 px-3">
                            <div className="d-flex align-items-center">
                              <img src={DI4} alt="" />
                              <span className="fw-bolder px-3">
                                Số thứ tự đã bỏ qua
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <h2 className="text-center">32</h2>
                          </div>
                          <div className="col-xl-6 py-2 px-3 d-flex align-items-center">
                            <span className="badge rounded-pill custom-badge-red w-100 text-center">
                              <i className="fa-solid fa-arrow-down pe-1"></i>
                              22,41%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid px-0">
                  <div className="row pdx-24">
                    <div className="col-12 px-2">
                      <div className="bdr-16 bg-white my-4">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12">
                              <div className="p-3 py-4">
                                <div className="d-flex justify-content-between">
                                  <div className="col-6 d-flex flex-wrap align-items-center">
                                    {options === "Ngày" ? (
                                      <>
                                        <h5 className="w-100">
                                          Bảng thống kê theo ngày
                                        </h5>
                                        <p className="text-muted w-100 mb-0">
                                          tháng 11/2021
                                        </p>
                                      </>
                                    ) : options === "Tuần" ? (
                                      <>
                                        <h5 className="w-100">
                                          Bảng thống kê theo tuần
                                        </h5>
                                        <p className="text-muted w-100 mb-0">
                                          tháng 11/2021
                                        </p>
                                      </>
                                    ) : (
                                      <>
                                        <h5 className="w-100">
                                          Bảng thống kê theo tháng
                                        </h5>
                                        <p className="text-muted w-100 mb-0">
                                          Năm 2021
                                        </p>
                                      </>
                                    )}
                                  </div>
                                  <div className="col-6 d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center gap-2">
                                      <span className="fw-bloder">
                                        Xem theo
                                      </span>
                                      <div>
                                        <div
                                          className="d-flex flex-column gap-2 position-relative"
                                          onClick={() =>
                                            setShowDropdown(!showDropdown)
                                          }
                                        >
                                          <input
                                            className="form-control bg-white max-100 cursor-pointer border-orange"
                                            type="text"
                                            value={options}
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
                                                  onClick={() =>
                                                    setOptions("Ngày")
                                                  }
                                                >
                                                  Ngày
                                                </div>
                                                <div
                                                  className="dropdown-option rounded"
                                                  onClick={() =>
                                                    setOptions("Tuần")
                                                  }
                                                >
                                                  Tuần
                                                </div>
                                                <div
                                                  className="dropdown-option rounded"
                                                  onClick={() =>
                                                    setOptions("Tháng")
                                                  }
                                                >
                                                  Tháng
                                                </div>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="p-3 py-4">
                                <Line
                                  data={
                                    options === "Ngày"
                                      ? dataDay
                                      : options === "Tuần"
                                      ? dataWeek
                                      : dataMonth
                                  }
                                ></Line>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-2 bg-white">
                <div className="d-flex flex-column h-100">
                  <h3 className="text-orange pdx-20">Tổng quan</h3>
                  <div className="d-flex pdx-12">
                    <div className="col-12 mt-4 mb-3 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-xxl-5 py-3 px-3 d-flex">
                            <div className="row ">
                              <div className="d-flex align-items-center">
                                <div className="col-xxl-5">
                                  <img src={C1} alt="" />
                                </div>
                                <div className="col-xxl-7 ps-2">
                                  <h2 className="mb-0">4.221</h2>
                                  <span className="d-flex align-items-center text-orange ">
                                    <img
                                      className="pe-1"
                                      src={monitorIcon}
                                      alt=""
                                    />
                                    Thiết bị
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-7 py-3 px-3 d-flex">
                            <div className="row">
                              <div className="col-12">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-yellow"></i>
                                  <p className="text-center mb-0 px-2">
                                    Đang hoạt động
                                  </p>
                                  <h5 className="text-orange fw-bolder mb-0">
                                    3.799
                                  </h5>
                                </div>
                              </div>
                              <div className="col-12 pt-2">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-gray"></i>
                                  <p className="text-center mb-0 px-2">
                                    Ngưng hoạt động
                                  </p>
                                  <h5 className="text-orange fw-bolder mb-0">
                                    422
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex pdx-12">
                    <div className="col-12 mb-3 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-xxl-5 py-3 px-3 d-flex">
                            <div className="row ">
                              <div className="d-flex align-items-center">
                                <div className="col-xxl-5">
                                  <img src={C2} alt="" />
                                </div>
                                <div className="col-xxl-7 ps-2">
                                  <h2 className="mb-0">276</h2>
                                  <span className="d-flex align-items-center text-blue ">
                                    <img
                                      className="pe-1"
                                      src={serviceIcon}
                                      alt=""
                                    />
                                    Thiết bị
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-7 py-3 px-3 d-flex">
                            <div className="row">
                              <div className="col-12">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-blue"></i>
                                  <p className="text-center mb-0 px-2">
                                    Đang hoạt động
                                  </p>
                                  <h5 className="text-blue fw-bolder mb-0">
                                    210
                                  </h5>
                                </div>
                              </div>
                              <div className="col-12 pt-2">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-gray"></i>
                                  <p className="text-center mb-0 px-2">
                                    Ngưng hoạt động
                                  </p>
                                  <h5 className="text-blue fw-bolder mb-0">
                                    66
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex pdx-12">
                    <div className="col-12 mb-3 px-2">
                      <div className="bdr-16 bg-white shadow-1">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="col-xxl-5 py-3 px-3 d-flex">
                            <div className="row ">
                              <div className="d-flex align-items-center">
                                <div className="col-xxl-5">
                                  <img src={C3} alt="" />
                                </div>
                                <div className="col-xxl-7 ps-2">
                                  <h2 className="mb-0">4.221</h2>
                                  <span className="d-flex align-items-center text-green ">
                                    <img
                                      className="pe-1"
                                      src={numberIcon}
                                      alt=""
                                    />
                                    Thiết bị
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-7 py-3 px-3 d-flex">
                            <div className="row">
                              <div className="col-12">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-green"></i>
                                  <p className="text-center mb-0 px-2">
                                    Đang chờ
                                  </p>
                                  <h5 className="text-green fw-bolder mb-0">
                                    3.721
                                  </h5>
                                </div>
                              </div>
                              <div className="col-12 pt-2">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-gray"></i>
                                  <p className="text-center mb-0 px-2">
                                    Đã sử dụng
                                  </p>
                                  <h5 className="text-green fw-bolder mb-0">
                                    486
                                  </h5>
                                </div>
                              </div>
                              <div className="col-12 pt-2">
                                <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-circle fa-2xs color-pink"></i>
                                  <p className="text-center mb-0 px-2">
                                    Bỏ qua
                                  </p>
                                  <h5 className="text-green fw-bolder mb-0">
                                    32
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex pdx-12">
                    <div className="col-12 mb-3 px-2">
                      <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        inline
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

export default DashBoard;