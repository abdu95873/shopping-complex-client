import { useParams } from "react-router-dom";
import { flats } from "../../data/flats";
import { useState } from "react";

const Flat = () => {
  const { flatId } = useParams();
  const flat = flats.find((f) => f.flatId === Number(flatId));

  const [hovered, setHovered] = useState(null);
  const hoveredRoom = flat?.rooms.find((r) => r.id === hovered);

  if (!flat) return <p>Flat not found</p>;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 className="text-2xl font-bold mb-4">{flat.name}</h1>

      {/* FLAT IMAGE + ROOMS */}
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={flat.image}
          alt={flat.name}
          style={{ width: "100%", display: "block" }}
        />

        {flat.rooms.map((room) => (
          <div
            key={room.id}
            onMouseEnter={() => setHovered(room.id)}
            onMouseLeave={() => setHovered(null)}
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

      {/* HOVER INFO */}
      
 <div className="h-44"
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
      {hoveredRoom && (
       <div>
          <h3 className="font-bold mb-2">Room Info</h3>
          <p><strong>Name:</strong> {hoveredRoom.name}</p>
          <p><strong>Size:</strong> {hoveredRoom.realWidth} × {hoveredRoom.realHeight}</p>
          <p><strong>Top:</strong> {hoveredRoom.top}</p>
          <p><strong>Left:</strong> {hoveredRoom.left}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Flat;
