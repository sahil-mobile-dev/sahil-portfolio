"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function AdminRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Create initial pending role for this user
            await setDoc(doc(db, "portfolio_users", user.uid), {
                email: user.email,
                role: 'pending',
                createdAt: serverTimestamp()
            });

            router.push("/admin/pending");
        } catch (err) {
            setError(err.message || "Failed to register account");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-100 mb-2">Register Admin</h1>
                    <p className="text-slate-400">Create an account to request admin access</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                        {loading ? "Registering..." : "Register"}
                    </button>
                    
                    <div className="text-center pt-4 border-t border-slate-800">
                        <Link href="/admin/login" className="text-sm text-sky-400 hover:text-sky-300 transition-colors">
                            Already have an account? Sign in
                        </Link>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
