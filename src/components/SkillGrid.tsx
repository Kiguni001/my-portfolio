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

const SkillGrid = () => {
  return (
    <section className="bg-[#111111] text-white py-10 px-6" id="skills-grid">
      <div className="max-w-6xl mx-auto space-y-15">
        {skillCategories.map((category) => (
          <div key={category.title} className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#ffffff] mb-7">
              {category.title}
            </h2>
            <div className="flex justify-center">
              <div className="flex gap-[2%]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="w-43 bg-[#121212] border border-[#2e5aac] rounded-xl p-4 shadow-md hover:shadow-blue-500/30 transition duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">{skill.score}/10</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillGrid;
