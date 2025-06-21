// import Link from "next/link"
// import { Bike, Users, Wrench, Plus, Calendar, TrendingUp } from "lucide-react"

// export default function Dashboard() {
//     const upcomingRides = [
//         {
//             id: 1,
//             title: "Himalayan Adventure",
//             date: "Dec 25, 2024",
//             difficulty: "Advanced",
//             participants: 8,
//             maxParticipants: 12,
//         },
//         {
//             id: 2,
//             title: "Coastal Highway Tour",
//             date: "Dec 30, 2024",
//             difficulty: "Intermediate",
//             participants: 12,
//             maxParticipants: 20,
//         },
//     ]

//     const myBikes = [
//         {
//             id: 1,
//             name: "Royal Enfield Himalayan",
//             model: "2024",
//             image: "/placeholder.svg?height=100&width=150",
//         },
//         {
//             id: 2,
//             name: "KTM Adventure 390",
//             model: "2023",
//             image: "/placeholder.svg?height=100&width=150",
//         },
//     ]

//     return (
//         <div className="fade-in">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <div>
//                     <h1 className="h2 fw-bold mb-1">Dashboard</h1>
//                     <p className="text-muted mb-0">Welcome back, John! Ready for your next adventure?</p>
//                 </div>
//                 <Link href="/create-ride" className="btn btn-accent d-flex align-items-center">
//                     <Plus size={18} className="me-2" />
//                     Create New Ride
//                 </Link>
//             </div>

//             {/* Stats Cards */}
//             <div className="row mb-4 g-3">
//                 <div className="col-lg-3 col-md-6">
//                     <div className="card stats-card border-0">
//                         <div className="card-body p-4">
//                             <div className="d-flex align-items-center">
//                                 <div className="flex-shrink-0">
//                                     <div className="bg-danger bg-opacity-10 rounded-circle p-3">
//                                         <Bike className="text-accent" size={24} />
//                                     </div>
//                                 </div>
//                                 <div className="flex-grow-1 ms-3">
//                                     <div className="text-muted small mb-1">Total Rides</div>
//                                     <div className="h4 mb-0 text-accent fw-bold">24</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6">
//                     <div className="card stats-card border-0">
//                         <div className="card-body p-4">
//                             <div className="d-flex align-items-center">
//                                 <div className="flex-shrink-0">
//                                     <div className="bg-warning bg-opacity-10 rounded-circle p-3">
//                                         <TrendingUp className="text-highlight" size={24} />
//                                     </div>
//                                 </div>
//                                 <div className="flex-grow-1 ms-3">
//                                     <div className="text-muted small mb-1">Total Distance</div>
//                                     <div className="h4 mb-0 text-highlight fw-bold">3,250 KM</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6">
//                     <div className="card stats-card border-0">
//                         <div className="card-body p-4">
//                             <div className="d-flex align-items-center">
//                                 <div className="flex-shrink-0">
//                                     <div className="bg-success bg-opacity-10 rounded-circle p-3">
//                                         <Users className="text-success" size={24} />
//                                     </div>
//                                 </div>
//                                 <div className="flex-grow-1 ms-3">
//                                     <div className="text-muted small mb-1">Connections</div>
//                                     <div className="h4 mb-0 fw-bold">156</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6">
//                     <div className="card stats-card border-0">
//                         <div className="card-body p-4">
//                             <div className="d-flex align-items-center">
//                                 <div className="flex-shrink-0">
//                                     <div className="bg-info bg-opacity-10 rounded-circle p-3">
//                                         <Wrench className="text-info" size={24} />
//                                     </div>
//                                 </div>
//                                 <div className="flex-grow-1 ms-3">
//                                     <div className="text-muted small mb-1">My Bikes</div>
//                                     <div className="h4 mb-0 fw-bold">3</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row">
//                 <div className="col-lg-8 mb-4">
//                     <div className="card card-custom">
//                         <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
//                             <div className="d-flex align-items-center">
//                                 <Calendar className="text-accent me-2" size={20} />
//                                 <h5 className="mb-0 fw-semibold">Upcoming Rides</h5>
//                             </div>
//                             <Link href="/rides" className="btn btn-sm btn-outline-secondary">
//                                 View All
//                             </Link>
//                         </div>
//                         <div className="card-body">
//                             {upcomingRides.map((ride) => (
//                                 <div key={ride.id} className="d-flex align-items-center p-3 mb-3 bg-secondary-custom rounded-3">
//                                     <div className="flex-grow-1">
//                                         <h6 className="mb-2 fw-semibold">{ride.title}</h6>
//                                         <div className="text-muted small d-flex flex-wrap gap-3">
//                                             <span className="d-flex align-items-center">
//                                                 <Calendar size={14} className="me-1" />
//                                                 {ride.date}
//                                             </span>
//                                             <span>
//                                                 <span
//                                                     className={`badge badge-difficulty ${ride.difficulty === "Advanced"
//                                                             ? "bg-danger"
//                                                             : ride.difficulty === "Intermediate"
//                                                                 ? "bg-warning"
//                                                                 : "bg-success"
//                                                         }`}
//                                                 >
//                                                     {ride.difficulty}
//                                                 </span>
//                                             </span>
//                                             <span className="d-flex align-items-center">
//                                                 <Users size={14} className="me-1" />
//                                                 {ride.participants}/{ride.maxParticipants} riders
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <Link href={`/rides/${ride.id}`} className="btn btn-sm btn-accent">
//                                         View Details
//                                     </Link>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-4 mb-4">
//                     <div className="card card-custom">
//                         <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
//                             <div className="d-flex align-items-center">
//                                 <Bike className="text-accent me-2" size={20} />
//                                 <h5 className="mb-0 fw-semibold">My Bikes</h5>
//                             </div>
//                             <Link href="/bikes" className="btn btn-sm btn-outline-secondary">
//                                 Manage
//                             </Link>
//                         </div>
//                         <div className="card-body">
//                             {myBikes.map((bike) => (
//                                 <div key={bike.id} className="d-flex align-items-center p-3 mb-3 bg-secondary-custom rounded-3">
//                                     <img
//                                         src={bike.image || "/placeholder.svg"}
//                                         alt={bike.name}
//                                         className="rounded me-3"
//                                         style={{ width: "60px", height: "40px", objectFit: "cover" }}
//                                     />
//                                     <div className="flex-grow-1">
//                                         <div className="fw-semibold">{bike.name}</div>
//                                         <div className="text-muted small">{bike.model}</div>
//                                     </div>
//                                 </div>
//                             ))}

