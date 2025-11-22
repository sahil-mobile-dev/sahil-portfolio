"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Vyaya",
        description: "A personal finance management app with offline data encryption and cloud backup. Features secure local storage and seamless synchronization.",
        tags: ["Flutter", "Firebase", "Encryption", "Offline-First"],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.wappnet.vyaya"
        },
        icon: <Smartphone className="w-6 h-6 text-sky-400" />
    },
    {
        title: "Guru AI",
        description: "AI-powered educational tool generating culturally relevant lessons, transforming textbook images into interactive worksheets.",
        tags: ["Flutter", "GenAI", "Education", "Hackathon Winner"],
        links: {},
        icon: <Zap className="w-6 h-6 text-indigo-400" />
    },
    {
        title: "Motobase",
        description: "A cross-platform social app for bikers & car communities with real-time messaging, media handling, and social features.",
        tags: ["Flutter", "Social", "Real-time", "Media"],
        links: {},
        icon: <Layers className="w-6 h-6 text-sky-400" />
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-8 rounded-2xl hover:border-sky-500/30 transition-all group flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-sky-500/30 transition-colors">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.links.github && (
                                            <Link href={project.links.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        )}
                                        {project.links.playStore && (
                                            <Link href={project.links.playStore} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 rounded-md border border-slate-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
