import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

const Projects = () => {
    const projects = [
        {
            title: "VaultLock_Secure_SaaS",
            description: "Tier_enforced_cloud_storage_with_background_expiry_worker_and_secure_MPIN_authentication.",
            tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "Bcrypt", "Nodemailer", "Multer"],
            id: "PRJ_01"
        },
        {
            title: "View_My_View_P2P_Relay",
            description: "Encrypted_browser_to_browser_visual_relay_using_WebRTC_with_stateless_signaling_server.",
            tech: ["WebRTC", "Socket.IO", "Express.js", "Netlify", "Render", "Google_STUN"],
            id: "PRJ_02"
        },
        {
            title: "Zero_Touch_Vision",
            description: "Gesture_and_gaze_based_contactless_control_system_using_real_time_landmark_tracking.",
            tech: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI", "NumPy"],
            id: "PRJ_03"
        },
        {
            title: "Premium_Expense_Tracker",
            description: "Glassmorphic_finance_dashboard_with_AI_budget_velocity_and_simulated_month_engine.",
            tech: ["JavaScript", "Canvas_API", "LocalStorage", "CSS_Animations"],
            id: "PRJ_04"
        },
        {
            title: "Advanced_React_Todo",
            description: "Deadline_aware_task_manager_with_real_time_clock_and_dynamic_theme_engine.",
            tech: ["React", "JavaScript", "LocalStorage", "Responsive_UI"],
            id: "PRJ_05"
        },
        {
            title: "CPU_Performance_Predictor",
            description: "Regression_and_classification_models_for_structured_hardware_performance_prediction.",
            tech: ["Python", "Pandas", "Scikit_Learn", "XGBoost", "Matplotlib"],
            id: "PRJ_06"
        },
        {
            title: "Galaxy_Cluster_Mass_Analysis",
            description: "SDSS_spectroscopic_analysis_for_velocity_dispersion_and_dark_matter_inference.",
            tech: ["Python", "SDSS_SQL", "NumPy", "Matplotlib"],
            id: "PRJ_07"
        },
        {
            title: "JWST_MIRI_Spectral_Extraction",
            description: "IFU_cube_processing_and_emission_line_identification_in_mid_infrared_spectra.",
            tech: ["Python", "Astropy", "SciPy", "FITS_Processing"],
            id: "PRJ_08"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
                    <div>
                        <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase mb-4 block">Selected_Works</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter-extra text-white">
                            <TextReveal text="Product" className="mr-4" />
                            <TextReveal text="Showcase" className="opacity-60" />
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-px bg-white/20 my-auto" />
                        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Build_v2.4.9</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <Magnetic key={project.id} strength={0.1}>
                            <motion.div
                                className="group tech-border p-1 hover:bg-white/[0.02] transition-all duration-500 h-full overflow-hidden relative shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_50px_rgba(34,211,238,0.5)] z-0 hover:z-10"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <div className="bg-[#050505] p-10 h-full flex flex-col border border-white/5">
                                    <div className="flex justify-between items-start mb-16">
                                        <span className="text-[10px] font-mono text-white/40">{project.id}</span>
                                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                                            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-cyan-500 transition-all group-hover:rotate-45" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title.replace('_', ' ')}
                                    </h3>

                                    <p className="text-white/70 font-mono text-sm mb-12 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Prismatic Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(34,211,238,0.4)_0%,transparent_60%)]" />

                                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-8 border-t border-white/5 relative z-10">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
