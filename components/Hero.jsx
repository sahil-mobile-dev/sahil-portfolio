"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import BackgroundAnimation from "./BackgroundAnimation";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <BackgroundAnimation />

            <div className="container-width relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 mb-8 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        <span className="text-sm text-slate-400 font-medium">Available for Freelance Projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-slate-100"
                    >
                        Hi, I&apos;m <span className="text-gradient">Sahil Chudasama</span>
                        <br />
                        <span className="text-2xl md:text-4xl mt-4 block font-normal text-slate-400">
                            Flutter Developer | Cross-Platform App Engineer
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed"
                    >
                        Flutter Developer with strong experience in building cross-platform mobile applications,
                        subscription systems, in-app purchases, AI-powered features, and scalable Firebase-based backends.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-semibold hover:bg-white transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-slate-100/10"
                        >
                            View My Work <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-slate-900 text-slate-300 rounded-full font-semibold border border-slate-800 hover:bg-slate-800 hover:text-white transition-all transform hover:-translate-y-1"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 flex items-center gap-6"
                    >
                        <SocialLink href="https://github.com/sahil-mobile-dev" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        <SocialLink href="https://in.linkedin.com/in/sahil-chudasama" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        <SocialLink href="mailto:sahil.mobiledev@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 bg-slate-900/50 rounded-full text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all hover:scale-110 border border-slate-800"
        >
            {icon}
        </a>
    );
}
