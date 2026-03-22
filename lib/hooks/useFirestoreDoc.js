"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export function useFirestoreDoc(collectionName, documentId = "data", realtime = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const docRef = doc(db, collectionName, documentId);

        if (realtime) {
            const unsubscribe = onSnapshot(docRef, (docSnap) => {
                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    setData(null);
                }
                setLoading(false);
            }, (err) => {
                console.error("Error fetching doc:", err);
                setError(err);
                setLoading(false);
            });
            return () => unsubscribe();
        } else {
            const fetchDoc = async () => {
                try {
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setData(docSnap.data());
                    } else {
                        setData(null);
                    }
                } catch (err) {
                    console.error("Error fetching doc:", err);
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchDoc();
        }
    }, [collectionName, documentId, realtime]);

    return { data, loading, error };
}
