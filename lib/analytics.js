import { db, analytics } from "./firebase";
import { doc, updateDoc, increment, setDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { logEvent } from "firebase/analytics";

// Log page view to Firestore (Realtime) and GA4
export const logPageView = async (path) => {
    try {
        // 1. Log to Google Analytics 4
        if (analytics) {
            logEvent(analytics, "page_view", { page_path: path });
        }

        // 2. Log to Firestore for Realtime Dashboard
        // We'll use a simple counter document 'analytics/stats'
        const statsRef = doc(db, "analytics", "stats");

        // Use setDoc with merge: true to create the doc if it doesn't exist
        await setDoc(statsRef, {
            totalViews: increment(1),
            lastUpdated: serverTimestamp(),
        }, { merge: true });

        // Also track views per page if needed (optional, keeping it simple for now)
        // const pageRef = doc(db, "analytics", `page_${path.replace(/\//g, "_")}`);
        // await setDoc(pageRef, { views: increment(1) }, { merge: true });

    } catch (error) {
        console.error("Error logging page view:", error);
    }
};

// Hook to get realtime stats
export const subscribeToRealtimeStats = (callback) => {
    const statsRef = doc(db, "analytics", "stats");
    return onSnapshot(statsRef, (doc) => {
        if (doc.exists()) {
            callback(doc.data());
        } else {
            callback(null);
        }
    });
};
