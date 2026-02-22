import { motion } from 'framer-motion';

const SectionDivider = () => {
    return (
        <div className="container mx-auto px-6">
            <div className="relative h-px w-full bg-white/5">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                />
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                />
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default SectionDivider;
