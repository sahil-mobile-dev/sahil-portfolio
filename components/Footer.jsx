"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-slate-800/50 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50 -z-10" />

            <div className="container-width">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold tracking-tight text-slate-100 hover:text-sky-400 transition-colors">
                            Sahil<span className="text-sky-400">.</span>dev
                        </Link>
                        <p className="text-slate-500 text-sm mt-2">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <SocialLink href="https://github.com/sahil-mobile-dev" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/sahil-chudasama" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        <SocialLink href="mailto:sahil.mobiledev@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} Sahil Chudasama. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate-400 hover:text-sky-400 transition-colors transform hover:scale-110"
        >
            {icon}
        </a>
    );
}
