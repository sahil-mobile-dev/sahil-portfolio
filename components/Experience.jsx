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

                    <div className="max-w-3xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-sky-400" />
                                            {exp.role}
                                        </h3>
                                        <p className="text-sky-400 font-medium mt-1">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
