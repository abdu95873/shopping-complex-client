import { useNavigate } from "react-router-dom";

const floors = [1, 2, 3, 4, 5];

const FloorSelector = () => {
    const navigate = useNavigate();

    return (
        <div className="flex gap-3">
            {floors.map((floor) => (
                <button
                    key={floor}
                    onClick={() => navigate(`/floor/${floor}`)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Floor {floor}
                </button>
            ))}
        </div>
    );
};

export default FloorSelector;
