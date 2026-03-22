"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { Loader2, Mail, Calendar } from "lucide-react";

export default function AdminMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const q = query(collection(db, "contacts"), orderBy("timestamp", "desc"));
                const querySnapshot = await getDocs(q);
                const msgs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: doc.data().timestamp?.toDate()?.toLocaleString() || "Recent"
                }));
                setMessages(msgs);
            } catch (error) {
                console.error("Error fetching messages", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, []);

    if (loading) return <div className="flex items-center justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-sky-500" /></div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-slate-100">Get in Touch Messages</h1>
            
            {messages.length === 0 ? (
                <div className="p-8 text-center text-slate-400 bg-slate-900/50 rounded-xl border border-slate-800">
                    No messages received yet.
                </div>
            ) : (
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-200">{msg.name}</h3>
                                    <a href={`mailto:${msg.email}`} className="text-sky-400 text-sm flex items-center gap-1 hover:underline">
                                        <Mail className="w-4 h-4" /> {msg.email}
                                    </a>
                                </div>
                                <span className="text-xs text-slate-500 flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-full border border-slate-800">
                                    <Calendar className="w-3 h-3" /> {msg.date}
                                </span>
                            </div>
                            <p className="text-slate-300 bg-slate-950/50 p-4 rounded-lg text-sm leading-relaxed border border-slate-800/50">
                                {msg.message}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
