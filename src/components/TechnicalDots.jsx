import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const TechnicalDots = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 300 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Generate a fixed set of dots
    const dots = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.2 + 0.1,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute bg-cyan-500 rounded-full"
                    style={{
                        left: `${dot.initialX}%`,
                        top: `${dot.initialY}%`,
                        width: dot.size,
                        height: dot.size,
                        opacity: dot.opacity,
                        x: useSpring(useMotionValue(0), springConfig),
                        y: useSpring(useMotionValue(0), springConfig),
                    }}
                    animate={{
                        x: (springX.get() / window.innerWidth - 0.5) * 50,
                        y: (springY.get() / window.innerHeight - 0.5) * 50,
                    }}
                />
            ))}
        </div>
    );
};

export default TechnicalDots;
