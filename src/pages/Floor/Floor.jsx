import { useNavigate, useParams } from "react-router-dom";
import { floors } from "../../data/floors";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useAuth from "../../hooks/useAuth";

const FLAT_STATUS_OPTIONS = [
  { value: "available", label: "Available", color: "rgba(34,197,94,0.4)" },
  { value: "booked", label: "Booked", color: "rgba(245,158,11,0.45)" },
  { value: "sold", label: "Sold", color: "rgba(239,68,68,0.45)" },
  { value: "rented", label: "Rented", color: "rgba(59,130,246,0.45)" },
  { value: "occupied", label: "Occupied", color: "rgba(168,85,247,0.45)" },
  { value: "reserved", label: "Reserved", color: "rgba(236,72,153,0.45)" },
  { value: "maintenance", label: "Maintenance", color: "rgba(120,113,108,0.45)" },
  { value: "hold", label: "On Hold", color: "rgba(14,165,233,0.45)" },
];

const getFlatStatusColor = (status, isSelected, isHovered) => {
  if (isSelected) return "rgba(37,99,235,0.5)";
  if (isHovered) return "rgba(249,115,22,0.4)";
  return FLAT_STATUS_OPTIONS.find((s) => s.value === status)?.color ?? "transparent";
};

const Floor = () => {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isEditingFlat, setIsEditingFlat] = useState(false);


  const floor = floors.find(f => f.floorId === Number(floorId));
  if (!floor) return <p>Floor not found</p>;
  const storageKey = `floor-flats-${floor.floorId}`;

  const [flatUnits, setFlatUnits] = useState(() =>
    floor.flats.map((flat) => ({
      ...flat,
      bookingStatus: flat.bookingStatus || "available",
      notes: flat.notes || "",
      ownerName: flat.ownerName || "",
      details: {
        type: flat.details?.type || "",
        area: flat.details?.area || "",
        superSqft: flat.details?.superSqft || "",
        flatWidth: flat.details?.flatWidth || "",
        flatHeight: flat.details?.flatHeight || "",
        price: flat.details?.price || "",
        facing: flat.details?.facing || "",
        bedrooms: flat.details?.bedrooms || "",
        bathrooms: flat.details?.bathrooms || "",
        dining: flat.details?.dining || "",
        kitchen: flat.details?.kitchen || "",
        drawing: flat.details?.drawing || "",
      },
    }))
  );
  const [savedAt, setSavedAt] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      setFlatUnits(
        parsed.map((flat) => ({
          ...flat,
          bookingStatus: flat.bookingStatus || "available",
          notes: flat.notes || "",
          ownerName: flat.ownerName || "",
          details: {
            type: flat.details?.type || "",
            area: flat.details?.area || "",
            superSqft: flat.details?.superSqft || "",
            flatWidth: flat.details?.flatWidth || "",
            flatHeight: flat.details?.flatHeight || "",
            price: flat.details?.price || "",
            facing: flat.details?.facing || "",
            bedrooms: flat.details?.bedrooms || "",
            bathrooms: flat.details?.bathrooms || "",
            dining: flat.details?.dining || "",
            kitchen: flat.details?.kitchen || "",
            drawing: flat.details?.drawing || "",
          },
        }))
      );
    } catch {
      // Ignore malformed localStorage data
    }
  }, [storageKey]);

  const saveFloorFlats = () => {
    localStorage.setItem(storageKey, JSON.stringify(flatUnits));
    setSavedAt(new Date().toLocaleTimeString());
  };

  const hoveredTemplateFlat =
    hoveredIndex !== null ? floor.template.flats[hoveredIndex] : null;

  const hoveredFlat =
    hoveredIndex !== null ? flatUnits[hoveredIndex] : null;

  const selectedTemplateFlat =
    selectedIndex !== null ? floor.template.flats[selectedIndex] : null;

  const selectedFlat =
    selectedIndex !== null ? flatUnits[selectedIndex] : null;
  const storedRole = localStorage.getItem("userRole");
  const isAdmin =
    user?.role === "admin" ||
    storedRole === "admin" ||
    (typeof user?.email === "string" && user.email.toLowerCase().includes("admin"));

  const updateSelectedFlat = (key, value) => {
    if (selectedIndex === null) return;
    setFlatUnits((prev) =>
      prev.map((flat, index) =>
        index === selectedIndex ? { ...flat, [key]: value } : flat
      )
    );
  };

  const updateSelectedFlatDetails = (key, value) => {
    if (selectedIndex === null) return;
    setFlatUnits((prev) =>
      prev.map((flat, index) =>
        index === selectedIndex
          ? { ...flat, details: { ...(flat.details || {}), [key]: value } }
          : flat
      )
    );
  };



  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-4 p-4 sm:p-6 lg:p-8">
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-5">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          {floor.name} - Smart Map
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Select any flat from list or map, preview details, then edit with one click.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr_320px]">

      {/* LEFT – FLAT BUTTON LIST */}
      <div className="h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6">
        <h3 className="mb-1 font-semibold text-slate-900">Flat Directory</h3>
        <p className="mb-3 text-xs text-slate-500">Tap to focus a unit</p>

        <div className="space-y-2 max-h-[80vh] overflow-y-auto pr-1">
          {flatUnits.map((flat, index) => {
            if (!flat) return null;

            const isUnavailable = flat.bookingStatus === "sold";

            return (
              <button
                key={flat.flatNo}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsEditingFlat(false);
                }}
                className={`w-full rounded-xl border px-3 py-2 text-left text-sm font-medium transition
          ${isUnavailable
                    ? "border-red-200 bg-red-50 text-red-700"
                    : selectedIndex === index
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
              >
                {flat.name}
                {isUnavailable && " (Sold)"}
              </button>
            );
          })}
        </div>
      </div>

      {/* MIDDLE – ZOOMABLE FLOOR MAP */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <TransformWrapper
          minScale={0.6}
          maxScale={4}
          wheel={{ step: 0.1 }}
          panning={{ velocityDisabled: true }}
          doubleClick={{ disabled: true }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Interactive Floor Map</h4>
                  <p className="text-xs text-slate-500">Scroll to zoom, drag to pan</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => zoomOut()}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
                    aria-label="Zoom out"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => resetTransform()}
                    className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => zoomIn()}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                </div>
              </div>

              <TransformComponent>
                <div className="relative bg-slate-100">
                  <img
                    src={floor.template.image}
                    alt={floor.name}
                    className="block w-full select-none"
                  />

                  {floor.template.flats.map((box, index) => {
                    const flat = flatUnits[index];

                    if (!flat) return null; // 🔐 SAFETY GUARD

                    const isHovered = hoveredIndex === index;
                    const isSelected = selectedIndex === index;

                    return (
                      <div
                        key={box.id}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                          setSelectedIndex(index);
                          setIsEditingFlat(false);
                        }}
                        className="absolute rounded-sm transition"
                        style={{
                          top: box.top,
                          left: box.left,
                          width: box.width,
                          height: box.height,
                          border: isSelected
                            ? "2px solid rgba(37,99,235,0.95)"
                            : "1px solid rgba(0,0,0,0.28)",
                          boxShadow: isHovered ? "0 0 0 2px rgba(249,115,22,0.35)" : "none",
                          backgroundColor: getFlatStatusColor(flat.bookingStatus, isSelected, isHovered),
                          cursor: "pointer",
                        }}
                      />
                    );
                  })}
                </div>
              </TransformComponent>

              <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 px-4 py-3">
                {FLAT_STATUS_OPTIONS.map((status) => (
                  <span
                    key={status.value}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: status.color }}
                    />
                    {status.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </TransformWrapper>
      </div>

      {/* RIGHT – HOVER INFO */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 font-semibold text-slate-900">Flat Info</h3>

        <div className="min-h-[120px] p-4 border rounded bg-gray-50 space-y-2">
          {hoveredFlat ? (
            <>
              <p><strong>Floor:</strong> {floor.name}</p>

              <p><strong>Flat No:</strong> {hoveredTemplateFlat.name}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    hoveredFlat.bookingStatus === "sold"
                      ? "text-red-600"
                      : hoveredFlat.bookingStatus === "booked"
                        ? "text-amber-600"
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

        {selectedFlat && (
          <div className="mt-4 rounded border bg-white p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Flat Details</h4>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingFlat((prev) => !prev)}
                  disabled={!isAdmin}
                  className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-300 text-slate-600 hover:bg-slate-100"
                  aria-label={isEditingFlat ? "Close edit mode" : "Edit flat"}
                  title={
                    isAdmin
                      ? isEditingFlat
                        ? "Close Edit"
                        : "Edit Flat"
                      : "Only admin can edit"
                  }
                >
                  ✎
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedIndex(null);
                    setIsEditingFlat(false);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-700"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              Flat No: <span className="font-medium text-slate-800">{selectedTemplateFlat?.name || selectedFlat.flatNo}</span>
            </div>
            {!isEditingFlat || !isAdmin ? (
              <div className="space-y-2 text-sm text-slate-700 rounded border border-slate-200 bg-slate-50 p-3">
                <p><strong>Flat Name:</strong> {selectedFlat.name || "-"}</p>
                <p><strong>Status:</strong> {selectedFlat.bookingStatus || "-"}</p>
                <p><strong>Owner:</strong> {selectedFlat.ownerName || "-"}</p>
                <p><strong>Type:</strong> {selectedFlat.details?.type || "-"}</p>
                <p><strong>Area:</strong> {selectedFlat.details?.area || "-"}</p>
                <p><strong>Super Sqft:</strong> {selectedFlat.details?.superSqft || "-"}</p>
                <p><strong>Flat H/W:</strong> {selectedFlat.details?.flatHeight || "-"} / {selectedFlat.details?.flatWidth || "-"}</p>
                <p><strong>Price:</strong> {selectedFlat.details?.price || "-"}</p>
                <p><strong>Facing:</strong> {selectedFlat.details?.facing || "-"}</p>
                <p><strong>Beds/Baths:</strong> {selectedFlat.details?.bedrooms || "-"} / {selectedFlat.details?.bathrooms || "-"}</p>
                <p><strong>Dining/Kitchen/Drawing:</strong> {selectedFlat.details?.dining || "-"} / {selectedFlat.details?.kitchen || "-"} / {selectedFlat.details?.drawing || "-"}</p>
                <p><strong>Notes:</strong> {selectedFlat.notes || "-"}</p>
                {!isAdmin && (
                  <p className="pt-1 text-xs font-medium text-amber-700">
                    Admin login required to edit.
                  </p>
                )}
              </div>
            ) : (
              <>
                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Flat Name</span>
                  <input
                    value={selectedFlat.name}
                    onChange={(e) => updateSelectedFlat("name", e.target.value)}
                    className="input input-bordered w-full"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Status</span>
                  <select
                    value={selectedFlat.bookingStatus}
                    onChange={(e) => updateSelectedFlat("bookingStatus", e.target.value)}
                    className="select select-bordered w-full"
                  >
                    {FLAT_STATUS_OPTIONS.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Owner Name</span>
                  <input
                    value={selectedFlat.ownerName}
                    onChange={(e) => updateSelectedFlat("ownerName", e.target.value)}
                    className="input input-bordered w-full"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Notes</span>
                  <textarea
                    value={selectedFlat.notes}
                    onChange={(e) => updateSelectedFlat("notes", e.target.value)}
                    className="textarea textarea-bordered w-full"
                    rows={3}
                  />
                </label>

                <div className="space-y-3 rounded border border-slate-200 bg-slate-50 p-3">
                  <h5 className="text-sm font-semibold text-slate-800">Flat Details</h5>

                  <div className="grid grid-cols-2 gap-2">
                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Type</span>
                      <input
                        value={selectedFlat.details?.type || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("type", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. Residential"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Facing</span>
                      <input
                        value={selectedFlat.details?.facing || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("facing", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. South"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Area (sqft)</span>
                      <input
                        value={selectedFlat.details?.area || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("area", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 1250"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Super Sqft</span>
                      <input
                        value={selectedFlat.details?.superSqft || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("superSqft", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 1420"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Flat Width</span>
                      <input
                        value={selectedFlat.details?.flatWidth || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("flatWidth", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 36"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Flat Height</span>
                      <input
                        value={selectedFlat.details?.flatHeight || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("flatHeight", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 42"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Price</span>
                      <input
                        value={selectedFlat.details?.price || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("price", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 85,00,000"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Bedrooms</span>
                      <input
                        value={selectedFlat.details?.bedrooms || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("bedrooms", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 3"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Bathrooms</span>
                      <input
                        value={selectedFlat.details?.bathrooms || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("bathrooms", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 2"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Dining</span>
                      <input
                        value={selectedFlat.details?.dining || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("dining", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 1"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Kitchen</span>
                      <input
                        value={selectedFlat.details?.kitchen || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("kitchen", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 1"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="mb-1 block text-slate-600">Drawing</span>
                      <input
                        value={selectedFlat.details?.drawing || ""}
                        onChange={(e) =>
                          updateSelectedFlatDetails("drawing", e.target.value)
                        }
                        className="input input-bordered w-full"
                        placeholder="e.g. 1"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={saveFloorFlats}
                  className="btn w-full border-none bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Save Flat Changes
                </button>

                {savedAt && (
                  <p className="text-xs text-emerald-700">Saved at {savedAt}</p>
                )}
              </>
            )}

            <button
              type="button"
              onClick={() => navigate(`/flat/${selectedFlat.flatNo}`)}
              className="btn w-full border-none bg-slate-900 text-white hover:bg-slate-800"
            >
              Open Flat Rooms
            </button>
          </div>
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

export default Floor;
