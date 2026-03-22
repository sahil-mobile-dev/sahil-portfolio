"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, MapPin } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useFirestoreDoc } from "@/lib/hooks/useFirestoreDoc";

export default function Contact() {
    const { data: contactInfo } = useFirestoreDoc("portfolio_contact_info", "data");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: serverTimestamp(),
            });
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-slate-900/40">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                        Get in <span className="text-accent">Touch</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white">Let&apos;s Connect</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    I&apos;m currently open to full-time opportunities and would love to hear about how I can contribute to your team.
                                    Feel free to reach out for a collaboration or just to say hi!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <ContactItem
                                    icon={<Mail className="w-5 h-5" />}
                                    label="Email"
                                    value={contactInfo?.email || "sahil.mobiledev@gmail.com"}
                                    href={`mailto:${contactInfo?.email || "sahil.mobiledev@gmail.com"}`}
                                    variants={itemVariants}
                                />
                                <ContactItem
                                    icon={<Phone className="w-5 h-5" />}
                                    label="Phone"
                                    value={contactInfo?.phone || "+91 70168 78751"}
                                    href={`tel:${contactInfo?.phone?.replace(/\s/g, '') || "+917016878751"}`}
                                    variants={itemVariants}
                                />
                                <ContactItem
                                    icon={<Linkedin className="w-5 h-5" />}
                                    label="LinkedIn"
                                    value={contactInfo?.linkedin || "sahil-chudasama"}
                                    href={`https://linkedin.com/in/${contactInfo?.linkedin || "sahil-chudasama"}`}
                                    variants={itemVariants}
                                />
                                <ContactItem
                                    icon={<MapPin className="w-5 h-5" />}
                                    label="Location"
                                    value={contactInfo?.location || "Ahmedabad, India"}
                                    variants={itemVariants}
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={handleSubmit} 
                            className="glass-card p-10 rounded-[2.5rem] space-y-8 bg-slate-900/40"
                        >
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all duration-300 shadow-inner"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all duration-300 shadow-inner"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all duration-300 shadow-inner resize-none"
                                        placeholder="Tell me more about the opportunity..."
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-5 px-8 rounded-2xl bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 transition-all shadow-xl shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                            >
                                {status === "loading" ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                                        Sending...
                                    </div>
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : status === "error" ? (
                                    "Error Sending"
                                ) : (
                                    <>
                                        Send Message <Send className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, href, variants }) {
    const content = (
        <motion.div 
            variants={variants}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
            className="flex items-center gap-6 p-6 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-sky-500/30 transition-all group shadow-lg"
        >
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-sky-400 group-hover:text-slate-900 group-hover:bg-sky-500 transition-all duration-300 shadow-inner group-hover:scale-110">
                {icon}
            </div>
            <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">{label}</p>
                <p className="text-slate-200 font-semibold text-lg">{value}</p>
            </div>
        </motion.div>
    );

    return href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
            {content}
        </a>
    ) : (
        content
    );
}
