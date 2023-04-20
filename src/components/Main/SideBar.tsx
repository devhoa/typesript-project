import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/Logo_Alta.png";
import dashboard from "../../assets/img/dashboard-layout-1.png";
import dashboardA from "../../assets/img/dashboard-layout-2.png";
import device from "../../assets/img/monitor-1.png";
import deviceA from "../../assets/img/monitor-2.png";
import number from "../../assets/img/number-1.png";
import numberA from "../../assets/img/number-2.png";
import report from "../../assets/img/report-1.png";
import reportA from "../../assets/img/report-2.png";
import service from "../../assets/img/service-1.png";
import serviceA from "../../assets/img/service-2.png";
import setting from "../../assets/img/setting-1.png";
import settingA from "../../assets/img/setting-2.png";
import vector from "../../assets/img/vector-1.png";
import vectorA from "../../assets/img/vector-2.png";
import "../../css/Sidebar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export interface Props {
  active?: string;
}

const SideBar: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white w-100 h-100 position-relative">
      <img
        alt=""
        className="d-flex align-items-center flex-shrink-0 my-3 mx-5 p-3"
        src={logo}
      />
      <div className="list-group list-group-flush border-bottom scrollarea cursor-pointer mb-5 pb-3">
        <div
          onClick={() => navigate("/dashboard")}
          className={
            props.active === "dashboard"
              ? "list-group-item list-group-item-action py-3 lh-tight sidebar-items active"
              : "list-group-item list-group-item-action py-3 lh-tight sidebar-items"
          }
        >
          <div className="d-flex w-100 align-items-center justify-content-start">
            <img
              src={props.active === "dashboard" ? dashboardA : dashboard}
              alt=""
            />
            <span
              className={
                props.active === "dashboard"
                  ? "px-2 text-white"
                  : "px-2 text-secondary"
              }
            >
              Dashboard
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/device")}
          className={
            props.active === "device"
              ? "list-group-item list-group-item-action py-3 lh-tight sidebar-items active"
              : "list-group-item list-group-item-action py-3 lh-tight sidebar-items"
          }
        >
          <div className="d-flex w-100 align-items-center justify-content-start">
            <img src={props.active === "device" ? deviceA : device} alt="" />
            <span
              className={
                props.active === "device"
                  ? "px-2 text-white"
                  : "px-2 text-secondary"
              }
            >
              Thiết bị
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/service")}
          className={
            props.active === "service"
              ? "list-group-item list-group-item-action py-3 lh-tight sidebar-items active"
              : "list-group-item list-group-item-action py-3 lh-tight sidebar-items"
          }
        >
          <div className="d-flex w-100 align-items-center justify-content-start">
            <img src={props.active === "service" ? serviceA : service} alt="" />
            <span
              className={
                props.active === "service"
                  ? "px-2 text-white"
                  : "px-2 text-secondary"
              }
            >
              Dịch vụ
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/provide-number")}
          className={
            props.active === "provide-number"
              ? "list-group-item list-group-item-action py-3 lh-tight sidebar-items active"
              : "list-group-item list-group-item-action py-3 lh-tight sidebar-items"
          }
        >
          <div className="d-flex w-100 align-items-center justify-content-start">
            <img
              src={props.active === "provide-number" ? numberA : number}
              alt=""
            />
            <span
              className={
                props.active === "provide-number"
                  ? "px-2 text-white"
                  : "px-2 text-secondary"
              }
            >
              Cấp số
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/report")}
          className={
            props.active === "report"
              ? "list-group-item list-group-item-action py-3 lh-tight sidebar-items active"
              : "list-group-item list-group-item-action py-3 lh-tight sidebar-items"
          }
        >
          <div className="d-flex w-100 align-items-center justify-content-start">
            <img src={props.active === "report" ? reportA : report} alt="" />
            <span
              className={
                props.active === "report"
                  ? "px-2 text-white"
                  : "px-2 text-secondary"
              }
            >
              Báo cáo
            </span>
          </div>
        </div>

        <div className="dropend">
          <div
            // onClick={() => navigate("/setting")}
            data-bs-toggle="dropdown"
            className={
              props.active === "setting"
                ? "list-group-item list-group-item-action py-3 lh-tight sidebar-items active"
                : "list-group-item list-group-item-action py-3 lh-tight sidebar-items "
            }
          >
            <div className="d-flex w-100 align-items-center justify-content-start position-relative">
              <img
                src={props.active === "setting" ? settingA : setting}
                alt=""
              />
              <span
                className={
                  props.active === "setting"
                    ? "px-2 text-white"
                    : "px-2 text-secondary"
                }
              >
                Cài đặt hệ thống
              </span>
              <img
                src={props.active === "setting" ? vectorA : vector}
                alt=""
                className="position-absolute top-50 end-0 translate-middle-y"
              />
            </div>
            <ul className="dropdown-menu">
              <li>
                <div
                  className="dropdown-item sidebar-drop"
                  onClick={() => navigate("/role-management")}
                >
                  Quản lý vai trò
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item sidebar-drop"
                  onClick={() => navigate("/account-management")}
                >
                  Quản lý tài khoản
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item sidebar-drop"
                  onClick={() => navigate("/user-log")}
                >
                  Nhật ký người dùng
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-100 position-absolute bottom-0 start-50 translate-middle-x p-3">
        <button onClick={() => signOut(auth)} className="btn w-100 logout-btn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default SideBar;
