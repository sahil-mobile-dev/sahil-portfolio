import { db } from "./firebase";
import { doc, updateDoc, increment, setDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

// Log page view to Firestore (Realtime) and Mixpanel
export const logPageView = async (path) => {
    try {
        // 1. Log to Mixpanel
        if (typeof window !== "undefined" && window.mixpanel) {
            window.mixpanel.track("Page View", {
                page_path: path,
                page_title: document.title,
            });
        }

        // 2. Log to Firestore for Realtime Dashboard
        const statsRef = doc(db, "analytics", "stats");

        await setDoc(statsRef, {
            totalViews: increment(1),
            lastUpdated: serverTimestamp(),
        }, { merge: true });

    } catch (error) {
        console.error("Error logging page view:", error);
    }
};

// Track custom events with Mixpanel
export const trackEvent = (eventName, properties = {}) => {
    try {
        if (typeof window !== "undefined" && window.mixpanel) {
            window.mixpanel.track(eventName, properties);
        }
    } catch (error) {
        console.error("Error tracking event:", error);
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
