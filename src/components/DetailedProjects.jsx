import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';

const DetailedProjects = ({ isOpen, onClose }) => {
    const containerRef = useRef(null);

    const projects = [
        {
            num: "01",
            originalId: "PRJ_01",
            title: "VaultLock_Secure_SaaS",
            client: "Security_Systems_v1",
            desc: "VaultLock is engineered as a multi-tenant cloud storage SaaS with strict server-side quota governance and lifecycle-controlled file retention. The core problem addressed is secure, time-bound digital storage with deterministic expiry and zero client-side trust assumptions. An Express.js API orchestrates authentication, storage validation, and metadata persistence through MongoDB using schema-level enforcement. Files stream through Multer into Cloudinary, while a scheduled background worker thread reconciles expiry timestamps and enforces atomic deletion. MPIN authentication is hardened with Bcrypt hashing and OTP-based onboarding, isolating identity verification from storage logic. The architecture scales horizontally through stateless routing, environment-driven configuration, and externalized object storage abstraction. The result is a production-grade SaaS framework with lifecycle automation, secure destructive workflows, and enforceable subscription-tier governance.",
        },
        {
            num: "02",
            originalId: "PRJ_02",
            title: "View_My_View_P2P_Relay",
            client: "Neural_Relay_Labs",
            desc: "View My View establishes a browser-to-browser encrypted media tunnel, eliminating server-side media persistence entirely. The system addresses low-latency visual collaboration through a stateless signaling intermediary and direct WebRTC peer negotiation. Socket.IO manages SDP and ICE metadata exchange, while STUN-assisted traversal enables NAT-resilient peer discovery. Media streams are injected dynamically via getDisplayMedia and getUserMedia, with controlled renegotiation for duplex audio escalation. A viewer-first handshake model prevents blind broadcast states and enforces deterministic session initiation. Scalability is achieved by isolating signaling from transport, allowing horizontal expansion without media bandwidth overhead. The final architecture delivers encrypted, low-latency streaming with minimal infrastructure footprint and high resilience to network variance.",
        },
        {
            num: "03",
            originalId: "PRJ_03",
            title: "Zero_Touch_Vision",
            client: "Biometric_Control_Grip",
            desc: "Zero Touch Vision redefines sterile human-computer interaction through real-time multimodal landmark inference. The system targets touchless control in constrained environments where gesture ambiguity and motion noise must be computationally filtered. MediaPipe pipelines generate 3D hand and iris landmarks, while OpenCV processes frame-level transformations at interactive frame rates. Velocity-based gesture disambiguation logic separates lateral intent from pinch-based zoom operations using dynamic threshold modeling. Head pose estimation via solvePnP augments gaze vectors for spatial cursor snapping and context-aware navigation. The architecture is extensible to hardware-accelerated inference, supporting higher frame throughput and multi-user input streams. It culminates in a deterministic, low-latency control system blending computer vision with real-time UX execution.",
        },
        {
            num: "04",
            originalId: "PRJ_04",
            title: "Premium_Expense_Tracker",
            client: "Fintech_Dashboard_OS",
            desc: "The Premium Expense Tracker is a client-optimized fintech dashboard engineered for precision pacing and temporal spending analysis. It addresses financial velocity modeling by correlating expenditure ratios with real-time monthly progression states. High-frequency Canvas rendering drives category analytics and trend projections without reliance on external visualization libraries. State transitions are governed by deterministic JavaScript logic with structured localStorage persistence and month-archive abstraction. A simulated timeline engine enables forward-state financial modeling and controlled scenario projection. The architecture remains lightweight and horizontally portable, requiring no backend while preserving historical continuity. The result is a responsive financial intelligence interface combining deterministic rendering, algorithmic pacing, and persistent state integrity.",
        },
        {
            num: "05",
            originalId: "PRJ_05",
            title: "Advanced_React_Todo",
            client: "Productivity_Matrix",
            desc: "Advanced React Todo is a state-driven productivity engine built around deterministic UI reactivity and temporal task categorization. It solves deadline fragmentation through structured filtering and real-time task state recomputation. Component-based architecture isolates form logic, task rendering, and mutation controls within a controlled state hierarchy. useEffect-driven synchronization binds local persistence with live clock intervals, ensuring consistent temporal evaluation. Dynamic theme injection leverages conditional rendering and CSS abstraction for runtime aesthetic switching. The modular structure supports scalable feature injection, including API-backed persistence or collaborative extensions. It delivers a clean, reactive task orchestration layer grounded in predictable state transitions and efficient reconciliation.",
        },
        {
            num: "06",
            originalId: "PRJ_06",
            title: "CPU_Performance_Predictor",
            client: "Hardware_Analytics_Node",
            desc: "CPU Performance Predictor models hardware efficiency using structured regression and classification pipelines. The problem space centers on translating heterogeneous processor specifications into a unified predictive performance metric. Feature engineering synthesizes cache hierarchies, clock multipliers, and thread scaling into normalized model inputs. Gradient boosting and ensemble regressors are trained with cross-validation and hyperparameter search for optimized bias-variance balance. Pipeline abstraction ensures consistent preprocessing, encoding, and evaluation without data leakage. The architecture supports scalable retraining across expanded hardware datasets and benchmark integration. The system delivers interpretable performance inference, bridging raw silicon specifications with quantifiable predictive analytics.",
        },
        {
            num: "07",
            originalId: "PRJ_07",
            title: "Galaxy_Cluster_Mass_Analysis",
            client: "Astrophysics_Computing",
            desc: "Galaxy Cluster Mass Analysis computes gravitational mass distribution through redshift dispersion modeling. The objective is to infer unseen dark matter density using spectroscopic SDSS data streams and virial dynamics. SQL-based extraction isolates cluster candidates within angular constraints and redshift windows. Velocity dispersion is derived from redshift transformations, feeding virial theorem mass computation under astrophysical constants. Spatial scaling integrates angular diameter distance conversion for physical radius estimation. The methodology scales across additional clusters through parameterized queries and reproducible computational pipelines. The result is a cosmologically grounded mass inference framework demonstrating dark matter dominance through empirical dispersion analysis.",
        },
        {
            num: "08",
            originalId: "PRJ_08",
            title: "JWST_MIRI_Spectral_Extraction",
            client: "Space_Systems_Research",
            desc: "JWST MIRI Spectral Extraction processes integral field unit cubes to isolate mid-infrared emission signatures. The system targets high-precision flux characterization within dust-obscured active galactic nuclei. FITS cube ingestion via Astropy enables region-based masking and wavelength-resolved spectral averaging. Automated peak detection algorithms identify emission lines through adaptive thresholding and noise-normalized filtering. Flux calibration and wavelength alignment ensure astrophysical accuracy across multiple spectral channels. The pipeline scales across cube batches with deterministic region parsing and reproducible extraction routines. It produces a calibrated emission profile capable of tracing ionized gas dynamics and molecular structure in mid-IR regimes.",
        }
    ];

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl overflow-y-auto overflow-x-hidden custom-scrollbar selection:bg-cyan-500/20"
            ref={containerRef}
            style={{ height: '100vh', width: '100vw' }}
        >
            {/* Header */}
            <div className="sticky top-0 z-[120] flex justify-between items-center px-8 md:px-12 py-6 bg-black/80 backdrop-blur-2xl border-b border-white/5">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black tracking-[0.6em] text-cyan-500 uppercase leading-none mb-1">Archive_Node_Sync_v12.x</span>
                        <div className="flex items-center gap-3">
                            <span className="text-white/20 font-mono text-[8px] tracking-[0.2em] uppercase">// SMOOTH_RELAY_ACTIVE</span>
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                            <span className="text-white/10 font-mono text-[8px] uppercase">Fluid_Transitions</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-3 border border-white/10 bg-white/[0.03] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group rounded-xl shadow-lg"
                >
                    <X className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors" />
                </button>
            </div>

            {/* Content Container - No Gap, Fluid Relay */}
            <div className="max-w-6xl mx-auto px-6 relative">
                {projects.map((project, index) => (
                    <SectionWrapper
                        key={project.num}
                        project={project}
                        index={index}
                        containerRef={containerRef}
                    />
                ))}
            </div>

            {/* Final Footer Spacer */}
            <div className="h-[100vh]" />
        </motion.div>
    );
};

