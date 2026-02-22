import { motion } from 'framer-motion';
import { Code2, Palette, Award, Cpu } from 'lucide-react';
import TextReveal from './TextReveal';

const About = () => {
    return (
        <section id="about" className="py-32 bg-[#050505] relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase mb-4 block">System_Identity</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter-extra mb-8 text-white">
                            <TextReveal text="Designing" className="block mb-2" />
                            <TextReveal text="Digital" className="opacity-60" /> <br />
                            <TextReveal text="Architectures." className="opacity-60" />
                        </h2>

                        <div className="space-y-6 text-white/70 font-mono text-sm leading-relaxed max-w-xl">
                            <p>
                                [01] specialized in building distributed systems and p2p architectures, with a focus on real-time networking and cryptographically secure state control.
                            </p>
                            <p>
                                [02] engineering background spans from high-performance computer vision gesture control to scientific data processing of jwst and sdss astrophysical clusters.
                            </p>
                            <p>
                                [03] my approach combines technical precision with scientific inference, building digital architectures that are as performant as they are proprietary.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 grid grid-cols-2 gap-px bg-white/5 border border-white/5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {[
                            { label: "Completed_Projects", val: "12+", icon: Code2 },
                            { label: "Design_Patterns", val: "Bento", icon: Palette },
                            { label: "Uptime_Record", val: "99.9%", icon: Award },
                            { label: "System_Status", val: "Optimized", icon: Cpu }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#050505] p-10 group hover:bg-white/[0.03] transition-all relative z-0 hover:z-10 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(34,211,238,0.4)]"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <stat.icon className="w-5 h-5 mb-8 text-white/40 group-hover:text-cyan-500 transition-colors" />
                                <div className="text-2xl md:text-3xl font-black mb-2 tracking-tighter text-white truncate">{stat.val}</div>
                                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
