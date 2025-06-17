"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: "📊" },
        { href: "/rides", label: "All Rides", icon: "🏍️" },
        { href: "/create-ride", label: "Create Ride", icon: "➕" },
        { href: "/profile", label: "Profile", icon: "👤" },
        { href: "/bikes", label: "My Bikes", icon: "🔧" },
        { href: "/chat", label: "Group Chats", icon: "💬" },
    ]

    return (
        <div className="sidebar p-3">
            <div className="mb-4">
                <h6 className="text-muted text-uppercase small fw-bold mb-3">Navigation</h6>
                <ul className="nav nav-pills flex-column">
                    {navItems.map((item) => (
                        <li key={item.href} className="nav-item mb-1">
                            <Link
                                href={item.href}
                                className={`nav-link d-flex align-items-center ${pathname === item.href ? "active bg-danger" : "text-light"
                                    }`}
                            >
                                <span className="me-2">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto">
                <div className="card card-dark border-0">
                    <div className="card-body p-3">
                        <h6 className="card-title text-accent mb-2">Quick Stats</h6>
                        <div className="small">
                            <div className="d-flex justify-content-between mb-1">
                                <span>Rides Joined:</span>
                                <span className="text-highlight">12</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Total KM:</span>
                                <span className="text-highlight">2,450</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
