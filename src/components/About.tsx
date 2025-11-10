import { User, Code, Laptop, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      icon: <Code size={28} className="text-[#0FA4AF]" />,
      title: "Clean Code Advocate",
      desc: "Writing maintainable, efficient, and scalable code is my priority.",
    },
    {
      icon: <Laptop size={28} className="text-[#0FA4AF]" />,
      title: "Full Stack Expertise",
      desc: "Proficient in both frontend and backend technologies.",
    },
    {
      icon: <Sparkles size={28} className="text-[#0FA4AF]" />,
      title: "Problem Solver",
      desc: "Turning complex challenges into elegant, impactful solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#0FA4AF]/15 rounded-full blur-[150px] animate-glow-slow"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-[#0FA4AF]/10 rounded-full blur-[180px] animate-glow-slow delay-1000"></div>
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
          <h2 className="text-5xl font-bold mb-4 inline-flex items-center gap-3">
            <User className="text-[#0FA4AF]" size={48} />
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0FA4AF] to-cyan-400 mx-auto mt-4 rounded-full animate-gradient-line"></div>
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p className="text-slate-300">
              I'm a passionate{" "}
              <span className="font-bold text-[#0FA4AF]">
                Full Stack Developer
              </span>{" "}
               and have recently graduated in Information Technology from MGM
              University. I specialize in building scalable, user-friendly
              applications that solve real-world problems.
            where I learned the importance of precision and problem-solving. That
              discipline now drives my passion for writing clean, elegant code.
          </p>
            <p className="text-slate-300">
              I thrive on challenges, always exploring the latest web
              technologies to craft seamless digital experiences. From dynamic
              web apps to interactive UI designs — I merge creativity with logic
              to bring ideas to life.
            </p>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/50 shadow-[0_0_20px_rgba(15,164,175,0.1)] transition-all duration-500 overflow-hidden"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0FA4AF]/0 to-cyan-500/0 group-hover:from-[#0FA4AF]/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Animation Styles */}
      <style>{`
        @keyframes glow-slow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.9; }
        }
        .animate-glow-slow {
          animation: glow-slow 20s ease-in-out infinite;
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
