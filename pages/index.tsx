import React from "react";
import BestSeller from "@/components/BestSeller";
import Hero from "@/components/hero";
import LatestCollection from "@/components/latestCollection";
import NewsLettterBox from "@/components/NewsLettterBox";
import OurPolicy from "@/components/OurPolicy";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLettterBox />
    </div>
  );
};

export default Home;
