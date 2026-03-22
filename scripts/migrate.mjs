import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJwvOzXM6vXksqSMoECbVmK8QASIKdq6g",
    authDomain: "sahilchudasama-mobiledev.firebaseapp.com",
    projectId: "sahilchudasama-mobiledev",
    storageBucket: "sahilchudasama-mobiledev.firebasestorage.app",
    messagingSenderId: "430482849818",
    appId: "1:430482849818:web:249671467ec3fdc98951a3",
    measurementId: "G-HJQBJ7D7JW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function migrateData() {
    console.log("Starting migration...");

    try {
        await createUserWithEmailAndPassword(auth, "admin@sahil.mobiledev", "Admin123!");
        console.log("Admin user created.");
    } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
            console.log("Admin user already exists. Proceeding...");
        } else {
            console.error("Error creating user:", e);
        }
    }

    // Since we are running outside of the web without login state, wait, the client SDK might block writes if rules are restrictive.
    // That's why we create the user, but we need to log in to get permissions? 
    // Wait, createUserWithEmailAndPassword automatically signs the user in.
    // So the client SDK WILL be authenticated correctly!

    const heroData = {
        greeting: "Hi, I'm",
        name: "Sahil Chudasama",
        role: "Flutter Developer | Cross-Platform App Engineer",
        description: "Flutter Developer with strong experience in building cross-platform mobile applications, subscription systems, in-app purchases, AI-powered features, and scalable Firebase-based backends.",
        availability: "Available for Freelance Projects"
    };

    const aboutData = {
        description: "I am a Flutter Developer with strong experience in building cross-platform mobile applications, subscription systems, in-app purchases, AI-powered features, and scalable Firebase-based backends. Skilled in architecting clean, maintainable mobile apps with performance, UX, and reliability in mind.",
        features: [
            { icon: "Smartphone", title: "Cross-Platform Dev", description: "Building seamless apps for Android, iOS, and Windows using Flutter." },
            { icon: "Zap", title: "AI Integration", description: "Integrating AI-powered features like chatbots and ML models." },
            { icon: "Code", title: "Clean Architecture", description: "Scalable codebases with MVVM, BLoC, and Riverpod." },
            { icon: "User", title: "User-Centric UX", description: "Creating responsive, pixel-perfect UIs with excellent UX." }
        ]
    };

    const skillsData = {
        categories: [
            {
                title: "Mobile Development",
                skills: ["Flutter", "Dart", "Android", "iOS", "Windows", "Responsive UI", "State Management (GetX, BLoC, RiverPod)", "MVVM", "Layered Architecture", "In-App Purchases", "Stripe Integration", "Firebase Services"]
            },
            {
                title: "AI & Low-Code",
                skills: ["AI-Assisted Development", "Low-Code Platforms", "Vibe Coding", "Rocket (Dhiwise)", "FlutterFlow", "Lovable", "Vercel", "Google Stitch", "Firebase Studio"]
            },
            {
                title: "Backend & Cloud",
                skills: ["Firebase", "REST APIs", "Google Cloud APIs", "Data Encryption & Decryption"]
            },
            {
                title: "Tools",
                skills: ["Android Studio", "VS Code", "Flutter DevTools", "Git", "GitHub", "GitLab", "Fork", "Trello"]
            }
        ]
    };

    const projectsData = {
        items: [
            {
                title: "Vyaya",
                description: "A personal finance management app with offline data encryption and cloud backup. Features secure local storage and seamless synchronization.",
                tags: ["Flutter", "Firebase", "Encryption", "Offline-First"],
                links: { playStore: "https://play.google.com/store/apps/details?id=com.wappnet.vyaya" },
                impact: ["1,000+ Active Users", "4.8/5 Star Rating", "Secure Offline Architecture"]
            },
            {
                title: "Guru AI",
                description: "AI-powered educational tool generating culturally relevant lessons, transforming textbook images into interactive worksheets.",
                tags: ["Flutter", "GenAI", "Education", "Hackathon Winner"],
                links: {},
                impact: ["Winner - Wappnet Hackathon", "Reduced lesson planning by 80%", "Integrated Gemini API"]
            },
            {
                title: "Motobase",
                description: "A cross-platform social app for bikers & car communities with real-time messaging, media handling, and social features.",
                tags: ["Flutter", "Social", "Real-time", "Media"],
                links: {},
                impact: ["Real-time Chat & Feeds", "Cross-Platform (iOS/Android)", "Scalable Firebase Backend"]
            }
        ]
    };

    const experienceData = {
        items: [
            {
                company: "Qurious Click",
                role: "Flutter Developer",
                period: "March 2024 – Present",
                description: [
                    "Designed & developed end-to-end Flutter apps with active users and subscription models",
                    "Implemented In-App Purchases and Stripe for both Android & iOS",
                    "Built major features: Chatbot (virtual therapist), Map integrations, MethodChannel, offline handling",
                    "Enterprise iOS distribution"
                ]
            },
            {
                company: "Wappnet Systems Pvt. Ltd.",
                role: "Associate Software Developer",
                period: "January 2023 – January 2024",
                description: [
                    "Developed and published cross-platform personal finance app (Vyaya)",
                    "Integrated Firebase Authentication, Firestore, Messaging, and Functions",
                    "Created ML prototype using TensorFlow Lite & Google ML Kit",
                    "Used FlutterFlow for rapid prototypes"
                ]
            }
        ]
    };

    const themeData = {
        primaryColor: "sky",
        secondaryColor: "indigo"
    };

    console.log("Writing to Firestore...");
    // Currently rules are locked unless deployed. BUT wait, if I run this script BEFORE deploying rules, then:
    // If the rules are indeed what we saw for leadpilot, they will REJECT because we are trying to write to portfolio_hero which is not matched.
    // So we MUST deploy the rules first. BUT wait, how to deploy rules? We updated firebase.json, so we can run firebase deploy --only firestore:rules.
    // Which means I should run firebase deploy first.

    await setDoc(doc(db, "portfolio_hero", "data"), heroData);
    await setDoc(doc(db, "portfolio_about", "data"), aboutData);
    await setDoc(doc(db, "portfolio_skills", "data"), skillsData);
    await setDoc(doc(db, "portfolio_projects", "data"), projectsData);
    await setDoc(doc(db, "portfolio_experience", "data"), experienceData);
    await setDoc(doc(db, "portfolio_theme", "data"), themeData);
    
    console.log("Migration complete!");
    process.exit(0);
}

migrateData().catch(console.error);
