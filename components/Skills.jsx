"use client";

import { motion } from "framer-motion";
import { useFirestoreDoc } from "@/lib/hooks/useFirestoreDoc";

export default function Skills() {
    const { data: skillsData, loading } = useFirestoreDoc("portfolio_skills");

    if (loading || !skillsData) {
        return <section id="skills" className="section-padding"><div className="container-width animate-pulse h-96 bg-slate-800/30 rounded-3xl"></div></section>;
    }

    const skillCategories = skillsData.categories || [];

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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="skills" className="section-padding relative bg-slate-900/40">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                        Technical <span className="text-accent">Skills</span>
                    </h2>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="glass-panel p-8 rounded-[2rem] border-slate-700/30 hover:border-sky-500/30 transition-all duration-500 shadow-xl shadow-sky-500/5 group"
                            >
                                <h3 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-sky-500 rounded-full group-hover:scale-y-125 transition-transform duration-300"></span>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ 
                                                scale: 1.1, 
                                                backgroundColor: "rgba(56, 189, 248, 0.15)",
                                                borderColor: "rgba(56, 189, 248, 0.4)" 
                                            }}
                                            className="px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:text-sky-400 transition-all cursor-default shadow-md"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
