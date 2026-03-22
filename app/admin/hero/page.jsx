"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Loader2, Save } from "lucide-react";

export default function AdminHero() {
    const [formData, setFormData] = useState({
        greeting: "",
        name: "",
        role: "",
        description: "",
        availability: ""
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnap = await getDoc(doc(db, "portfolio_hero", "data"));
                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                }
            } catch (error) {
                console.error("Error fetching data:", error);
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
            await setDoc(doc(db, "portfolio_hero", "data"), formData);
            setMessage("Saved successfully!");
            setTimeout(() => setMessage(""), 3000);
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
                <h1 className="text-2xl font-bold text-slate-100">Hero Section</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Greeting</label>
                        <input
                            type="text"
                            value={formData.greeting}
                            onChange={e => setFormData({ ...formData, greeting: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none"
                            placeholder="Hi, I'm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none"
                            placeholder="Sahil Chudasama"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Role Header</label>
                    <input
                        type="text"
                        value={formData.role}
                        onChange={e => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none"
                        placeholder="Flutter Developer | Cross-Platform App Engineer"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Availability Badge</label>
                    <input
                        type="text"
                        value={formData.availability}
                        onChange={e => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none"
                        placeholder="Open for Job Opportunities"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Main Description</label>
                    <textarea
                        rows={4}
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none resize-none"
                        placeholder="Flutter Developer with strong experience in building..."
                    />
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
