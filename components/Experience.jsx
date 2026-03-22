"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { useFirestoreDoc } from "@/lib/hooks/useFirestoreDoc";

export default function Experience() {
    const { data: experienceData, loading } = useFirestoreDoc("portfolio_experience");

    if (loading || !experienceData) {
        return <section id="experience" className="section-padding"><div className="container-width animate-pulse h-screen bg-slate-800/30 rounded-3xl"></div></section>;
    }

    const experiences = experienceData.items || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="experience" className="section-padding relative overflow-hidden bg-slate-900/40">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                        Work <span className="text-accent">Experience</span>
                    </h2>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline Line */}
                        <div className="absolute left-[-2px] md:left-[50%] md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-800/50" />

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            {experiences.map((exp, index) => (
                                <ExperienceItem key={index} exp={exp} index={index} variants={itemVariants} />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ExperienceItem({ exp, index, variants }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            variants={variants}
            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-[-6px] md:left-[50%] md:-translate-x-1/2 top-10 md:top-10 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-slate-950 z-20" />

            {/* Content Card */}
            <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="glass-panel p-8 rounded-3xl border-slate-700/30 hover:border-sky-500/30 transition-all duration-300 shadow-xl group"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800/80 flex items-center justify-center text-xl font-bold text-sky-400 border border-slate-700 group-hover:bg-slate-700 group-hover:scale-110 transition-all duration-300 shadow-inner">
                            {exp.company.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                            <p className="text-sky-400 font-semibold text-sm">{exp.company}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-6 bg-slate-900/50 px-3 py-1.5 rounded-full w-fit border border-slate-800">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                    </div>

                    <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0 animate-pulse" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Empty space for the other side on desktop */}
            <div className="hidden md:block w-[45%]" />
        </motion.div>
    );
}
