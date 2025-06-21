"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useTheme } from "@/app/lib/theme-context"

import { Home, Bike, User, Calendar, Sun, Moon, Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const pathname = usePathname()

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/bikes", label: "My Bikes", icon: Bike },
        { href: "/profile", label: "My Profile", icon: User },
        { href: "/joined-rides", label: "Joined Rides", icon: Calendar },
    ]

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
            <div className="container-fluid px-4">
                <Link className="navbar-brand fw-bold text-accent d-flex align-items-center" href="/">
                    <Bike className="me-2" size={24} />
                    PathPiston
                </Link>

                <button
                    className="navbar-toggler border-0 p-0"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <li key={item.href} className="nav-item">
                                    <Link
                                        className={`nav-link d-flex align-items-center px-3 py-2 rounded-3 ${isActive(item.href) ? "active text-accent fw-semibold" : ""
                                            }`}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <IconComponent size={18} className="me-2" />
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="d-flex align-items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            className="btn theme-toggle d-flex align-items-center"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        {/* User Dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center border-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="avatar me-2" />
                                <span className="d-none d-md-inline">John Rider</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="/profile">
                                        <User size={16} className="me-2" />
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <span className="me-2">🚪</span>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
