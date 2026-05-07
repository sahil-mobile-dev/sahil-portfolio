"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary based on complexity. A premium landing page typically takes 2-3 weeks, while complex mobile apps or SaaS platforms can take 8-12 weeks from discovery to launch."
    },
    {
        question: "How do you handle pricing?",
        answer: "We offer both fixed-price project-based billing and monthly retainer models for ongoing support. Our pricing reflects the premium quality and strategic value we bring to every project."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We are experts in Flutter for cross-platform mobile apps, Next.js for high-performance websites, and Node.js/Firebase for scalable backends. We also specialize in AI integrations using OpenAI and TensorFlow."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Absolutely. We offer comprehensive maintenance packages that include security updates, performance monitoring, and continuous feature enhancements to ensure your product grows with your business."
    },
    {
        question: "How do you integrate AI into existing products?",
        answer: "We conduct an AI audit to identify automation opportunities. Whether it's custom chatbots, predictive analytics, or automated content generation, we seamlessly integrate AI to enhance your business efficiency."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="section-padding bg-black/30">
            <div className="container-width">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Questions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        Common <span className="text-gradient">Enquiries</span>
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-3xl bg-white/5 border border-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white">
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
