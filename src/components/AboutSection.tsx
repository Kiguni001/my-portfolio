const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0f0f0f] dark:bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#8ab4f8] mb-6">About Me</h2>
        <p className="text-lg text-[#cccccc] leading-relaxed">
          สวัสดีครับ
          ผมคือผู้พัฒนาเว็บไซต์ที่หลงใหลในการสร้างสรรค์ผลงานที่สวยงามและใช้งานได้จริง
          ด้วยประสบการณ์ในการใช้{" "}
          <span className="text-[#8ab4f8]">React, TypeScript</span> และ
          <span className="text-[#8ab4f8]"> Tailwind CSS</span>{" "}
          ผมมุ่งมั่นพัฒนาเว็บไซต์ที่ตอบโจทย์ทั้งความเร็ว ความปลอดภัย
          และประสบการณ์ผู้ใช้
        </p>
        <p className="text-lg text-[#cccccc] mt-4 leading-relaxed">
          นอกจากนี้ ผมยังสนใจในด้าน UI/UX, แอนิเมชัน
          และการออกแบบระบบที่มีโครงสร้างชัดเจน
          พร้อมเรียนรู้และพัฒนาตัวเองตลอดเวลา
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
