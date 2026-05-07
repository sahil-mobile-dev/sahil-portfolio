"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled ? "py-4" : "py-8"
                }`}
            >
                <div className="container-width">
                    <div
                        className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 border ${
                            isScrolled
                                ? "bg-slate-950/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-sky-500/10"
                                : "bg-transparent border-transparent"
                        }`}
                    >
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center gap-3 text-xl font-bold tracking-tight text-white"
                        >
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-violet-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span className="relative z-10 font-black text-slate-950">SC</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg uppercase tracking-wider">Sahil</span>
                                <span className="text-[10px] text-sky-400 font-medium tracking-[0.2em] uppercase">Studio</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-400 hover:text-white transition-colors tracking-wide relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="#contact"
                                className="px-6 py-2.5 rounded-full bg-white text-slate-950 text-sm font-bold hover:bg-sky-400 transition-all duration-300 flex items-center gap-2 group"
                            >
                                Start a Project
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-3xl lg:hidden flex flex-col"
                    >
                        <div className="container-width py-10 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-20">
                                <Link href="/" className="text-2xl font-bold text-white">Sahil Studio</Link>
                                <button
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-5xl font-bold text-slate-100 hover:text-sky-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    className="mt-8"
                                >
                                    <Link
                                        href="#contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="inline-flex items-center gap-4 text-3xl font-bold text-sky-400"
                                    >
                                        Let's Talk <ArrowUpRight size={32} />
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="mt-auto py-10 border-t border-white/5 flex justify-between text-slate-500 text-sm">
                                <span>© 2024 Sahil Chudasama</span>
                                <div className="flex gap-6">
                                    <Link href="#" className="hover:text-white">Twitter</Link>
                                    <Link href="#" className="hover:text-white">LinkedIn</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

