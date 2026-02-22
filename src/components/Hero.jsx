import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedSymbol from './AnimatedSymbol';
import Magnetic from './Magnetic';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = [
        "Distributed Systems Architect",
        "AI & Computer Vision Engineer",
        "ML Engineer",
        "Advanced High End UI Designer",
        "Fullstack Systems Developer"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left pt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-[10px] font-black tracking-[0.3em] uppercase bg-white/5 border border-white/10 rounded-sm">
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                            Open for Collaboration
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black mb-12 leading-none tracking-tighter-extra whitespace-nowrap">
                            <span className="text-gradient">RAGHAVAN S</span>
                        </h1>

                        <div className="h-12 mb-16 text-xl md:text-2xl font-mono tracking-widest text-white uppercase flex items-center gap-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                            <span className="text-cyan-500 font-black">//</span>
                            <span className="opacity-50">I am a</span>
                            <span className="relative text-white font-black">
                                {text}
                                <motion.span
                                    animate={{
                                        opacity: [1, 0, 1],
                                        height: ["100%", "70%", "100%"]
                                    }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="inline-block w-[3px] h-full bg-cyan-400 ml-2 align-middle shadow-[0_0_10px_#22d3ee]"
                                />
                            </span>
                        </div>

                        <motion.div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Magnetic strength={0.3}>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group relative px-10 py-5 bg-white text-black text-xs font-black tracking-[0.2em] uppercase transition-all hover:bg-white/90 active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]"
                                >
                                    Let's Collaborate
                                </button>
                            </Magnetic>

                            <Magnetic strength={0.2}>
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-xs font-black tracking-[0.2em] uppercase border-b border-white/20 pb-1 hover:border-white transition-all active:scale-95"
                                >
                                    See My Journey
                                </button>
                            </Magnetic>
                        </motion.div>
                    </motion.div>

                    {/* Profile Photo & Technical Motif */}
                    <motion.div
                        className="flex-1 relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div
                            className="relative w-80 h-[480px] tech-border p-4 group"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width;
                                const y = (e.clientY - rect.top) / rect.height;
                                e.currentTarget.style.setProperty("--move-x", `${(x - 0.5) * 20}px`);
                                e.currentTarget.style.setProperty("--move-y", `${(y - 0.5) * 20}px`);
                            }}
                        >
                            {/* Photo Frame */}
                            <div className="relative h-full w-full overflow-hidden bg-white/[0.02] border border-white/10 group-hover:border-cyan-500/50 transition-all duration-700">
                                <motion.img
                                    src="/src/assets/profile_suit.jpg"
                                    alt="Raghavan S"
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-105"
                                    style={{
                                        x: "var(--move-x)",
                                        y: "var(--move-y)"
                                    }}
                                />
                                {/* Scanlines */}
                                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Technical Overlays */}
                            <div className="absolute -top-4 -left-4 font-mono text-[10px] text-white/20 rotate-90 origin-top-left tracking-widest uppercase">
                                Profile_v01.jpg
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-cyan-500" />
                        </div>

                        {/* Custom Symbol Background */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.08]">
                            <AnimatedSymbol className="w-full h-full" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
                    <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
