import { useNavigate, useParams } from "react-router-dom";
import { floors } from "../../data/floors";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Floor = () => {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);


  const floor = floors.find(f => f.floorId === Number(floorId));
  if (!floor) return <p>Floor not found</p>;



  const hoveredTemplateFlat =
    hoveredIndex !== null ? floor.template.flats[hoveredIndex] : null;

  const hoveredFlat =
    hoveredIndex !== null ? floor.flats[hoveredIndex] : null;



  return (
    <div className="flex gap-6 max-w-full mx-auto p-6">

      {/* LEFT – FLAT BUTTON LIST */}
      <div className="w-1/5 sticky top-4 h-fit">
        <h3 className="font-bold mb-3">{floor.name}</h3>

        <div className="space-y-2 max-h-[80vh] overflow-y-auto pr-1">
          {floor.flats.map((flat, index) => {
            if (!flat) return null;

            const isBooked = flat.bookingStatus === "booked";

            return (
              <button
                key={flat.flatNo}
                disabled={isBooked}
                onClick={() => setSelectedIndex(index)}
                className={`w-full px-3 py-2 rounded text-left transition
          ${isBooked
                    ? "bg-red-200 text-red-700 cursor-not-allowed"
                    : selectedIndex === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {flat.name}
                {isBooked && " (Booked)"}
              </button>
            );
          })}
        </div>
      </div>

      {/* MIDDLE – ZOOMABLE FLOOR MAP */}
      <div className="w-4/5 border rounded overflow-hidden">

        <TransformWrapper
          minScale={0.6}
          maxScale={4}
          wheel={{ step: 0.1 }}
          panning={{ velocityDisabled: true }}
          doubleClick={{ disabled: true }}
        >
          <TransformComponent>
            <div className="relative">
              <img
                src={floor.template.image}
                alt={floor.name}
                className="w-full block select-none"
              />

              {floor.template.flats.map((box, index) => {
                const flat = floor.flats[index];

                if (!flat) return null; // 🔐 SAFETY GUARD

                const isBooked = flat.bookingStatus === "booked";
                const isHovered = hoveredIndex === index;
                const isSelected = selectedIndex === index;

                return (
                  <div
                    key={box.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      if (isBooked) return;
                      setSelectedIndex(index);
                      navigate(`/flat/${flat.flatNo}`);
                    }}
                    className="absolute transition"
                    style={{
                      top: box.top,
                      left: box.left,
                      width: box.width,
                      height: box.height,
                      border: "1px solid rgba(0,0,0,0.3)",
                      backgroundColor: isBooked
                        ? "rgba(220,53,69,0.45)" // 🔴 booked
                        : isSelected
                          ? "rgba(0,123,255,0.45)" // 🔵 selected
                          : isHovered
                            ? "rgba(255,165,0,0.35)" // 🟠 hover
                            : "transparent",
                      cursor: isBooked ? "not-allowed" : "pointer",
                    }}
                  />
                );
              })}
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>

      {/* RIGHT – HOVER INFO */}
      {/* <div className="w-1/5">
        <h3 className="font-bold mb-3">Flat Info</h3>

        <div className="min-h-[120px] p-4 border rounded bg-gray-50">
          {hoveredFlat ? (
            <>
              <p><strong>Floor:</strong> {floor.name}</p>

              <p><strong>Flat No:</strong> {hoveredTemplateFlat.name}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    hoveredFlat.bookingStatus === "booked"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {hoveredFlat.bookingStatus}
                </span>
              </p>
            </>
          ) : (
            <p className="text-gray-400">Hover over a flat</p>
          )}
        </div>
      </div> */}
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

export default Floor;
