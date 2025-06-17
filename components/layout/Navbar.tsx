"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-dark-custom sticky-top">
            <div className="container-fluid px-4">
                <Link className="navbar-brand fw-bold text-accent" href="/">
                    🏍️ BikeTouring Pro
                </Link>

                <button className="navbar-toggler border-0" type="button" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/rides">
                                Rides
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/create-ride">
                                Create Ride
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/profile">
                                Profile
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-light dropdown-toggle border-0"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="avatar me-2" />
                                John Rider
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <Link className="dropdown-item" href="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="/settings">
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
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
