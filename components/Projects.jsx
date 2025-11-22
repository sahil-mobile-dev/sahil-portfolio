"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce App",
        description: "A full-featured shopping app built with Flutter and Firebase. Includes user authentication, cart management, and payment gateway integration.",
        tech: ["Flutter", "Firebase", "Stripe"],
        github: "https://github.com",
        live: "#",
        image: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
        title: "Task Management Tool",
        description: "Productivity app for managing daily tasks and projects. Features include drag-and-drop interface, dark mode, and cloud sync.",
        tech: ["Flutter", "Hive", "Provider"],
        github: "https://github.com",
        live: "#",
        image: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for tracking social media performance. Visualizes data using charts and graphs.",
        tech: ["React", "Tailwind", "Chart.js"],
        github: "https://github.com",
        live: "#",
        image: "bg-gradient-to-br from-orange-500 to-red-600",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work demonstrating my technical capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group hover:-translate-y-2"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 w-full ${project.image} relative group-hover:opacity-90 transition-opacity`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm gap-4">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                                    >
                                        <Github className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
