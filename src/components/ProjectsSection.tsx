const projects = [
  {
    title: "Do_TaRart",
    description:
      "เว็บไซต์ขายของมือสองแบบจัดหมวดหมู่ ค้นหาได้ตามจังหวัดและราคา พร้อมระบบจัดเก็บข้อมูลผู้ขาย",
    image: "/images/project-dotarart.png", // คุณใส่ภาพเองได้
    link: "https://your-live-project-link.com",
  },
  {
    title: "BlackCat Banana",
    description:
      "วิดีโออนิเมชันนำเสนอชีวิตของแมวดำหนุ่มในสวนกล้วย ถ่ายทอดผ่านเรื่องราวอบอุ่นสบายตา",
    image: "/images/project-banana.png",
    link: "https://your-portfolio-or-video.com",
  },
  {
    title: "Portfolio Vite+React",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ใช้ React, TypeScript, Tailwind CSS และระบบ FullPage Scroll",
    image: "/images/project-portfolio.png",
    link: "https://your-portfolio-link.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-[#0e0e0e] dark:bg-[#0e0e0e] text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8ab4f8]">
        Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#121212] dark:bg-[#181818] border border-[#2e5aac] rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#cccccc] mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2e5aac] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                ดูโปรเจกต์
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
