"use client";

import { motion } from "framer-motion";
import { User, Code, Smartphone, Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container-width relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="glass-panel rounded-3xl p-8 md:p-12">
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            I am a <span className="text-sky-400 font-semibold">Flutter Developer</span> with strong experience in building cross-platform mobile applications,
                            subscription systems, in-app purchases, AI-powered features, and scalable Firebase-based backends.
                            Skilled in architecting clean, maintainable mobile apps with performance, UX, and reliability in mind.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <FeatureCard
                                icon={<Smartphone className="w-6 h-6 text-sky-400" />}
                                title="Cross-Platform Dev"
                                description="Building seamless apps for Android, iOS, and Windows using Flutter."
                            />
                            <FeatureCard
                                icon={<Zap className="w-6 h-6 text-indigo-400" />}
                                title="AI Integration"
                                description="Integrating AI-powered features like chatbots and ML models."
                            />
                            <FeatureCard
                                icon={<Code className="w-6 h-6 text-sky-400" />}
                                title="Clean Architecture"
                                description="Scalable codebases with MVVM, BLoC, and Riverpod."
                            />
                            <FeatureCard
                                icon={<User className="w-6 h-6 text-indigo-400" />}
                                title="User-Centric UX"
                                description="Creating responsive, pixel-perfect UIs with excellent UX."
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
            <div className="mt-1">{icon}</div>
            <div>
                <h3 className="font-semibold text-slate-200 mb-1">{title}</h3>
                <p className="text-sm text-slate-400">{description}</p>
            </div>
        </div>
    );
}
