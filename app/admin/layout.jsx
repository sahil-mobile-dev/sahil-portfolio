"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Loader2, LayoutDashboard, Image as ImageIcon, FileText, Code2, Briefcase, Palette, MessageSquare, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }) {
    const { user, role, loading, signOut } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const isPublicPage = pathname === "/admin/login" || pathname === "/admin/register";
    const isPendingPage = pathname === "/admin/pending";

    useEffect(() => {
        if (!loading) {
            if (!user && !isPublicPage) {
                router.push("/admin/login");
            } else if (user && role !== "admin" && !isPublicPage && !isPendingPage) {
                // User is not an admin, not on a public page, not on pending -> force to pending
                router.push("/admin/pending");
            } else if (user && role === "admin" && (isPublicPage || isPendingPage)) {
                 // Admin trying to access login or pending -> map directly to dashboard
                router.push("/admin");
            }
        }
    }, [user, role, loading, router, pathname, isPublicPage, isPendingPage]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 animate-spin text-sky-500" />
            </div>
        );
    }

    // While waiting for useEffect redirect
    if (!user && !isPublicPage) return null;
    if (user && role !== "admin" && !isPublicPage && !isPendingPage) return null;

    if (isPublicPage || isPendingPage) {
        return <div className="min-h-screen bg-slate-950">{children}</div>;
    }

    const navItems = [
        { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
        { href: "/admin/hero", icon: ImageIcon, label: "Hero Section" },
        { href: "/admin/about", icon: FileText, label: "About" },
        { href: "/admin/skills", icon: Code2, label: "Skills" },
        { href: "/admin/projects", icon: Briefcase, label: "Projects" },
        { href: "/admin/experience", icon: Briefcase, label: "Experience" },
        { href: "/admin/theme", icon: Palette, label: "Theme" },
        { href: "/admin/messages", icon: MessageSquare, label: "Messages" },
    ];

    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-200">
            {/* Sidebar */}
            <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-bold text-slate-100">Admin Panel</h2>
                    <p className="text-xs text-slate-400 mt-1">{user.email}</p>
                </div>
                
                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                        const isStrictActive = isActive && (item.href !== "/admin" || pathname === "/admin");
                        const Icon = item.icon;
                        return (
                            <Link 
                                key={item.href} 
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isStrictActive ? 'bg-sky-500/10 text-sky-400 font-medium' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                            >
                                <Icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-400 hover:bg-slate-800 transition-colors mb-2">
                        View Live Site
                    </Link>
                    <button 
                        onClick={signOut}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
