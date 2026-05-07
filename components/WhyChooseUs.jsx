"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Headphones, Cpu, Target } from "lucide-react";

const features = [
    {
        title: "Fast Delivery",
        description: "We optimize our workflows to deliver high-quality products in record time without compromising quality.",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
    {
        title: "Modern Design",
        description: "We stay ahead of trends to ensure your brand looks premium, clean, and state-of-the-art.",
        icon: <Shield className="w-6 h-6 text-sky-400" />,
    },
    {
        title: "Scalable Solutions",
        description: "Our architectures are built to grow with your business, from MVP to enterprise-level platforms.",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    },
    {
        title: "End-to-End Support",
        description: "We don't just launch and leave. We provide continuous maintenance and growth strategies.",
        icon: <Headphones className="w-6 h-6 text-violet-400" />,
    },
    {
        title: "AI-Powered Innovation",
        description: "We integrate the latest AI technologies to give your business a competitive edge in the digital age.",
        icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    },
    {
        title: "Business-Focused",
        description: "We prioritize your ROI and business objectives in every design and development decision.",
        icon: <Target className="w-6 h-6 text-orange-400" />,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-black/50">
            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                        >
                            The Studio Edge
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8"
                        >
                            Why Partner <br /> <span className="text-gradient">With Us?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg leading-relaxed mb-12"
                        >
                            We combine creative artistry with technical excellence to build digital products that don't just work—they wow.
                        </motion.p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                <span className="text-3xl font-black text-white block mb-1">99%</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Uptime Rate</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                <span className="text-3xl font-black text-white block mb-1">24h</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Support Response</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-sky-500/30 transition-all duration-500 group"
                            >
                                <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
