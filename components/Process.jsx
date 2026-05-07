"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code, CheckCircle, Rocket, HeartPulse } from "lucide-react";

const steps = [
    {
        title: "Discovery",
        description: "We dive deep into your business goals, target audience, and market landscape.",
        icon: <Search className="w-6 h-6" />,
    },
    {
        title: "Planning",
        description: "Strategic roadmap and technical architecture tailored for scalability.",
        icon: <PenTool className="w-6 h-6" />,
    },
    {
        title: "Design",
        description: "Crafting immersive user experiences and high-fidelity visual identities.",
        icon: <Layout className="w-6 h-6" />,
    },
    {
        title: "Development",
        description: "Engineering robust solutions with clean code and modern tech stacks.",
        icon: <Code className="w-6 h-6" />,
    },
    {
        title: "Testing",
        description: "Rigorous quality assurance to ensure bug-free and performant delivery.",
        icon: <CheckCircle className="w-6 h-6" />,
    },
    {
        title: "Launch",
        description: "Deploying your product to the world with a seamless transition.",
        icon: <Rocket className="w-6 h-6" />,
    },
    {
        title: "Support & Growth",
        description: "Continuous optimization and AI-powered insights to scale your business.",
        icon: <HeartPulse className="w-6 h-6" />,
    },
];

export default function Process() {
    return (
        <section id="process" className="section-padding bg-black/30">
            <div className="container-width">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Our Workflow
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        How We Bring <br /> <span className="text-gradient">Ideas to Life</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden lg:block -translate-y-1/2" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl group-hover:shadow-sky-500/20">
                                    {step.icon}
                                </div>
                                <div className="relative">
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[40px] font-black text-white/5 group-hover:text-sky-500/10 transition-colors">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
