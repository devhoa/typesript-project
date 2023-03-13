import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ onClose }) => {
  return (
    <div className={styles.popUpThngBoParent}>
      <div className={styles.popUpThngBo}>
        <div className={styles.popUpThngBoInner}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.popUpThngBoChild}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.popUpThngBoInner1}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.cardNotiParent}>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>
              Người dùng: Nguyễn Thị Thùy Dung
            </b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Nguyễn Thiên Chinh</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Võ Thị Kim Liên</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>
              Người dùng: Hoàng Nguyễn Quốc Huy
            </b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Võ Ngọc Lan Anh</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>
              Người dùng: Nguyễn Thị Trúc Anh
            </b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Nguyễn Trung Toàn</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Phạm Hồng Ngọc</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Hồ Trung Hiếu</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Hoàng Duy Phước</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild} />
          </div>
          <div className={styles.cardNoti}>
            <b className={styles.ngiDngNguyn}>Người dùng: Trương Ngọc Nguyên</b>
            <div className={styles.thiGianNhn}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </div>
            <div className={styles.cardNotiChild7} />
          </div>
        </div>
        <div className={styles.thongBaoWrapper}>
          <b className={styles.thongBao}>Thông báo</b>
        </div>
        <div className={styles.popUpThngBoItem} />
      </div>
      <img className={styles.frameChild} alt="" src="../frame-625188.svg" />
    </div>
  );
};

export default FrameComponent;
