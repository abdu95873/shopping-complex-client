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
    <div className="flex flex-col gap-3 w-full">
      {floors.map((floor) => (
        <button
          key={floor.id}
          onClick={() => navigate(`/floor/${floor.id}`)}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {floor.label}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;
