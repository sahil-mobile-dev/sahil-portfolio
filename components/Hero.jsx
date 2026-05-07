"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const BackgroundAnimation = dynamic(() => import('./BackgroundAnimation'), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            <BackgroundAnimation />
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-width relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <Sparkles size={16} className="text-sky-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-300">New Era of Digital Solutions</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-[0.9] mb-8"
                    >
                        Helping Businesses Build <br />
                        <span className="text-gradient">Powerful Experiences</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
                    >
                        We help startups and businesses design, develop, and grow their digital products through modern technology, branding, and AI solutions.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link
                            href="#contact"
                            className="px-10 py-5 bg-white text-slate-950 rounded-full font-black hover:bg-sky-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="#work"
                            className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
                        >
                            <Play size={18} fill="currentColor" />
                            View Our Work
                        </Link>
                        <Link
                            href="#contact"
                            className="text-slate-400 hover:text-sky-400 font-medium transition-colors border-b border-transparent hover:border-sky-400"
                        >
                            Book a Consultation
                        </Link>
                    </motion.div>

                    {/* Trust indicators / Mini-stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 flex flex-wrap justify-center items-center gap-10 md:gap-20"
                    >
                        <HeroStat number="99%" label="Client Satisfaction" />
                        <HeroStat number="50+" label="Global Projects" />
                        <HeroStat number="24/7" label="Support & Growth" />
                    </motion.div>
                </div>
            </div>

            {/* Floating UI Elements (Decorative) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 hidden xl:block opacity-20 hover:opacity-100 transition-opacity"
            >
                <div className="w-64 h-40 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-4">
                    <div className="w-full h-full bg-slate-800/50 rounded-2xl animate-pulse" />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 hidden xl:block opacity-20 hover:opacity-100 transition-opacity"
            >
                <div className="w-80 h-96 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl p-6">
                    <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-4">
                        <div className="w-full h-12 bg-slate-800/50 rounded-2xl" />
                        <div className="w-2/3 h-12 bg-slate-800/50 rounded-2xl" />
                        <div className="w-full h-32 bg-sky-500/20 rounded-2xl" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function HeroStat({ number, label }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">{number}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{label}</span>
        </div>
    );
}

