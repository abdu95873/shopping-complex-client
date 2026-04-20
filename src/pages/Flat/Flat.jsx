import { useParams } from "react-router-dom";
import { flats } from "../../data/flats";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useAuth from "../../hooks/useAuth";

const STATUS_OPTIONS = [
  { value: "available", label: "Available", color: "rgba(34,197,94,0.35)" },
  { value: "booked", label: "Booked", color: "rgba(245,158,11,0.35)" },
  { value: "sold", label: "Sold", color: "rgba(239,68,68,0.35)" },
  { value: "rented", label: "Rented", color: "rgba(59,130,246,0.35)" },
  { value: "occupied", label: "Occupied", color: "rgba(168,85,247,0.35)" },
  { value: "reserved", label: "Reserved", color: "rgba(236,72,153,0.35)" },
  { value: "maintenance", label: "Maintenance", color: "rgba(120,113,108,0.35)" },
  { value: "hold", label: "On Hold", color: "rgba(14,165,233,0.35)" },
];

const getStatusColor = (status) => {
  return STATUS_OPTIONS.find((s) => s.value === status)?.color ?? "rgba(34,197,94,0.2)";
};


const Flat = () => {
  const { flatId } = useParams();
  const { user } = useAuth();
  const flat = flats.find((f) => f.flatId === Number(flatId));
  const storageKey = `flat-rooms-${flatId}`;

  const [rooms, setRooms] = useState(() =>
    (flat?.rooms || []).map((room) => ({
      ...room,
      status: room.status || "available",
      notes: room.notes || "",
      roomSqft: room.roomSqft || room.sqft || "",
    }))
  );
  const [editingId, setEditingId] = useState(null);
  const [isEditingRoom, setIsEditingRoom] = useState(false);
  const [savedAt, setSavedAt] = useState("");
  const editingRoom = rooms.find((r) => r.id === editingId);
  const storedRole = localStorage.getItem("userRole");
  const isAdmin =
    user?.role === "admin" ||
    storedRole === "admin" ||
    (typeof user?.email === "string" && user.email.toLowerCase().includes("admin"));

  if (!flat) return <p>Flat not found</p>;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      setRooms(
        parsed.map((room) => ({
          ...room,
          status: room.status || "available",
          notes: room.notes || "",
          roomSqft: room.roomSqft || room.sqft || "",
        }))
      );
    } catch {
      // Ignore malformed localStorage data
    }
  }, [storageKey]);

  const updateRoom = (roomId, key, value) => {
    setRooms((prev) =>
      prev.map((room) => (room.id === roomId ? { ...room, [key]: value } : room))
    );
  };

  const saveRoomChanges = () => {
    localStorage.setItem(storageKey, JSON.stringify(rooms));
    setSavedAt(new Date().toLocaleTimeString());
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-4 p-4 sm:p-6 lg:p-8">
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-5">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          {flat.name} - Room Map
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Hover for quick info, select any room, then edit from the side panel.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px]">

      {/* LEFT – ZOOMABLE FLAT MAP */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
          {({ zoomIn, zoomOut, resetTransform }) => (
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Interactive Room Map</h4>
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
                    src={flat.image}
                    alt={flat.name}
                    className="w-full h-auto object-contain select-none"
                  />

                  {rooms.map((room) => {
                    const isSelected = editingId === room.id;

                    return (
                      <div
                        key={room.id}
                        onClick={() => {
                          setEditingId(room.id);
                          setIsEditingRoom(false);
                        }}
                        className="absolute rounded-sm transition"
                        style={{
                          top: room.top,
                          left: room.left,
                          width: room.width,
                          height: room.height,
                          border: isSelected
                            ? "2px solid rgba(37,99,235,0.95)"
                            : "1px solid rgba(0,0,0,0.35)",
                          boxShadow: "none",
                          backgroundColor: getStatusColor(room.status),
                          cursor: "pointer",
                        }}
                      />
                    );
                  })}
                </div>
              </TransformComponent>

              <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 px-4 py-3">
                {STATUS_OPTIONS.map((status) => (
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



      {/* RIGHT – ROOM INFO */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 font-semibold text-slate-900">Room Info</h3>

        {editingRoom && (
          <div className="mt-4 rounded border bg-white p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Room Details #{editingRoom.id}</h4>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!isAdmin) return;
                    setIsEditingRoom((prev) => !prev);
                  }}
                  disabled={!isAdmin}
                  className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-300 text-slate-600 hover:bg-slate-100"
                  aria-label={isEditingRoom ? "Close edit mode" : "Edit room"}
                  title={
                    isAdmin
                      ? isEditingRoom
                        ? "Close Edit"
                        : "Edit Room"
                      : "Only admin can edit"
                  }
                >
                  ✎
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setIsEditingRoom(false);
                  }}
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  Close
                </button>
              </div>
            </div>

            {!isEditingRoom || !isAdmin ? (
              <div className="space-y-2 rounded border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <p><strong>Name:</strong> {editingRoom.name || "-"}</p>
                <p><strong>Room H/W:</strong> {editingRoom.realHeight || "-"} / {editingRoom.realWidth || "-"}</p>
                <p><strong>Room Sqft:</strong> {editingRoom.roomSqft || "-"}</p>
                <p><strong>Status:</strong> {editingRoom.status || "-"}</p>
                <p><strong>Notes:</strong> {editingRoom.notes || "-"}</p>
                {!isAdmin && (
                  <p className="pt-1 text-xs font-medium text-amber-700">
                    Admin login required to edit.
                  </p>
                )}
              </div>
            ) : (
              <>
                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Name</span>
                  <input
                    value={editingRoom.name}
                    onChange={(e) => updateRoom(editingRoom.id, "name", e.target.value)}
                    className="input input-bordered w-full"
                  />
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <label className="block text-sm">
                    <span className="mb-1 block text-slate-600">Room Width</span>
                    <input
                      value={editingRoom.realWidth}
                      onChange={(e) => updateRoom(editingRoom.id, "realWidth", e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1 block text-slate-600">Room Height</span>
                    <input
                      value={editingRoom.realHeight}
                      onChange={(e) => updateRoom(editingRoom.id, "realHeight", e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Room Sqft</span>
                  <input
                    value={editingRoom.roomSqft || ""}
                    onChange={(e) => updateRoom(editingRoom.id, "roomSqft", e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="e.g. 180"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Status</span>
                  <select
                    value={editingRoom.status}
                    onChange={(e) => updateRoom(editingRoom.id, "status", e.target.value)}
                    className="select select-bordered w-full"
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Notes</span>
                  <textarea
                    value={editingRoom.notes}
                    onChange={(e) => updateRoom(editingRoom.id, "notes", e.target.value)}
                    className="textarea textarea-bordered w-full"
                    rows={3}
                  />
                </label>

                <button
                  type="button"
                  onClick={saveRoomChanges}
                  className="btn w-full border-none bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Save Room Changes
                </button>
                {savedAt && (
                  <p className="text-xs text-emerald-700">Saved at {savedAt}</p>
                )}
              </>
            )}
          </div>
        )}

        {!editingRoom && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
            Select a room from map to view details.
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

export default Flat;
