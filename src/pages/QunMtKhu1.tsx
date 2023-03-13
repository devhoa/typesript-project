import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QunMtKhu1.module.css";

const QunMtKhu1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/qun-mt-khu");
  }, [navigate]);

  return (
    <div className={styles.qunMtKhu}>
      <div className={styles.qunMtKhuChild} />
      <img className={styles.frameIcon} alt="" src="../frame2.svg" />
      <b className={styles.tLiMt}>Đặt lại mật khẩu</b>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.saySomeThing}>I</div>
        </div>
        <div className={styles.vuiLngNhp}>
          Vui lòng nhập email để đặt lại mật khẩu của bạn *
        </div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <b className={styles.button1}>Hủy</b>
      </div>
      <div className={styles.button2} onClick={onButtonContainer1Click}>
        <b className={styles.button1}>Tiếp tục</b>
      </div>
      <img className={styles.logoAltaIcon} alt="" src="../undefined2.png" />
    </div>
  );
};

export default QunMtKhu1;
