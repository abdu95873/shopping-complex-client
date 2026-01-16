import React, { useState } from "react";
import floorImg from "../assets/New folder (4)/RSC-Flat Design 2026-1.png";

const rooms = [
    { id: 1, name: "C. Bed", top: ".5%", left: "11.2%", width: "30%", height: "44%", realWidth: "12'", realHeight: "15'" },
    { id: 2, name: "M. Bed", top: "46%", left: "11.2%", width: "30%", height: "51%", realWidth: "14'", realHeight: "16'" },
    { id: 3, name: "Kitchen", top: ".5%", left: "51.5%", width: "15.5%", height: "28%", realWidth: "10'", realHeight: "8'" },
    { id: 4, name: "Dining", top: "30%", left: "42.2%", width: "25%", height: "47%", realWidth: "12'", realHeight: "14'" },
    { id: 5, name: "Drawing", top: ".5%", left: "68%", width: "30.5%", height: "49%", realWidth: "15'", realHeight: "18'" },
    { id: 6, name: "G. Bed", top: "50%", left: "68%", width: "30.5%", height: "47%", realWidth: "13'", realHeight: "15'" },
    { id: 7, name: "Common Toilet", top: "79%", left: "42.2%", width: "13.5%", height: "18%", realWidth: "6'", realHeight: "8'" },
    { id: 8, name: "Attached Toilet", top: "20%", left: "1.5%", width: "9%", height: "21.5%", realWidth: "5'", realHeight: "7'" },
    { id: 9, name: "Attached Toilet", top: "47%", left: "1.5%", width: "9%", height: "25.5%", realWidth: "5'", realHeight: "7'" },
    { id: 10, name: "Ver.", top: "0.5%", left: "1.5%", width: "10%", height: "18%", realWidth: "6'", realHeight: "4'" },
    { id: 11, name: "Ver.", top: "74.5%", left: "1.5%", width: "9%", height: "24.5%", realWidth: "6'", realHeight: "5'" },
    { id: 12, name: "Ver.", top: "77%", left: "56.5%", width: "10.5%", height: "22%", realWidth: "6'", realHeight: "5'" },
    { id: 13, name: "Void", top: ".5%", left: "42.2%", width: "8.5%", height: "28%", realWidth: "8'", realHeight: "10'" },
];

export default function FloorMap() {
    const [hovered, setHovered] = useState(null);

    // Get the hovered room data
    const hoveredRoom = rooms.find((room) => room.id === hovered);

    return (
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Floor Map */}
            <div style={{ position: "relative", width: "100%" }}>
                <img
                    src={floorImg}
                    alt="Floor Plan"
                    style={{ width: "100%", display: "block" }}
                />

                {rooms.map((room) => (
                    <div
                        key={room.id}
                        onMouseEnter={() => setHovered(room.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => alert(`${room.name}`)}
                        style={{
                            position: "absolute",
                            top: room.top,
                            left: room.left,
                            width: room.width,
                            height: room.height,
                            border: "2px solid rgba(0,0,0,0.35)",
                            backgroundColor:
                                hovered === room.id
                                    ? "rgba(255, 165, 0, 0.45)"
                                    : "transparent",
                            cursor: "pointer",
                            transition: "0.2s ease",
                        }}
                    />
                ))}
            </div>

            {/* Hover Info Section */}
            {hoveredRoom && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        backgroundColor: "#f9f9f9",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                    <h3 style={{ margin: "0 0 10px 0" }}>Room Info:</h3>
                    <p><strong>Name:</strong> {hoveredRoom.name}</p>
                    <p><strong>Width:</strong> {hoveredRoom.realWidth}</p>
                    <p><strong>Height:</strong> {hoveredRoom.realHeight}</p>
                    <p><strong>Top:</strong> {hoveredRoom.top}</p>
                    <p><strong>Left:</strong> {hoveredRoom.left}</p>
                </div>
            )}
        </div>
    );
}
