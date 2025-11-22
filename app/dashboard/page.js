"use client";

import { useEffect, useState } from "react";
import { subscribeToRealtimeStats } from "@/lib/analytics";
import { BarChart, Activity, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = subscribeToRealtimeStats((data) => {
            setStats(data);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <Activity className="w-10 h-10 text-sky-500 animate-spin" />
                    <p>Connecting to Realtime Analytics...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-3">
                        <BarChart className="w-8 h-8 text-sky-500" />
                        Analytics Dashboard
                    </h1>
                    <p className="text-slate-400">Realtime insights from your portfolio.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Total Views Card */}
                    <StatCard
                        icon={<Users className="w-6 h-6 text-sky-400" />}
                        label="Total Page Views"
                        value={stats?.totalViews || 0}
                        color="bg-sky-500/10 border-sky-500/20"
                    />

                    {/* Last Updated Card */}
                    <StatCard
                        icon={<Clock className="w-6 h-6 text-indigo-400" />}
                        label="Last Activity"
                        value={stats?.lastUpdated ? new Date(stats.lastUpdated.toDate()).toLocaleTimeString() : "N/A"}
                        subValue={stats?.lastUpdated ? new Date(stats.lastUpdated.toDate()).toLocaleDateString() : ""}
                        color="bg-indigo-500/10 border-indigo-500/20"
                    />

                    {/* Status Card */}
                    <StatCard
                        icon={<Activity className="w-6 h-6 text-emerald-400" />}
                        label="System Status"
                        value="Live"
                        color="bg-emerald-500/10 border-emerald-500/20"
                    />
                </div>

                {/* Placeholder for more detailed charts */}
                <div className="glass-panel p-8 rounded-2xl border border-slate-800/50 text-center py-20">
                    <p className="text-slate-500">More detailed analytics charts coming soon...</p>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, subValue, color }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl border ${color} backdrop-blur-sm`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/50">{icon}</div>
            </div>
            <div>
                <p className="text-slate-400 text-sm font-medium mb-1">{label}</p>
                <h3 className="text-3xl font-bold text-slate-100">{value}</h3>
                {subValue && <p className="text-slate-500 text-xs mt-1">{subValue}</p>}
            </div>
        </motion.div>
    );
}
