"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Layout, Palette, Share2, Bot, Box, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Mobile App Development",
        description: "Flutter, Android/iOS apps, and Firebase integration.",
        icon: <Smartphone className="w-8 h-8" />,
        className: "md:col-span-8 md:row-span-2",
        color: "from-sky-500 to-blue-600"
    },
    {
        title: "Web Development",
        description: "Business websites and landing pages.",
        icon: <Globe className="w-8 h-8" />,
        className: "md:col-span-4 md:row-span-2",
        color: "from-violet-500 to-purple-600"
    },
    {
        title: "UI/UX Design",
        description: "Modern UI systems and wireframes.",
        icon: <Palette className="w-8 h-8" />,
        className: "md:col-span-4 md:row-span-2",
        color: "from-cyan-500 to-sky-600"
    },
    {
        title: "AI Integration",
        description: "AI chatbots and automation tools.",
        icon: <Bot className="w-8 h-8" />,
        className: "md:col-span-4 md:row-span-2",
        color: "from-fuchsia-500 to-pink-600"
    },
    {
        title: "Brand Identity",
        description: "Logo design and brand guidelines.",
        icon: <Box className="w-8 h-8" />,
        className: "md:col-span-4 md:row-span-2",
        color: "from-orange-500 to-red-600"
    },
    {
        title: "Social Media Management",
        description: "Instagram branding and creative strategy.",
        icon: <Share2 className="w-8 h-8" />,
        className: "md:col-span-6 md:row-span-2",
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "Web App Development",
        description: "SaaS products and custom platforms.",
        icon: <Layout className="w-8 h-8" />,
        className: "md:col-span-6 md:row-span-2",
        color: "from-blue-500 to-indigo-600"
    },
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-black/30">
            <div className="container-width">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        Complete Digital <span className="text-gradient">Solutions</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[100px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.className} group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all duration-500`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />
                            
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <ArrowUpRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-400 text-sm max-w-[200px] leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

