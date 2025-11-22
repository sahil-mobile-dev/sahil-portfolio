"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-8 border-t border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} Sahil Chudasama. All rights reserved.
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Flutter Love
                </div>

                <div className="flex items-center gap-6">
                    <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
                    <SocialLink href="https://linkedin.com/in/sahil-chudasama" icon={<Linkedin className="w-5 h-5" />} />
                    <SocialLink href="mailto:sahilchudasama.work@gmail.com" icon={<Mail className="w-5 h-5" />} />
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
        >
            {icon}
        </a>
    );
}
