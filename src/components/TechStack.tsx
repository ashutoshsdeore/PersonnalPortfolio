import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// SVG Imports
import { ReactComponent as ReactLogo } from "../logos/react.svg";
import { ReactComponent as TSLogo } from "../logos/typescript.svg";
import { ReactComponent as NodeLogo } from "../logos/nodejs.svg";
import { ReactComponent as MongoLogo } from "../logos/mongodb.svg";
import { ReactComponent as ExpressLogo } from "../logos/express.svg";
import { ReactComponent as NextLogo } from "../logos/nextjs.svg";
import { ReactComponent as TailwindLogo } from "../logos/tailwind.svg";
import { ReactComponent as GitLogo } from "../logos/git.svg";
import { ReactComponent as HTMLLogo } from "../logos/html5.svg";
import { ReactComponent as CSSLogo } from "../logos/css3.svg";
import { ReactComponent as JSLogo } from "../logos/javascript.svg";
import { ReactComponent as SQLLogo } from "../logos/sql.svg";
import { ReactComponent as JavaLogo } from "../logos/java.svg";
import { ReactComponent as BootstrapLogo } from "../logos/bootstrap.svg";
import { ReactComponent as PostmanLogo } from "../logos/postman.svg";

const technologies = [
  { name: "React", Logo: ReactLogo, color: "text-cyan-400" },
  { name: "TypeScript", Logo: TSLogo, color: "text-blue-500" },
  { name: "Node.js", Logo: NodeLogo, color: "text-green-500" },
  { name: "MongoDB", Logo: MongoLogo, color: "text-green-400" },
  { name: "Express", Logo: ExpressLogo, color: "text-gray-300" },
  { name: "Next.js", Logo: NextLogo, color: "text-white" },
  { name: "Tailwind", Logo: TailwindLogo, color: "text-cyan-300" },
  { name: "Git", Logo: GitLogo, color: "text-orange-500" },
  { name: "HTML5", Logo: HTMLLogo, color: "text-orange-400" },
  { name: "CSS3", Logo: CSSLogo, color: "text-blue-400" },
  { name: "JavaScript", Logo: JSLogo, color: "text-yellow-400" },
  { name: "SQL", Logo: SQLLogo, color: "text-blue-300" },
  { name: "Java", Logo: JavaLogo, color: "text-red-500" },
  { name: "Bootstrap", Logo: BootstrapLogo, color: "text-purple-400" },
  { name: "Postman", Logo: PostmanLogo, color: "text-orange-500" },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="techstack"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-[#021314] to-black"
      style={{ perspective: "1000px" }}
    >
      {/* Background Glow Layers */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-[-15%] w-[700px] h-[700px] bg-[#0FA4AF]/20 rounded-full blur-[160px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#0FA4AF]/10 rounded-full blur-[180px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4">Tech Stack</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#0FA4AF] to-cyan-400 rounded-full animate-gradient-line"></div>
          <p className="text-slate-400 mt-6 text-lg">Technologies I work with</p>
        </motion.div>

        {/* Tech Badges */}
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto transition-transform duration-700 ease-out"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                scale: 1.15,
                rotateZ: 2,
                transition: { duration: 0.3 },
              }}
              className="relative group flex flex-col items-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative"
              >
                <div
                  className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#0C0C0C] to-[#0A1F20] 
                  border border-[#0FA4AF]/20 flex items-center justify-center
                  shadow-[0_0_30px_rgba(15,164,175,0.1)]
                  hover:shadow-[0_0_50px_rgba(15,164,175,0.25)]
                  transition-all duration-700 backdrop-blur-md"
                >
                  <tech.Logo
                    className={`w-14 h-14 ${tech.color} transition-transform duration-500 group-hover:scale-110`}
                  />
                  {/* Subtle glowing halo */}
                  <div className="absolute inset-0 bg-[#0FA4AF]/10 opacity-0 group-hover:opacity-60 rounded-2xl blur-2xl transition-opacity duration-700"></div>
                </div>
              </motion.div>
              <span className="text-slate-300 mt-3 text-sm font-medium group-hover:text-[#0FA4AF] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 18s ease-in-out infinite;
        }
        @keyframes gradient-line {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-line {
          background-size: 200% 200%;
          animation: gradient-line 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
