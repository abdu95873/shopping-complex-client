import { Car } from "lucide-react";
import FloorSelector from "../../../components/FloorSelector";
import Carousel from "../Carousel/Carousel";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center  bg-gray-50 p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
                Select Floor
            </h1>

            <div className="w-full mb-8">
                <FloorSelector />
            </div>

            {/* <div className="w-full max-w-lg flex justify-center">
                <img
                    src="/images/buildingImages/IMG01.jpg"
                    alt="Building"
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
            </div> */}
            <div className="w-full max-w-lg flex justify-center">

                <Carousel></Carousel>
            </div>
        </div>
    );
};

export default Home;

