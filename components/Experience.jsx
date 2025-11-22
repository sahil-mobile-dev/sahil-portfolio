"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Senior Flutter Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description: "Leading a team of mobile developers, architecting scalable apps, and implementing CI/CD pipelines.",
    },
    {
        role: "Mobile App Developer",
        company: "Creative Agency",
        period: "2021 - 2023",
        description: "Developed cross-platform mobile applications for various clients using Flutter and Firebase.",
    },
    {
        role: "Junior Developer",
        company: "StartUp Hub",
        period: "2020 - 2021",
        description: "Assisted in frontend development and bug fixing for mobile and web applications.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My professional journey and career milestones.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-700 last:border-l-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-900" />

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-cyan-400" />
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-slate-500 font-medium bg-slate-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
