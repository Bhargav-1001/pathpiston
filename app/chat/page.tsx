"use client"

import type React from "react"

import { useState } from "react"

export default function ChatPage() {
    const [selectedChat, setSelectedChat] = useState(1)
    const [newMessage, setNewMessage] = useState("")

    const chatRooms = [
        {
            id: 1,
            name: "Himalayan Adventure - Spiti Valley",
            lastMessage: "Don't forget to carry extra fuel!",
            timestamp: "2 min ago",
            unread: 3,
            participants: 8,
        },
        {
            id: 2,
            name: "Coastal Highway Tour",
            lastMessage: "Weather looks perfect for the ride",
            timestamp: "1 hour ago",
            unread: 0,
            participants: 15,
        },
        {
            id: 3,
            name: "Weekend Hill Station Ride",
            lastMessage: "Meeting point confirmed",
            timestamp: "3 hours ago",
            unread: 1,
            participants: 6,
        },
    ]

    const messages = [
        {
            id: 1,
            sender: "Rajesh Kumar",
            message: "Hey everyone! Excited for tomorrow's ride. Weather forecast looks good!",
            timestamp: "10:30 AM",
            avatar: "/placeholder.svg?height=40&width=40",
            isOwn: false,
        },
        {
            id: 2,
            sender: "You",
            message: "Same here! I've checked my bike and everything is ready. What time should we reach the meeting point?",
            timestamp: "10:32 AM",
            avatar: "/placeholder.svg?height=40&width=40",
            isOwn: true,
        },
        {
            id: 3,
            sender: "Priya Singh",
            message: "I suggest we reach by 5:45 AM. That gives us 15 minutes buffer before the 6 AM start.",
            timestamp: "10:35 AM",
            avatar: "/placeholder.svg?height=40&width=40",
            isOwn: false,
        },
        {
            id: 4,
            sender: "Amit Sharma",
            message: "Don't forget to carry extra fuel! The next petrol pump after Shimla is quite far.",
            timestamp: "10:38 AM",
            avatar: "/placeholder.svg?height=40&width=40",
            isOwn: false,
        },
        {
            id: 5,
            sender: "You",
            message: "Good point! I'll carry a spare fuel can. Also, has everyone checked their tire pressure?",
            timestamp: "10:40 AM",
            avatar: "/placeholder.svg?height=40&width=40",
            isOwn: true,
        },
    ]

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (newMessage.trim()) {
            console.log("Sending message:", newMessage)
            setNewMessage("")
        }
    }

    const selectedChatRoom = chatRooms.find((room) => room.id === selectedChat)

    return (
        <div className="row h-100">
            <div className="col-lg-4 col-md-5">
                <div className="card card-dark h-100">
                    <div className="card-header">
                        <h5 className="mb-0">Group Chats</h5>
                    </div>
                    <div className="card-body p-0">
                        <div className="list-group list-group-flush">
                            {chatRooms.map((room) => (
                                <button
                                    key={room.id}
                                    className={`list-group-item list-group-item-action bg-transparent border-secondary ${selectedChat === room.id ? "active" : ""
                                        }`}
                                    onClick={() => setSelectedChat(room.id)}
                                >
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">{room.name}</h6>
                                        <small>{room.timestamp}</small>
                                    </div>
                                    <p className="mb-1 text-muted small">{room.lastMessage}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">👥 {room.participants} members</small>
                                        {room.unread > 0 && <span className="badge bg-danger rounded-pill">{room.unread}</span>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-md-7">
                <div className="card card-dark h-100 d-flex flex-column">
                    <div className="card-header">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-0">{selectedChatRoom?.name}</h6>
                            <span className="badge bg-secondary ms-2">👥 {selectedChatRoom?.participants} members</span>
                        </div>
                    </div>

                    <div className="card-body flex-grow-1 d-flex flex-column">
                        <div className="chat-container flex-grow-1 p-3 mb-3">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`d-flex mb-3 ${message.isOwn ? "justify-content-end" : "justify-content-start"}`}
                                >
                                    {!message.isOwn && (
                                        <img src={message.avatar || "/placeholder.svg"} alt={message.sender} className="avatar me-2" />
                                    )}
                                    <div className={`chat-message ${message.isOwn ? "bg-danger" : ""}`} style={{ maxWidth: "70%" }}>
                                        {!message.isOwn && <div className="fw-semibold small text-accent mb-1">{message.sender}</div>}
                                        <div className="mb-1">{message.message}</div>
                                        <div className="small text-muted">{message.timestamp}</div>
                                    </div>
                                    {message.isOwn && (
                                        <img src={message.avatar || "/placeholder.svg"} alt="You" className="avatar ms-2" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSendMessage} className="mt-auto">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control form-control-dark"
                                    placeholder="Type your message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button className="btn btn-accent" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
