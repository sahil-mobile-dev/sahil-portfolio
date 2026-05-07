"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Years Experience", value: "5+" },
    { label: "Happy Clients", value: "40+" },
    { label: "Technologies Used", value: "20+" },
];

const companies = [
    "TechFlow", "Visionary", "Nexus AI", "Growthly", "CloudNine", "Apex Studio"
];

export default function TrustSection() {
    return (
        <section className="py-20 bg-black/50 border-y border-white/5 overflow-hidden">
            <div className="container-width">
                <div className="flex flex-col gap-16">
                    {/* Logo Cloud */}
                    <div className="flex flex-col items-center gap-10">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Trusted by Global Innovators</span>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            {companies.map((company) => (
                                <span key={company} className="text-xl md:text-2xl font-black text-white tracking-tighter">
                                    {company}<span className="text-sky-500">.</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center md:items-start"
                            >
                                <span className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</span>
                                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
