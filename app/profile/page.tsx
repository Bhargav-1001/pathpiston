"use client"

import { useState } from "react"

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("overview")

    const userBikes = [
        {
            id: 1,
            name: "Royal Enfield Himalayan",
            model: "2024",
            engine: "411cc",
            type: "Adventure",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 2,
            name: "KTM Adventure 390",
            model: "2023",
            engine: "373cc",
            type: "Adventure",
            image: "/placeholder.svg?height=200&width=300",
        },
    ]

    const ridesJoined = [
        {
            id: 1,
            title: "Leh-Ladakh Expedition",
            date: "Nov 15, 2024",
            status: "Completed",
            distance: "1,200 KM",
        },
        {
            id: 2,
            title: "Western Ghats Tour",
            date: "Oct 20, 2024",
            status: "Completed",
            distance: "800 KM",
        },
    ]

    return (
        <div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card card-dark">
                        <div className="card-body text-center">
                            <img
                                src="/placeholder.svg?height=120&width=120"
                                alt="Profile"
                                className="rounded-circle mb-3"
                                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                            />
                            <h4 className="mb-1">John Rider</h4>
                            <p className="text-muted mb-3">john.rider@email.com</p>

                            <div className="mb-3">
                                <span className="badge bg-warning badge-difficulty">Advanced Rider</span>
                            </div>

                            <div className="row text-center">
                                <div className="col-4">
                                    <div className="h5 text-accent mb-0">24</div>
                                    <div className="small text-muted">Rides</div>
                                </div>
                                <div className="col-4">
                                    <div className="h5 text-highlight mb-0">3,250</div>
                                    <div className="small text-muted">KM</div>
                                </div>
                                <div className="col-4">
                                    <div className="h5 mb-0">3</div>
                                    <div className="small text-muted">Bikes</div>
                                </div>
                            </div>

                            <button className="btn btn-accent w-100 mt-3">Edit Profile</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card card-dark">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs" role="tablist">
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
                                        onClick={() => setActiveTab("overview")}
                                    >
                                        Overview
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === "bikes" ? "active" : ""}`}
                                        onClick={() => setActiveTab("bikes")}
                                    >
                                        Bikes
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === "rides" ? "active" : ""}`}
                                        onClick={() => setActiveTab("rides")}
                                    >
                                        Rides Joined
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body">
                            {activeTab === "overview" && (
                                <div>
                                    <h5 className="mb-3">Riding Experience</h5>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label text-muted">Experience Level</label>
                                                <div className="fw-semibold">Advanced</div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label text-muted">Years of Riding</label>
                                                <div className="fw-semibold">8 Years</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label text-muted">Preferred Terrain</label>
                                                <div className="fw-semibold">Mountains, Highways</div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label text-muted">Riding Style</label>
                                                <div className="fw-semibold">Adventure Touring</div>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="mb-3">Recent Activity</h5>
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item bg-transparent border-secondary">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-1">Joined "Himalayan Adventure"</h6>
                                                <small>2 days ago</small>
                                            </div>
                                            <p className="mb-1 text-muted">Registered for upcoming ride to Spiti Valley</p>
                                        </div>
                                        <div className="list-group-item bg-transparent border-secondary">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-1">Added new bike</h6>
                                                <small>1 week ago</small>
                                            </div>
                                            <p className="mb-1 text-muted">Royal Enfield Himalayan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "bikes" && (
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">My Bikes</h5>
                                        <button className="btn btn-accent">
                                            <span className="me-2">➕</span>Add Bike
                                        </button>
                                    </div>

                                    <div className="row">
                                        {userBikes.map((bike) => (
                                            <div key={bike.id} className="col-md-6 mb-4">
                                                <div className="card bike-card">
                                                    <img
                                                        src={bike.image || "/placeholder.svg"}
                                                        className="card-img-top"
                                                        alt={bike.name}
                                                        style={{ height: "200px", objectFit: "cover" }}
                                                    />
                                                    <div className="card-body">
                                                        <h6 className="card-title">{bike.name}</h6>
                                                        <div className="row text-sm">
                                                            <div className="col-6">
                                                                <div className="text-muted">Model</div>
                                                                <div>{bike.model}</div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="text-muted">Engine</div>
                                                                <div>{bike.engine}</div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <span className="badge bg-secondary me-2">{bike.type}</span>
                                                        </div>
                                                        <div className="mt-3 d-flex gap-2">
                                                            <button className="btn btn-sm btn-outline-light">Edit</button>
                                                            <button className="btn btn-sm btn-outline-danger">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "rides" && (
                                <div>
                                    <h5 className="mb-4">Rides Joined</h5>
                                    <div className="table-responsive">
                                        <table className="table table-dark table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Ride Title</th>
                                                    <th>Date</th>
                                                    <th>Distance</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ridesJoined.map((ride) => (
                                                    <tr key={ride.id}>
                                                        <td>{ride.title}</td>
                                                        <td>{ride.date}</td>
                                                        <td>{ride.distance}</td>
                                                        <td>
                                                            <span className="badge bg-success">{ride.status}</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-sm btn-outline-light">View Details</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
