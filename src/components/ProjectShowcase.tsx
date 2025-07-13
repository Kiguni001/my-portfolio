import React, { useState } from "react";

const imageIds = [1, 2, 3, 4, 5];

const getImageById = (id: number) => `/images/project-${id}.jpg`; // ตั้งชื่อไฟล์ภาพตาม ID

const ProjectShowcase = () => {
  const [ids, setIds] = useState([1, 2, 3]); // เริ่มต้นแสดง ID 1, 2, 3

  const handlePrev = () => {
    setIds((prev) => prev.map((id) => (id - 1 < 1 ? imageIds.length : id - 1)));
  };

  const handleNext = () => {
    setIds((prev) => prev.map((id) => (id + 1 > imageIds.length ? 1 : id + 1)));
  };

  return (
    <div className="flex items-center justify-center gap-4 py-10 bg-[#111]">
      {/* ปุ่มเลื่อนซ้าย */}
      <button
        className="text-white bg-[#333] p-3 rounded-full hover:bg-[#555]"
        onClick={handlePrev}
      >
        ←
      </button>

      {/* ภาพด้านซ้าย */}
      <div className="w-[150px] h-[266px] transition-all duration-300 opacity-50 scale-90">
        <img
          src={getImageById(ids[0])}
          alt={`Project ${ids[0]}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* ภาพตรงกลาง (เด่น) */}
      <div className="w-[180px] h-[320px] transition-all duration-300 scale-105 hover:scale-110 hover:shadow-xl">
        <img
          src={getImageById(ids[1])}
          alt={`Project ${ids[1]}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* ภาพด้านขวา */}
      <div className="w-[150px] h-[266px] transition-all duration-300 opacity-50 scale-90">
        <img
          src={getImageById(ids[2])}
          alt={`Project ${ids[2]}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* ปุ่มเลื่อนขวา */}
      <button
        className="text-white bg-[#333] p-3 rounded-full hover:bg-[#555]"
        onClick={handleNext}
      >
        →
      </button>
    </div>
  );
};

export default ProjectShowcase;
