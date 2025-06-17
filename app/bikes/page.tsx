"use client"

import type React from "react"

import { useState } from "react"

export default function BikesPage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingBike, setEditingBike] = useState<any>(null)

  const [bikes, setBikes] = useState([
    {
      id: 1,
      name: "Royal Enfield Himalayan",
      model: "2024",
      engine: "411cc",
      type: "Adventure",
      year: "2024",
      color: "Granite Black",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        power: "24.3 HP",
        torque: "32 Nm",
        weight: "199 kg",
        fuelCapacity: "15 L",
      },
    },
    {
      id: 2,
      name: "KTM Adventure 390",
      model: "2023",
      engine: "373cc",
      type: "Adventure",
      year: "2023",
      color: "Orange",
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        power: "43 HP",
        torque: "37 Nm",
        weight: "158 kg",
        fuelCapacity: "14.5 L",
      },
    },
  ])

  const [newBike, setNewBike] = useState({
    name: "",
    model: "",
    engine: "",
    type: "",
    year: "",
    color: "",
    power: "",
    torque: "",
    weight: "",
    fuelCapacity: "",
  })

  const handleAddBike = (e: React.FormEvent) => {
    e.preventDefault()
    const bike = {
      id: Date.now(),
      name: newBike.name,
      model: newBike.model,
      engine: newBike.engine,
      type: newBike.type,
      year: newBike.year,
      color: newBike.color,
      image: "/placeholder.svg?height=200&width=300",
      specs: {
        power: newBike.power,
        torque: newBike.torque,
        weight: newBike.weight,
        fuelCapacity: newBike.fuelCapacity,
      },
    }
    setBikes([...bikes, bike])
    setNewBike({
      name: "",
      model: "",
      engine: "",
      type: "",
      year: "",
      color: "",
      power: "",
      torque: "",
      weight: "",
      fuelCapacity: "",
    })
    setShowAddModal(false)
  }

  const handleDeleteBike = (id: number) => {
    setBikes(bikes.filter((bike) => bike.id !== id))
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold">My Bikes</h1>
        <button className="btn btn-accent" onClick={() => setShowAddModal(true)}>
          <span className="me-2">➕</span>Add New Bike
        </button>
      </div>

      <div className="row">
        {bikes.map((bike) => (
          <div key={bike.id} className="col-lg-6 col-xl-4 mb-4">
            <div className="card bike-card h-100">
              <img
                src={bike.image || "/placeholder.svg"}
                className="card-img-top"
                alt={bike.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{bike.name}</h5>
                <p className="text-muted mb-3">
                  {bike.model} • {bike.color}
                </p>

                <div className="row mb-3 flex-grow-1">
                  <div className="col-6">
                    <div className="mb-2">
                      <div className="small text-muted">Engine</div>
                      <div className="fw-semibold">{bike.engine}</div>
                    </div>
                    <div className="mb-2">
                      <div className="small text-muted">Power</div>
                      <div className="fw-semibold">{bike.specs.power}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-2">
                      <div className="small text-muted">Type</div>
                      <div className="fw-semibold">{bike.type}</div>
                    </div>
                    <div className="mb-2">
                      <div className="small text-muted">Weight</div>
                      <div className="fw-semibold">{bike.specs.weight}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="badge bg-secondary me-2">{bike.type}</span>
                  <span className="badge bg-outline-light">{bike.year}</span>
                </div>

                <div className="d-flex gap-2 mt-auto">
                  <button className="btn btn-sm btn-outline-light flex-grow-1" onClick={() => setEditingBike(bike)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteBike(bike.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {bikes.length === 0 && (
          <div className="col-12 text-center py-5">
            <div className="display-1 text-muted mb-3">🏍️</div>
            <h4 className="text-muted">No bikes added yet</h4>
            <p className="text-muted">Add your first bike to get started</p>
            <button className="btn btn-accent" onClick={() => setShowAddModal(true)}>
              Add Your First Bike
            </button>
          </div>
        )}
      </div>

      {/* Add Bike Modal */}
      {showAddModal && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-secondary-custom">
              <div className="modal-header">
                <h5 className="modal-title">Add New Bike</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <form onSubmit={handleAddBike}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Bike Name *</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.name}
                        onChange={(e) => setNewBike({ ...newBike, name: e.target.value })}
                        placeholder="e.g., Royal Enfield Himalayan"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Model/Year *</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.model}
                        onChange={(e) => setNewBike({ ...newBike, model: e.target.value })}
                        placeholder="e.g., 2024"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Engine *</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.engine}
                        onChange={(e) => setNewBike({ ...newBike, engine: e.target.value })}
                        placeholder="e.g., 411cc"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Type *</label>
                      <select
                        className="form-select form-control-dark"
                        value={newBike.type}
                        onChange={(e) => setNewBike({ ...newBike, type: e.target.value })}
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Cruiser">Cruiser</option>
                        <option value="Sport">Sport</option>
                        <option value="Touring">Touring</option>
                        <option value="Standard">Standard</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Color</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.color}
                        onChange={(e) => setNewBike({ ...newBike, color: e.target.value })}
                        placeholder="e.g., Granite Black"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Power</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.power}
                        onChange={(e) => setNewBike({ ...newBike, power: e.target.value })}
                        placeholder="e.g., 24.3 HP"
                      />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Torque</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.torque}
                        onChange={(e) => setNewBike({ ...newBike, torque: e.target.value })}
                        placeholder="e.g., 32 Nm"
                      />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Weight</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.weight}
                        onChange={(e) => setNewBike({ ...newBike, weight: e.target.value })}
                        placeholder="e.g., 199 kg"
                      />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Fuel Capacity</label>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        value={newBike.fuelCapacity}
                        onChange={(e) => setNewBike({ ...newBike, fuelCapacity: e.target.value })}
                        placeholder="e.g., 15 L"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-accent">
                    Add Bike
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
