import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SaiMk.module.css";

const SaiMk: FunctionComponent = () => {
  const navigate = useNavigate();

  const onQunMtKhuClick = useCallback(() => {
    navigate("/qun-mt-khu1");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/qun-mt-khu1");
  }, [navigate]);

  return (
    <div className={styles.saiMk}>
      <div className={styles.saiMkChild} />
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <div className={styles.tnNgNhpParent}>
        <div className={styles.tnNgNhp}>Tên đăng nhập *</div>
        <div className={styles.input}>
          <div className={styles.saySomeThing}>Aivan288</div>
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
            src="../ueyeslash2.svg"
          />
        </div>
      </div>
      <div className={styles.qunMtKhuParent}>
        <div className={styles.qunMtKhu} onClick={onQunMtKhuClick}>
          Quên mật khẩu?
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <b className={styles.button1}>Đăng nhập</b>
        </div>
      </div>
      <img className={styles.logoAltaIcon} alt="" src="../undefined3.png" />
      <img className={styles.groupIcon} alt="" src="../group.svg" />
      <img className={styles.groupIcon1} alt="" src="../group1.svg" />
      <img className={styles.groupIcon2} alt="" src="../group2.svg" />
      <img className={styles.groupIcon3} alt="" src="../group3.svg" />
      <img className={styles.groupIcon4} alt="" src="../group4.svg" />
      <img className={styles.groupIcon5} alt="" src="../group5.svg" />
      <img className={styles.groupIcon6} alt="" src="../group6.svg" />
      <img className={styles.groupIcon7} alt="" src="../group7.svg" />
      <img className={styles.groupIcon8} alt="" src="../group8.svg" />
      <img className={styles.groupIcon9} alt="" src="../group9.svg" />
      <div className={styles.hThng}>
        <p className={styles.hThng1}>Hệ thống</p>
      </div>
      <div className={styles.qunLXp}>QUẢN LÝ XẾP HÀNG</div>
      <div className={styles.saiMtKhuHocTnNgNhParent}>
        <div className={styles.saiMtKhu}>Sai mật khẩu hoặc tên đăng nhập</div>
        <img className={styles.warningIcon} alt="" src="../warning.svg" />
      </div>
    </div>
  );
};

export default SaiMk;
