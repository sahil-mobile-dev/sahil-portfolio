"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Bot } from "lucide-react";

const services = [
    {
        title: "App Development",
        description: "Native and cross-platform mobile applications built with Flutter for iOS and Android.",
        icon: <Smartphone className="w-8 h-8" />,
    },
    {
        title: "UI/UX Design",
        description: "Modern, intuitive, and user-centric designs that provide exceptional digital experiences.",
        icon: <Layout className="w-8 h-8" />,
    },
    {
        title: "Backend Development",
        description: "Scalable server-side solutions using Firebase, Node.js, and cloud infrastructure.",
        icon: <Server className="w-8 h-8" />,
    },
    {
        title: "AI Integrations",
        description: "Integrating artificial intelligence and machine learning capabilities into applications.",
        icon: <Bot className="w-8 h-8" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Specialized solutions tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-cyan-500/50 transition-all group"
                        >
                            <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform border border-slate-700">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
