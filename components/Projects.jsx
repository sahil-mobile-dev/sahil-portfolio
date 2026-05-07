"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Box, Code2, Rocket } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "FoodFlow Express",
        category: "Mobile App Development",
        description: "A premium food delivery solution for local restaurants with real-time tracking and AI-powered recommendations.",
        problem: "Inefficient delivery routing and low customer engagement.",
        solution: "Implemented a custom Flutter app with optimized GPS tracking and personalized UI.",
        impact: "40% increase in order efficiency.",
        tech: ["Flutter", "Firebase", "Google Maps API"],
        image: "/projects/food.png",
        color: "from-orange-500 to-red-600"
    },
    {
        title: "LuxeCommerce",
        category: "E-commerce Platform",
        description: "High-end fashion marketplace with immersive shopping experiences and seamless payments.",
        problem: "Slow loading times on mobile leading to high cart abandonment.",
        solution: "Built a headless commerce solution using Next.js and Stripe.",
        impact: "25% boost in mobile conversion rates.",
        tech: ["Next.js", "Stripe", "Supabase"],
        image: "/projects/ecommerce.png",
        color: "from-sky-500 to-indigo-600"
    },
    {
        title: "FitPulse AI",
        category: "Fitness Tracking App",
        description: "AI-driven fitness coach that analyzes user movements and provides real-time form correction.",
        problem: "Users struggling with correct exercise form at home.",
        solution: "Integrated TensorFlow Lite for real-time motion analysis.",
        impact: "50,000+ active users in the first month.",
        tech: ["Flutter", "TensorFlow", "Node.js"],
        image: "/projects/fitness.png",
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "BizDash Pro",
        category: "Business Dashboard",
        description: "All-in-one administrative suite for managing sales, inventory, and customer relationships.",
        problem: "Fragmented data across multiple disconnected platforms.",
        solution: "Centralized CRM and ERP system with real-time data syncing.",
        impact: "30% reduction in operational costs.",
        tech: ["React", "AWS", "MongoDB"],
        image: "/projects/dashboard.png",
        color: "from-violet-500 to-purple-600"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-black/50">
            <div className="container-width">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none"
                        >
                            Selected <span className="text-gradient">Work</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-400 max-w-sm"
                    >
                        We deliver high-impact digital products that combine stunning design with cutting-edge technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col"
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden mb-8 bg-slate-900 border border-white/5 group-hover:border-white/10 transition-colors">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    {/* Mockup Placeholder */}
                                    <div className="w-full h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10" />
                                        <div className="p-6 flex flex-col gap-4">
                                            <div className="w-1/2 h-4 bg-white/10 rounded-full" />
                                            <div className="w-full h-32 bg-white/5 rounded-xl" />
                                            <div className="flex gap-2">
                                                <div className="w-1/4 h-12 bg-white/5 rounded-xl" />
                                                <div className="w-3/4 h-12 bg-white/5 rounded-xl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                    <Link
                                        href="#"
                                        className="w-20 h-20 rounded-full bg-white text-slate-950 flex items-center justify-center group/btn hover:scale-110 transition-transform duration-300"
                                    >
                                        <ArrowUpRight className="w-8 h-8 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 block">{project.category}</span>
                                        <h3 className="text-3xl font-black text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-3">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] font-bold text-slate-500 border border-white/5 px-2 py-1 rounded-md uppercase">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-400 leading-relaxed max-w-lg">{project.description}</p>
                                
                                <div className="grid grid-cols-2 gap-6 mt-4 pt-6 border-t border-white/5">
                                    <div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Problem</span>
                                        <p className="text-xs text-slate-300 italic">"{project.problem}"</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Impact</span>
                                        <p className="text-xs text-sky-400 font-bold">{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-20 flex justify-center">
                    <Link
                        href="#"
                        className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-3 group"
                    >
                        See All Case Studies
                        <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

