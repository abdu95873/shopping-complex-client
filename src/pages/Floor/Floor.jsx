import { useNavigate, useParams } from "react-router-dom";
import { floors } from "../../data/floors";
import { useState } from "react";

const Floor = () => {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const floor = floors.find(f => f.floorId === Number(floorId));
  const hoveredFlat = floor.template.flats.find(f => f.id === hovered);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{floor.name}</h1>

      {/* Floor Map */}
      <div className="relative w-full">
        <img src={floor.template.image} alt="" className="w-full" />

        {floor.template.flats.map(flat => (
          <div
            key={flat.id}
            onMouseEnter={() => setHovered(flat.id)}
            onMouseLeave={() => setHovered(null)}
            className="absolute border border-transparent hover:border-orange-500 cursor-pointer"

            // 🔴 THIS IS THE MAGIC
            onClick={() => navigate(`/flat/${flat.id}`)}

            style={{
              top: flat.top,
              left: flat.left,
              width: flat.width,
              height: flat.height,
              backgroundColor:
                hovered === flat.id ? "rgba(255,165,0,0.35)" : "transparent",
            }}
          />
        ))}
      </div>

      {/* Hover Info (always stable – no shaking) */}
      <div className="mt-6 p-4 border rounded bg-gray-50 min-h-[120px]">
        {hoveredFlat ? (
          <>
            <h3 className="font-bold">Flat Info</h3>
            <p><strong>Name:</strong> {hoveredFlat.name}</p>
            <p><strong>ID:</strong> {hoveredFlat.id}</p>
          </>
        ) : (
          <p className="text-gray-400">Hover over a flat</p>
        )}
      </div>
    </div>
  );
};

export default Floor;
