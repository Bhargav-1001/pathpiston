// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
// import { Bike, Plus, Edit3, Trash2, Wrench, Fuel, Gauge, Calendar } from "lucide-react"

// export default function BikesPage() {
//   const [showAddModal, setShowAddModal] = useState(false)
//   const [highlightedBike, setHighlightedBike] = useState<number | null>(null)
//   const searchParams = useSearchParams()

//   const [bikes, setBikes] = useState([
//     {
//       id: 1,
//       name: "Royal Enfield Himalayan",
//       model: "2024",
//       engine: "411cc",
//       type: "Adventure",
//       year: "2024",
//       color: "Granite Black",
//       image: "/placeholder.svg?height=200&width=300",
//       specs: {
//         power: "24.3 HP",
//         torque: "32 Nm",
//         weight: "199 kg",
//         fuelCapacity: "15 L",
//       },
//     },
//     {
//       id: 2,
//       name: "KTM Adventure 390",
//       model: "2023",
//       engine: "373cc",
//       type: "Adventure",
//       year: "2023",
//       color: "Orange",
//       image: "/placeholder.svg?height=200&width=300",
//       specs: {
//         power: "43 HP",
//         torque: "37 Nm",
//         weight: "158 kg",
//         fuelCapacity: "14.5 L",
//       },
//     },
//   ])

//   const [newBike, setNewBike] = useState({
//     name: "",
//     model: "",
//     engine: "",
//     type: "",
//     year: "",
//     color: "",
//     power: "",
//     torque: "",
//     weight: "",
//     fuelCapacity: "",
//   })

//   useEffect(() => {
//     const highlight = searchParams.get("highlight")
//     if (highlight) {
//       setHighlightedBike(Number.parseInt(highlight))
//       // Remove highlight after 3 seconds
//       setTimeout(() => setHighlightedBike(null), 3000)
//     }
//   }, [searchParams])




//   const handleAddBike = (e: React.FormEvent) => {
//     e.preventDefault()
//     const bike = {
//       id: Date.now(),
//       name: newBike.name,
//       model: newBike.model,
//       engine: newBike.engine,
//       type: newBike.type,
//       year: newBike.year,
//       color: newBike.color,
//       image: "/placeholder.svg?height=200&width=300",
//       specs: {
//         power: newBike.power,
//         torque: newBike.torque,
//         weight: newBike.weight,
//         fuelCapacity: newBike.fuelCapacity,
//       },
//     }
//     setBikes([...bikes, bike])
//     setNewBike({
//       name: "",
//       model: "",
//       engine: "",
//       type: "",
//       year: "",
//       color: "",
//       power: "",
//       torque: "",
//       weight: "",
//       fuelCapacity: "",
//     })
//     setShowAddModal(false)
//   }




//   const handleDeleteBike = (id: number) => {
//     setBikes(bikes.filter((bike) => bike.id !== id))
//   }




//   return (
//     <div className="fade-in">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h1 className="h2 fw-bold mb-1 d-flex align-items-center">
//             <Bike className="text-accent me-3" size={32} />
//             My Bikes
//           </h1>
//           <p className="text-muted mb-0">Manage your motorcycle collection</p>
//         </div>
//         <button className="btn btn-accent" onClick={() => setShowAddModal(true)}>
//           <Plus size={18} className="me-2" />
//           Add New Bike
//         </button>
//       </div>

//       <div className="row">
//         {bikes.map((bike) => (
//           <div key={bike.id} className="col-lg-6 col-xl-4 mb-4">
//             <div
//               className={`card bike-card h-100 ${highlightedBike === bike.id ? "border-accent shadow-lg" : ""}`}
//               style={{
//                 animation: highlightedBike === bike.id ? "pulse 2s ease-in-out" : "none",
//               }}
//             >
//               <img
//                 src={bike.image || "/placeholder.svg"}
//                 className="card-img-top"
//                 alt={bike.name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title fw-bold">{bike.name}</h5>
//                 <p className="text-muted mb-3">
//                   {bike.model} • {bike.color}
//                 </p>

