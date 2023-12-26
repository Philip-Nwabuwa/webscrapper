import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import { ArrowRight, Divide } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-md:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text flex items-center text-red-500">
              Smart Shoping Starts Here:
              <ArrowRight />
            </p>
            <h1 className="head-text">
              Unlesh the Power of{" "}
              <span className="text-red-500">ScanMaster</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>
          <div className="flex justify-center items-center">
            <HeroCarousel />
          </div>
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["apple Ipone 15", "Book", "Sneakers"].map((product, index) => (
            <span key={index}>{product}</span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
