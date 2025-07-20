const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-35 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-white"
    >
      <div className=" max-w-[68%] mx-auto flex flex-col md:flex-row items-center md:items-start gap-[2%]">
        <div className="w-full md:w-[45%] flex-shrink-0 ">
          <img
            src="/images/me.png"
            alt="Me"
            className="w-[90%] h-auto  justify-self-end
 "
          />
        </div>

        <div className="max-w-4xl mx-auto text-base leading-7 tracking-wide pt-[2%]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffffff] pt-[5%]">
            เกี่ยวกับฉัน
          </h2>
          <p>
            ผมเป็นโปรแกรมเมอร์ที่มีความชื่นชอบในการพัฒนา{" "}
            <strong className="text-[#8ab4f8]">
              Frontend ทั้งด้าน Web และ Mobile Application
            </strong>{" "}
            โดยเฉพาะการสร้างในส่วนของ UX/UI
          </p>

          <p className="mt-4">
            ผมมี <strong className="text-[#8ab4f8]">ประสบการณ์และรู้</strong>{" "}
            ในการพัฒนาเว็บไซต์และแอปพลิเคชันด้วยเครื่องมือต่อไปนี้:
          </p>

          <ul className="list-disc list-inside mt-4 ml-4">
            <li>HTML, CSS, Tailwind CSS</li>
            <li>React (Web Development)</li>
            <li>Flutter และ Firebase (Mobile App Development)</li>
          </ul>

          <p className="mt-4">
            นอกจากการพัฒนาแล้ว ผมยังสนใจและมีทักษะในด้าน{" "}
            <strong className="text-[#8ab4f8]">การออกแบบ UX/UI</strong> โดยใช้{" "}
            <span className="italic">Photoshop</span> เป็นเครื่องมือหลัก
            และมีความรู้พื้นฐานในการออกแบบด้วย{" "}
            <span className="italic">Figma</span> ในระดับเบื้องต้น
          </p>

          <p className="mt-4">
            ผมพร้อมที่จะเรียนรู้และพัฒนาตนเองอยู่เสมอ
            เพื่อให้สามารถสร้างผลงานที่ทั้งสวยงาม มีคุณภาพ
            และตอบโจทย์ความต้องการของผู้ใช้
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
