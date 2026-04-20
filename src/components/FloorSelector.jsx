import { useNavigate } from "react-router-dom";

const floors = [
  { id: -1, label: "Basement" },
  { id: 0, label: "Ground Floor" },
  { id: 1, label: "1st Floor" },
  { id: 2, label: "2nd Floor" },
  { id: 3, label: "3rd Floor" },
  { id: 4, label: "4th Floor" },
  { id: 5, label: "5th Floor" },
  { id: 6, label: "6th Floor" },
  { id: 7, label: "7th Floor" },
  { id: 8, label: "8th Floor" },
  { id: 9, label: "9th Floor" },
];

const FloorSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Building Floors</p>
        <h3 className="text-lg font-bold text-slate-900">Quick Navigation</h3>
      </div>
      {floors.map((floor) => (
        <button
          key={floor.id}
          onClick={() => navigate(`/floor/${floor.id}`)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-900 hover:text-white"
        >
          {floor.label}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;
