import './index.css'
export default function Album() {
    return (
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
    );
}