"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2, LogOut, Clock } from "lucide-react";

export default function AdminPending() {
    const { user, role, loading, signOut } = useAuth();
    const router = useRouter();

    // Auto-redirect if role changes to admin
    useEffect(() => {
        if (!loading && role === "admin") {
            router.push("/admin");
        }
    }, [role, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 animate-spin text-sky-500" />
            </div>
        );
    }

    if (!user) {
        // Provide link to log in if they land here without session
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-center px-4">
                <h1 className="text-2xl font-bold text-slate-100 mb-4">Please log in</h1>
                <button
                    onClick={() => router.push("/admin/login")}
                    className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-medium transition-colors"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
            <div className="w-full max-w-md p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-amber-500" />
                </div>
                
                <h1 className="text-2xl font-bold text-slate-100 mb-3">Approval Pending</h1>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Your account (<span className="text-slate-200">{user.email}</span>) has been created successfully, but requires manual approval from the site owner before you can access the admin dashboard.
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full py-3 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium transition-colors"
                    >
                        Check Status Again
                    </button>

                    <button
                        onClick={async () => {
                            await signOut();
                            router.push("/admin/login");
                        }}
                        className="w-full py-3 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}
