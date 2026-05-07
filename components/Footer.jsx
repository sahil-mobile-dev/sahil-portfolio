"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 bg-black border-t border-white/5">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <Link
                            href="/"
                            className="group flex items-center gap-3 text-xl font-bold tracking-tight text-white"
                        >
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-violet-500 rounded-xl" />
                                <span className="relative z-10 font-black text-slate-950">SC</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg uppercase tracking-wider">Sahil</span>
                                <span className="text-[10px] text-sky-400 font-medium tracking-[0.2em] uppercase">Studio</span>
                            </div>
                        </Link>
                        <p className="text-slate-500 leading-relaxed max-w-sm">
                            We build modern digital products that help businesses scale. From mobile apps to AI-powered platforms.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com/in/sahil-chudasama" />
                            <SocialIcon icon={<Twitter size={18} />} href="#" />
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                            <SocialIcon icon={<Github size={18} />} href="https://github.com/sahil-mobile-dev" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="#services">Services</FooterLink>
                            <FooterLink href="#projects">Work</FooterLink>
                            <FooterLink href="#process">Process</FooterLink>
                            <FooterLink href="#about">About</FooterLink>
                            <FooterLink href="#faq">FAQ</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm text-slate-500">Mobile Development</li>
                            <li className="text-sm text-slate-500">Web Development</li>
                            <li className="text-sm text-slate-500">UI/UX Design</li>
                            <li className="text-sm text-slate-500">AI Integration</li>
                            <li className="text-sm text-slate-500">Brand Identity</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Ahmedabad, Gujarat <br /> India
                            </p>
                            <a href="mailto:sahil.mobiledev@gmail.com" className="text-sm text-sky-400 font-bold hover:text-white transition-colors">
                                sahil.mobiledev@gmail.com
                            </a>
                            <Link href="#contact" className="inline-flex items-center gap-2 text-sm text-white font-bold hover:text-sky-400 transition-colors group">
                                Start a Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-600 font-medium">
                        © {currentYear} Sahil Chudasama Digital Studio. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white transition-all">
            {icon}
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <Link href={href} className="text-sm text-slate-500 hover:text-white transition-colors">
                {children}
            </Link>
        </li>
    );
}

