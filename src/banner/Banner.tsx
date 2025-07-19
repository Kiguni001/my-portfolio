import React from "react";
import "./Banner.css";

const HeroBanner: React.FC = () => {
  return (
    <section id="home">
      <div className="hero-banner">
        <div className="content">
          <h1 className="typewriter">สวัสดี ฉันคือนักพัฒนาเว็บไซต์</h1>
          <p>React / TypeScript / Tailwind CSS</p>
          <button className="btn">ติดต่อฉัน</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