const SectionWrapper = ({ project, index, containerRef }) => {
    const sectionRef = useRef(null);

    // Track scroll specifically for THIS section
    // offset: ["start end", "end start"] ensures we track from the moment it enters viewport
    const { scrollYProgress } = useScroll({
        container: containerRef,
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    return (
        <div ref={sectionRef} className="h-[120vh] relative w-full mb-[-20vh] z-10">
            <ProjectCard
                project={project}
                scrollYProgress={scrollYProgress}
                index={index}
            />
        </div>
    );
};

const ProjectCard = ({ project, scrollYProgress, index }) => {
    // Opacity: Appears from bottom (0.1 to 0.3), Stays solid (0.3 to 0.7), Moves up (0.7 to 0.9)
    const opacity = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.7, 0.9],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.7, 0.9],
        [0.95, 1, 1, 0.95]
    );

    const y = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.7, 0.9],
        ["100px", "0px", "0px", "-100px"]
    );

    const blur = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.7, 0.9],
        ["10px", "0px", "0px", "10px"]
    );

    return (
        <motion.div
            style={{
                opacity,
                scale,
                y,
                filter: `blur(${blur})`,
                position: 'sticky',
                top: '15vh',
                zIndex: 10 + index
            }}
            className="w-full pointer-events-none"
        >
            <motion.div
                className="bg-[#0b0b0b]/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_80px_200px_-50px_rgba(34,211,238,0.1)] flex flex-col items-center justify-center p-12 md:p-24 relative group pointer-events-auto min-h-[60vh] max-w-5xl mx-auto"
            >
                {/* Visual Accent */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

                <div className="max-w-4xl w-full text-center space-y-12">
                    <div className="flex flex-col items-center gap-6">
                        <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full shadow-inner ring-1 ring-white/5">
                            <span className="text-[12px] font-mono text-cyan-400 uppercase tracking-[0.4em] font-bold">{project.originalId}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.8em]">{project.client}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight uppercase italic select-none">
                        {project.title.replace(/_/g, ' ')}
                    </h2>

                    <p className="text-white/40 text-lg md:text-xl lg:text-xl font-mono leading-relaxed text-center mx-auto max-w-3xl px-8 border-l border-white/10">
                        {project.desc}
                    </p>
                </div>

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </motion.div>
        </motion.div>
    );
};

export default DetailedProjects;
