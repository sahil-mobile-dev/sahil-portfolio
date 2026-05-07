"use client";

import { motion } from "framer-motion";

const techs = [
    "Flutter", "Firebase", "React", "Node.js", "Figma", 
    "OpenAI", "AWS", "MongoDB", "Supabase", "GitHub", 
    "Next.js", "Tailwind", "Docker", "PostgreSQL", "Stripe"
];

export default function TechStack() {
    return (
        <section className="py-20 bg-black/50 overflow-hidden">
            <div className="container-width">
                <div className="flex flex-col items-center gap-12">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Powering Modern Digital Products</span>
                    
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {techs.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:border-sky-500/50 hover:bg-sky-500/5 transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>

                    {/* Scrolling Animation for logos (simulated with text for now) */}
                    <div className="w-full relative mt-10 opacity-20">
                        <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap">
                            {[...techs, ...techs].map((tech, i) => (
                                <span key={i} className="text-5xl font-black text-white/10 uppercase tracking-tighter">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
