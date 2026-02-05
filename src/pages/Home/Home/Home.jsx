import FloorSelector from "../../../components/FloorSelector";
import CarouselSection from "../Carousel/CarouselSection";
import Contact from "../../Contact/Contact"; // Adjust path as needed
import AboutUs from "../../AboutUs/AboutUs";
import Services from "../../Services/Services";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center text-5xl md:text-6xl mb-20 mt-5 font-bold">
        <h1>Rohaman Shopping Complex</h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

        {/* LEFT – BUTTONS COLUMN */}
        <div className="md:flex-[0.14] flex flex-col gap-4">
          <FloorSelector />
        </div>

        {/* RIGHT – CAROUSEL */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-full">
            <CarouselSection />
          </div>
        </div>

      </div>

      {/* Contact Section */}
      <div className="mt-20">
        <AboutUs></AboutUs>
        <Services></Services>
        <Contact></Contact>
      </div>

    </div>
  );
};

export default Home;
