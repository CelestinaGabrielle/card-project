import banner from "../assets/Banner.png";
import avatar from "../assets/avatar.jpg";
import "./DevCard.css";

export function DevCard() {
  return (
    <div className="devcard-container">
      <div className="devcard-banner">
        <img src={banner} alt="Banner" className="devcard-banner-img" />
        <img src={avatar} alt="Avatar" className="devcard-avatar" />
      </div>
      <div className="devcard-content">
        <h1>Gabrielle Celestina</h1>
        <h2>Desenvolvedora Frontend</h2>
        <p className="devcard-desc">
          <i>
            Cria Interfaces Bonitas,<br />
            Rápidas E Intuitivas.
          </i>
        </p>
        <div className="devcard-tags">
          <span>React</span>
          <span>Typescript</span>
          <span>Tailwind</span>
        </div>
      </div>
    </div>
  );
}