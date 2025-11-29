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
        impact: [
            "1,000+ Active Users",
            "4.8/5 Star Rating",
            "Secure Offline Architecture"
        ]
    },
    {
        title: "Guru AI",
        description: "AI-powered educational tool generating culturally relevant lessons, transforming textbook images into interactive worksheets.",
        tags: ["Flutter", "GenAI", "Education", "Hackathon Winner"],
        links: {},
        impact: [
            "Winner - Wappnet Hackathon",
            "Reduced lesson planning by 80%",
            "Integrated Gemini API"
        ]
    },
    {
        title: "Motobase",
        description: "A cross-platform social app for bikers & car communities with real-time messaging, media handling, and social features.",
        tags: ["Flutter", "Social", "Real-time", "Media"],
        links: {},
        impact: [
            "Real-time Chat & Feeds",
            "Cross-Platform (iOS/Android)",
            "Scalable Firebase Backend"
        ]
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
                                className="glass-panel rounded-2xl hover:border-sky-500/30 transition-all group flex flex-col h-full overflow-hidden"
                            >
                                {/* Project Image Placeholder */}
                                <div className="h-48 w-full bg-slate-800/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-indigo-500/20" />
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                        <span className="text-sm font-medium">Project Preview</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex gap-3">
                                            {project.links.github && (
                                                <Link href={project.links.github} target="_blank" aria-label="View Source Code" className="text-slate-400 hover:text-white transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </Link>
                                            )}
                                            {project.links.playStore && (
                                                <Link href={project.links.playStore} target="_blank" aria-label="View on Play Store" className="text-slate-400 hover:text-white transition-colors">
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

                                    {project.impact && (
                                        <div className="mb-6 pt-4 border-t border-slate-800/50">
                                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Impact</h4>
                                            <ul className="space-y-1">
                                                {project.impact.map((item, i) => (
                                                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-sky-400" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
