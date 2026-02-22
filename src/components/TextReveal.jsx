import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TextReveal = ({ text, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Split text into words to animate them individually
    const words = text.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay
            }
        }
    };

    const wordVariants = {
        hidden: { y: "110%", opacity: 0, transition: { duration: 0 } },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] // Custom quintic ease-out for premium feel
            }
        }
    };

    return (
        <motion.span
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`inline-flex flex-wrap ${className}`}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.3em] py-[0.1em] -my-[0.1em]">
                    <motion.span
                        variants={wordVariants}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
