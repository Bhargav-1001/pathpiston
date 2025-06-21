

// import { useState } from "react"
// import Link from "next/link"
// import { MapPin, Plus, Filter, Search, Calendar, Users, Clock, DollarSign } from "lucide-react"

// export default function RidesPage() {
//     const [selectedCategory, setSelectedCategory] = useState("all")
//     const [selectedDifficulty, setSelectedDifficulty] = useState("all")
//     const [searchTerm, setSearchTerm] = useState("")

//     const rides = [
//         {
//             id: 1,
//             title: "Himalayan Adventure - Spiti Valley",
//             date: "Dec 25, 2024",
//             time: "06:00 AM",
//             category: "Adventure",
//             meetingPoint: "India Gate, Delhi",
//             destination: "Spiti Valley, HP",
//             difficulty: "Advanced",
//             fees: "₹15,000",
//             estimatedKM: "1,200 KM",
//             participants: 8,
//             maxParticipants: 12,
//             image: "/placeholder.svg?height=200&width=300",
//             organizer: "Mountain Riders Club",
//         },
//         {
//             id: 2,
//             title: "Coastal Highway Tour",
//             date: "Dec 30, 2024",
//             time: "07:00 AM",
//             category: "Touring",
//             meetingPoint: "Marine Drive, Mumbai",
//             destination: "Goa Beaches",
//             difficulty: "Intermediate",
//             fees: "₹8,000",
//             estimatedKM: "600 KM",
//             participants: 15,
//             maxParticipants: 20,
//             image: "/placeholder.svg?height=200&width=300",
//             organizer: "Coastal Riders",
//         },
//         {
//             id: 3,
//             title: "Weekend Hill Station Ride",
//             date: "Jan 5, 2025",
//             time: "08:00 AM",
//             category: "Weekend",
//             meetingPoint: "Cyber City, Gurgaon",
//             destination: "Mussoorie, UK",
//             difficulty: "Beginner",
//             fees: "₹3,500",
//             estimatedKM: "300 KM",
//             participants: 6,
//             maxParticipants: 15,
//             image: "/placeholder.svg?height=200&width=300",
//             organizer: "Weekend Warriors",
//         },
//     ]

//     const filteredRides = rides.filter((ride) => {
//         const categoryMatch = selectedCategory === "all" || ride.category.toLowerCase() === selectedCategory
//         const difficultyMatch = selectedDifficulty === "all" || ride.difficulty.toLowerCase() === selectedDifficulty
//         const searchMatch =
//             searchTerm === "" ||
//             ride.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             ride.destination.toLowerCase().includes(searchTerm.toLowerCase())
//         return categoryMatch && difficultyMatch && searchMatch
//     })

//     const getDifficultyBadgeClass = (difficulty: string) => {
//         switch (difficulty.toLowerCase()) {
//             case "advanced":
//                 return "bg-danger"
//             case "intermediate":
//                 return "bg-warning"
//             case "beginner":
//                 return "bg-success"
//             default:
//                 return "bg-secondary"
//         }
//     }

//     return (
//         <div className="fade-in">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <div>
//                     <h1 className="h2 fw-bold mb-1 d-flex align-items-center">
//                         <MapPin className="text-accent me-3" size={32} />
//                         Available Rides
//                     </h1>
//                     <p className="text-muted mb-0">Discover and join amazing riding adventures</p>
//                 </div>
//                 <Link href="/create-ride" className="btn btn-accent">
//                     <Plus size={18} className="me-2" />
//                     Create New Ride
//                 </Link>
//             </div>

