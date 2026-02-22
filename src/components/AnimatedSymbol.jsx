import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedSymbol = ({ className }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
            const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const pathData = "M 50,10 L 90,40 L 75,90 L 25,90 L 10,40 Z M 50,25 L 75,45 L 65,75 L 35,75 L 25,45 Z";
    const ribbonPath = "M 300,100 L 500,250 L 420,500 L 180,500 L 100,250 Z";

    const pathVariants = {
        initial: { pathLength: 0, opacity: 0 },
        animate: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, ease: "easeInOut", delay: i * 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 1 },
                opacity: { duration: 0.5, delay: i * 1.5 }
            }
        }),
    };

    const colors = ["#22d3ee", "#3b82f6", "#ec4899"];

    return (
        <div className={`relative ${className}`} style={{ perspective: 1000 }}>
            <motion.svg
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                animate={{
                    rotateX: mousePos.y * -15,
                    rotateY: mousePos.x * 15,
                    scale: 1 + Math.abs(mousePos.x * mousePos.y) * 0.1
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
                {/* Layered paths */}
                {colors.map((color, index) => (
                    <motion.path
                        key={color}
                        d="M 300,50 L 538,223 L 447,506 L 153,506 L 62,223 Z"
                        stroke={color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.6}
                        custom={index}
                        variants={pathVariants}
                        initial="initial"
                        animate="animate"
                    />
                ))}

                {/* Technical Coordinate Markers */}
                <line x1="300" y1="20" x2="300" y2="80" stroke="white" strokeWidth="0.5" opacity="0.1" />
                <line x1="20" y1="300" x2="80" y2="300" stroke="white" strokeWidth="0.5" opacity="0.1" />
                <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="0.5" opacity="0.05" strokeDasharray="4 8" />

                <text x="310" y="40" className="text-[10px] font-mono fill-white opacity-10 uppercase tracking-widest">pos_y: 50.00</text>
                <text x="20" y="315" className="text-[10px] font-mono fill-white opacity-10 uppercase tracking-widest rotate-90 origin-left">pos_x: 223.00</text>
            </motion.svg>
        </div>
    );
};

export default AnimatedSymbol;
