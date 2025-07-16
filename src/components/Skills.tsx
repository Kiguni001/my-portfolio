import React from "react";

type Skill = {
  name: string;
  score: number;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", score: 8 },
      { name: "CSS", score: 8 },
      { name: "TypeScript", score: 7 },
      { name: "Dart", score: 7 },
      { name: "Java", score: 5 },
      { name: "C#", score: 5 },
      { name: "SQL", score: 6 },
      { name: "PHP", score: 6 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React", score: 7 },
      { name: "Flutter", score: 7 },
      { name: "Tailwind CSS", score: 8 },
      { name: "Node.js", score: 6 },
      { name: "Bootstrap", score: 7 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", score: 6 },
      { name: "Firebase", score: 7 },
      { name: "Oracle", score: 5 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "GitHub", score: 7 },
      { name: "Figma", score: 6 },
      { name: "XAMPP", score: 7 },
      { name: "Android Studio", score: 8 },
      { name: "Unity", score: 6 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-[#111111] py-2 px-6 text-white" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#121212] border border-[#2e5aac] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#8ab4f8] mb-5">
                {category.title}
              </h3>
              <ul className="space-y-1">
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
