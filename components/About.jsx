"use client";

import { User, Code, Smartphone, Zap, GraduationCap } from "lucide-react";
import { useFirestoreDoc } from "@/lib/hooks/useFirestoreDoc";
import { motion } from "framer-motion";
import Image from "next/image";

const iconMap = { User, Code, Smartphone, Zap, GraduationCap };

export default function About() {
    const { data: aboutData, loading } = useFirestoreDoc("portfolio_about");

    if (loading || !aboutData) {
        return <section id="about" className="section-padding"><div className="container-width animate-pulse h-96 bg-slate-800/30 rounded-3xl"></div></section>;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="section-padding relative overflow-hidden bg-slate-900/50">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500/5 blur-[120px] -z-10"></div>

            <div className="container-width relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative z-10 w-full max-w-[450px] mx-auto">
                            <Image 
                                src="/education.png" 
                                alt="Education and Growth Illustration" 
                                width={500} 
                                height={500}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-sky-500/10 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <motion.h2 
                            variants={itemVariants}
                            className="text-3xl md:text-5xl font-bold mb-8 text-left text-white"
                        >
                            About <span className="text-accent">Me</span>
                        </motion.h2>

                        <motion.div 
                            variants={itemVariants}
                            className="p-0 bg-transparent"
                        >
                            <p className="text-lg text-slate-300 leading-relaxed mb-10 whitespace-pre-line">
                                {aboutData.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {aboutData.features?.map((feature, i) => {
                                    const IconComponent = iconMap[feature.icon] || Zap;
                                    return (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        >
                                            <FeatureCard
                                                icon={<IconComponent className="w-6 h-6 text-sky-400" />}
                                                title={feature.title}
                                                description={feature.description}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="group h-full flex flex-col items-start gap-4 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-sky-500/30 transition-all duration-300">
            <div className="p-3 bg-slate-900/50 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-slate-100 mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
