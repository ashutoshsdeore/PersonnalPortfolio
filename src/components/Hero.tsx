"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  // 🧠 Use useCallback to satisfy ESLint dependency rule
  const animate = useCallback(() => {
    setSmoothPos((prev) => ({
      x: prev.x + (targetPos.x - prev.x) * 0.08,
      y: prev.y + (targetPos.y - prev.y) * 0.08,
    }));
    requestRef.current = requestAnimationFrame(animate);
  }, [targetPos]);

  // ✅ Start the animation loop
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // 🖱️ Handle mouse move updates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTargetPos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = href === "#home" ? document.querySelector("body") : document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white"
    >
      {/* Navigation */}
      <nav className="w-full py-5 px-6 bg-transparent backdrop-blur-md relative z-50">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="text-3xl font-extrabold tracking-wide text-[#0FA4AF] hover:text-white transition-all"
          >
            ASHU
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-slate-300 hover:text-[#0FA4AF] transition-all relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0FA4AF] to-teal-300 group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0FA4AF] hover:text-white p-2 transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#0FA4AF]/30 animate-fade-in">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-slate-300 hover:text-[#0FA4AF] py-2 text-lg font-medium transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex items-center justify-center relative z-10 text-center px-6">
        <div
          className="transition-transform duration-300 will-change-transform"
          style={{
            transform: `translate(${smoothPos.x * 15}px, ${smoothPos.y * 15}px) scale(1.02)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight animate-fade-in-up">
            Ashutosh Deore
          </h1>
          <p className="text-2xl md:text-3xl text-[#0FA4AF] mb-10 font-light animate-slide-in-up">
            Full Stack Developer
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-slate-300 mb-8 animate-fade-in delay-300">
            <a href="tel:+917820904129" className="flex items-center gap-2 hover:text-[#0FA4AF]">
              <Phone size={18} />
              <span>+91 7820904129</span>
            </a>
            <span className="hidden md:block text-[#0FA4AF]">•</span>
            <a
              href="mailto:deoreashutosh6@gmail.com"
              className="flex items-center gap-2 hover:text-[#0FA4AF]"
            >
              <Mail size={18} />
              <span>deoreashutosh6@gmail.com</span>
            </a>
            <span className="hidden md:block text-[#0FA4AF]">•</span>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Amalner 425401</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in delay-500">
            <a
              href="https://github.com/ashutoshsdeore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0FA4AF]/10 hover:bg-[#0FA4AF]/20 border border-[#0FA4AF]/40 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={26} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-deore/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0FA4AF]/10 hover:bg-[#0FA4AF]/20 border border-[#0FA4AF]/40 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={26} className="text-white" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-14 animate-bounce">
            <a href="#about" className="inline-block">
              <div className="w-6 h-10 border-2 border-[#0FA4AF]/60 rounded-full p-1">
                <div className="w-1.5 h-3 bg-[#0FA4AF] rounded-full mx-auto animate-scroll"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate(${smoothPos.x * -10}px, ${smoothPos.y * -10}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0FA4AF]/20 rounded-full blur-[180px] animate-glow-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#0FA4AF]/10 rounded-full blur-[160px] animate-glow-slow delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#011415] to-black opacity-80 animate-gradient-drift"></div>
      </div>
    </section>
  );
}