//                             <Link href="/bikes" className="btn btn-outline-secondary w-100 mt-2">
//                                 <Plus size={16} className="me-2" />
//                                 Add New Bike
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import Link from "next/link"
import { Bike, Users, Wrench, Plus, Calendar, TrendingUp } from "lucide-react"
import { PrismaClient } from "../generated/prisma"

export default async function Dashboard() {

    const prisma = new PrismaClient();
    const bike = await prisma.bike.findMany();
    const bikeCount = await prisma.bike.count();
    const rideCount = await prisma.rideEvent.count();
    const rideDetails = await prisma.rideEvent.findMany({ include: { participants: true } });



    return (
        <div className="fade-in">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h2 fw-bold mb-1">Dashboard</h1>
                    <p className="text-muted mb-0">Welcome back, John! Ready for your next adventure?</p>
                </div>
                <Link href="/create-ride" className="btn btn-accent d-flex align-items-center">
                    <Plus size={18} className="me-2" />
                    Create New Ride
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="row mb-4 g-3">
                <div className="col-lg-3 col-md-6">
                    <div className="card stats-card border-0">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                                        <Bike className="text-accent" size={24} />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small mb-1">Total Rides</div>
                                    <div className="h4 mb-0 text-accent fw-bold">{rideCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card stats-card border-0">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                                        <TrendingUp className="text-highlight" size={24} />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small mb-1">Total Distance</div>
                                    <div className="h4 mb-0 text-highlight fw-bold">3,250 KM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card stats-card border-0">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                        <Users className="text-success" size={24} />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small mb-1">Connections</div>
                                    <div className="h4 mb-0 fw-bold">156</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card stats-card border-0">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="bg-info bg-opacity-10 rounded-circle p-3">
                                        <Wrench className="text-info" size={24} />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="text-muted small mb-1">My Bikes</div>
                                    <div className="h4 mb-0 fw-bold">{bikeCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div  className="col-lg-8 mb-4">
                    <div className="card card-custom">
                        <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                            <div className="d-flex align-items-center">
                                <Calendar className="text-accent me-2" size={20} />
                                <h5 className="mb-0 fw-semibold">Upcoming Ride</h5>
                            </div>
                            <Link href="/rides" className="btn btn-sm btn-outline-secondary">
                                View All
                            </Link>
                        </div>
                        <div className="card-body">
                            {rideDetails.map((r: any) => (
                                <div key={r.id} className="d-flex align-items-center p-3 mb-3 bg-secondary-custom rounded-3">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-2 fw-semibold">{r.title}</h6>
                                        <div className="text-muted small d-flex flex-wrap gap-3">
                                            <span className="d-flex align-items-center">
                                                <Calendar size={14} className="me-1" />
                                                {new Date(r.date).toLocaleDateString()}
                                            </span>
                                            <span>
                                                <span className="badge badge-difficulty bg-danger">
                                                    {r.difficultyLevel}
                                                </span>
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Users size={14} className="me-1" />
                                                {r.participants.length} Participants
                                            </span>
                                        </div>
                                    </div>
                                    <Link href="/rides/1" className="btn btn-sm btn-accent">
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 mb-4">
                    <div className="card card-custom">
                        <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                            <div className="d-flex align-items-center">
                                <Bike className="text-accent me-2" size={20} />
                                <h5 className="mb-0 fw-semibold">My Bike</h5>
                            </div>
                            <Link href="/bikes" className="btn btn-sm btn-outline-secondary">
                                Manage
                            </Link>
                        </div>
                        <div className="card-body">
                            {bike.map((b: any) => (
                                <div className="d-flex align-items-center p-3 mb-3 bg-secondary-custom rounded-3">
                                    <img
                                        src={b.photo || "/placeholder.svg?height=100&width=150"}
                                        alt="Royal Enfield Himalayan"
                                        className="rounded me-3"
                                        style={{ width: "60px", height: "40px", objectFit: "cover" }}
                                    />
                                    <div className="flex-grow-1">
                                        <div className="text-light small">{b.model}</div>
                                        <div className="fw-semibold">
                                            {b.specs.split(", ").map((spec: string, index: number) => (
                                                <span key={index} className="badge text-muted">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Link href="/bikes" className="btn btn-outline-secondary w-100 mt-2">
                                <Plus size={16} className="me-2" />
                                Add New Bike
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}