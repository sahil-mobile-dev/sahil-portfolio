"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Founder, Nexus AI",
        content: "Sahil Studio transformed our vision into a stunning reality. The AI integration was flawless, and the design is world-class.",
        rating: 5,
        image: "AR"
    },
    {
        name: "Sarah Chen",
        role: "CEO, TechFlow",
        content: "The best agency we've ever worked with. Fast delivery, excellent communication, and a product that exceeded our expectations.",
        rating: 5,
        image: "SC"
    },
    {
        name: "James Wilson",
        role: "Product Manager, Growthly",
        content: "Our app conversion increased by 40% after the redesign. Their business-focused approach is what sets them apart.",
        rating: 5,
        image: "JW"
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-black/30 overflow-hidden">
            <div className="container-width">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        What Our <span className="text-gradient">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[3rem] bg-white/5 border border-white/5 relative group hover:bg-white/10 transition-all duration-500"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16 group-hover:text-sky-500/10 transition-colors" />
                            
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#38bdf8" className="text-sky-400" />
                                ))}
                            </div>

                            <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-violet-500 flex items-center justify-center text-slate-950 font-black text-sm">
                                    {item.image}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
