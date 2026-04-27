import './index.css'
// Định nghĩa kiểu dữ liệu cho Props
interface InfoSectionProps {
  title: string;
  time: string;
  date: string;
  lunar: string;
  place: string;
  address: string;
  mapUrl: string;
  isAlternate?: boolean;
}

export default function Info({
  title,
  time,
  date,
  lunar,
  place,
  address,
  mapUrl,
  isAlternate = false, // Mặc định là false
} : InfoSectionProps) {
  return (
    <section className={`section-info ${isAlternate ? 'alternate' : ''}`}>
      <div className="info-card reveal-up">
        <h2 className="title">{title}</h2>
        <div className="time-box">
          <p className="time">{time}</p>
          <p className="day">{date}</p>
          <p className="lunar">{lunar}</p>
        </div>
        <div className="location">
          <p className="place-name">{place}</p>
          <p>{address}</p>
        </div>
        <a 
          href={mapUrl} 
          className="btn-map" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Xem bản đồ
        </a>
      </div>
    </section>
  );
};