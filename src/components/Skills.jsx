import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TextReveal from './TextReveal';
import DetailedProjects from './DetailedProjects';

const Skills = () => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const skillCategories = [
        {
            title: "Distributed_Systems_Engineering",
            id: "SE_01",
            skills: [
                "WebRTC",
                "Socket.IO",
                "Peer_to_Peer_Architecture",
                "ICE_Negotiation",
                "STUN",
                "Signaling_Protocols",
                "Session_State_Control",
                "Real_Time_Networking"
            ],
            span: "md:col-span-2 md:row-span-2"
        },
        {
            title: "Backend_Systems_Architecture",
            id: "BE_02",
            skills: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Cloudinary",
                "REST_API_Design",
                "Background_Workers",
                "Tier_Based_Quota_Enforcement",
                "Async_Control_Flow"
            ],
            span: "md:col-span-1"
        },
        {
            title: "Frontend_Engineering",
            id: "FE_03",
            skills: [
                "React",
                "Component_Architecture",
                "State_Management",
                "LocalStorage_Persistence",
                "Glassmorphism_UI",
                "Theme_Engine_Design",
                "Canvas_Rendering",
                "Responsive_Layouts"
            ],
            span: "md:col-span-1"
        },
        {
            title: "Security_&_Authentication",
            id: "SEC_04",
            skills: [
                "Bcrypt_Hashing",
                "Email_OTP_Verification",
                "Secure_MPIN_Auth",
                "Viewer_First_Handshake",
                "Server_Side_Validation",
                "Access_Control_Patterns",
                "Destructive_Action_Confirmation"
            ],
            span: "md:col-span-1"
        },
        {
            title: "Computer_Vision_&_AI",
            id: "AI_05",
            skills: [
                "MediaPipe",
                "OpenCV",
                "Real_Time_Landmark_Tracking",
                "Velocity_Based_Gesture_Logic",
                "Pose_Estimation_solvePnP",
                "Feature_Engineering",
                "Regression_Models",
                "Classification_Models"
            ],
            span: "md:col-span-1"
        },
        {
            title: "Scientific_Data_Systems",
            id: "DS_06",
            skills: [
                "SDSS_SQL_Querying",
                "JWST_MIRI_IFU_Analysis",
                "Spectral_Extraction",
                "Peak_Detection",
                "Virial_Mass_Computation",
                "Velocity_Dispersion_Calculation",
                "Astrophysical_Data_Visualization"
            ],
            span: "md:col-span-1"
        }
    ];

    return (
        <section id="skills" className="py-32 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase mb-4 block">Capabilities_v2.0</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter-extra text-white">
                            <TextReveal text="Technical" className="mr-4" />
                            <TextReveal text="Stack" className="opacity-60" />
                        </h2>
                    </div>
                    <p className="text-white/50 font-mono text-xs tracking-widest uppercase">// Interlocking technical proficiency</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className={`bg-[#050505] p-10 group transition-all duration-500 hover:bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 relative z-0 hover:z-10 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(34,211,238,0.4)] ${category.span}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-[10px] font-mono text-white/40">{category.id}</span>
                                <div className="w-2 h-2 bg-white/10 group-hover:bg-cyan-500 transition-colors" />
                            </div>

                            <h3 className="text-xl font-black mb-8 tracking-tight uppercase group-hover:text-cyan-400 transition-colors text-white">
                                {category.title.replace('_', ' ')}
                            </h3>

                            <div className="flex flex-wrap gap-x-6 gap-y-4">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-mono text-white/70 uppercase tracking-widest flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Projects Trigger */}
                <div className="mt-20 flex justify-center">
                    <motion.button
                        onClick={() => setIsProjectsOpen(true)}
                        className="group relative px-12 py-5 bg-white text-black text-xs font-black tracking-widest uppercase hover:bg-white/90 transition-all active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects Detailed
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isProjectsOpen && (
                    <DetailedProjects
                        isOpen={isProjectsOpen}
                        onClose={() => setIsProjectsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
