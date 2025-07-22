const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-[9%] pb-[9%] bg-gradient-to-b from-[#111111] to-[#111111] text-white"
    >
      <div className="grid justify-items-center">
        {/* หัวข้อ */}
        <h2 className="text-4xl font-extrabold text-center text-[#13d2d5] mb-4">
          เกี่ยวกับฉัน
        </h2>
        <div className="w-24 h-1 bg-[#13d2d5] mx-auto mb-10 rounded-full" />

        {/* กล่องแบ่งซ้าย-ขวา */}
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-[79%]">
          {/* ซ้าย 30% */}
          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src="/images/about.png" // เปลี่ยน path ตามจริง
              alt="About me"
              className=""
            />
          </div>

          {/* ขวา 70% */}
          <div className="w-full md:w-3/5 text-lg leading-8 tracking-wide space-y-6 text-gray-200">
            <p>
              ฉันชื่อปลื้ม หรือนาย{" "}
              <span className="text-white font-semibold">ธีรเดช ใจเที่ยง</span>{" "}
              ฉันมีความชื่นชอบในการพัฒนา{" "}
              <strong className="text-[#13d2d5] bg-[#13d2d510] px-1 rounded">
                Frontend ทั้งด้าน Web และ Mobile Application
              </strong>{" "}
              โดยเฉพาะในด้าน UX/UI
            </p>

            <p>
              ฉันมี <strong className="text-[#13d2d5]">ประสบการณ์</strong>{" "}
              ในการพัฒนาเว็บไซต์และแอปพลิเคชันด้วยเครื่องมือต่อไปนี้:
            </p>

            <ul className="list-none ml-2 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#13d2d5] mt-1">▹</span> HTML, CSS,
                Tailwind CSS
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#13d2d5] mt-1">▹</span> React (Web
                Development)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#13d2d5] mt-1">▹</span> Flutter และ
                Firebase (Mobile App)
              </li>
            </ul>

            <p>
              ฉันยังสนใจด้าน{" "}
              <strong className="text-[#13d2d5]">การออกแบบ UX/UI</strong> โดยใช้{" "}
              <span className="italic">Photoshop</span> และ{" "}
              <span className="italic">Figma</span> ในระดับพื้นฐาน
            </p>

            <p>
              ฉันพร้อมที่จะเรียนรู้และพัฒนาตนเองอยู่เสมอ เพื่อสร้างผลงานที่
              สวยงามและตอบโจทย์ผู้ใช้
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
