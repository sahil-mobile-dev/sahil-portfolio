"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding bg-black/50">
            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                            >
                                Behind the Studio
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-black text-white tracking-tight"
                            >
                                Designing the <span className="text-gradient">Future</span>
                            </motion.h2>
                        </div>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 leading-relaxed"
                        >
                            We are a boutique digital product studio passionate about building experiences that help businesses grow. 
                            From high-performance mobile apps and responsive websites to cohesive branding and AI-powered automation, 
                            we provide end-to-end digital solutions tailored for the modern startup ecosystem.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <AboutFeature 
                                icon={<Target className="text-sky-400" />}
                                title="Our Mission"
                                description="To empower brands with technology that is both functional and beautiful."
                            />
                            <AboutFeature 
                                icon={<Users className="text-violet-400" />}
                                title="The Team"
                                description="A collective of creative designers and expert developers."
                            />
                        </div>
                    </div>

                    {/* Stats/Experience Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-white/5 border border-white/5 rounded-[4rem] flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-violet-500/10 group-hover:opacity-20 transition-opacity" />
                            <div className="text-center z-10">
                                <span className="text-[120px] font-black text-white leading-none">05+</span>
                                <span className="block text-sky-400 font-bold uppercase tracking-[0.5em] mt-2">Years of Excellence</span>
                            </div>
                            
                            {/* Floating Badges */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-10 right-10 bg-slate-900 border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
                            >
                                <Award className="text-yellow-400" />
                                <span className="text-xs font-bold text-white uppercase">Award Winning</span>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute bottom-10 left-10 bg-slate-900 border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
                            >
                                <ShieldCheck className="text-emerald-400" />
                                <span className="text-xs font-bold text-white uppercase">Trusted Partner</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function AboutFeature({ icon, title, description }) {
    return (
        <div className="flex flex-col gap-3 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-white/10">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold mb-1">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

