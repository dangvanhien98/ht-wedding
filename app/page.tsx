"use client";

import { useEffect, useRef } from "react";
import Footer from "./components/footer";
import Welcome from "./components/welcome";
import Family from "./components/family";
import Info from "./components/info";
import Album from "./components/Album";

export default function WeddingPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const musicBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Xử lý hiệu ứng Reveal khi cuộn
    const reveals = document.querySelectorAll('[class*="reveal-"], .reveal');

    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    reveals.forEach((el) => observer.observe(el));

    // Chạy thủ công một lần khi load để hiện trang bìa
    const handleInitialLoad = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("active");
        }
      });
    };
    handleInitialLoad();

    // 2. Xử lý Nhạc nền
    // 2. Xử lý Nhạc nền
    const audio = audioRef.current;
    const musicBtn = musicBtnRef.current;
    const disc = musicBtn?.querySelector(".disc");
    let isPlaying = false;

    const playMusic = () => {
      if (audio && !isPlaying) {
        audio
          .play()
          .then(() => {
            isPlaying = true;
            disc?.classList.add("playing");
            // Quan trọng: Xóa các sự kiện sau khi nhạc đã bật thành công
            removeAllListeners();
          })
          .catch(() => console.log("Chờ tương tác để phát nhạc..."));
      }
    };

    const toggleMusic = (e: Event) => {
      e.stopPropagation(); // Ngăn sự kiện click lan ra body
      if (!audio || !disc) return;

      if (isPlaying) {
        audio.pause();
        disc.classList.remove("playing");
      } else {
        audio.play();
        disc.classList.add("playing");
      }
      isPlaying = !isPlaying;
      // Khi người dùng chủ động bấm nút, ta cũng coi như xong nhiệm vụ tự động
      removeAllListeners();
    };

    const removeAllListeners = () => {
      window.removeEventListener("scroll", playMusic);
      document.body.removeEventListener("click", playMusic);
      document.body.removeEventListener("touchstart", playMusic);
    };

    // Đăng ký các sự kiện để "kích hoạt" nhạc tự động
    window.addEventListener("scroll", playMusic, { passive: true });
    document.body.addEventListener("click", playMusic);
    document.body.addEventListener("touchstart", playMusic);

    // Sự kiện riêng cho nút bấm (luôn tồn tại để tắt/mở thủ công)
    musicBtn?.addEventListener("click", toggleMusic);

    return () => {
      observer.disconnect();
      musicBtn?.removeEventListener("click", toggleMusic);
      removeAllListeners();
    };
  }, []);

  return (
    <div className="main-wrapper">
      <Welcome />

      <Family />

      <Info
        title="TIỆC MỪNG LỄ THÀNH HÔN"
        time="11:00"
        date="Thứ Tư | 29 . 07 . 2026"
        lunar="(Tức ngày 16 tháng 06 năm Bính Ngọ)"
        place="TƯ GIA NAM"
        address="29 Phạm Thận Duật, Ngũ Hành Sơn, Đà Nẵng"
        mapUrl="https://www.google.com/maps/place/C%C3%B4ng+vi%C3%AAn+Th%C3%A9p+M%E1%BB%9Bi/@15.9826982,108.2680623,17z/data=!3m1!4b1!4m6!3m5!1s0x314211d18bb10c1f:0x7daf62b4d1166cad!8m2!3d15.9826982!4d108.2706372!16s%2Fg%2F11q1v1ylgk?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
      />

      <Info
        title="TIỆC MỪNG LỄ VU QUY"
        time="11:00"
        date="Chủ Nhật | 26 . 07 . 2026"
        lunar="(Tức ngày 13 tháng 07 năm Bính Ngọ)"
        place="TƯ GIA NỮ"
        address="Bình Nguyên, Thăng Bình, Đà Nẵng"
        mapUrl="https://goo.gl/maps/V69m8aTmWFu5em1A9"
        isAlternate={true}
      />

      <Album />

      <Footer />

      {/* MUSIC CONTROLS */}
      <audio id="bgMusic" loop ref={audioRef}>
        <source
          src="https://statics.pancake.vn/web-media/5e/ee/bf/4a/afa10d3bdf98ca17ec3191ebbfd3c829d135d06939ee1f1b712d731d-w:0-h:0-l:2938934-t:audio/mpeg.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className="music-toggle" id="musicBtn" ref={musicBtnRef}>
        <div className="disc">🎵</div>
      </div>
    </div>
  );
}
