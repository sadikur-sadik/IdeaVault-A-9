import Image from "next/image";
import Banner from "./../../../assets/banner_1.svg";

const Banner_1 = () => {
  return (
    <div className="w-full">
      <div className="flex items-center w-full">
        <div className="flex-1 bg-linear-to-r from-black via-slate-950 to-slate-900">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Connect With Fellow Innovators
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Expand your network by discussing disruptive ideas, sharing feedback, and collaborating with future entrepreneurs.
          </p>

        </div>
        <div className="flex-1 bg-white">
          <div className="">
            <Image src={Banner} alt="First Banner" fill priority className="object-contain"></Image>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Banner_1;