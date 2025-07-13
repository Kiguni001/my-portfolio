type Skill = {
  name: string;
  score: number;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
  icon: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "🧠",
    skills: [
      { name: "HTML", score: 9 },
      { name: "CSS", score: 8 },
      { name: "TypeScript", score: 7 },
      { name: "Python", score: 6 },
      { name: "Dutch", score: 5 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: "📚",
    skills: [
      { name: "React", score: 8 },
      { name: "Tailwind CSS", score: 9 },
      { name: "Next.js", score: 7 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", score: 6 },
      { name: "Firebase", score: 7 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", score: 8 },
      { name: "Figma", score: 6 },
      { name: "VS Code", score: 9 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 px-6 text-white" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#8ab4f8]">
          🔧 Skills & Tools
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#121212] border border-[#2e5aac] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#8ab4f8] mb-5 flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium text-white w-28">
                      {skill.name}
                    </span>
                    <div className="w-32 bg-[#2a2a2a] rounded-full overflow-hidden border border-[#2e5aac]">
                      <div
                        className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-[#2de300] to-[#ff7272]"
                        style={{ width: `${skill.score * 10}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-400">
                      {skill.score}/10
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
