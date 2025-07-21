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
      { label: "Figma", color: "bg-purple-400" },
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
    title: "Internship Projects",
    description:
      "ได้รับหน้าที่ทำการจัดและตกแต่งหน้าเว็บไซต์ระหว่างฝึกงานเป็นระยะเวลา 4 เดือน โดยใช้ทักษะของ CSS, HTML, Photoshop",
    tags: [
      { label: "Photoshop", color: "bg-pink-500" },
      { label: "CSS", color: "bg-sky-400" },
      { label: "HTML", color: "bg-orange-500" },
    ],
    features: [
      "ใช้ CSS ในการตกแต่งหน้าเว็บไซต์",
      "วางข้อมูลและสร้างตารางด้วย HTML",
      "การออกแบบก่อนจัดทำด้วย Photoshop",
    ],
  },

  {
    title: "LineNotifyShop",
    description:
      "ระบบสั่งซื้อสินค้าออนไลน์ที่สามารถเข้าสู่ระบบด้วยบัญชี Gmail หรือ LINE เพื่อดึงข้อมูลที่อยู่จัดส่งโดยอัตโนมัติ ระบบมีการแจ้งเตือนผู้ขายผ่าน LINE ทันทีเมื่อมีการสั่งซื้อ",
    tags: [
      { label: "PHP", color: "bg-violet-600" },
      { label: "XAMPP", color: "bg-orange-600" },
      { label: "MySQL", color: "bg-sky-700" },
      { label: "HTML", color: "bg-orange-500" },
      { label: "CSS", color: "bg-sky-400" },
    ],
    features: [
      "Login ด้วย Gmail หรือ LINE",
      "ดึงข้อมูลที่อยู่จัดส่งโดยอัตโนมัติ จากบัญชีผู้ใช้",
      "ระบบสั่งซื้อออนไลน์ แสดงสินค้า, ราคา และยอดรวม",
      "แจ้งเตือนผู้ขายทันทีผ่าน LINE เมื่อมีการสั่งซื้อ",
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
    features: ["เมนูบาร์พร้อมเอฟเฟกต์เลื่อน", "การจัดแสดงโปรเจคแบบการ์ด"],
  },
  {
    title: "Simple E-commerce System",
    description:
      "เว็บไซต์ซื้อขายสินค้าสำหรับฝึกฝนการทำCRUD (Create, Read, Update, Delete) และคำนวณราคาสินค้าพื้นฐาน",
    tags: [
      { label: "PHP", color: "bg-violet-600" },
      { label: "XAMPP", color: "bg-orange-600" },
      { label: "MySQL", color: "bg-sky-700" },
      { label: "HTML", color: "bg-orange-500" },
      { label: "CSS", color: "bg-sky-400" },
      { label: "Bootstrap", color: "bg-indigo-500" },
    ],
    features: [
      "เพิ่มรายการสินค้าใหม่ลงในฐานข้อมูล",
      "ลบสินค้าออกจากรายการ",
      "คำนวณราคารวมของสินค้าในตะกร้า",
      "ใช้ Bootstrap จัดวางหน้าตาให้ดูทันสมัย",
      "เชื่อมต่อฐานข้อมูลด้วย MySQL ผ่าน XAMPP",
    ],
  },
  {
    title: "RollMaze 3D",
    description:
      "เกมแนวฟิสิกส์ 3 มิติที่ผู้เล่นจะควบคุมลูกบอลให้กลิ้งผ่านเส้นทางที่เต็มไปด้วยอุปสรรค แพลตฟอร์มลอยตัว และกับดัก",
    tags: [
      { label: "Unity Engine", color: "bg-[#2f2f2f]" },
      { label: "C#", color: "bg-[#c2185b]" },
    ],
    features: [
      "ระบบแรงโน้มถ่วง การกลิ้ง และแรงกระแทก",
      "กล้องติดตามอัตโนมัติ",
      "รองรับการควบคุมทั้งคีย์บอร์ดและจอยเกม",
    ],
  },
  {
    title: "Java E-commerce",
    description:
      "ระบบจัดการสินค้าอย่างง่ายที่พัฒนาด้วย Java สำหรับเพิ่มและลบรายการสินค้า",
    tags: [
      { label: "Java", color: "bg-[#b07219]" },
      { label: "MySQL", color: "bg-sky-700" },
      { label: "HTML", color: "bg-orange-500" },
      { label: "CSS", color: "bg-sky-400" },
    ],
    features: [
      "เพิ่มสินค้าใหม่เข้าสู่รายการ",
      "ลบสินค้าออกจากรายการ",
      "ค้นหาสินค้าจากรหัสหรือชื่อ",
      "แสดงรายการสินค้าทั้งหมดในรูปแบบตาราง",
    ],
  },
  {
    title: "UX/UI Design Project",
    description:
      "ออกแบบเว็บไซต์ใหม่ตั้งแต่ต้นด้วยแนวคิดที่เน้นประสบการณ์ผู้ใช้ (UX) และความสวยงามของส่วนติดต่อผู้ใช้ (UI)",
    tags: [
      { label: "Photoshop", color: "bg-pink-500" },
      { label: "Figma", color: "bg-purple-400" },
    ],
    features: [
      "แยกไฟล์ภาพ, ข้อมูล และ Assets อย่างชัดเจน พร้อมส่งต่อให้ Dev",
      "สร้างภาพประกอบ, แบนเนอร์ สำหรับการใช้งานใน Photoshop",
      "วางโครงสร้าง Components อย่างมีระบบ เช่น ปุ่ม, การ์ดสินค้า, Layout",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-[#333] dark:bg-[#111] text-white"
    >
      <h2 className="text-4xl font-extrabold text-center text-[#13d2d5] mb-4">
        ผลงานโปรเจค
      </h2>
      <div className="w-40 h-1 bg-[#13d2d5] mx-auto mb-10 rounded-full" />

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#121212] dark:bg-[#181818] border border-[#0e3b1e] rounded-2xl overflow-hidden shadow-md hover:shadow-[#000000]/30 transition p-6"
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

            <h3 className="text-xl font-semibold text-white mb-2 ">
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
