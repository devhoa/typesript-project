import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NgNhp.module.css";

const NgNhp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInputContainerClick = useCallback(() => {
    navigate("/sai-mk");
  }, [navigate]);

  const onQunMtKhuClick = useCallback(() => {
    navigate("/qun-mt-khu1");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard theo ngày" to the project
  }, []);

  return (
    <div className={styles.ngNhp}>
      <div className={styles.ngNhpChild} />
      <div className={styles.tnNgNhpParent}>
        <div className={styles.tnNgNhp}>Tên đăng nhập *</div>
        <div className={styles.input} onClick={onInputContainerClick}>
          <div className={styles.tnNgNhp}>lequynhaivan01</div>
        </div>
      </div>
      <div className={styles.mtKhuParent}>
        <div className={styles.tnNgNhp}>Mật khẩu *</div>
        <div className={styles.input1}>
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
          <img
            className={styles.ueyeSlashIcon}
            alt=""
            src="../ueyeslash3.svg"
          />
        </div>
      </div>
      <div className={styles.qunMtKhu} onClick={onQunMtKhuClick}>
        Quên mật khẩu?
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <b className={styles.button1}>Đăng nhập</b>
      </div>
      <img className={styles.logoAltaIcon} alt="" src="../undefined4.png" />
      <img className={styles.ngNhpItem} alt="" src="../group-341.svg" />
      <div className={styles.hThng}>
        <p className={styles.hThng1}>Hệ thống</p>
      </div>
      <div className={styles.qunLXp}>QUẢN LÝ XẾP HÀNG</div>
    </div>
  );
};

export default NgNhp;
