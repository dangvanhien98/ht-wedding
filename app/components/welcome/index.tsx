import "./index.css";

export default function Welcome() {
  return (
    <section className="section-welcome">
      <div className="welcome-overlay"></div>
      <div className="welcome-content">
        <div className="reveal-fade">
          <p className="label">WEDDING INVITATION</p>
        </div>

        <div className="name-wrapper reveal-left">
          <h1 className="name">Văn Hiền</h1>
          <span
            className="ampersand reveal-fade heart-icon"
            style={{ transitionDelay: "1s" }}
          >
            ♥
          </span>
          <h1 className="name reveal-right" style={{ transitionDelay: "0.8s" }}>
            Thị Thuận
          </h1>
        </div>

        <div className="date-box reveal-fade">
          <span className="line "></span>
          <p className="date-text">29 . 07 . 2026</p>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}
