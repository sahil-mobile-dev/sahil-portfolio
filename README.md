# Sahil Chudasama - Portfolio Website

A premium, fully responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Integrated with Firebase Firestore for contact form submissions.

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Firebase account

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd sahil-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Firebase**:
    - Go to [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Add a Web App to get your `firebaseConfig`.
    - Enable **Firestore Database** in test mode (or set up rules).
    - Create a collection named `messages`.
    - Open `lib/firebase.js` and replace the placeholder config with your actual Firebase configuration.

4.  **Run locally**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔥 Deployment to Firebase Hosting

1.  **Install Firebase Tools** (if not already installed):
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase**:
    ```bash
    firebase login
    ```

3.  **Initialize Firebase in the project**:
    ```bash
    firebase init
    ```
    - Select **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**.
    - Select **Firestore: Configure security rules and indexes files for Firestore** (optional, but good for rules).
    - Select **Use an existing project** and choose your project.
    - **What do you want to use as your public directory?** `out` (for static export) OR `.next` (if using experimental web frameworks support, but standard static export is safer for simple hosting).
    *RECOMMENDED FOR NEXT.JS ON FIREBASE HOSTING:*
    Use the experimental web frameworks support which handles the build automatically.
    When asked "Detected a Next.js codebase. This is an experimental integration, proceed?", say **Yes**.
    - **Set up automatic builds and deploys with GitHub?** No (unless you want to).

4.  **Deploy**:
    ```bash
    firebase deploy
    ```

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase Firestore

## 📁 Folder Structure
- `app/`: Main application routes and layout.
- `components/`: Reusable UI components (Hero, About, Projects, etc.).
- `lib/`: Utility functions and Firebase configuration.
