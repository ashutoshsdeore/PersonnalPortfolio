import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  "Certificate of Web-Development Internship (Motion-Cut)",
  "Certificate of GDSC",
  "Certificate of Java (Udemy)"
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* Ambient teal glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#0FA4AF]/15 rounded-full blur-[150px] animate-glow-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#0FA4AF]/10 rounded-full blur-[180px] animate-glow-slow delay-1000"></div>
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
            <Award className="text-[#0FA4AF]" size={48} />
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0FA4AF] to-cyan-400 mx-auto mt-4 rounded-full animate-gradient-line"></div>
        </motion.div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/50 shadow-[0_0_20px_rgba(15,164,175,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Glow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0FA4AF]/0 to-cyan-500/0 group-hover:from-[#0FA4AF]/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <CheckCircle
                  className="text-[#0FA4AF] mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <p className="text-slate-200 font-medium leading-relaxed">
                  {cert}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
