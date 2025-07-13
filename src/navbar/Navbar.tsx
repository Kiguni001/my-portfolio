// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import "./Navbar.css"; // หรือใช้ Tailwind ก็ได้

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
      <ul className="nav-links">
        <li>
          <a href="#home">หน้าแรก</a>
        </li>
        <li>
          <a href="#about">เกี่ยวกับฉัน</a>
        </li>
        <li>
          <a href="#projects">ผลงาน</a>
        </li>
        <li>
          <a href="#contact">ติดต่อ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
