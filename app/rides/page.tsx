"use client"

import { useState } from "react"
import Link from "next/link"

export default function RidesPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedDifficulty, setSelectedDifficulty] = useState("all")

    const rides = [
        {
            id: 1,
            title: "Himalayan Adventure - Spiti Valley",
            date: "Dec 25, 2024",
            time: "06:00 AM",
            category: "Adventure",
            meetingPoint: "India Gate, Delhi",
            destination: "Spiti Valley, HP",
            difficulty: "Advanced",
            fees: "₹15,000",
            estimatedKM: "1,200 KM",
            participants: 8,
            maxParticipants: 12,
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Mountain Riders Club",
        },
        {
            id: 2,
            title: "Coastal Highway Tour",
            date: "Dec 30, 2024",
            time: "07:00 AM",
            category: "Touring",
            meetingPoint: "Marine Drive, Mumbai",
            destination: "Goa Beaches",
            difficulty: "Intermediate",
            fees: "₹8,000",
            estimatedKM: "600 KM",
            participants: 15,
            maxParticipants: 20,
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Coastal Riders",
        },
        {
            id: 3,
            title: "Weekend Hill Station Ride",
            date: "Jan 5, 2025",
            time: "08:00 AM",
            category: "Weekend",
            meetingPoint: "Cyber City, Gurgaon",
            destination: "Mussoorie, UK",
            difficulty: "Beginner",
            fees: "₹3,500",
            estimatedKM: "300 KM",
            participants: 6,
            maxParticipants: 15,
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Weekend Warriors",
        },
    ]

    const filteredRides = rides.filter((ride) => {
        const categoryMatch = selectedCategory === "all" || ride.category.toLowerCase() === selectedCategory
        const difficultyMatch = selectedDifficulty === "all" || ride.difficulty.toLowerCase() === selectedDifficulty
        return categoryMatch && difficultyMatch
    })

    const getDifficultyBadgeClass = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case "advanced":
                return "bg-danger"
            case "intermediate":
                return "bg-warning"
            case "beginner":
                return "bg-success"
            default:
                return "bg-secondary"
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h2 fw-bold">Available Rides</h1>
                <Link href="/create-ride" className="btn btn-accent">
                    <span className="me-2">➕</span>Create New Ride
                </Link>
            </div>

            {/* Filters */}
            <div className="card card-dark mb-4">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <label className="form-label">Category</label>
                            <select
                                className="form-select form-control-dark"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                <option value="adventure">Adventure</option>
                                <option value="touring">Touring</option>
                                <option value="weekend">Weekend</option>
                                <option value="track">Track Day</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <label className="form-label">Difficulty Level</label>
                            <select
                                className="form-select form-control-dark"
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                            >
                                <option value="all">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Search</label>
                            <input type="text" className="form-control form-control-dark" placeholder="Search rides..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* Rides Grid */}
            <div className="row">
                {filteredRides.map((ride) => (
                    <div key={ride.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card ride-card card-dark h-100">
                            <img
                                src={ride.image || "/placeholder.svg"}
                                className="card-img-top"
                                alt={ride.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <div className="mb-2">
                                    <span className="badge bg-secondary me-2">{ride.category}</span>
                                    <span className={`badge ${getDifficultyBadgeClass(ride.difficulty)}`}>{ride.difficulty}</span>
                                </div>

                                <h5 className="card-title">{ride.title}</h5>

                                <div className="mb-3 flex-grow-1">
                                    <div className="small text-muted mb-2">
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="me-2">📅</span>
                                            <span>
                                                {ride.date} at {ride.time}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="me-2">📍</span>
                                            <span>{ride.meetingPoint}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="me-2">🎯</span>
                                            <span>{ride.destination}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="me-2">📏</span>
                                            <span>{ride.estimatedKM}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">👥</span>
                                            <span>
                                                {ride.participants}/{ride.maxParticipants} riders
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="h5 text-accent mb-0">{ride.fees}</div>
                                    <div className="small text-muted">by {ride.organizer}</div>
                                </div>

                                <div className="d-flex gap-2">
                                    <Link href={`/rides/${ride.id}`} className="btn btn-outline-light flex-grow-1">
                                        View Details
                                    </Link>
                                    <button className="btn btn-accent">Join Ride</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredRides.length === 0 && (
                <div className="text-center py-5">
                    <div className="display-1 text-muted mb-3">🏍️</div>
                    <h4 className="text-muted">No rides found</h4>
                    <p className="text-muted">Try adjusting your filters or create a new ride</p>
                    <Link href="/create-ride" className="btn btn-accent">
                        Create New Ride
                    </Link>
                </div>
            )}
        </div>
    )
}
