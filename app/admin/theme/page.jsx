"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Loader2, Save } from "lucide-react";

export default function AdminTheme() {
    const [formData, setFormData] = useState({
        primaryColor: "sky",
        secondaryColor: "indigo"
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnap = await getDoc(doc(db, "portfolio_theme", "data"));
                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                }
            } catch (error) {
                console.error("Error fetching theme:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");
        
        try {
            await setDoc(doc(db, "portfolio_theme", "data"), formData);
            setMessage("Saved successfully! Note: The site currently relies on Tailwind classes. Changing this theme string will require site code updates to utilize arbitrary CSS variables if not already set.");
            setTimeout(() => setMessage(""), 5000);
        } catch (error) {
            console.error("Error saving data:", error);
            setMessage("Error saving data.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-sky-500" /></div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-100">Theme Settings</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-lg">
                <p className="text-sm text-slate-400 mb-6 border-b border-slate-800 pb-4">
                    Modify the base accent colors used throughout the application. 
                    (Note: This requires advanced integration in the app layout to apply Tailwind colors dynamically from CSS variables).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Primary Color (Tailwind Color Name)</label>
                        <select
                            value={formData.primaryColor}
                            onChange={e => setFormData({ ...formData, primaryColor: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none"
                        >
                            <option value="sky">Sky Blue</option>
                            <option value="indigo">Indigo</option>
                            <option value="rose">Rose</option>
                            <option value="emerald">Emerald</option>
                            <option value="amber">Amber</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <p className={`text-sm ${message.includes('Error') ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {message}
                    </p>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                    >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
