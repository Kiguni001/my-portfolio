import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    title: "Sumhua",
    description:
      "เป็น android appที่ใช้ในการส่องข้อความติดต่อแบบเรียลไทม์ สามารถติดต่อส่วนตัวหรือสร้างกลุ่มสนทนาได้",
    tags: [
      { label: "Dart", color: "bg-yellow-500" },
      { label: "Flutter", color: "bg-blue-400" },
      { label: "Firebase", color: "bg-orange-500" },
      { label: "Android Studio", color: "bg-green-500" },
    ],
    features: [
      "บันทึกข้อมูลของผู้ใช้",
      "เพิ่ม/ลบ ผู้ใช้รายอื่นได้",
      "ส่งข้อมูลแบบเรียลไทม์",
      "บันทึกและแสดงเวลาการส่งข้อมูล",
      "ดูโปรไฟล์ของผู้ใช้ในกลุ่มเดียวกันได้",
    ],
  },
  {
    title: "BlackCat Banana",
    description:
      "วิดีโออนิเมชันนำเสนอชีวิตของแมวดำหนุ่มในสวนกล้วย ถ่ายทอดผ่านเรื่องราวอบอุ่นสบายตา",
    tags: [
      { label: "Photoshop", color: "bg-pink-500" },
      { label: "Figma", color: "bg-purple-400" },
      { label: "Premiere Pro", color: "bg-indigo-500" },
    ],
    features: [
      "ฉากสวนกล้วยแอนิเมชันเคลื่อนไหวได้",
      "ตัวละครแมวดำพร้อมการเคลื่อนไหว",
      "ลำดับเรื่องราวแบบอบอุ่น",
      "เสียงดนตรีประกอบที่กลมกลืน",
    ],
  },
  {
    title: "Portfolio Vite+React",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ใช้ React, TypeScript, Tailwind CSS และระบบ FullPage Scroll",
    tags: [
      { label: "React", color: "bg-blue-500" },
      { label: "TypeScript", color: "bg-cyan-400" },
      { label: "Tailwind CSS", color: "bg-teal-500" },
      { label: "Vite", color: "bg-purple-500" },
    ],
    features: [
      "เลื่อนหน้าแบบ FullPage",
      "เมนูบาร์พร้อมเอฟเฟกต์เลื่อน",
      "การจัดแสดงโปรเจคแบบการ์ด",
      "โหมดมืด/สว่าง",
      "การออกแบบให้ Responsive",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-[#333] dark:bg-[#111] text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8ab4f8]">
        Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#121212] dark:bg-[#181818] border border-[#2e5aac] rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition p-6"
          >
            {/* แสดงแท็ก */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full ${tag.color} text-white`}
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  {tag.label}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#cccccc] mb-4">{project.description}</p>
            <ul className="space-y-2 text-sm text-[#cccccc]">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
