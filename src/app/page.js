import { Banner } from "./components/Banner/Banner";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import Features from "./components/Features/Features";
import StatsSection from "./components/Stats/StatsSection";

export default function Home() {
  return (
    <>
    <Banner/>
    <Features/>
    <StatsSection/>
    <FeaturedSection/>
    </>
  );
}
