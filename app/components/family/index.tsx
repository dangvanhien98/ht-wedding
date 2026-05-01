import "./index.css";
export default function Family() {
  return (
    <section className="section-family">
      <div className="family-wrapper">
        <div className="family-column reveal-left">
          <h3 className="family-title">NHÀ TRAI</h3>
          <div className="parents-info">
            <p>
              ÔNG: <strong>ĐẶNG VĂN NGỌC</strong>
            </p>
            <p>
              BÀ: <strong>LÊ THỊ PHƯỚC</strong>
            </p>
          </div>
          <div className="divider-line"></div>
          <p className="family-address">
            29 Phạm Thận Duật, Ngũ Hành Sơn, Đà Nẵng
          </p>
        </div>

        <div className="family-column reveal-right">
          <h3 className="family-title">NHÀ GÁI</h3>
          <div className="parents-info">
            <p>
              ÔNG: <strong>PHAN VĂN SƠN</strong>
            </p>
            <p>
              BÀ: <strong>LÊ THỊ DUYÊN</strong>
            </p>
          </div>
          <div className="divider-line"></div>
          <p className="family-address">Bình Nguyên, Thăng Bình, Đà Nẵng</p>
        </div>
      </div>
      <div className="divider-line-section-2"></div>
      <div className="family-intro reveal-up">
        <p className="intro-text">Trân Trọng Báo Tin Lễ Thành Hôn Của</p>
        <div className="names-wrapper">
          <div className="name-item name-groom">Đặng Văn Hiền</div>
          <span className="name-ampersand" style={{ transitionDelay: "1s" }}>
            &
          </span>
          <div className="name-item name-bride">Phan Thị Thuận</div>
        </div>
      </div>

      <div className="family-visual reveal-up">
        <div className="visual-image-frame">
          <div className="visual-image"></div>
        </div>
        <div className="save-the-date-badge">
          <span>Save The Date</span>
        </div>
      </div>
    </section>
  );
}
