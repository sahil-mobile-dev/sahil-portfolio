"use client";

import { motion } from "framer-motion";
import { Linkedin, ExternalLink, Award } from "lucide-react";
import Link from "next/link";

const featuredPosts = [
    {
        title: "Google Cloud & Hack2Skill Agentic AI Day 2025",
        date: "2025",
        description: "Participated in the Agentic AI Day in Bengaluru. Built AI-driven solutions under tight deadlines and got hands-on experience with AI integration & rapid deployment.",
        link: "https://www.linkedin.com/posts/sahil-chudasama_agenticai-hack2skill-googlecloud-activity-7355998773044482048-Oela",
        tags: ["Agentic AI", "Google Cloud", "Hackathon"]
    },
    {
        title: "Winner - Wappnet Systems Hackathon 2023",
        date: "2023",
        description: "Built a superhero-style real-time avatar swap app in 36 hours. Won the hackathon for creativity and rapid prototyping.",
        link: "https://www.linkedin.com/posts/sahil-chudasama_ai-hackathon2023-hackathon-activity-7103276179041771520-QPYK",
        tags: ["Winner", "AI", "Flutter"]
    }
];

export default function LinkedInPosts() {
    return (
        <section id="linkedin" className="section-padding relative bg-slate-900/50">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                            <Linkedin className="w-4 h-4" />
                            <span>Featured Updates</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center">
                            LinkedIn <span className="text-gradient">Activity</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {featuredPosts.map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-all group flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {post.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="https://in.linkedin.com/in/sahil-chudasama"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-medium"
                        >
                            View all posts on LinkedIn <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
