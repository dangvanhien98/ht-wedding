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
            className="reveal-fade heart-icon"
            style={{ transitionDelay: "1s" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            >
              <path
                fill="white"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
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
