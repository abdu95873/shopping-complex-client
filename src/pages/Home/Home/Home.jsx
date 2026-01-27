import FloorSelector from "../../../components/FloorSelector";
import CarouselSection from "../Carousel/CarouselSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-6xl mb-20 font-bold">
            <h1>Rohaman Shopping Complex</h1>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

        {/* LEFT – BUTTONS COLUMN */}
        <div className="md:w-1/7 flex flex-col gap-4">
          <FloorSelector />
        </div>

        {/* RIGHT – CAROUSEL */}
        <div className="md:w-3/4 flex justify-center">
          <div className="w-full max-w-full">
            <CarouselSection />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
