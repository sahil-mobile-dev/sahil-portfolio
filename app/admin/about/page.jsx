"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";

export default function AdminAbout() {
    const [formData, setFormData] = useState({
        description: "",
        features: []
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnap = await getDoc(doc(db, "portfolio_about", "data"));
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
            await setDoc(doc(db, "portfolio_about", "data"), formData);
            setMessage("Saved successfully!");
            setTimeout(() => setMessage(""), 3000);
        } catch (error) {
            console.error("Error saving data:", error);
            setMessage("Error saving data.");
        } finally {
            setSaving(false);
        }
    };

    const handleFeatureChange = (index, field, value) => {
        const newFeatures = [...formData.features];
        newFeatures[index][field] = value;
        setFormData({ ...formData, features: newFeatures });
    };

    const addFeature = () => {
        setFormData({
            ...formData,
            features: [...formData.features, { icon: "Zap", title: "", description: "" }]
        });
    };

    const removeFeature = (index) => {
        const newFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({ ...formData, features: newFeatures });
    };

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-sky-500" /></div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-100">About Section</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-lg">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Main Description</label>
                    <textarea
                        rows={5}
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none resize-y"
                        placeholder="I am a Flutter Developer..."
                    />
                </div>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-100">Features List</h2>
                        <button
                            type="button"
                            onClick={addFeature}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Feature
                        </button>
                    </div>

                    <div className="space-y-4">
                        {formData.features.map((feature, index) => (
                            <div key={index} className="p-5 bg-slate-950 border border-slate-800 rounded-lg relative group">
                                <button
                                    type="button"
                                    onClick={() => removeFeature(index)}
                                    className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1">Title</label>
                                        <input
                                            type="text"
                                            value={feature.title}
                                            onChange={e => handleFeatureChange(index, "title", e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1">Icon Name (lucide-react)</label>
                                        <input
                                            type="text"
                                            value={feature.icon}
                                            onChange={e => handleFeatureChange(index, "icon", e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm"
                                            placeholder="e.g. Code, Smartphone, Zap"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1">Description</label>
                                    <textarea
                                        rows={2}
                                        value={feature.description}
                                        onChange={e => handleFeatureChange(index, "description", e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:border-sky-500 outline-none text-sm resize-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl sticky bottom-4 z-10 shadow-lg">
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
