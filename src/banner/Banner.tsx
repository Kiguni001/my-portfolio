import React from "react";
import "./Banner.css";

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <h1 className="typewriter">สวัสดี ฉันคือนักพัฒนาเว็บไซต์</h1>
        <p>React / TypeScript / Tailwind CSS</p>
        <button className="btn">ติดต่อฉัน</button>
      </div>
    </div>
  );
};

export default HeroBanner;
