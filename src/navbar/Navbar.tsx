const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/10 backdrop-blur-md shadow-md text-white">
      <div>
        <ul className="flex justify-end pr-[3%] pl-0 pt-[10px] pb-[10px] gap-[5%]">
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
