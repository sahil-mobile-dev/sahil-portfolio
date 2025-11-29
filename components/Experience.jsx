"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Qurious Click",
        role: "Flutter Developer",
        period: "March 2024 – Present",
        description: [
            "Designed & developed end-to-end Flutter apps with active users and subscription models",
            "Implemented In-App Purchases and Stripe for both Android & iOS",
            "Built major features: Chatbot (virtual therapist), Map integrations, MethodChannel, offline handling",
            "Enterprise iOS distribution"
        ]
    },
    {
        company: "Wappnet Systems Pvt. Ltd.",
        role: "Associate Software Developer",
        period: "January 2023 – January 2024",
        description: [
            "Developed and published cross-platform personal finance app (Vyaya)",
            "Integrated Firebase Authentication, Firestore, Messaging, and Functions",
            "Created ML prototype using TensorFlow Lite & Google ML Kit",
            "Used FlutterFlow for rapid prototypes"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Work <span className="text-gradient">Experience</span>
                    </h2>

                    <div className="max-w-3xl mx-auto relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-800" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8 md:pl-24"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-4px] md:left-[28px] top-0 w-2 h-2 rounded-full bg-sky-500 ring-4 ring-slate-900" />

                                    {/* Date Label (Desktop) */}
                                    <div className="hidden md:block absolute left-[-120px] top-[-4px] w-32 text-right">
                                        <span className="text-sm font-medium text-slate-400">{exp.period}</span>
                                    </div>

                                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group border-l-4 border-l-sky-500">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 relative z-10">
                                            <div className="flex items-center gap-4">
                                                {/* Company Logo Placeholder */}
                                                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl font-bold text-sky-400 border border-slate-700">
                                                    {exp.company.charAt(0)}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-sky-400 font-medium mt-1">{exp.company}</p>
                                                </div>
                                            </div>
                                            <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <ul className="space-y-3 relative z-10">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