//                 <div className="row mb-3 flex-grow-1">
//                   <div className="col-6">
//                     <div className="mb-3">
//                       <div className="small text-muted d-flex align-items-center mb-1">
//                         <Wrench size={14} className="me-1" />
//                         Engine
//                       </div>
//                       <div className="fw-semibold">{bike.engine}</div>
//                     </div>
//                     <div className="mb-3">
//                       <div className="small text-muted d-flex align-items-center mb-1">
//                         <Gauge size={14} className="me-1" />
//                         Power
//                       </div>
//                       <div className="fw-semibold">{bike.specs.power}</div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="mb-3">
//                       <div className="small text-muted d-flex align-items-center mb-1">
//                         <Calendar size={14} className="me-1" />
//                         Year
//                       </div>
//                       <div className="fw-semibold">{bike.year}</div>
//                     </div>
//                     <div className="mb-3">
//                       <div className="small text-muted d-flex align-items-center mb-1">
//                         <Fuel size={14} className="me-1" />
//                         Fuel Tank
//                       </div>
//                       <div className="fw-semibold">{bike.specs.fuelCapacity}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <span className="badge bg-secondary me-2">{bike.type}</span>
//                   <span className="badge bg-outline-light">{bike.year}</span>
//                 </div>

//                 <div className="d-flex gap-2 mt-auto">
//                   <button className="btn btn-sm btn-outline-secondary flex-grow-1">
//                     <Edit3 size={14} className="me-1" />
//                     Edit
//                   </button>
//                   <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteBike(bike.id)}>
//                     <Trash2 size={14} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {bikes.length === 0 && (
//           <div className="col-12 text-center py-5">
//             <div className="bg-secondary-custom rounded-circle p-4 d-inline-flex mb-4">
//               <Bike className="text-muted" size={48} />
//             </div>
//             <h4 className="text-muted mb-3">No bikes added yet</h4>
//             <p className="text-muted mb-4">Add your first bike to get started with your riding journey</p>
//             <button className="btn btn-accent" onClick={() => setShowAddModal(true)}>
//               <Plus size={16} className="me-2" />
//               Add Your First Bike
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Add Bike Modal */}
//       {showAddModal && (
//         <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-lg">
//             <div className="modal-content bg-card-custom border-custom">
//               <div className="modal-header border-custom">
//                 <h5 className="modal-title d-flex align-items-center">
//                   <Plus className="text-accent me-2" size={20} />
//                   Add New Bike
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowAddModal(false)}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <form onSubmit={handleAddBike}>
//                 <div className="modal-body">
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Bike Name *</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.name}
//                         onChange={(e) => setNewBike({ ...newBike, name: e.target.value })}
//                         placeholder="e.g., Royal Enfield Himalayan"
//                         required
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Model/Year *</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.model}
//                         onChange={(e) => setNewBike({ ...newBike, model: e.target.value })}
//                         placeholder="e.g., 2024"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-4 mb-3">
//                       <label className="form-label">Engine *</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.engine}
//                         onChange={(e) => setNewBike({ ...newBike, engine: e.target.value })}
//                         placeholder="e.g., 411cc"
//                         required
//                       />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       <label className="form-label">Type *</label>
//                       <select
//                         className="form-select form-select-custom"
//                         value={newBike.type}
//                         onChange={(e) => setNewBike({ ...newBike, type: e.target.value })}
//                         required
//                       >
//                         <option value="">Select Type</option>
//                         <option value="Adventure">Adventure</option>
//                         <option value="Cruiser">Cruiser</option>
//                         <option value="Sport">Sport</option>
//                         <option value="Touring">Touring</option>
//                         <option value="Standard">Standard</option>
//                       </select>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       <label className="form-label">Color</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.color}
//                         onChange={(e) => setNewBike({ ...newBike, color: e.target.value })}
//                         placeholder="e.g., Granite Black"
//                       />
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-3 mb-3">
//                       <label className="form-label">Power</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.power}
//                         onChange={(e) => setNewBike({ ...newBike, power: e.target.value })}
//                         placeholder="e.g., 24.3 HP"
//                       />
//                     </div>
//                     <div className="col-md-3 mb-3">
//                       <label className="form-label">Torque</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.torque}
//                         onChange={(e) => setNewBike({ ...newBike, torque: e.target.value })}
//                         placeholder="e.g., 32 Nm"
//                       />
//                     </div>
//                     <div className="col-md-3 mb-3">
//                       <label className="form-label">Weight</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.weight}
//                         onChange={(e) => setNewBike({ ...newBike, weight: e.target.value })}
//                         placeholder="e.g., 199 kg"
//                       />
//                     </div>
//                     <div className="col-md-3 mb-3">
//                       <label className="form-label">Fuel Capacity</label>
//                       <input
//                         type="text"
//                         className="form-control form-control-custom"
//                         value={newBike.fuelCapacity}
//                         onChange={(e) => setNewBike({ ...newBike, fuelCapacity: e.target.value })}
//                         placeholder="e.g., 15 L"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal-footer border-custom">
//                   <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddModal(false)}>
//                     Cancel
//                   </button>
//                   <button type="submit" className="btn btn-accent">
//                     <Plus size={16} className="me-2" />
//                     Add Bike
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes pulse {
//           0% { box-shadow: 0 0 0 0 rgba(215, 38, 56, 0.4); }
//           70% { box-shadow: 0 0 0 10px rgba(215, 38, 56, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(215, 38, 56, 0); }
//         }
//         .border-accent {
//           border-color: var(--accent-red) !important;
//         }
//       `}</style>
//     </div>
//   )
// }




import { Bike, Wrench, Fuel, Gauge, Calendar } from "lucide-react"
import { PrismaClient } from "../generated/prisma";
import { revalidatePath } from "next/cache";
import DeleteButton from "./deleteBike";
import Link from "next/link";

// export default async function BikesPage() {

//   const prisma = new PrismaClient();
//   const data = await prisma.bike.findMany();
//   // console.log(data);

//   return (
//     <>
//       <div className="fade-in">
//         {data.map((bike: any) => (
//           <div key={bike.id} className="col-lg-6 col-xl-4 mb-4">
//             <div className="card bike-card h-100">
//               <img
//                 src={bike.photo || "/placeholder.svg?height=200&width=300"}
//                 className="card-img-top"
//                 alt={bike.name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title fw-bold">{bike.name}</h5>
//                 <p className="text-muted mb-3">
//                   {bike.model}
//                 </p>

//                 <div className="row mb-3 flex-grow-1">

//                   <div className="col-6">

//                     <div className="mb-3">
//                       <div className="small text-muted d-flex align-items-center mb-1">
//                         <Wrench size={14} className="me-1" />
//                         Specifications
//                       </div>
//                       <ul className="fw-semibold list-unstyled">
//                         {bike.specs.split(", ").map((spec: string, index: number) => (
//                           <li key={index}>{spec}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <span className="badge bg-secondary me-2">{bike.type}</span>
//                   <span className="badge bg-outline-light">{bike.year}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </>
//   )
// }

export default async function BikesPage() {
  const prisma = new PrismaClient();
  const data = await prisma.bike.findMany();

  async function deleteBike(id: any) {
    "use server"

    const prisma = new PrismaClient();
    const dataDelete = await prisma.bike.delete({
      where: {
        id: id,
      },
    });
    console.log(dataDelete);
    revalidatePath("/bikes");
  }



  return (
    <>
      <div className="fade-in">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold">
            <Bike className="text-accent me-3" size={32} />
            My Bikes
          </h1>
          <Link href="/add_bikes">
            <button className="btn btn-accent">
              Add New Bike
            </button>
          </Link>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((bike: any) => (
            <div key={bike.id} className="col">
              <div className="card bike-card h-100">
                <img
                  src={bike.photo || "/placeholder.svg?height=200&width=300"}
                  className="card-img-top"
                  alt={bike.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{bike.name}</h5>
                  <p className="text-muted mb-3">{bike.model}</p>

                  <div className="row mb-3 flex-grow-1">
                    <div className="col-12">
                      <div className="mb-3">
                        <div className="small text-muted d-flex align-items-center mb-2">
                          <Wrench size={14} className="me-1" />
                          Specifications
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                          {bike.specs.split(", ").map((spec: string, index: number) => (
                            <span key={index} className="badge bg-light text-dark">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span ><DeleteButton fnToDelete={deleteBike} id={bike.id} /></span>
                    <span className="badge bg-outline-light"><Link href={"/edit_bikes/"+ bike.id}>Eidt Bikes</Link></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

