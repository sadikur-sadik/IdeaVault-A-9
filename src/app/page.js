import { Banner } from "./components/Banner/Banner";
import ActivityTicker from "./components/ActivityTicker";
import AnalyticsHeatmap from "./components/AnalyticsHeatmap";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import Features from "./components/Features/Features";
import StatsSection from "./components/Stats/StatsSection";

export default function Home() {
  return (
    <>
      <Banner />
      <ActivityTicker />
      <Features />
      <StatsSection />
      <AnalyticsHeatmap />
      <FeaturedSection />
    </>
  );
}


