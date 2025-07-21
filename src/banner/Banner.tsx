import React from "react";
import "./Banner.css";

const HeroBanner: React.FC = () => {
  return (
    <section id="home">
      <div className="hero-banner">
        <div className="content">
          <h1 className="typewriter">Portfolio</h1>
          <div className="text-banner">
            <p>Frontend And Flutter Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
