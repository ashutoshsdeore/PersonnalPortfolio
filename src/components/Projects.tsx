import { Folder, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BeatBox Music App",
    tech: ["ReactJS", "MongoDB", "NodeJS", "ExpressJS", "JWT"],
    description: [
      "Built a MERN-stack music streaming platform with secure user authentication.",
      "Enabled dynamic playlist creation, playback controls, and profile management.",
      "Implemented RESTful APIs ensuring smooth frontend-backend communication.",
      "Used GitHub for version control and Postman for API testing."
    ],
  },
  {
    title: "HyderCycle App",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    description: [
      "Developed a responsive SPA using React and TypeScript with clean modular architecture.",
      "Enhanced UX with Framer Motion animations and smooth transitions.",
      "Optimized load performance across devices for a fluid user experience."
    ],
    link: "https://hyder-cycle.vercel.app/",
  },
  {
    title: "Travel App",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    description: [
      "Created a visually engaging travel website with React and Tailwind.",
      "Added interactive transitions, hover effects, and dynamic page elements.",
      "Deployed on Vercel for reliable performance and fast load times."
    ],
    link: "https://travel-one-roan.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-[#021011] to-black"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#0FA4AF]/20 rounded-full blur-3xl animate-slow-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0FA4AF]/10 rounded-full blur-3xl animate-slow-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4 inline-flex items-center gap-3">
            <Folder className="text-[#0FA4AF]" size={48} />
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0FA4AF] to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-black-900/90 to-black border border-slate-800/80 hover:border-[#0FA4AF]/0 transition-all duration-500 p-8 rounded-2xl shadow-[0_0_25px_rgba(15,164,175,0.05)] hover:shadow-[0_0_35px_rgba(15,164,175,0.2)] hover:-translate-y-3 backdrop-blur-md"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#0FA4AF]/10 blur-2xl transition-opacity duration-700 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <Folder
                    className="text-[#0FA4AF] group-hover:text-cyan-300 transition-colors"
                    size={40}
                  />
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-slate-400 hover:text-[#0FA4AF] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#0FA4AF] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <ul className="space-y-2 mb-6 text-slate-300">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      • {desc}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/40 text-[#0FA4AF] rounded-full text-xs font-medium border border-slate-700 group-hover:border-[#0FA4AF]/40 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-slow-pulse {
          animation: slow-pulse 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
