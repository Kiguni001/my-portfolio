import React, { useState } from "react";
import Skills from "./Skills"; // แบบแถบ progress
import SkillGrid from "./SkillGrid"; // แบบกล่อง grid
import { FiGrid, FiBarChart2 } from "react-icons/fi";

const SkillsSection = () => {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <section className="relative bg-[#111111] py-10 px-6 text-white">
      {/* หัวข้อหลัก */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#8ab4f8]">
          Skills & Tools
        </h2>

        {/* ปุ่มแคปซูล */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center bg-[#1a1a1a] rounded-full p-1 shadow-inner border border-[#111111]">
            {/* ปุ่มแบบแถบ */}
            <button
              onClick={() => setIsGridView(false)}
              className={`flex items-center px-4 py-2 rounded-full transition duration-300
                ${!isGridView ? "bg-[#2e5aac] text-white" : "text-gray-400"}
              `}
            >
              <FiBarChart2 size={18} className="mr-2" />
              <span className="hidden sm:inline text-sm font-medium">แถบ</span>
            </button>

            {/* ปุ่มแบบกล่อง */}
            <button
              onClick={() => setIsGridView(true)}
              className={`flex items-center px-4 py-2 rounded-full transition duration-300
                ${isGridView ? "bg-[#2e5aac] text-white" : "text-gray-400"}
              `}
            >
              <FiGrid size={18} className="mr-2" />
              <span className="hidden sm:inline text-sm font-medium">
                กล่อง
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* เนื้อหาแสดงผล */}
      {isGridView ? <SkillGrid /> : <Skills />}
    </section>
  );
};

export default SkillsSection;
