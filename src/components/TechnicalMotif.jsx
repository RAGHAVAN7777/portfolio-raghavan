import { motion } from 'framer-motion';

const TechnicalMotif = ({ type = 'bracket', className = '' }) => {
    if (type === 'bracket') {
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
                <motion.path
                    d="M1 10V1H10"
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </svg>
        );
    }

    if (type === 'crosshair') {
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
                <motion.path
                    d="M20 0V40M0 20H40"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <circle cx="20" cy="20" r="2" fill="currentColor" fillOpacity="0.5" />
            </svg>
        );
    }

    if (type === 'corner-detail') {
        return (
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className={className}>
                <motion.path
                    d="M0 1H100M1 0V100"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.1"
                />
                <motion.rect
                    x="0" y="0" width="4" height="4"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                />
            </svg>
        );
    }

    return null;
};

export default TechnicalMotif;
