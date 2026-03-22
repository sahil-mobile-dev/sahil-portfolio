"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                setUser(authUser);
                // Fetch the user's role from Firestore
                const userDocRef = doc(db, "portfolio_users", authUser.uid);
                
                // Set up a real-time listener for the role to update immediately when approved
                const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setRole(docSnap.data().role);
                    } else {
                        setRole(null);
                    }
                    setLoading(false);
                }, (error) => {
                    console.error("Error fetching user role:", error);
                    setRole(null);
                    setLoading(false);
                });

                return () => unsubscribeSnapshot();
            } else {
                setUser(null);
                setRole(null);
                setLoading(false);
            }
        });

        return () => unsubscribeAuth();
    }, []);

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

    return { user, role, loading, signOut };
}
