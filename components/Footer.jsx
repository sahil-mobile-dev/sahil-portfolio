"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-slate-800/50 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/5 via-slate-950 to-slate-950 opacity-30 -z-10" />

            <div className="container-width px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left space-y-4">
                        <Link href="/" className="group flex items-center justify-center md:justify-start gap-2 text-2xl font-black tracking-tighter text-white">
                            <span className="bg-sky-500 text-slate-900 px-2 py-0.5 rounded-lg group-hover:rotate-6 transition-transform">S</span>
                            <span>Sahil<span className="text-sky-400">.</span>dev</span>
                        </Link>
                        <p className="text-slate-400 text-base max-w-xs leading-relaxed">
                            Crafting high-performance mobile and web experiences with a focus on premium design.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex items-center gap-4">
                            <SocialLink href="https://github.com/sahil-mobile-dev" icon={<Github className="w-5 h-5" />} label="GitHub" />
                            <SocialLink href="https://linkedin.com/in/sahil-chudasama" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="mailto:sahil.mobiledev@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <p className="text-slate-500 font-medium">
                        © {currentYear} <span className="text-slate-300">Sahil Chudasama</span>. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-slate-500 hover:text-sky-400 transition-colors font-medium">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-sky-400 transition-colors font-medium">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
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
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all shadow-lg"
        >
            {icon}
        </motion.a>
    );
}
