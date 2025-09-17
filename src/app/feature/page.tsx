// pages/FeaturePage.tsx

import Header from "../components/Header"; // Import the shared Header
import HeroSection from "./components/HeroSection";
import HowItHelps from "./components/HowItHelps"; // ✅ Import HowItHelps
import FeatureList from "./components/featurelist"; // ✅ Import FeatureList
import FeatureBull from "./components/featurebull"; // ✅ Import FeatureBull
import Footer from '../components/Footer'; // Adjust the relative path based on your file structure

export default function FeaturePage() {
  return (
    <>
      <Header /> {/* Render the shared Header */}
      <HeroSection />
      <HowItHelps /> {/* ✅ Add HowItHelps section */}
      <FeatureList /> {/* ✅ Add FeatureList section */}
      <FeatureBull /> {/* ✅ Add FeatureBull section */}
      <Footer /> {/* Add Footer component here */}
    </>
  );
}