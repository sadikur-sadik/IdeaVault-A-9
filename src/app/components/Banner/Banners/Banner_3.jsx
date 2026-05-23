import Image from "next/image";
import Banner from "./../../../assets/banner_3.jpg"

const Banner_3 = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-lg">
      <Image
        src={Banner}
        alt="Banner"
        priority
        fill
        sizes="100vw"
        className="object-cover transition-transform duration-500 ease-out hover:scale-[1.01]"
      />
    </div>
  );
};

export default Banner_3;