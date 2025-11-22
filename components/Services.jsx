"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Bot } from "lucide-react";

const services = [
    {
        title: "App Development",
        description: "Native and cross-platform mobile applications built with Flutter for iOS and Android.",
        icon: <Smartphone className="w-6 h-6 text-sky-400" />,
    },
    {
        title: "UI/UX Design",
        description: "Modern, intuitive, and user-centric designs that provide exceptional digital experiences.",
        icon: <Layout className="w-6 h-6 text-indigo-400" />,
    },
    {
        title: "Backend Development",
        description: "Scalable server-side solutions using Firebase, Node.js, and cloud infrastructure.",
        icon: <Server className="w-6 h-6 text-sky-400" />,
    },
    {
        title: "AI Integrations",
        description: "Integrating artificial intelligence and machine learning capabilities into applications.",
        icon: <Bot className="w-6 h-6 text-indigo-400" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="section-padding relative">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-center mb-12">
                        Specialized solutions tailored to your business needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-8 rounded-2xl hover:border-sky-500/30 transition-all group"
                            >
                                <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700/50">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
