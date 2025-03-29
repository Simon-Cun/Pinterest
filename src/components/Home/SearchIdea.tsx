import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Wings from "@/public/home/chickenwings.png";
import Drumstick from "@/public/home/drumstick.png";
import Cucumber from "@/public/home/cucumber.png";
import Nuggets from "@/public/home/chickennuggets.png";

const SearchIdea = () => {
  return (
    <div className="relative flex h-screen bg-yellow-200">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="absolute z-30 h-[12vh] w-[22vw] rounded-full bg-white">
          <p className="flex h-full items-center justify-center text-2xl font-semibold text-red-950">
            <FaSearch className="mr-1" />
            easy chicken dinner
          </p>
        </div>
        <Image
          src={Wings}
          alt="Chicken Wings"
          className="absolute h-[285px] w-[204px] -translate-x-40"
        />
        <Image
          src={Drumstick}
          alt="Chicken Drumsticks"
          className="absolute z-20 h-[456px] w-[298px] object-contain"
        />
        <Image
          src={Nuggets}
          alt="Chicken Nuggets"
          className="absolute z-19 h-[218px] w-[178px] translate-x-40 -translate-y-40"
        />
        <Image
          src={Cucumber}
          alt="Plate of Cucumber"
          className="absolute h-[258px] w-[164px] translate-x-40 translate-y-46"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-red-700">Search for an idea</h1>
        <p className="pt-[2vh] pr-[12vw] pb-[4vh] pl-[12vw] text-2xl text-red-700">
          What do you want to try next? Think of something you&apos;re into—like
          &quot;easy chickent dinner&quot;—and see what you find.
        </p>
        <div className="flex h-12 w-22 items-center justify-center rounded-4xl bg-red-700 text-white">
          Explore
        </div>
      </div>
    </div>
  );
};

export default SearchIdea;
