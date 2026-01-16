// src/pages/Floor/FloorView.jsx
import { useParams } from "react-router-dom";
import FloorMap from "./FloorMap";

const FloorView = () => {
    const { floorId } = useParams();

    return (
        <div style={{ padding: 20 }}>
            <h1>Floor {floorId}</h1>
            <FloorMap></FloorMap>
        </div>
    );
};

export default FloorView;
