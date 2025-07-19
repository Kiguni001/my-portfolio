import React, { useEffect, useState } from "react";

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
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div>
        <ul className="flex justify-end pr-[3%] pl-0 pt-[1%] pb-[1%] gap-[5%]">
          <li>
            <a
              href="#home"
              className="text-inherit font-semibold tracking-wide hover:text-[#8ab4f8] transition-colors duration-200"
            >
              หน้าแรก
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-inherit font-semibold tracking-wide hover:text-[#8ab4f8] transition-colors duration-200"
            >
              เกี่ยวกับฉัน
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-inherit font-semibold tracking-wide hover:text-[#8ab4f8] transition-colors duration-200"
            >
              ผลงาน
            </a>
          </li>
          <li>
            <a
              href="#design"
              className="text-inherit font-semibold tracking-wide hover:text-[#8ab4f8] transition-colors duration-200"
            >
              งานออกแบบ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
