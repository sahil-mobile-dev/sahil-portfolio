"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Mobile Development",
        skills: [
            "Flutter", "Dart", "Android", "iOS", "Windows",
            "Responsive UI", "State Management (GetX, BLoC, RiverPod)",
            "MVVM", "Layered Architecture", "In-App Purchases",
            "Stripe Integration", "Firebase Services"
        ]
    },
    {
        title: "AI & Low-Code",
        skills: [
            "AI-Assisted Development", "Low-Code Platforms", "Vibe Coding",
            "Rocket (Dhiwise)", "FlutterFlow", "Lovable", "Vercel",
            "Google Stitch", "Firebase Studio"
        ]
    },
    {
        title: "Backend & Cloud",
        skills: [
            "Firebase", "REST APIs", "Google Cloud APIs",
            "Data Encryption & Decryption"
        ]
    },
    {
        title: "Tools",
        skills: [
            "Android Studio", "VS Code", "Flutter DevTools",
            "Git", "GitHub", "GitLab", "Fork", "Trello"
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-8 rounded-2xl hover:border-sky-500/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-4">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:text-sky-400 hover:border-sky-500/30 transition-all cursor-default"
                                        >
                                            {skill}
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
