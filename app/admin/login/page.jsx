"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Lock, Mail } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin");
        } catch (err) {
            setError("Invalid email or password");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-100 mb-2">Admin Access</h1>
                    <p className="text-slate-400">Sign in to manage your portfolio</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
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
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                    
                    <div className="text-center pt-4 border-t border-slate-800">
                        <Link href="/admin/register" className="text-sm text-sky-400 hover:text-sky-300 transition-colors">
                            Don't have an admin account? Register here
                        </Link>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
