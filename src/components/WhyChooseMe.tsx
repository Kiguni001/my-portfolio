import React from "react";
import { FiCheck } from "react-icons/fi"; // ติ๊กถูกแบบเรียบหรู

const highlights = [
  "มีประสบการณ์การออกแบบด้วย Photoshop และ Figma",
  "มีประสบการณ์การออกแบบตามเงื่อนไขความต้องการของลูกค้า",
  "แยกข้อมูลและภาพประกอบที่ใช้ในการตกแต่งแต่ละหน้าเป็นไฟล์อย่างเรียบร้อย",
  "ทำไฟล์ภาพตกแต่งที่อยู่ในการออกแบบ ให้นำมาใช้งานได้ทันที",
  "มีทักษะการเขียนโปรแกรม ทำให้การออกแบบอยู่ในขอบเขตที่ dev ทำได้",
];

const WhyChooseMe = () => {
  return (
    <section className="bg-[#111111] text-white py-10 px-6 pt-10" id="why-me">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8ab4f8] mb-8">
          ประสบการณ์การออกแบบเว็บไซต์
        </h2>
        <ul className="text-left space-y-4">
          {highlights.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <FiCheck className="text-[#8ab4f8] mt-1 text-xl shrink-0" />
              <span className="text-base md:text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseMe;
