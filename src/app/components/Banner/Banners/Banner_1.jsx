import Image from "next/image";
import Banner from "./../../../assets/banner_1.svg";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiUserPlus } from "react-icons/fi";
import { easeOut, motion } from "motion/react"


const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: .2 } }
}
const children = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, ease: "easeOut" }
}
const Banner_1 = () => {

  const MotionLink = motion(Link);
  return (
    <div className="w-full md:h-150 h-130 border border-slate-200 dark:border-slate-800 bg-linear-to-r from-slate-300 to-slate-200 dark:from-slate-950 dark:to-slate-900  transition-colors duration-300">
      <div className="flex flex-col-reverse md:flex-row w-full h-full items-center">

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 md:text-left text-center flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <motion.h1
            variants={children}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4 ">
            Connect With Fellow Innovators
          </motion.h1>
          <motion.p
            variants={children}

            className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl transition-colors duration-300">
            Expand your network by discussing disruptive ideas, sharing feedback, and collaborating with future entrepreneurs.
          </motion.p>

          <motion.div
            variants={children}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <MotionLink
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="/ideas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-400 border border-cyan-400 text-slate-950 font-semibold px-6 py-2.5 rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition-colors"
            >
              <span>Explore Ideas</span>
              <motion.p
                initial={{ x: 0 }}
                variants={{ hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="m-0 flex items-center"
              >
                <HiArrowLongRight className="w-5 h-5" />
              </motion.p>
            </MotionLink>

            <MotionLink
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="/signin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-cyan-400 border border-cyan-400 font-semibold px-6 py-2.5 rounded-full hover:bg-cyan-400/10 transition-colors"
            >
              <span>Get Started</span>
              <motion.p
                initial={{ x: 0 }}
                variants={{ hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="m-0 flex items-center"
              >
                <FiUserPlus className="w-4 h-4" />
              </motion.p>
            </MotionLink>
          </motion.div>
        </motion.div>

        <div
          className="flex-1 relative w-full h-48 md:h-full">
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

export default Banner_1;