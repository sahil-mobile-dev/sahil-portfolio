'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Custom hook to fetch data from a Firestore collection
 * @param {string} collectionName - The name of the Firestore collection to fetch
 * @returns {Object} - Object containing data, loading state, and error
 */
export function useFirebaseData(collectionName) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, collectionName));
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(items);
                setError(null);
            } catch (err) {
                console.error('Error fetching data from Firebase:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        if (collectionName) {
            fetchData();
        }
    }, [collectionName]);

    return { data, loading, error };
}
