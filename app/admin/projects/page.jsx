"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";

export default function AdminProjects() {
    const [formData, setFormData] = useState({ items: [] });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnap = await getDoc(doc(db, "portfolio_projects", "data"));
                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                } else {
                    setFormData({ items: [] });
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
            await setDoc(doc(db, "portfolio_projects", "data"), formData);
            setMessage("Saved successfully!");
            setTimeout(() => setMessage(""), 3000);
        } catch (error) {
            console.error("Error saving data:", error);
            setMessage("Error saving data.");
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (index, field, value) => {
        const newItems = [...formData.items];
        newItems[index][field] = value;
        setFormData({ ...formData, items: newItems });
    };

    const handleTechChange = (index, value) => {
        const tags = value.split(",").map(tag => tag.trim());
        handleChange(index, "tech", tags);
    };

    const addItem = () => {
        setFormData({
            ...formData,
            items: [
                { title: "", description: "", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", github: "", demo: "", tech: [] },
                ...formData.items
            ]
        });
    };

    const removeItem = (index) => {
        const newItems = formData.items.filter((_, i) => i !== index);
        setFormData({ ...formData, items: newItems });
    };

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-sky-500" /></div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-100">Projects Section</h1>
                <button
                    type="button"
                    onClick={addItem}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm transition-colors"
                >
                    <Plus className="w-4 h-4" /> Add Project
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {formData.items.map((item, index) => (
                        <div key={index} className="p-6 bg-slate-900 border border-slate-800 rounded-xl relative group shadow-lg">
                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>

                            <div className="space-y-4 pr-8">
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1">Project Title</label>
                                    <input
                                        type="text"
                                        value={item.title}
                                        onChange={e => handleChange(index, "title", e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                        placeholder="e.g. E-Commerce App"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1">Description</label>
                                    <textarea
                                        rows={3}
                                        value={item.description}
                                        onChange={e => handleChange(index, "description", e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1">Thumbnail Image URL</label>
                                    <input
                                        type="text"
                                        value={item.image}
                                        onChange={e => handleChange(index, "image", e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                        placeholder="https://images.unsplash.com..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1">GitHub URL</label>
                                        <input
                                            type="text"
                                            value={item.github || ""}
                                            onChange={e => handleChange(index, "github", e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1">Live Demo URL</label>
                                        <input
                                            type="text"
                                            value={item.demo || ""}
                                            onChange={e => handleChange(index, "demo", e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1">Technologies (Comma separated)</label>
                                    <input
                                        type="text"
                                        value={item.tech ? item.tech.join(", ") : ""}
                                        onChange={e => handleTechChange(index, e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                        placeholder="React, Firebase, Tailwind"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl sticky bottom-4 z-10 shadow-lg mt-8">
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
