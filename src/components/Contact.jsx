import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import TextReveal from './TextReveal';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [errorMessage, setErrorMessage] = useState('');
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (value) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: "Portfolio Site"
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage(err.message);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-32 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
                    {/* Contact Info */}
                    <div className="bg-[#050505] p-12 lg:p-20">
                        <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase mb-4 block">Communication_Layer</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter-extra mb-12 text-white">
                            <TextReveal text="Get in" className="mr-4" />
                            <TextReveal text="Touch." className="opacity-60" />
                        </h2>

                        <div className="space-y-12">
                            {[
                                { icon: Mail, label: "Neural_Link", value: "sraghavan4747@gmail.com", href: "mailto:sraghavan4747@gmail.com" },
                                { icon: Linkedin, label: "Professional_Grid", value: "linkedin.com/in/raghavan-s", href: "https://linkedin.com/in/raghavan-s-b6b37a31b/" },
                                { icon: Github, label: "Ghost_Repository", value: "github.com/RAGHAVAN7777", href: "https://github.com/RAGHAVAN7777" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    onClick={item.label === "Neural_Link" ? () => handleEmailClick(item.value) : undefined}
                                    className="flex items-center gap-8 group/item pointer-events-auto cursor-pointer relative"
                                    whileHover={{ x: 10, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    {item.label !== "Neural_Link" ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 z-10"
                                        />
                                    ) : null}

                                    <div className="p-4 border border-white/10 bg-white/[0.05] group-hover/item:border-cyan-500 transition-colors">
                                        <item.icon className="w-5 h-5 text-white/60 group-hover/item:text-cyan-400 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                        <p className="text-sm font-black uppercase tracking-tight text-white group-hover/item:text-cyan-400 transition-colors flex items-center gap-3">
                                            {item.value}
                                            {item.label === "Neural_Link" && copied && (
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="text-[10px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full"
                                                >
                                                    Copied
                                                </motion.span>
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-[#050505] p-12 lg:p-20 border-l border-white/5 relative">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Input.Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-cyan-500 outline-none transition-colors text-white font-mono text-sm placeholder:text-white/20"
                                        placeholder="Raghavan S"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Input.Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-cyan-500 outline-none transition-colors text-white font-mono text-sm placeholder:text-white/20"
                                        placeholder="raghavan@tech.dev"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Input.Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-cyan-500 outline-none transition-colors text-white font-mono text-sm placeholder:text-white/20 resize-none"
                                    placeholder="Initiating message sequence..."
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    disabled={status === 'submitting'}
                                    className="group relative px-12 py-5 bg-white text-black text-xs font-black tracking-widest uppercase hover:bg-white/90 transition-all active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            'Send Sequence'
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] uppercase tracking-wider"
                                        >
                                            <CheckCircle2 className="w-4 h-4" />
                                            Sequence sent successfully. Neural link established.
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-rose-400 font-mono text-[10px] uppercase tracking-wider"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            Error: {errorMessage || 'Transmission failed. Try again.'}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
