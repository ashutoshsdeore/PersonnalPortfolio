import { Code2, Database, Palette, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["JAVA"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Web Technologies",
    icon: Code2,
    skills: ["ReactJS", "NodeJS", "ExpressJS", "HTML5", "CSS3", "Bootstrap-5", "NextJS", "TypeScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Database Management",
    icon: Database,
    skills: ["MongoDB", "SQL"],
    color: "from-emerald-500 to-green-500"
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    skills: ["Canva", "Pexels"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
    color: "from-amber-500 to-yellow-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4 inline-flex items-center gap-3">
            <Code2 className="text-blue-600" size={48} />
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-300 border border-slate-200 hover:border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
