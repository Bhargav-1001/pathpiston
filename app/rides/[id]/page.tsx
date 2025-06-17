"use client"

import { useState } from "react"

export default function RideDetailsPage({ params }: { params: { id: string } }) {
    const [showJoinModal, setShowJoinModal] = useState(false)
    const [hasJoined, setHasJoined] = useState(false)

    // Mock data - in real app, fetch based on params.id
    const ride = {
        id: 1,
        title: "Himalayan Adventure - Spiti Valley",
        description:
            "Join us for an epic adventure through the breathtaking landscapes of Spiti Valley. This challenging ride will take you through some of the most scenic and treacherous mountain passes in the Himalayas.",
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
        image: "/placeholder.svg?height=400&width=800",
        organizer: {
            name: "Mountain Riders Club",
            avatar: "/placeholder.svg?height=50&width=50",
            rating: 4.8,
            ridesOrganized: 24,
        },
        requirements: "Valid driving license, protective gear, spare parts, emergency kit",
        itinerary: [
            "Day 1: Delhi to Shimla (350 KM)",
            "Day 2: Shimla to Kalpa (250 KM)",
            "Day 3: Kalpa to Tabo (150 KM)",
            "Day 4: Tabo to Kaza (50 KM)",
            "Day 5: Kaza exploration and return journey",
        ],
    }

    const participants = [
        {
            id: 1,
            name: "Rajesh Kumar",
            avatar: "/placeholder.svg?height=40&width=40",
            experience: "Advanced",
            bike: "Royal Enfield Himalayan",
        },
        {
            id: 2,
            name: "Priya Singh",
            avatar: "/placeholder.svg?height=40&width=40",
            experience: "Intermediate",
            bike: "KTM Adventure 390",
        },
        {
            id: 3,
            name: "Amit Sharma",
            avatar: "/placeholder.svg?height=40&width=40",
            experience: "Advanced",
            bike: "BMW GS 310",
        },
        {
            id: 4,
            name: "Neha Gupta",
            avatar: "/placeholder.svg?height=40&width=40",
            experience: "Advanced",
            bike: "Honda CB500X",
        },
    ]

    const handleJoinRide = () => {
        setHasJoined(true)
        setShowJoinModal(false)
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <div className="card card-dark">
                        <img
                            src={ride.image || "/placeholder.svg"}
                            className="card-img-top"
                            alt={ride.title}
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <div className="mb-2">
                                        <span className="badge bg-secondary me-2">{ride.category}</span>
                                        <span className="badge bg-danger">{ride.difficulty}</span>
                                    </div>
                                    <h2 className="mb-2">{ride.title}</h2>
                                    <div className="text-muted">
                                        Organized by <strong>{ride.organizer.name}</strong>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="h3 text-accent mb-0">{ride.fees}</div>
                                    <div className="small text-muted">per rider</div>
                                </div>
                            </div>

                            <p className="mb-4">{ride.description}</p>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="me-2">📅</span>
                                            <strong>Date & Time</strong>
                                        </div>
                                        <div className="ms-4 text-muted">
                                            {ride.date} at {ride.time}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="me-2">📍</span>
                                            <strong>Meeting Point</strong>
                                        </div>
                                        <div className="ms-4 text-muted">{ride.meetingPoint}</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="me-2">🎯</span>
                                            <strong>Destination</strong>
                                        </div>
                                        <div className="ms-4 text-muted">{ride.destination}</div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="me-2">📏</span>
                                            <strong>Distance</strong>
                                        </div>
                                        <div className="ms-4 text-muted">{ride.estimatedKM}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">Itinerary</h5>
                                <ul className="list-group list-group-flush">
                                    {ride.itinerary.map((day, index) => (
                                        <li key={index} className="list-group-item bg-transparent border-secondary">
                                            {day}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">Requirements</h5>
                                <p className="text-muted">{ride.requirements}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card card-dark mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={ride.organizer.avatar || "/placeholder.svg"}
                                    alt={ride.organizer.name}
                                    className="avatar me-3"
                                />
                                <div>
                                    <h6 className="mb-0">{ride.organizer.name}</h6>
                                    <div className="small text-muted">
                                        ⭐ {ride.organizer.rating} • {ride.organizer.ridesOrganized} rides organized
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-light flex-grow-1">Contact Organizer</button>
                                <button className="btn btn-outline-light">💬</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-dark mb-4">
                        <div className="card-header">
                            <h6 className="mb-0">
                                Participants ({ride.participants}/{ride.maxParticipants})
                            </h6>
                        </div>
                        <div className="card-body">
                            {participants.map((participant) => (
                                <div key={participant.id} className="d-flex align-items-center mb-3">
                                    <img src={participant.avatar || "/placeholder.svg"} alt={participant.name} className="avatar me-3" />
                                    <div className="flex-grow-1">
                                        <div className="fw-semibold">{participant.name}</div>
                                        <div className="small text-muted">
                                            <span
                                                className={`badge badge-difficulty ${participant.experience === "Advanced"
                                                        ? "bg-danger"
                                                        : participant.experience === "Intermediate"
                                                            ? "bg-warning"
                                                            : "bg-success"
                                                    } me-2`}
                                            >
                                                {participant.experience}
                                            </span>
                                            {participant.bike}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {hasJoined && (
                                <div className="alert alert-success">
                                    <strong>You've joined this ride!</strong> Check your dashboard for updates.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card card-dark">
                        <div className="card-body text-center">
                            {!hasJoined ? (
                                <button className="btn btn-accent btn-lg w-100 mb-3" onClick={() => setShowJoinModal(true)}>
                                    Join This Ride
                                </button>
                            ) : (
                                <button className="btn btn-success btn-lg w-100 mb-3" disabled>
                                    ✓ Joined
                                </button>
                            )}

                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-light flex-grow-1">Share</button>
                                <button className="btn btn-outline-light flex-grow-1">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Modal */}
            {showJoinModal && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content bg-secondary-custom">
                            <div className="modal-header">
                                <h5 className="modal-title">Join Ride Confirmation</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={() => setShowJoinModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    You're about to join <strong>{ride.title}</strong>
                                </p>
                                <div className="mb-3">
                                    <strong>Total Cost:</strong> {ride.fees}
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="termsCheck" />
                                    <label className="form-check-label" htmlFor="termsCheck">
                                        I agree to the terms and conditions and ride safety guidelines
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-light" onClick={() => setShowJoinModal(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-accent" onClick={handleJoinRide}>
                                    Confirm & Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
