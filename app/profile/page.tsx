"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Bike, Calendar, Edit3, Clock, Eye, Plus } from "lucide-react"

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("profile")
    const router = useRouter()

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
            difficulty: "Advanced",
        },
        {
            id: 2,
            title: "Western Ghats Tour",
            date: "Oct 20, 2024",
            status: "Completed",
            distance: "800 KM",
            difficulty: "Intermediate",
        },
        {
            id: 3,
            title: "Himalayan Adventure",
            date: "Dec 25, 2024",
            status: "Upcoming",
            distance: "1,500 KM",
            difficulty: "Advanced",
        },
    ]

    const handleBikeClick = (bikeId: number) => {
        // Navigate to My Bikes page with the specific bike highlighted
        router.push(`/bikes?highlight=${bikeId}`)
    }

    const handleRideDetailsClick = (rideId: number) => {
        // Navigate to Ride Details page
        router.push(`/rides/${rideId}`)
    }

    const tabs = [
        { id: "profile", label: "Profile Info", icon: User },
        { id: "bikes", label: "My Bikes", icon: Bike },
        { id: "rides", label: "Rides Joined", icon: Calendar },
    ]

    return (
        <div className="fade-in">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card card-custom">
                        <div className="card-body text-center p-4">
                            <div className="position-relative d-inline-block mb-3">
                                <img
                                    src="/placeholder.svg?height=120&width=120"
                                    alt="Profile"
                                    className="avatar-xl border border-custom"
                                />
                                <button className="btn btn-sm btn-accent position-absolute bottom-0 end-0 rounded-circle p-2">
                                    <Edit3 size={14} />
                                </button>
                            </div>

                            <h4 className="mb-1 fw-bold">John Rider</h4>
                            <p className="text-muted mb-3">john.rider@email.com</p>

                            <div className="mb-4">
                                <span className="badge bg-warning badge-difficulty">Advanced Rider</span>
                            </div>

                            <div className="row text-center mb-4">
                                <div className="col-4">
                                    <div className="h4 text-accent mb-0 fw-bold">24</div>
                                    <div className="small text-muted">Rides</div>
                                </div>
                                <div className="col-4">
                                    <div className="h4 text-highlight mb-0 fw-bold">3,250</div>
                                    <div className="small text-muted">KM</div>
                                </div>
                                <div className="col-4">
                                    <div className="h4 mb-0 fw-bold">3</div>
                                    <div className="small text-muted">Bikes</div>
                                </div>
                            </div>

                            <button className="btn btn-accent w-100">
                                <Edit3 size={16} className="me-2" />
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card card-custom">
                        <div className="card-header border-0">
                            <ul className="nav nav-tabs card-header-tabs border-0" role="tablist">
                                {tabs.map((tab) => {
                                    const IconComponent = tab.icon
                                    return (
                                        <li key={tab.id} className="nav-item">
                                            <button
                                                className={`nav-link d-flex align-items-center px-4 py-3 ${activeTab === tab.id ? "active" : ""
                                                    }`}
                                                onClick={() => setActiveTab(tab.id)}
                                            >
                                                <IconComponent size={16} className="me-2" />
                                                {tab.label}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="card-body p-4">
                            {activeTab === "profile" && (
                                <div>
                                    <h5 className="mb-4 d-flex align-items-center">
                                        <User className="text-accent me-2" size={20} />
                                        Riding Experience
                                    </h5>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label text-muted small">Experience Level</label>
                                                <div className="fw-semibold">Advanced</div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label text-muted small">Years of Riding</label>
                                                <div className="fw-semibold">8 Years</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label text-muted small">Preferred Terrain</label>
                                                <div className="fw-semibold">Mountains, Highways</div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label text-muted small">Riding Style</label>
                                                <div className="fw-semibold">Adventure Touring</div>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="mb-4 d-flex align-items-center">
                                        <Clock className="text-accent me-2" size={20} />
                                        Recent Activity
                                    </h5>

                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item bg-transparent border-custom px-0">
                                            <div className="d-flex w-100 justify-content-between align-items-start">
                                                <div>
                                                    <h6 className="mb-1">Joined "Himalayan Adventure"</h6>
                                                    <p className="mb-1 text-muted">Registered for upcoming ride to Spiti Valley</p>
                                                </div>
                                                <small className="text-muted">2 days ago</small>
                                            </div>
                                        </div>
                                        <div className="list-group-item bg-transparent border-custom px-0">
                                            <div className="d-flex w-100 justify-content-between align-items-start">
                                                <div>
                                                    <h6 className="mb-1">Added new bike</h6>
                                                    <p className="mb-1 text-muted">Royal Enfield Himalayan 2024</p>
                                                </div>
                                                <small className="text-muted">1 week ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "bikes" && (
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0 d-flex align-items-center">
                                            <Bike className="text-accent me-2" size={20} />
                                            My Bikes
                                        </h5>
                                        <button className="btn btn-accent">
                                            <Plus size={16} className="me-2" />
                                            Add Bike
                                        </button>
                                    </div>

                                    <div className="row">
                                        {userBikes.map((bike) => (
                                            <div key={bike.id} className="col-md-6 mb-4">
                                                <div
                                                    className="card bike-card"
                                                    onClick={() => handleBikeClick(bike.id)}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        src={bike.image || "/placeholder.svg"}
                                                        className="card-img-top"
                                                        alt={bike.name}
                                                        style={{ height: "200px", objectFit: "cover" }}
                                                    />
                                                    <div className="card-body">
                                                        <h6 className="card-title fw-semibold">{bike.name}</h6>
                                                        <div className="row text-sm mb-3">
                                                            <div className="col-6">
                                                                <div className="text-muted small">Model</div>
                                                                <div className="fw-semibold">{bike.model}</div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="text-muted small">Engine</div>
                                                                <div className="fw-semibold">{bike.engine}</div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="badge bg-secondary">{bike.type}</span>
                                                            <small className="text-muted">Click to view details</small>
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
                                    <h5 className="mb-4 d-flex align-items-center">
                                        <Calendar className="text-accent me-2" size={20} />
                                        Rides Joined
                                    </h5>

                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="border-0">Ride Title</th>
                                                    <th className="border-0">Date</th>
                                                    <th className="border-0">Distance</th>
                                                    <th className="border-0">Difficulty</th>
                                                    <th className="border-0">Status</th>
                                                    <th className="border-0">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ridesJoined.map((ride) => (
                                                    <tr key={ride.id}>
                                                        <td className="fw-semibold">{ride.title}</td>
                                                        <td>{ride.date}</td>
                                                        <td>{ride.distance}</td>
                                                        <td>
                                                            <span
                                                                className={`badge badge-difficulty ${ride.difficulty === "Advanced"
                                                                        ? "bg-danger"
                                                                        : ride.difficulty === "Intermediate"
                                                                            ? "bg-warning"
                                                                            : "bg-success"
                                                                    }`}
                                                            >
                                                                {ride.difficulty}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span
                                                                className={`badge ${ride.status === "Completed"
                                                                        ? "bg-success"
                                                                        : ride.status === "Upcoming"
                                                                            ? "bg-warning"
                                                                            : "bg-secondary"
                                                                    }`}
                                                            >
                                                                {ride.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-outline-secondary"
                                                                onClick={() => handleRideDetailsClick(ride.id)}
                                                            >
                                                                <Eye size={14} className="me-1" />
                                                                View Details
                                                            </button>
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
