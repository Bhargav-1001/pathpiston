"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, Users, Eye, Clock, Award, Filter } from "lucide-react"

export default function JoinedRidesPage() {
    const [selectedFilter, setSelectedFilter] = useState("all")
    const router = useRouter()

    const joinedRides = [
        {
            id: 1,
            title: "Leh-Ladakh Expedition",
            date: "Nov 15, 2024",
            status: "Completed",
            distance: "1,200 KM",
            difficulty: "Advanced",
            participants: 12,
            maxParticipants: 15,
            meetingPoint: "India Gate, Delhi",
            destination: "Leh, Ladakh",
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Mountain Riders Club",
        },
        {
            id: 2,
            title: "Western Ghats Tour",
            date: "Oct 20, 2024",
            status: "Completed",
            distance: "800 KM",
            difficulty: "Intermediate",
            participants: 18,
            maxParticipants: 20,
            meetingPoint: "Marine Drive, Mumbai",
            destination: "Goa Beaches",
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Coastal Riders",
        },
        {
            id: 3,
            title: "Himalayan Adventure",
            date: "Dec 25, 2024",
            status: "Upcoming",
            distance: "1,500 KM",
            difficulty: "Advanced",
            participants: 8,
            maxParticipants: 12,
            meetingPoint: "India Gate, Delhi",
            destination: "Spiti Valley, HP",
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Mountain Riders Club",
        },
        {
            id: 4,
            title: "Coastal Highway Tour",
            date: "Dec 30, 2024",
            status: "Upcoming",
            distance: "600 KM",
            difficulty: "Intermediate",
            participants: 15,
            maxParticipants: 20,
            meetingPoint: "Marine Drive, Mumbai",
            destination: "Goa Beaches",
            image: "/placeholder.svg?height=200&width=300",
            organizer: "Coastal Riders",
        },
    ]

    const filteredRides = joinedRides.filter((ride) => {
        if (selectedFilter === "all") return true
        return ride.status.toLowerCase() === selectedFilter
    })

    const handleViewDetails = (rideId: number) => {
        router.push(`/rides/${rideId}`)
    }

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

    const getStatusBadgeClass = (status: string) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-success"
            case "upcoming":
                return "bg-warning"
            case "cancelled":
                return "bg-danger"
            default:
                return "bg-secondary"
        }
    }

    return (
        <div className="fade-in">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h2 fw-bold mb-1 d-flex align-items-center">
                        <Calendar className="text-accent me-3" size={32} />
                        Joined Rides
                    </h1>
                    <p className="text-muted mb-0">Track your riding adventures and upcoming journeys</p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="card card-custom mb-4">
                <div className="card-body p-3">
                    <div className="d-flex align-items-center gap-3">
                        <Filter className="text-accent" size={20} />
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className={`btn ${selectedFilter === "all" ? "btn-accent" : "btn-outline-secondary"}`}
                                onClick={() => setSelectedFilter("all")}
                            >
                                All Rides ({joinedRides.length})
                            </button>
                            <button
                                type="button"
                                className={`btn ${selectedFilter === "upcoming" ? "btn-accent" : "btn-outline-secondary"}`}
                                onClick={() => setSelectedFilter("upcoming")}
                            >
                                Upcoming ({joinedRides.filter((r) => r.status === "Upcoming").length})
                            </button>
                            <button
                                type="button"
                                className={`btn ${selectedFilter === "completed" ? "btn-accent" : "btn-outline-secondary"}`}
                                onClick={() => setSelectedFilter("completed")}
                            >
                                Completed ({joinedRides.filter((r) => r.status === "Completed").length})
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rides Grid */}
            <div className="row">
                {filteredRides.map((ride) => (
                    <div key={ride.id} className="col-lg-6 mb-4">
                        <div className="card ride-card card-custom h-100">
                            <div className="row g-0 h-100">
                                <div className="col-md-4">
                                    <img
                                        src={ride.image || "/placeholder.svg"}
                                        className="img-fluid h-100 w-100"
                                        alt={ride.title}
                                        style={{ objectFit: "cover", minHeight: "200px" }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column h-100 p-4">
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <div className="d-flex gap-2">
                                                    <span className={`badge ${getDifficultyBadgeClass(ride.difficulty)} badge-difficulty`}>
                                                        {ride.difficulty}
                                                    </span>
                                                    <span className={`badge ${getStatusBadgeClass(ride.status)} badge-difficulty`}>
                                                        {ride.status}
                                                    </span>
                                                </div>
                                                <small className="text-muted">by {ride.organizer}</small>
                                            </div>
                                            <h5 className="card-title fw-bold mb-2">{ride.title}</h5>
                                        </div>

                                        <div className="mb-3 flex-grow-1">
                                            <div className="row text-sm">
                                                <div className="col-12 mb-2">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <Calendar size={14} className="me-2" />
                                                        <span>{ride.date}</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <MapPin size={14} className="me-2" />
                                                        <span>
                                                            {ride.meetingPoint} → {ride.destination}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <Clock size={14} className="me-2" />
                                                        <span>{ride.distance}</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <Users size={14} className="me-2" />
                                                        <span>
                                                            {ride.participants}/{ride.maxParticipants} riders
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <button className="btn btn-accent w-100" onClick={() => handleViewDetails(ride.id)}>
                                                <Eye size={16} className="me-2" />
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredRides.length === 0 && (
                <div className="text-center py-5">
                    <div className="bg-secondary-custom rounded-circle p-4 d-inline-flex mb-4">
                        <Calendar className="text-muted" size={48} />
                    </div>
                    <h4 className="text-muted mb-3">No rides found</h4>
                    <p className="text-muted mb-4">
                        {selectedFilter === "all" ? "You haven't joined any rides yet" : `No ${selectedFilter} rides found`}
                    </p>
                    <button className="btn btn-accent" onClick={() => router.push("/rides")}>
                        <MapPin size={16} className="me-2" />
                        Browse Available Rides
                    </button>
                </div>
            )}

            {/* Stats Summary */}
            {filteredRides.length > 0 && (
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card card-custom">
                            <div className="card-body p-4">
                                <h6 className="fw-semibold mb-3 d-flex align-items-center">
                                    <Award className="text-accent me-2" size={20} />
                                    Riding Summary
                                </h6>
                                <div className="row text-center">
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="h4 text-accent mb-0 fw-bold">
                                            {joinedRides.filter((r) => r.status === "Completed").length}
                                        </div>
                                        <div className="small text-muted">Completed Rides</div>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="h4 text-highlight mb-0 fw-bold">
                                            {joinedRides
                                                .reduce((total, ride) => total + Number.parseInt(ride.distance.replace(/[^\d]/g, "")), 0)
                                                .toLocaleString()}
                                        </div>
                                        <div className="small text-muted">Total KM</div>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="h4 mb-0 fw-bold">{joinedRides.filter((r) => r.status === "Upcoming").length}</div>
                                        <div className="small text-muted">Upcoming Rides</div>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="h4 mb-0 fw-bold">
                                            {joinedRides.reduce((total, ride) => total + ride.participants, 0)}
                                        </div>
                                        <div className="small text-muted">Fellow Riders Met</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
