import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";

const ROLES = ["Frontend Developer", "React Developer", "UI/UX Enthusiast"];
const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_TIME = 1400;

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[roleIndex];
        let timeout;

        if (!deleting && displayedText === current) {
            timeout = setTimeout(() => setDeleting(true), HOLD_TIME);
        } else if (deleting && displayedText === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
        } else {
            timeout = setTimeout(() => {
                const next = deleting
                    ? current.slice(0, displayedText.length - 1)
                    : current.slice(0, displayedText.length + 1);
                setDisplayedText(next);
            }, deleting ? DELETE_SPEED : TYPE_SPEED);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, deleting, roleIndex]);

    return (
        <section
            id="about"
            className="relative w-full max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-14 md:pb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-14"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500&display=swap');

        .ls-display { font-family: 'Space Grotesk', sans-serif; }
        .ls-mono { font-family: 'JetBrains Mono', monospace; }
        .ls-body { font-family: 'Inter', sans-serif; }

        @keyframes ls-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ls-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ls-blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes ls-pulse-soft {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        .ls-anim-fade { animation: ls-fade-up 0.7s ease-out both; }
        .ls-anim-float { animation: ls-float 5s ease-in-out infinite; }
        .ls-cursor { animation: ls-blink 1.1s step-end infinite; }
        .ls-dot-pulse { animation: ls-pulse-soft 2s ease-in-out infinite; }

        .ls-glow-btn {
          box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .ls-glow-btn:hover {
          box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);
        }
        .ls-code-card {
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.25);
        }
        .ls-icon-btn {
          transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }
        .ls-icon-btn:hover { transform: translateY(-3px) scale(1.06); }

        @media (prefers-reduced-motion: reduce) {
          .ls-anim-fade, .ls-anim-float, .ls-cursor, .ls-dot-pulse { animation: none !important; }
        }
      `}</style>

            {/* ──────────────── Intro column ──────────────── */}
            <div className="flex-1 text-center md:text-left space-y-6 ls-anim-fade ls-body">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 dark:bg-purple-400/10 rounded-full border border-purple-500/20 dark:border-purple-400/20 text-purple-700 dark:text-purple-300 ls-mono text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ls-dot-pulse" />
                    <span>~/portfolio git:(main)</span>
                </div>

                <div className="space-y-3">
                    <h1 className="ls-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 dark:from-purple-400 dark:via-indigo-300 dark:to-pink-400 text-transparent bg-clip-text">
                            Love Saini
                        </span>
                    </h1>

                    <div className="h-8 ls-mono text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400 flex items-center justify-center md:justify-start">
                        <span className="text-indigo-500 dark:text-indigo-400 mr-2">{'>'}</span>
                        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
                            {displayedText}
                        </span>
                        <span className="w-[2px] h-5 bg-purple-500 dark:bg-purple-400 ml-1 ls-cursor" />
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg text-justify mx-auto md:mx-0 leading-relaxed max-w-xl">
                    I am a passionate Frontend Developer who loves crafting beautiful,
                    interactive, and responsive user interfaces. I enjoy solving complex UI
                    challenges and mastering modern web technologies. My goal is to create
                    seamless, engaging, and high-performance digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                    <a
                        href="#contact"
                        className="ls-glow-btn w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-center text-sm transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Get in touch
                    </a>
                    <a
                        href="/Love_portfolio/LOVE_Resume.pdf"
                        download
                        className="w-full sm:w-auto px-8 py-3.5 border border-slate-300 dark:border-slate-600 bg-white/60 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-center text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                        <FaDownload size={14} />
                        <span>Download CV</span>
                    </a>
                </div>

                <div className="flex justify-center md:justify-start items-center gap-4 pt-4">
                    {[
                        { Icon: FaGithub, href: "https://github.com/LoveSaini100", label: "GitHub", hover: "hover:border-slate-900 dark:hover:border-white hover:text-slate-950 dark:hover:text-white" },
                        { Icon: FaLinkedin, href: "https://www.linkedin.com/in/love-saini-b877aa277", label: "LinkedIn", hover: "hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400" },
                        { Icon: FaInstagram, href: "https://www.instagram.com/love_saini_881/", label: "Instagram", hover: "hover:border-pink-500 hover:text-pink-500 dark:hover:text-pink-400" },
                        { Icon: FaWhatsapp, href: "https://wa.me/919528634480?text=Hi%20Love%20Saini%2C%20I%20visited%20your%20portfolio!", label: "WhatsApp", hover: "hover:border-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400" },
                    ].map(({ Icon, href, label, hover }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={label}
                            className={`ls-icon-btn p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-xl shadow-sm ${hover}`}
                        >
                            <Icon size={19} />
                        </a>
                    ))}
                </div>
            </div>

            {/* ──────────────── Signature: Simple Profile Photo ──────────────── */}
            <div className="flex-1 flex justify-center items-center relative">
                {/* Decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative group flex flex-col items-center ls-anim-float transform-gpu transition-transform duration-500 hover:scale-[1.02]">
                    {/* Avatar */}
                    <div className="relative w-[300px] h-[320px] sm:w-[380px] sm:h-[400px] mb-6">
                        {/* Glowing gradient background */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-[4px] rounded-xl bg-white dark:bg-slate-900 overflow-hidden z-10 shadow-xl border border-white/20 dark:border-slate-800">
                            <img
                                src="/Love_portfolio/Profile.png"
                                alt="Love Saini"
                                className="w-full h-full object-fill transform transition-transform duration-700 group-hover:scale-105"
                                
                            />
                        </div>
                    </div>
                    
                    {/* Minimal Text */}
                    <div className="text-center z-10 relative">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight ls-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-500 transition-all duration-300">Love Saini</h3>
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-1 tracking-wide ls-mono">Frontend Developer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}