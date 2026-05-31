import Image from "next/image";
import Banner from "./../../../assets/banner_3.svg";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiUserPlus } from "react-icons/fi";
import Link from "next/link";

const Banner_3 = () => {
  return (
    <div className="w-full md:h-150 h-130 border border-slate-200 dark:border-slate-800 bg-linear-to-br from-slate-300 to-slate-200 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="flex flex-col-reverse md:flex-row items-center w-full h-full">

        <div className="flex-1 md:text-left text-center flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4 ">
            Discover Tomorrow's Big Trends
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 transition-colors duration-300">
            Explore a curated feed of next-generation concepts and vote on the ideas shaping the future of industries.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6 w-full sm:w-auto">
            <Link
              href="/ideas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-400 border border-cyan-400 text-slate-950 font-semibold px-6 py-2.5 rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
            >
              <span>Explore Ideas</span>
              <HiArrowLongRight className="w-5 h-5" />
            </Link>

            <Link
              href="/signin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-cyan-400 border border-cyan-400 font-semibold px-6 py-2.5 rounded-full hover:bg-cyan-400/10 transition-colors"
            >
              <span>Get Started</span>
              <FiUserPlus className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden w-full h-64 sm:h-80 md:h-96 mt-3 md:mt-0">
          <Image
            src={Banner}
            alt="First Banner"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner_3;