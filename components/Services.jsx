"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Bot } from "lucide-react";

const services = [
    {
        title: "App Development",
        description: "Native and cross-platform mobile applications built with Flutter for iOS and Android.",
        icon: <Smartphone className="w-6 h-6" />,
        color: "sky"
    },
    {
        title: "UI/UX Design",
        description: "Modern, intuitive, and user-centric designs that provide exceptional digital experiences.",
        icon: <Layout className="w-6 h-6" />,
        color: "indigo"
    },
    {
        title: "Backend Development",
        description: "Scalable server-side solutions using Firebase, Node.js, and cloud infrastructure.",
        icon: <Server className="w-6 h-6" />,
        color: "sky"
    },
    {
        title: "AI Integrations",
        description: "Integrating artificial intelligence and machine learning capabilities into applications.",
        icon: <Bot className="w-6 h-6" />,
        color: "indigo"
    },
];

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className="section-padding relative overflow-hidden bg-slate-900/60">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
                        My <span className="text-accent">Services</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-center mb-16 text-lg">
                        Specialized solutions tailored to your business needs, delivering premium digital experiences.
                    </p>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="glass-panel p-10 rounded-[2.5rem] hover:border-sky-500/30 transition-all duration-500 group relative overflow-hidden shadow-2xl shadow-sky-500/5"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-sky-500/10 transition-colors" />
                                
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 border border-slate-700/50 bg-slate-800/80 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 group-hover:scale-110 shadow-lg ${service.color === 'sky' ? 'text-sky-400' : 'text-indigo-400'}`}>
                                    {service.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
