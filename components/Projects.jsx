"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useFirestoreDoc } from "@/lib/hooks/useFirestoreDoc";

export default function Projects() {
    const { data: projectsData, loading } = useFirestoreDoc("portfolio_projects");

    if (loading || !projectsData) {
        return <section id="projects" className="section-padding"><div className="container-width animate-pulse h-screen bg-slate-800/30 rounded-3xl"></div></section>;
    }

    const projects = projectsData.items || [];

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

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="section-padding relative bg-slate-900/60">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                        Featured <span className="text-accent">Projects</span>
                    </h2>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={projectVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="glass-panel group flex flex-col h-full overflow-hidden rounded-[2rem] border-slate-700/30 hover:border-sky-500/30 transition-all duration-500 shadow-2xl shadow-sky-500/5 group"
                            >
                                {/* Project Image Placeholder */}
                                <div className="h-56 w-full bg-slate-800/80 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform duration-700">
                                        <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Preview</span>
                                        </div>
                                    </div>
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow bg-slate-900/40">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-4">
                                            {project.links.github && (
                                                <Link href={project.links.github} target="_blank" aria-label="View Source Code" className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all">
                                                    <Github className="w-5 h-5" />
                                                </Link>
                                            )}
                                            {project.links.playStore && (
                                                <Link href={project.links.playStore} target="_blank" aria-label="View on Play Store" className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all">
                                                    <ExternalLink className="w-5 h-5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                        {project.description}
                                    </p>

                                    {project.impact && (
                                        <div className="mb-6 pt-4 border-t border-slate-800/50">
                                            <div className="flex flex-col gap-2">
                                                {project.impact.slice(0, 2).map((item, i) => (
                                                    <div key={i} className="text-[11px] text-sky-400 font-medium flex items-center gap-2 bg-sky-500/5 px-3 py-1.5 rounded-full border border-sky-500/10">
                                                        <span className="w-1 h-1 rounded-full bg-sky-400 animate-pulse" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-[11px] font-bold text-slate-400 bg-slate-800/50 rounded-lg border border-slate-700/50 group-hover:border-sky-500/20 group-hover:text-slate-300 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
