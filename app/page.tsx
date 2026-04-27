'use client';

import { useEffect, useRef } from 'react';

export default function WeddingPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const musicBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Xử lý hiệu ứng Reveal khi cuộn
    const reveals = document.querySelectorAll('[class*="reveal-"], .reveal');
    
    const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));

    // Chạy thủ công một lần khi load để hiện trang bìa
    const handleInitialLoad = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('active');
        }
      });
    };
    handleInitialLoad();

    // 2. Xử lý Nhạc nền
    let isPlaying = false;
    const audio = audioRef.current;
    const disc = musicBtnRef.current?.querySelector(".disc");

    const toggleMusic = () => {
      if (!audio || !disc) return;
      if (isPlaying) {
        audio.pause();
        disc.classList.remove("playing");
      } else {
        audio.play().catch(() => {
          console.log("Cần tương tác người dùng để bật nhạc");
        });
        disc.classList.add("playing");
      }
      isPlaying = !isPlaying;
    };

    const musicBtn = musicBtnRef.current;
    musicBtn?.addEventListener("click", toggleMusic);

    // Tự động bật nhạc sau khi người dùng chạm vào màn hình lần đầu
    const autoPlayOnce = () => {
      if (!isPlaying) toggleMusic();
      document.body.removeEventListener("click", autoPlayOnce);
    };
    document.body.addEventListener("click", autoPlayOnce);

    return () => {
      observer.disconnect();
      musicBtn?.removeEventListener("click", toggleMusic);
      document.body.removeEventListener("click", autoPlayOnce);
    };
  }, []);

  return (
    <div className="main-wrapper">
      {/* SECTION 1: WELCOME */}
      <section className="section-welcome">
        <div className="welcome-content">
          <p className="label reveal-fade">WEDDING INVITATION</p>
          <div className="name-container">
            <h1 className="groom reveal-left">Văn Hiền</h1>
            <span className="ampersand reveal-fade">&</span>
            <h1 className="bride reveal-right">Thị Thuận</h1>
          </div>
          <p className="date-top reveal-up">29 . 07 . 2026</p>
        </div>
      </section>

      {/* SECTION 2: FAMILY */}
      <section className="section-family">
        <div className="family-wrapper">
          <div className="family-column reveal-left">
            <h3 className="family-title">NHÀ TRAI</h3>
            <div className="parents-info">
              <p>ÔNG: <strong>ĐẶNG VĂN NGỌC</strong></p>
              <p>BÀ: <strong>LÊ THỊ PHƯỚC</strong></p>
            </div>
            <div className="divider-line"></div>
            <p className="family-address">29 Phạm Thận Duật, Ngũ Hành Sơn, Đà Nẵng</p>
          </div>

          <div className="family-column reveal-right">
            <h3 className="family-title">NHÀ GÁI</h3>
            <div className="parents-info">
              <p>ÔNG: <strong>PHAN VĂN SƠN</strong></p>
              <p>BÀ: <strong>LÊ THỊ DUYÊN</strong></p>
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
            <div className="name-item name-ampersand">&</div>
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

      {/* SECTION INFO */}
      <section className="section-info">
        <div className="info-card reveal-up">
          <h2 className="title">TIỆC MỪNG LỄ THÀNH HÔN</h2>
          <div className="time-box">
            <p className="time">11:00</p>
            <p className="day">Thứ Tư | 29 . 07 . 2026</p>
            <p className="lunar">(Tức ngày 16 tháng 06 năm Bính Ngọ)</p>
          </div>
          <div className="location">
            <p className="place-name">TƯ GIA NAM</p>
            <p>29 Phạm Thận Duật, Ngũ Hành Sơn, Đà Nẵng</p>
          </div>
          <a href="https://maps.google.com" className="btn-map" target="_blank">Xem bản đồ</a>
        </div>
      </section>

      <section className="section-info alternate">
        <div className="info-card reveal-up">
          <h2 className="title">TIỆC MỪNG LỄ VU QUY</h2>
          <div className="time-box">
            <p className="time">11:00</p>
            <p className="day">Chủ Nhật | 26 . 07 . 2026</p>
            <p className="lunar">(Tức ngày 13 tháng 07 năm Bính Ngọ)</p>
          </div>
          <div className="location">
            <p className="place-name">TƯ GIA NỮ</p>
            <p>Bình Nguyên, Thăng Bình, Đà Nẵng</p>
          </div>
          <a href="https://goo.gl/maps/V69m8aTmWFu5em1A9" className="btn-map" target="_blank">Xem bản đồ</a>
        </div>
      </section>

      {/* SECTION ALBUM */}
      <section className="section-album">
        <div className="container reveal-up">
          <h2 className="album-title">ALBUM HÌNH CƯỚI</h2>
          <div className="album-grid">
            <div className="photo-large reveal">
              <img src="/image/anh1.jpg" alt="Wedding 1" />
            </div>
            <div className="photo-row">
              <div className="photo-small reveal">
                <img src="/image/anh2.jpg" alt="Wedding 2" />
              </div>
              <div className="photo-small reveal">
                <img src="/image/anh3.jpg" alt="Wedding 3" />
              </div>
            </div>
          </div>
          <div className="album-quote">
            <p>"Hôn nhân là chuyện cả đời,</p>
            <p>Yêu người vừa ý, cưới người mình thương..."</p>
          </div>
          <div className="photo-row">
            <div className="photo-small reveal">
              <img src="/image/anh4.jpg" alt="Wedding 4" />
            </div>
            <div className="photo-small reveal">
              <img src="/image/anh1.jpg" alt="Wedding 5" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-footer">
        <div className="footer-container reveal-up">
          <p className="footer-welcome-msg">Rất hân hạnh được đón tiếp!</p>
          <p className="footer-thankyou">Thank You</p>
          <div className="footer-end-line"></div>
        </div>
      </footer>

      {/* MUSIC CONTROLS */}
      <audio id="bgMusic" loop ref={audioRef}>
        <source src="https://statics.pancake.vn/web-media/5e/ee/bf/4a/afa10d3bdf98ca17ec3191ebbfd3c829d135d06939ee1f1b712d731d-w:0-h:0-l:2938934-t:audio/mpeg.mp3" type="audio/mpeg" />
      </audio>
      <div className="music-toggle" id="musicBtn" ref={musicBtnRef}>
        <div className="disc">🎵</div>
      </div>
    </div>
  );
}