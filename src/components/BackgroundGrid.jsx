import { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const BackgroundGrid = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 300 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [2, -2]);
    const rotateY = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-2, 2]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
            <motion.div
                className="absolute inset-[-10%] opacity-[0.15]"
                style={{
                    perspective: 1000,
                    rotateX,
                    rotateY,
                    backgroundSize: '40px 40px',
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
                }}
            />

            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
        </div>
    );
};

export default BackgroundGrid;
