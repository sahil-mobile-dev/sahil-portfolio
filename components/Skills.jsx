"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Flutter", category: "Mobile" },
    { name: "Dart", category: "Language" },
    { name: "Firebase", category: "Backend" },
    { name: "React / Next.js", category: "Web" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "Figma", category: "Design" },
    { name: "Git / GitHub", category: "Tools" },
    { name: "REST APIs", category: "Backend" },
    { name: "AI Integrations", category: "Emerging Tech" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit that enables me to build end-to-end solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors group text-center"
                        >
                            <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                {skill.name}
                            </h3>
                            <p className="text-sm text-slate-500 mt-2">{skill.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
