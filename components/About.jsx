"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 group-hover:opacity-0 transition-opacity" />
                            <div className="flex items-center justify-center h-full text-slate-500">
                                <User className="w-20 h-20" />
                            </div>
                            {/* Add your image here: <Image src="/your-image.jpg" fill className="object-cover" /> */}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I'm a passionate Flutter Developer with a strong foundation in building scalable,
                            high-performance mobile applications. My journey in tech is driven by a curiosity
                            to solve complex problems and a desire to create digital experiences that make a difference.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            With expertise in both frontend and backend technologies, I bring a holistic approach
                            to development. Whether it's crafting pixel-perfect UIs or architecting robust
                            backend systems with Firebase, I ensure every project is built to last.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <Stat number="3+" label="Years Experience" />
                            <Stat number="20+" label="Projects Completed" />
                            <Stat number="10+" label="Happy Clients" />
                            <Stat number="24/7" label="Support" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Stat({ number, label }) {
    return (
        <div>
            <h3 className="text-3xl font-bold text-white mb-1">{number}</h3>
            <p className="text-slate-500 text-sm">{label}</p>
        </div>
    );
}
