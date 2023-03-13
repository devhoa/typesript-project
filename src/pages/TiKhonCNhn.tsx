import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import styles from "./TiKhonCNhn.module.css";

const TiKhonCNhn: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onLogoAltaClick = useCallback(() => {
    // Please sync "Dashboard theo ngày" to the project
  }, []);

  return (
    <>
      <div className={styles.tiKhonCNhn}>
        <div className={styles.topbar}>
          <div className={styles.breadcrumbs}>
            <div className={styles.button}>
              <img className={styles.vuesaxlinearelement4Icon} alt="" />
              <b className={styles.page1}>Thông tin cá nhân</b>
            </div>
          </div>
          <div
            className={styles.unsplashfyl8smc2j2qParent}
            onClick={onFrameContainerClick}
          >
            <img
              className={styles.unsplashfyl8smc2j2qIcon}
              alt=""
              src="../unsplashfyl8smc2j2q@2x.png"
            />
            <div className={styles.xinChoParent}>
              <div className={styles.xinCho}>Xin chào</div>
              <b className={styles.lQunhI}>Lê Quỳnh Ái Vân</b>
            </div>
          </div>
          <img
            className={styles.topbarChild}
            alt=""
            src="../frame-271.svg"
            onClick={openFrame}
          />
          <div className={styles.topbarItem} />
        </div>
        <div className={styles.menubar}>
          <div className={styles.menubarInner}>
            <div className={styles.vuesaxlinearelement4Parent}>
              <img
                className={styles.vuesaxlinearmonitorIcon}
                alt=""
                src="../vuesaxlinearelement4.svg"
              />
              <div className={styles.dashboard}>Dashboard</div>
            </div>
          </div>
          <div className={styles.menubarChild}>
            <div className={styles.vuesaxlinearelement4Parent}>
              <img
                className={styles.vuesaxlinearmonitorIcon}
                alt=""
                src="../vuesaxlinearmonitor.svg"
              />
              <div className={styles.dashboard}>Thiết bị</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.vuesaxlinearelement4Parent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-332.svg"
              />
              <div className={styles.dashboard}>Dịch vụ</div>
            </div>
          </div>
          <div className={styles.menubarInner1}>
            <div className={styles.vuesaxlinearelement4Parent}>
              <img
                className={styles.fimoreVerticalIcon}
                alt=""
                src="../icon-dasboard03.svg"
              />
              <div className={styles.dashboard}>Cấp số</div>
            </div>
          </div>
          <div className={styles.menubarInner2}>
            <div className={styles.vuesaxlinearelement4Parent}>
              <img className={styles.frameIcon} alt="" src="../frame.svg" />
              <div className={styles.dashboard}>Báo cáo</div>
            </div>
          </div>
          <div className={styles.menubarInner3}>
            <div className={styles.vuesaxlinearelement4Parent}>
              <img
                className={styles.vuesaxlinearmonitorIcon}
                alt=""
                src="../vuesaxoutlinesetting.svg"
              />
              <div className={styles.dashboard}>Cài đặt hệ thống</div>
              <img
                className={styles.fimoreVerticalIcon}
                alt=""
                src="../fimorevertical.svg"
              />
            </div>
          </div>
          <div
            className={styles.menubarInner4}
            onClick={onFrameContainer14Click}
          >
            <div
              className={styles.filogOutParent}
              onClick={onFrameContainer13Click}
            >
              <img
                className={styles.fimoreVerticalIcon}
                alt=""
                src="../filogout.svg"
              />
              <div className={styles.dashboard}>Đăng xuất</div>
            </div>
          </div>
          <img
            className={styles.logoAltaIcon}
            alt=""
            src="../undefined.png"
            onClick={onLogoAltaClick}
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.instanceParent}>
            <img
              className={styles.frameItem}
              alt=""
              src="../frame-624758.svg"
            />
            <div className={styles.div}>1212</div>
          </div>
          <div className={styles.sThTAngCCpWrapper}>
            <div className={styles.sThTContainer}>
              <p className={styles.phnHiT}>Phản hồi từ</p>
              <p className={styles.khchHng}>khách hàng</p>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <img
              className={styles.groupChild}
              alt=""
              src="../group-624818.svg"
            />
            <b className={styles.lQunhI1}>Lê Quỳnh Ái Vân</b>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.mtKhuWrapper}>
                  <div className={styles.dashboard}>Mật khẩu</div>
                </div>
              </div>
              <div className={styles.fill}>
                <div className={styles.khmPhHi}>311940211</div>
              </div>
            </div>
            <div className={styles.groupParent2}>
              <div className={styles.frameWrapper1}>
                <div className={styles.mtKhuWrapper}>
                  <div className={styles.dashboard}>Tên người dùng</div>
                </div>
              </div>
              <div className={styles.fill}>
                <div className={styles.khmPhHi}>Lê Quỳnh Ái Vân</div>
              </div>
            </div>
            <div className={styles.groupParent3}>
              <div className={styles.frameWrapper2}>
                <div className={styles.mtKhuWrapper}>
                  <div className={styles.dashboard}>Email:</div>
                </div>
              </div>
              <div className={styles.fill}>
                <div className={styles.khmPhHi}>adminSSO1@domain.com</div>
              </div>
            </div>
            <div className={styles.groupParent4}>
              <div className={styles.frameWrapper3}>
                <div className={styles.mtKhuWrapper}>
                  <div className={styles.dashboard}>Vai trò:</div>
                </div>
              </div>
              <div className={styles.fill}>
                <div className={styles.khmPhHi}>Kế toán</div>
              </div>
            </div>
            <div className={styles.groupParent5}>
              <div className={styles.frameWrapper4}>
                <div className={styles.mtKhuWrapper}>
                  <div className={styles.dashboard}>{`Số điện thoại `}</div>
                </div>
              </div>
              <div className={styles.fill}>
                <div className={styles.khmPhHi}>0767375921</div>
              </div>
            </div>
            <div className={styles.groupParent6}>
              <div className={styles.frameWrapper5}>
                <div className={styles.mtKhuWrapper}>
                  <div className={styles.dashboard}>{`Tên đăng nhập `}</div>
                </div>
              </div>
              <div className={styles.fill}>
                <div className={styles.khmPhHi}>lequynhaivan01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default TiKhonCNhn;