//             {/* Filters */}
//             <div className="card card-custom mb-4">
//                 <div className="card-body p-4">
//                     <div className="row align-items-center g-3">
//                         <div className="col-md-3">
//                             <label className="form-label d-flex align-items-center mb-2">
//                                 <Filter size={16} className="me-2" />
//                                 Category
//                             </label>
//                             <select
//                                 className="form-select form-select-custom"
//                                 value={selectedCategory}
//                                 onChange={(e) => setSelectedCategory(e.target.value)}
//                             >
//                                 <option value="all">All Categories</option>
//                                 <option value="adventure">Adventure</option>
//                                 <option value="touring">Touring</option>
//                                 <option value="weekend">Weekend</option>
//                                 <option value="track">Track Day</option>
//                             </select>
//                         </div>
//                         <div className="col-md-3">
//                             <label className="form-label d-flex align-items-center mb-2">
//                                 <Filter size={16} className="me-2" />
//                                 Difficulty Level
//                             </label>
//                             <select
//                                 className="form-select form-select-custom"
//                                 value={selectedDifficulty}
//                                 onChange={(e) => setSelectedDifficulty(e.target.value)}
//                             >
//                                 <option value="all">All Levels</option>
//                                 <option value="beginner">Beginner</option>
//                                 <option value="intermediate">Intermediate</option>
//                                 <option value="advanced">Advanced</option>
//                             </select>
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label d-flex align-items-center mb-2">
//                                 <Search size={16} className="me-2" />
//                                 Search
//                             </label>
//                             <div className="position-relative">
//                                 <input
//                                     type="text"
//                                     className="form-control form-control-custom ps-5"
//                                     placeholder="Search rides by title or destination..."
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                 />
//                                 <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={16} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Rides Grid */}
//             <div className="row">
//                 {filteredRides.map((ride) => (
//                     <div key={ride.id} className="col-lg-4 col-md-6 mb-4">
//                         <div className="card ride-card card-custom h-100">
//                             <img
//                                 src={ride.image || "/placeholder.svg"}
//                                 className="card-img-top"
//                                 alt={ride.title}
//                                 style={{ height: "200px", objectFit: "cover" }}
//                             />
//                             <div className="card-body d-flex flex-column">
//                                 <div className="mb-3">
//                                     <div className="d-flex justify-content-between align-items-start mb-2">
//                                         <div className="d-flex gap-2">
//                                             <span className="badge bg-secondary">{ride.category}</span>
//                                             <span className={`badge ${getDifficultyBadgeClass(ride.difficulty)} badge-difficulty`}>
//                                                 {ride.difficulty}
//                                             </span>
//                                         </div>
//                                         <small className="text-muted">by {ride.organizer}</small>
//                                     </div>
//                                     <h5 className="card-title fw-bold">{ride.title}</h5>
//                                 </div>

//                                 <div className="mb-3 flex-grow-1">
//                                     <div className="small text-muted">
//                                         <div className="d-flex align-items-center mb-2">
//                                             <Calendar size={14} className="me-2" />
//                                             <span>
//                                                 {ride.date} at {ride.time}
//                                             </span>
//                                         </div>
//                                         <div className="d-flex align-items-center mb-2">
//                                             <MapPin size={14} className="me-2" />
//                                             <span>{ride.meetingPoint}</span>
//                                         </div>
//                                         <div className="d-flex align-items-center mb-2">
//                                             <MapPin size={14} className="me-2" />
//                                             <span>→ {ride.destination}</span>
//                                         </div>
//                                         <div className="d-flex align-items-center mb-2">
//                                             <Clock size={14} className="me-2" />
//                                             <span>{ride.estimatedKM}</span>
//                                         </div>
//                                         <div className="d-flex align-items-center">
//                                             <Users size={14} className="me-2" />
//                                             <span>
//                                                 {ride.participants}/{ride.maxParticipants} riders
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="d-flex justify-content-between align-items-center mb-3">
//                                     <div className="h5 text-accent mb-0 fw-bold d-flex align-items-center">
//                                         <DollarSign size={18} className="me-1" />
//                                         {ride.fees}
//                                     </div>
//                                     <div className="progress" style={{ width: "60px", height: "6px" }}>
//                                         <div
//                                             className="progress-bar bg-accent"
//                                             style={{ width: `${(ride.participants / ride.maxParticipants) * 100}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>

//                                 <div className="d-flex gap-2">
//                                     <Link href={`/rides/${ride.id}`} className="btn btn-outline-secondary flex-grow-1">
//                                         View Details
//                                     </Link>
//                                     <button className="btn btn-accent">Join Ride</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {filteredRides.length === 0 && (
//                 <div className="text-center py-5">
//                     <div className="bg-secondary-custom rounded-circle p-4 d-inline-flex mb-4">
//                         <MapPin className="text-muted" size={48} />
//                     </div>
//                     <h4 className="text-muted mb-3">No rides found</h4>
//                     <p className="text-muted mb-4">Try adjusting your filters or create a new ride</p>
//                     <Link href="/create-ride" className="btn btn-accent">
//                         <Plus size={16} className="me-2" />
//                         Create New Ride
//                     </Link>
//                 </div>
//             )}
//         </div>
//     )
// }


import Link from "next/link"
import { MapPin, Plus, Filter, Search, Calendar, Users, Clock, DollarSign } from "lucide-react"
import { PrismaClient } from "../generated/prisma"
import { revalidatePath } from "next/cache";
import DeleteRides from "./deleterides";

