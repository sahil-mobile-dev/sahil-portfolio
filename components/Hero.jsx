"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm text-slate-300">Available for Freelance Projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Hi, I'm <span className="text-gradient">Sahil Chudasama</span>
                        <br />
                        <span className="text-slate-400 text-3xl md:text-5xl mt-4 block">
                            Flutter Developer & Mobile App Engineer
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        Passionate about building scalable and visually stunning apps. I love problem-solving,
                        modern tech, open-source, and creating impactful digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            View My Work <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border border-slate-700 hover:bg-slate-700 transition-all transform hover:-translate-y-1"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex items-center gap-6"
                    >
                        <SocialLink href="https://github.com" icon={<Github className="w-6 h-6" />} />
                        <SocialLink href="https://linkedin.com/in/sahil-chudasama" icon={<Linkedin className="w-6 h-6" />} />
                        <SocialLink href="mailto:sahilchudasama.work@gmail.com" icon={<Mail className="w-6 h-6" />} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700"
        >
            {icon}
        </a>
    );
}
