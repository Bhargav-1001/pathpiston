"use client"

import type React from "react"

import { useState } from "react"

export default function CreateRidePage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        category: "",
        meetingPoint: "",
        destination: "",
        difficulty: "",
        fees: "",
        estimatedKM: "",
        maxParticipants: "",
        requirements: "",
        contactNumber: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card card-dark">
                    <div className="card-header">
                        <h2 className="mb-0">Create New Ride Event</h2>
                        <p className="text-muted mb-0">Plan your next adventure and invite fellow riders</p>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <label className="form-label">Ride Title *</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-dark"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g., Himalayan Adventure - Leh Ladakh"
                                        required
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Category *</label>
                                    <select
                                        className="form-select form-control-dark"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="adventure">Adventure</option>
                                        <option value="touring">Touring</option>
                                        <option value="weekend">Weekend Ride</option>
                                        <option value="track">Track Day</option>
                                        <option value="offroad">Off-Road</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control form-control-dark"
                                    rows={4}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe your ride, route highlights, what to expect..."
                                ></textarea>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Date *</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-dark"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Start Time *</label>
                                    <input
                                        type="time"
                                        className="form-control form-control-dark"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Difficulty Level *</label>
                                    <select
                                        className="form-select form-control-dark"
                                        name="difficulty"
                                        value={formData.difficulty}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Level</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Meeting Point *</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-dark"
                                        name="meetingPoint"
                                        value={formData.meetingPoint}
                                        onChange={handleChange}
                                        placeholder="e.g., India Gate, New Delhi"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Destination *</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-dark"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        placeholder="e.g., Leh, Ladakh"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Estimated Distance (KM) *</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-dark"
                                        name="estimatedKM"
                                        value={formData.estimatedKM}
                                        onChange={handleChange}
                                        placeholder="e.g., 1200"
                                        required
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Fees (₹) *</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-dark"
                                        name="fees"
                                        value={formData.fees}
                                        onChange={handleChange}
                                        placeholder="e.g., 15000"
                                        required
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Max Participants *</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-dark"
                                        name="maxParticipants"
                                        value={formData.maxParticipants}
                                        onChange={handleChange}
                                        placeholder="e.g., 15"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Requirements & What to Bring</label>
                                <textarea
                                    className="form-control form-control-dark"
                                    rows={3}
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    placeholder="e.g., Valid driving license, protective gear, spare parts, etc."
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Contact Number *</label>
                                <input
                                    type="tel"
                                    className="form-control form-control-dark"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="e.g., +91 9876543210"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Route Map / Images</label>
                                <input type="file" className="form-control form-control-dark" multiple accept="image/*,.pdf" />
                                <div className="form-text text-muted">
                                    Upload route maps, destination photos, or any relevant documents
                                </div>
                            </div>

                            <div className="d-flex gap-3">
                                <button type="submit" className="btn btn-accent btn-lg">
                                    <span className="me-2">🏍️</span>Create Ride Event
                                </button>
                                <button type="button" className="btn btn-outline-light btn-lg">
                                    Save as Draft
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
