import { useParams } from "react-router-dom";
import { flats } from "../../data/flats";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const Flat = () => {
  const { flatId } = useParams();
  const flat = flats.find((f) => f.flatId === Number(flatId));

  const [hovered, setHovered] = useState(null);
  const hoveredRoom = flat?.rooms.find((r) => r.id === hovered);

  if (!flat) return <p>Flat not found</p>;

  return (
    <div className="flex gap-6 max-w-full mx-auto p-6">

      {/* LEFT – ZOOMABLE FLAT MAP */}
      <div className="w-full h-screen border rounded overflow-hidden flex items-center justify-center">
        <TransformWrapper
          initialScale={0.6}
          minScale={0.6}
          maxScale={4}
          wheel={{ step: 0.1 }}
          panning={{ velocityDisabled: true }}
          doubleClick={{ disabled: true }}
          centerOnInit={true}
        >
          <TransformComponent>
            <div className="relative">
              <img
                src={flat.image}
                alt={flat.name}
                className="w-full h-auto object-contain select-none"
              />

              {flat.rooms.map((room) => (
                <div
                  key={room.id}
                  onMouseEnter={() => setHovered(room.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute transition"
                  style={{
                    top: room.top,
                    left: room.left,
                    width: room.width,
                    height: room.height,
                    border: "1px solid rgba(0,0,0,0.35)",
                    backgroundColor:
                      hovered === room.id
                        ? "rgba(255,165,0,0.35)"
                        : "transparent",
                  }}
                />
              ))}
            </div>
          </TransformComponent>
        </TransformWrapper>

      </div>



      {/* RIGHT – ROOM INFO */}
      <div className="w-1/4">
        <h3 className="font-bold mb-3">Room Info</h3>

        <div className="min-h-[160px] p-4 border rounded bg-gray-50">
          {hoveredRoom ? (
            <>
              <p><strong>Name:</strong> {hoveredRoom.name}</p>
              <p>
                <strong>Size:</strong>{" "}
                {hoveredRoom.realWidth} × {hoveredRoom.realHeight}
              </p>
              <p><strong>Top:</strong> {hoveredRoom.top}</p>
              <p><strong>Left:</strong> {hoveredRoom.left}</p>
            </>
          ) : (
            <p className="text-gray-400">Hover over a room</p>
          )}
        </div>
      </div>

    </div>
  );

};

export default Flat;
