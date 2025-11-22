'use client';
import { useFirebaseData } from '@/lib/hooks/useFirebaseData';

export default function FirebaseExample() {
    // Replace 'yourCollectionName' with your actual Firestore collection name
    const { data, loading, error } = useFirebaseData('portfolio');

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading data from Firebase...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-lg">
                    <h2 className="text-red-400 text-xl font-bold mb-2">Error Loading Data</h2>
                    <p className="text-red-300">{error}</p>
                    <p className="text-gray-400 text-sm mt-4">
                        Make sure your Firebase configuration is correct and your Firestore database is set up.
                    </p>
                </div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-6 max-w-lg">
                    <h2 className="text-yellow-400 text-xl font-bold mb-2">No Data Found</h2>
                    <p className="text-gray-300">
                        Connected to Firebase successfully, but no documents found in the &apos;portfolio&apos; collection.
                    </p>
                    <p className="text-gray-400 text-sm mt-4">
                        Add some test data to your Firestore collection to see it displayed here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-2 text-center">
                    Firebase Data Display
                </h1>
                <p className="text-gray-400 text-center mb-8">
                    Fetched {data.length} item(s) from Firestore
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-xl font-semibold text-white">
                                    {item.title || 'Untitled'}
                                </h3>
                                <span className="text-xs text-gray-500">#{item.id}</span>
                            </div>

                            {item.description && (
                                <p className="text-gray-300 mb-4">{item.description}</p>
                            )}

                            {/* Display all other fields dynamically */}
                            <div className="space-y-2">
                                {Object.entries(item)
                                    .filter(([key]) => !['id', 'title', 'description'].includes(key))
                                    .map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center">
                                            <span className="text-sm text-gray-400 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                                            </span>
                                            <span className="text-sm text-gray-200">
                                                {typeof value === 'object'
                                                    ? JSON.stringify(value)
                                                    : String(value)}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
