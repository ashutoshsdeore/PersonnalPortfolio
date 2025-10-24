'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        'service_urt8q3u',
        'template_y6zfz2m',
        formData,
        'QbMWjiAJSqqISDq3u'
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsLoading(false);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setIsLoading(false);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-black text-white"
    >
      {/* Ambient glowing background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0FA4AF]/15 rounded-full blur-[150px] animate-glow-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-[#0FA4AF]/10 rounded-full blur-[180px] animate-glow-slow delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#02191A]/40 to-[#0FA4AF]/10 animate-gradient-drift"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 flex justify-center items-center gap-3">
            <Mail size={50} className="text-[#0FA4AF]" />
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0FA4AF] to-cyan-400 mx-auto rounded-full animate-gradient-line"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a project or idea? Let’s make it real together. Reach out below!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Let’s Work Together
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                I’m always excited about collaborating on meaningful projects.
                Drop a message — I’ll reply soon!
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <Phone className="text-white" size={24} />,
                  title: 'Phone',
                  info: '+91 7820904129',
                  href: 'tel:+917820904129',
                },
                {
                  icon: <Mail className="text-white" size={24} />,
                  title: 'Email',
                  info: 'deoreashutosh6@gmail.com',
                  href: 'mailto:deoreashutosh6@gmail.com',
                },
                {
                  icon: <MapPin className="text-white" size={24} />,
                  title: 'Location',
                  info: 'Amalner, Maharashtra 425401',
                  href: '',
                }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex items-start gap-4">
                  <div className="p-3 bg-[#0FA4AF]/30 rounded-xl backdrop-blur-md border border-[#0FA4AF]/40">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-300 hover:text-[#0FA4AF] transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-slate-300">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-[#0FA4AF]/30 shadow-[0_0_20px_rgba(15,164,175,0.1)]"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-[#0FA4AF]/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="text-[#0FA4AF]" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400">
                  Thanks for reaching out — I’ll respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-semibold text-slate-300 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 text-white border border-[#0FA4AF]/20 rounded-lg focus:ring-2 focus:ring-[#0FA4AF] focus:border-transparent transition-all outline-none"
                      placeholder={`Your ${field}`}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 text-white border border-[#0FA4AF]/20 rounded-lg focus:ring-2 focus:ring-[#0FA4AF] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={isLoading}
                  className={`w-full font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isLoading
                      ? 'bg-slate-600 cursor-not-allowed'
                      : 'bg-[#0FA4AF]  hover:from-[#0FA4AF]/90 text-white-100 ]'
                  }`}
                >
                  {isLoading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.div animate={{ x: isHovered ? 5 : 0 }}>
                        <Send size={20} />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes glow-slow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(40px, -30px) scale(1.1); opacity: 0.9; }
        }
        @keyframes gradient-drift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-glow-slow {
          animation: glow-slow 20s ease-in-out infinite;
        }
        .animate-gradient-drift {
          animation: gradient-drift 30s ease-in-out infinite;
          background-size: 200% 200%;
        }
        @keyframes gradient-line {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-line {
          background-size: 200% 200%;
          animation: gradient-line 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
