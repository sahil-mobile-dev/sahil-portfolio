"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const linkVariants = {
        hover: { y: -2, color: "#38bdf8", transition: { duration: 0.2 } }
    };

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled ? "py-4" : "py-8"
                }`}
            >
                <div className="container-width px-6">
                    <div
                        className={`relative flex items-center justify-between px-6 md:px-8 py-4 rounded-[2rem] transition-all duration-500 ${
                            isScrolled
                                ? "bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 shadow-2xl shadow-sky-500/5"
                                : "bg-transparent"
                        }`}
                    >
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-white"
                        >
                            <span className="bg-sky-500 text-slate-900 px-2 py-0.5 rounded-lg group-hover:rotate-6 transition-transform">S</span>
                            <span>Sahil<span className="text-sky-400">.</span>dev</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} whileHover="hover">
                                    <Link
                                        href={link.href}
                                        className="text-sm font-bold text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-widest relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 transition-all"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-2xl md:hidden"
                    >
                        <div className="flex flex-col h-full p-10">
                            <div className="flex justify-end mb-16">
                                <button
                                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 text-slate-400 border border-slate-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-black text-slate-100 hover:text-sky-400 transition-colors tracking-tighter"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-auto pt-10 border-t border-slate-900 text-slate-500 text-sm font-medium">
                                © 2024 Sahil Chudasama
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
