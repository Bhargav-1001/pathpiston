"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Bike, User, Calendar, MessageCircle, Trophy, MapPin } from "lucide-react"

export default function Sidebar() {
    const pathname = usePathname()

    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
        { href: "/rides", label: "All Rides", icon: MapPin },
        { href: "/bikes", label: "My Bikes", icon: Bike },
        { href: "/profile", label: "Profile", icon: User },
        { href: "/joined-rides", label: "Joined Rides", icon: Calendar },
    ]

    const isActive = (href: string) => {
        if (href === "/dashboard") return pathname === "/" || pathname === "/dashboard"
        return pathname.startsWith(href)
    }

    return (
        <div className="sidebar-custom p-3">
            <div className="mb-4">
                <h6 className="text-muted text-uppercase small fw-bold mb-3 px-2">Navigation</h6>
                <ul className="nav nav-pills flex-column">
                    {navItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <li key={item.href} className="nav-item mb-1">
                                <Link
                                    href={item.href}
                                    className={`nav-link d-flex align-items-center px-3 py-2 ${isActive(item.href) ? "active" : ""}`}
                                >
                                    <IconComponent size={18} className="me-2" />
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="mt-auto">
                <div className="card card-custom border-0">
                    <div className="card-body p-3">
                        <div className="d-flex align-items-center mb-3">
                            <Trophy className="text-accent me-2" size={20} />
                            <h6 className="card-title text-accent mb-0">Quick Stats</h6>
                        </div>
                        <div className="small">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Rides Joined:</span>
                                <span className="text-highlight fw-semibold">12</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total KM:</span>
                                <span className="text-highlight fw-semibold">2,450</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>My Bikes:</span>
                                <span className="text-highlight fw-semibold">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
