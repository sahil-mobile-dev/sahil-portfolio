"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useFirestoreDoc } from "@/lib/hooks/useFirestoreDoc";
import dynamic from "next/dynamic";

const BackgroundAnimation = dynamic(() => import('./BackgroundAnimation'), { ssr: false });

export default function Hero() {
    const { data: heroData, loading } = useFirestoreDoc("portfolio_hero");

    if (loading || !heroData) {
        return (
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <BackgroundAnimation />
                <div className="container-width relative z-10 flex justify-center">
                    <div className="animate-pulse w-32 h-32 rounded-full bg-slate-800/50"></div>
                </div>
            </section>
        );
    }

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden">
            <BackgroundAnimation />

            <div className="container-width relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-start text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-white leading-[1.1]"
                        >
                            {heroData.greeting || "Hi, I'm"} <span className="text-accent">{heroData.name || "Sahil Chudasama"}</span>
                            <br />
                            <span className="text-2xl md:text-3xl lg:text-4xl mt-6 block font-medium text-slate-400">
                                {heroData.role || "Flutter Developer | Cross-Platform App Engineer"}
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed"
                        >
                            {heroData.description || "Flutter Developer with strong experience in building cross-platform mobile applications."}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-5"
                        >
                            <Link
                                href="#projects"
                                className="group px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-white/5"
                            >
                                View My Work 
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#contact"
                                className="group px-8 py-4 bg-slate-800/40 text-white rounded-full font-bold border border-slate-700 hover:bg-slate-800 hover:border-slate-500 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-16 flex items-center gap-6"
                        >
                            <SocialLink href="https://github.com/sahil-mobile-dev" icon={<Github className="w-5 h-5" />} label="GitHub" />
                            <SocialLink href="https://in.linkedin.com/in/sahil-chudasama" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="mailto:sahil.mobiledev@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                        </motion.div>
                    </motion.div>

                    {/* Right Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="relative hidden md:block"
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -20, 0],
                            }}
                            transition={{ 
                                duration: 6, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="relative z-10 w-full aspect-square max-w-[400px] lg:max-w-[500px] ml-auto"
                        >
                            <Image 
                                src="/flutter_developer.png" 
                                alt="Flutter Developer Illustration" 
                                width={500} 
                                height={500}
                                priority
                                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(56,189,248,0.15)]"
                            />
                        </motion.div>
                        
                        {/* Decorative Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
            
            {/* Mobile Illustration (shown below content) */}
            <div className="md:hidden container-width mt-12 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-square max-w-[300px] mx-auto"
                >
                    <Image 
                        src="/flutter_developer.png" 
                        alt="Flutter Developer Illustration" 
                        width={300} 
                        height={300}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-4 bg-slate-800/40 rounded-full text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-sky-500/30 shadow-lg"
        >
            {icon}
        </motion.a>
    );
}
