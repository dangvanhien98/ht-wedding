import './index.css'

interface OverLayProps {
  handleOpenInvitation: () => void;
  isOpened: boolean;
}

export default function OverLay({ handleOpenInvitation, isOpened }: OverLayProps) {
  return (
    <div 
      id="wedding-overlay" 
      className={`modern-overlay ${isOpened ? "is-opened" : ""}`}
      onClick={handleOpenInvitation}
    >
      {/* Cánh cửa bên trái với họa tiết góc */}
      <div className="overlay-side side-left">
        <div className="corner-pattern top-left"></div>
        <div className="corner-pattern bottom-left"></div>
      </div>
      
      {/* Cánh cửa bên phải với họa tiết góc */}
      <div className="overlay-side side-right">
        <div className="corner-pattern top-right"></div>
        <div className="corner-pattern bottom-right"></div>
      </div>

      {/* Nội dung trung tâm: Con dấu và Tên */}
      <div className="overlay-content">
        <div className="wax-seal-container">
          <div className="wax-seal-modern">
            {/* Icon trái tim màu trắng tối giản theo yêu cầu của bạn */}
            <div className="seal-heart">❤</div>
            <div className="seal-ripple"></div>
          </div>
        </div>
        
        <div className="overlay-text">
          <h2 className="names">HIỀN & THUẬN</h2>
          <div className="line-separator"></div>
          <span className="action">Chạm để mở thiệp</span>
        </div>
      </div>
      
      {/* Đường kẻ chỉ vàng dọc ở chính giữa */}
      <div className="center-line"></div>
    </div>
  );
}