export default async function RidesPage() {

    const prisma = new PrismaClient();
    const rideevent = await prisma.rideEvent.findMany({ include: { participants: true, category: true } });

    // console.log(rideevent);

     async function deleteRide(id: any) {
        "use server"
    
        const prisma = new PrismaClient();
        const dataDelete = await prisma.rideEvent.delete({
          where: {
            id: id,
          },
        });
        console.log(dataDelete);
        revalidatePath("/rides");
      }
    

    const getDifficultyBadgeClass = (difficulty: String) => {
        if (difficulty.toLowerCase() === "advanced") {
            return "bg-danger"
        }
        if (difficulty.toLowerCase() === "intermediate") {
            return "bg-warning"
        }
        if (difficulty.toLowerCase() === "beginner") {
            return "bg-success"
        }
        return "bg-secondary"
    }

    return (
        <div className="fade-in">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h2 fw-bold mb-1 d-flex align-items-center">
                        <MapPin className="text-accent me-3" size={32} />
                        Available Rides
                    </h1>
                    <p className="text-muted mb-0">Discover and join amazing riding adventures</p>
                </div>
                <Link href="/create-ride" className="btn btn-accent">
                    <Plus size={18} className="me-2" />
                    Create New Ride
                </Link>
            </div>

            {/* Filters */}
            <div className="card card-custom mb-4">
                <div className="card-body p-4">
                    <div className="row align-items-center g-3">
                        <div className="col-md-3">
                            <label className="form-label d-flex align-items-center mb-2">
                                <Filter size={16} className="me-2" />
                                Category
                            </label>
                            <select className="form-select form-select-custom">
                                <option value="all">All Categories</option>
                                <option value="adventure">Adventure</option>
                                <option value="touring">Touring</option>
                                <option value="weekend">Weekend</option>
                                <option value="track">Track Day</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label d-flex align-items-center mb-2">
                                <Filter size={16} className="me-2" />
                                Difficulty Level
                            </label>
                            <select className="form-select form-select-custom">
                                <option value="all">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label d-flex align-items-center mb-2">
                                <Search size={16} className="me-2" />
                                Search
                            </label>
                            <div className="position-relative">
                                <input
                                    type="text"
                                    className="form-control form-control-custom ps-5"
                                    placeholder="Search rides by title or destination..."
                                />
                                <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rides Grid - Static Content */}
            <div className="row">
                {/* Ride Card 1 */}
                {rideevent.map((ride: any) => (
                    <div key={ride.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card ride-card card-custom h-100">
                            <img
                                src={ride.photo}
                                className="card-img-top"
                                alt="Image Not found!!"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="d-flex gap-2">
                                            <span className="badge bg-secondary">{ride.category.name}</span>
                                            <span className={`badge ${getDifficultyBadgeClass(ride.difficultyLevel)} badge-difficulty`}>
                                                {ride.difficultyLevel}
                                            </span>
                                        </div>
                                        {/* <small className="text-muted">by Mountain Riders Club</small> */}
                                    </div>
                                    <h5 className="card-title fw-bold">{ride.title}</h5>
                                </div>

                                <div className="mb-3 flex-grow-1">
                                    <div className="small text-muted">
                                        <div className="d-flex align-items-center mb-2">
                                            <Calendar size={14} className="me-2" />
                                            <span>{new Date(ride.date).toLocaleDateString()} at {ride.time}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <MapPin size={14} className="me-2" />
                                            <span>{ride.meetingPoint}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <MapPin size={14} className="me-2" />
                                            <span>→ {ride.destination}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <Clock size={14} className="me-2" />
                                            <span>{ride.estimatedKm}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Users size={14} className="me-2" />
                                            <span>{ride.participants.length} riders</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="h5 text-accent mb-0 fw-bold d-flex align-items-center">
                                        {/* <DollarSign size={18} className="me-1" /> */}
                                        ₹ {ride.registrationFees}
                                    </div>
                                    {/* <div className="progress" style={{ width: "60px", height: "6px" }}>
                                        <div
                                            className="progress-bar bg-accent"
                                            style={{ width: "67%" }}
                                        ></div>
                                    </div> */}
                                </div>

                                <div className="d-flex gap-2">
                                    <Link href={"/rides/" + ride.id} className="btn btn-outline-secondary flex-grow-1">
                                        View Details
                                    </Link>
                                    <button className="btn btn-outline-success">Join Ride</button>
                                    {/* <button className="btn btn-outline-danger">Delete</button> */}
                                    <DeleteRides fnToDelete={deleteRide} id={ride.id} />
                                    <button className="btn btn-outline-primary">Edit Ride</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}