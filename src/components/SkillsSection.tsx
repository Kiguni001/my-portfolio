const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "HTML", score: "8/10", logo: "html5.svg" },
      { name: "CSS", score: "8/10", logo: "css3.svg" },
      { name: "TypeScript", score: "7/10", logo: "typescript.svg" },
      { name: "Dart", score: "7/10", logo: "dart.svg" },
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "React", score: "7/10", logo: "react.svg" },
      { name: "Flutter", score: "7/10", logo: "flutter.svg" },
      { name: "Tailwind CSS", score: "8/10", logo: "tailwindcss.svg" },
      { name: "Node.js", score: "6/10", logo: "nodejs.svg" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", score: "6/10", logo: "mysql.svg" },
      { name: "Firebase", score: "7/10", logo: "firebase.svg" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "GitHub", score: "7/10", logo: "github.svg" },
      { name: "Figma", score: "6/10", logo: "figma.svg" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#0f0f0f] text-white">
      {skillsData.map((group) => (
        <div key={group.category} className="mb-12">
          <h2 className="text-2xl text-center font-semibold mb-8 text-[#8ab4f8]">
            {group.category}
          </h2>
          <div className="flex justify-center gap-[6%]">
            {group.items.map((skill) => (
              <div
                key={skill.name}
                className="relative bg-[#121212] border border-[#2e5aac] rounded-2xl p-6 w-64 flex flex-col items-center shadow-lg hover:shadow-blue-500/30 transition"
              >
                <div className="absolute -top-8 w-16 h-16 bg-[#0f0f0f] border border-[#2e5aac] rounded-full flex items-center justify-center">
                  <img
                    src={`/images/${skill.logo}`}
                    alt={skill.name}
                    className="w-8 h-8"
                  />
                </div>

                <div className="mt-10 text-center">
                  <p className="text-lg font-medium text-white">{skill.name}</p>
                  <p className="text-sm text-[#cccccc]">{skill.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
