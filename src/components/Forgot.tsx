import React, { useState } from "react";
import logo from "../assets/img/Logo_Alta.png";
import img2 from "../assets/img/Frame.png";
import { auth } from "../config/firebase";
import logging from "../config/logging";
import ErrorText from "./ErrorText";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

const Forgot: React.FC = (props) => {
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [changing, setChanging] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [oobCode, setOobCode] = useState<string>("");

  const navigate = useNavigate();

  const resetPasswordRequest = () => {
    if (error !== "") setError("");

    setSending(true);

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        logging.info("Email sent.");
        setSent(true);
        setSending(false);
      })
      .catch((error) => {
        logging.error(error);
        setError(error.message);
        setSending(false);
      });
  };

  const passwordResetRequest = () => {
    if (password !== confirm) {
      setError("Make sure your passwords are matching");
      return;
    }

    if (error !== "") setError("");

    setChanging(true);

    auth
      .confirmPasswordReset(oobCode, password)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        logging.error(error);
        setError(error.message);
        setChanging(false);
      });
  };

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
    <section>
      <div className="container-fluid">
        <div className="row vh-100 vw-100">
          <div className="col-lg-5 text-black my-background">
            <div className="d-flex justify-content-center px-5 ms-xl-4 mt-5">
              <img alt="" className="logo-login" src={logo} />
            </div>

            <h5 className="px-5 mt-5 text-center">Đặt lại mật khẩu</h5>

            {sent ? (
              <>
                <form className=" mx-auto px-5 mt-3">
                  <div className="mb-3">
                    <label className="form-label px-2">Mật khẩu *</label>
                    <div className="input-field form-control rounded">
                      <input
                        autoComplete="new-password"
                        type={type}
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                      />
                      <span onClick={handleToggle_1}>
                        <Icon icon={icon} size={25} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label px-2">
                      Nhập lại mật khẩu *
                    </label>
                    <div className="input-field form-control rounded">
                      <input
                        autoComplete="new-password"
                        type={types}
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm Password"
                        onChange={(event) => setConfirm(event.target.value)}
                        value={confirm}
                      />
                      <span onClick={handleToggle_2}>
                        <Icon icon={icons} size={25} />
                      </span>
                    </div>
                  </div>

                  <div className="d-grid gap-2 col-6 mx-auto mb-5 pt-3">
                    <button
                      type="submit"
                      className="btn btn-warning text-center"
                      disabled={changing}
                      onClick={() => passwordResetRequest()}
                    >
                      Xác nhận
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <form className=" mx-auto px-5 mt-3">
                  <div className="mb-3">
                    <label className="form-label px-2">
                      Vui lòng nhập email để đặt lại mật khẩu của bạn *
                    </label>
                    <div className="input-field form-control rounded">
                      <input
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <ErrorText error={error} />
                  </div>

                  <div className="mx-auto mb-5 pt-3 d-flex justify-content-evenly">
                    <button
                      type="button"
                      className="btn btn-outline-warning text-center w-100 mx-4"
                      onClick={() => navigate(-1)}
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn btn-warning text-center w-100 mx-4"
                      onClick={() => resetPasswordRequest()}
                    >
                      Tiếp tục
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className="col-lg-7">
            <div className="d-flex justify-content-center mt-5 pt-4">
              <img alt="" className="forgot-img" src={img2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
