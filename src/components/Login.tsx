import React, { useState } from "react";
import "../css/Login.css";
import logo from "../assets/img/Logo_Alta.png";
import img1 from "../assets/img/Group 341.png";
import { useNavigate } from "react-router-dom";
import logging from "../config/logging";
import { auth } from "../config/firebase";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import ErrorText from "./ErrorText";

const Login: React.FC = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        logging.info(result);
        navigate("/");
      })
      .catch((error: any) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row vh-100 vw-100">
          <div className="col-lg-5 text-black my-background">
            <div className="d-flex justify-content-center px-5 ms-xl-4 mt-5">
              <img alt="" className="logo-login" src={logo} />
            </div>

            <form className=" mx-auto px-5 mt-5">
              <div className="mb-3">
                <label className="form-label">Tên đăng nhập *</label>
                <div className="input-field form-control rounded">
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type="email"
                    id="exampleInputEmail1"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Mật khẩu *</label>
                <div className="input-field form-control rounded">
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type={type}
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                  />
                  <span onClick={handleToggle}>
                    <Icon icon={icon} size={25} />
                  </span>
                </div>
                <ErrorText error={error} />
              </div>

              <div className="d-grid gap-2 col-6 mx-auto mb-5 pt-3">
                <button
                  type="submit"
                  className="btn btn-warning text-center"
                  disabled={authenticating}
                  onClick={() => signInWithEmailAndPassword()}
                >
                  Đăng nhập
                </button>
                <a
                  className="text-danger text-center text-decoration-none"
                  href="/forgot-password"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </div>
          <div className="col-lg-7">
            <div className="text-center mt-3">
              <h3 className="text-orange">Hệ thống</h3>
              <h2 className="text-orange fw-bolder">QUẢN LÝ XẾP HÀNG</h2>
            </div>
            <div className="d-flex justify-content-center px-5 mt-3 mb-3">
              <img alt="" className="login-img" src={img1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
