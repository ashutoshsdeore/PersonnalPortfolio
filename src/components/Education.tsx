import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "MGM University",
    location: "Chhatrapati Sambhaji Nagar",
    period: "2022 – 2025",
    score: "GPA: 7.30",
  },
  {
    degree: "Diploma in Polymer Technology",
    institution: "CIPET",
    location: "Chhatrapati Sambhaji Nagar",
    period: "2019 – 2022",
    score: "Score: 74%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sane Guruji Vidyalaya",
    location: "Amalner Jalgaon",
    period: "2019",
    score: "Score: 70.20%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-[#0FA4AF]/15 rounded-full blur-[150px] animate-glow-slow"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#0FA4AF]/10 rounded-full blur-[200px] animate-glow-slow delay-1000"></div>
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
            <GraduationCap className="text-[#0FA4AF]" size={48} />
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0FA4AF] to-cyan-400 mx-auto mt-4 rounded-full animate-gradient-line"></div>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/50 shadow-[0_0_25px_rgba(15,164,175,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0FA4AF]/0 to-cyan-500/0 group-hover:from-[#0FA4AF]/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

              {/* Vertical Glow Strip */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0FA4AF] to-cyan-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

              {/* Card Content */}
              <div className="ml-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {edu.degree}
                      {edu.field && (
                        <span className="text-[#0FA4AF]"> - {edu.field}</span>
                      )}
                    </h3>
                    <p className="text-lg text-slate-300 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-slate-400">{edu.location}</p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0FA4AF] font-semibold">
                      <Award size={18} />
                      <span>{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes glow-slow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(25px, -25px) scale(1.1); opacity: 0.9; }
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
