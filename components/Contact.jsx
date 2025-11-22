"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, MapPin } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
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

    return (
        <section id="contact" className="section-padding relative">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold text-slate-100">Let&apos;s Connect</h3>
                            <p className="text-slate-400 leading-relaxed">
                                I&apos;m currently available for freelance projects and open to full-time opportunities.
                                If you have a project in mind or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-6">
                                <ContactItem
                                    icon={<Mail className="w-5 h-5" />}
                                    label="Email"
                                    value="sahil.mobiledev@gmail.com"
                                    href="mailto:sahil.mobiledev@gmail.com"
                                />
                                <ContactItem
                                    icon={<Phone className="w-5 h-5" />}
                                    label="Phone"
                                    value="+91 70168 78751"
                                    href="tel:+917016878751"
                                />
                                <ContactItem
                                    icon={<Linkedin className="w-5 h-5" />}
                                    label="LinkedIn"
                                    value="sahil-chudasama"
                                    href="https://linkedin.com/in/sahil-chudasama"
                                />
                                <ContactItem
                                    icon={<MapPin className="w-5 h-5" />}
                                    label="Location"
                                    value="Ahmedabad, India"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    "Sending..."
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : status === "error" ? (
                                    "Error Sending"
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, href }) {
    const content = (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors group">
            <div className="p-2 rounded-lg bg-slate-900 text-sky-400 group-hover:text-white group-hover:bg-sky-500 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                <p className="text-slate-200 font-medium">{value}</p>
            </div>
        </div>
    );

    return href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
            {content}
        </a>
    ) : (
        content
    );
}
