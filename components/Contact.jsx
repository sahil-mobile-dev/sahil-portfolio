"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Linkedin, Github, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "Mobile App",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: serverTimestamp(),
            });
            setStatus("success");
            setFormData({ name: "", email: "", company: "", service: "Mobile App", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact" className="section-padding bg-black">
            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left: Contact Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                            >
                                Let's Build
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[0.9]"
                            >
                                Ready to <br /> <span className="text-gradient">Innovate?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-400 max-w-md mb-12 leading-relaxed"
                            >
                                Have a project in mind? Let's discuss how we can help your business grow with modern digital solutions.
                            </motion.p>
                            
                            <div className="flex flex-col gap-6">
                                <ContactMethod 
                                    icon={<Mail size={20} />} 
                                    label="Email Us" 
                                    value="sahil.mobiledev@gmail.com" 
                                    href="mailto:sahil.mobiledev@gmail.com" 
                                />
                                <ContactMethod 
                                    icon={<MessageSquare size={20} />} 
                                    label="WhatsApp" 
                                    value="+91 70168 78751" 
                                    href="https://wa.me/917016878751" 
                                />
                            </div>
                        </div>

                        <div className="mt-20">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">Follow Our Journey</span>
                            <div className="flex gap-4">
                                <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com/in/sahil-chudasama" />
                                <SocialIcon icon={<Twitter size={20} />} href="#" />
                                <SocialIcon icon={<Instagram size={20} />} href="#" />
                                <SocialIcon icon={<Github size={20} />} href="https://github.com/sahil-mobile-dev" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-1 w-full rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent"
                    >
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-slate-950 p-10 md:p-12 rounded-[2.9rem] flex flex-col gap-8 h-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput 
                                    label="Full Name" 
                                    placeholder="Sahil Chudasama" 
                                    value={formData.name}
                                    onChange={(val) => setFormData({...formData, name: val})}
                                />
                                <FormInput 
                                    label="Email Address" 
                                    placeholder="sahil@example.com" 
                                    type="email"
                                    value={formData.email}
                                    onChange={(val) => setFormData({...formData, email: val})}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput 
                                    label="Company Name" 
                                    placeholder="Startup Inc." 
                                    value={formData.company}
                                    onChange={(val) => setFormData({...formData, company: val})}
                                />
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service Needed</label>
                                    <select 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-sky-500 outline-none transition-all appearance-none"
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                    >
                                        <option value="Mobile App">Mobile App Development</option>
                                        <option value="Website">Website Development</option>
                                        <option value="UI/UX">UI/UX Design</option>
                                        <option value="AI">AI Integration</option>
                                        <option value="Branding">Brand Identity</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                                <textarea 
                                    placeholder="Tell us about your project..." 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white h-40 focus:border-sky-500 outline-none transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-6 rounded-2xl bg-white text-slate-950 font-black text-lg hover:bg-sky-400 transition-all duration-300 flex items-center justify-center gap-4 group disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : "Submit Inquiry"}
                                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactMethod({ icon, label, value, href }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-300">
                {icon}
            </div>
            <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">{label}</span>
                <span className="text-white font-bold group-hover:text-sky-400 transition-colors">{value}</span>
            </div>
        </a>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a href={href} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
            {icon}
        </a>
    );
}

function FormInput({ label, placeholder, type = "text", value, onChange }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-sky-500 outline-none transition-all"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

