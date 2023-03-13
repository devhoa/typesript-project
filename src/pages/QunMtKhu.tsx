import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QunMtKhu.module.css";

const QunMtKhu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  return (
    <div className={styles.qunMtKhu}>
      <div className={styles.qunMtKhuChild} />
      <img className={styles.frameIcon} alt="" src="../frame1.svg" />
      <b className={styles.tLiMt}>Đặt lại mật khẩu mới</b>
      <div className={styles.mtKhuParent}>
        <div className={styles.mtKhu}>{`Mật khẩu `}</div>
        <div className={styles.input}>
          <div className={styles.frameParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
          </div>
          <img className={styles.ueyeSlashIcon} alt="" src="../ueyeslash.svg" />
        </div>
      </div>
      <div className={styles.nhpLiMtKhuParent}>
        <div className={styles.nhpLiMt}>{`Nhập lại mật khẩu `}</div>
        <div className={styles.input1}>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
          </div>
          <img className={styles.ueyeSlashIcon} alt="" src="../ueyeslash.svg" />
        </div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <b className={styles.button1}>Xác nhận</b>
      </div>
      <img className={styles.logoAltaIcon} alt="" src="../undefined1.png" />
    </div>
  );
};

export default QunMtKhu;
