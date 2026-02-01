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
        {/* 🧭 COMPASS */}
        <div className="absolute top-3 right-3 z-20 bg-blue-300 backdrop-blur
                  rounded-full w-16 h-16 flex items-center justify-center
                  shadow-md select-none">
          <div className="relative w-10 h-10 font-bold text-sm text-gray-700">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-red-600">
              N
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2">
              S
            </span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2">
              W
            </span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2">
              E
            </span>
          </div>
        </div>
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
      {/* 🧭 FIXED COMPASS (Social Media Style) */}
      <div className="fixed bottom-6 right-6 z-50 bg-blue-300
                rounded-full w-18 h-18 flex items-center justify-center
                shadow-xl select-none">
        <div className="relative w-12 h-12 font-bold text-sm text-gray-800">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-red-600">
            N
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2">
            S
          </span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2">
            W
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2">
            E
          </span>
        </div>
      </div>
    </div>
  );

};

export default Flat;
