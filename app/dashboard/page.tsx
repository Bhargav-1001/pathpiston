import Link from "next/link"

export default function Dashboard() {
    const upcomingRides = [
        {
            id: 1,
            title: "Himalayan Adventure",
            date: "Dec 25, 2024",
            difficulty: "Advanced",
            participants: 8,
        },
        {
            id: 2,
            title: "Coastal Highway Tour",
            date: "Dec 30, 2024",
            difficulty: "Intermediate",
            participants: 12,
        },
    ]

    const myBikes = [
        {
            id: 1,
            name: "Royal Enfield Himalayan",
            model: "2024",
            image: "/placeholder.svg?height=100&width=150",
        },
        {
            id: 2,
            name: "KTM Adventure 390",
            model: "2023",
            image: "/placeholder.svg?height=100&width=150",
        },
    ]

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h2 fw-bold">Dashboard</h1>
                <Link href="/create-ride" className="btn btn-accent">
                    <span className="me-2">➕</span>Create New Ride
                </Link>
            </div>

            <div className="row mb-4">
                <div className="col-md-3 mb-3">
                    <div className="card card-dark border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-danger rounded-circle p-3">
                                        <span className="text-white">🏍️</span>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small">Total Rides</div>
                                    <div className="h4 mb-0 text-accent">24</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card card-dark border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-warning rounded-circle p-3">
                                        <span className="text-white">📏</span>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small">Total Distance</div>
                                    <div className="h4 mb-0 text-highlight">3,250 KM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card card-dark border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-success rounded-circle p-3">
                                        <span className="text-white">👥</span>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small">Connections</div>
                                    <div className="h4 mb-0">156</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card card-dark border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-info rounded-circle p-3">
                                        <span className="text-white">🔧</span>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small">My Bikes</div>
                                    <div className="h4 mb-0">3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 mb-4">
                    <div className="card card-dark">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Upcoming Rides</h5>
                            <Link href="/rides" className="btn btn-sm btn-outline-light">
                                View All
                            </Link>
                        </div>
                        <div className="card-body">
                            {upcomingRides.map((ride) => (
                                <div key={ride.id} className="d-flex align-items-center p-3 mb-3 bg-primary-custom rounded">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-1">{ride.title}</h6>
                                        <div className="text-muted small">
                                            <span className="me-3">📅 {ride.date}</span>
                                            <span className="me-3">
                                                <span
                                                    className={`badge ${ride.difficulty === "Advanced"
                                                            ? "bg-danger"
                                                            : ride.difficulty === "Intermediate"
                                                                ? "bg-warning"
                                                                : "bg-success"
                                                        }`}
                                                >
                                                    {ride.difficulty}
                                                </span>
                                            </span>
                                            <span>👥 {ride.participants} riders</span>
                                        </div>
                                    </div>
                                    <Link href={`/rides/${ride.id}`} className="btn btn-sm btn-accent">
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">
                    <div className="card card-dark">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">My Bikes</h5>
                            <Link href="/bikes" className="btn btn-sm btn-outline-light">
                                Manage
                            </Link>
                        </div>
                        <div className="card-body">
                            {myBikes.map((bike) => (
                                <div key={bike.id} className="d-flex align-items-center p-2 mb-3 bg-primary-custom rounded">
                                    <img
                                        src={bike.image || "/placeholder.svg"}
                                        alt={bike.name}
                                        className="rounded me-3"
                                        style={{ width: "60px", height: "40px", objectFit: "cover" }}
                                    />
                                    <div className="flex-grow-1">
                                        <div className="fw-semibold">{bike.name}</div>
                                        <div className="text-muted small">{bike.model}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
