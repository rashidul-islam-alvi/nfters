import AmazeNFT from "@/components/AmazeNFT/AmazeNFT";
import CollectionOver from "@/components/CollectionOver/CollectionOver";
import DiscoverNFT from "@/components/DiscoverNFT/DiscoverNFT";
import FeaturedNFT from "@/components/FeaturedNFT/FeaturedNFT";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import SignNFT from "@/components/SignNFT/SignNFT";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AmazeNFT />
      <CollectionOver />
      <FeaturedNFT />
      <SignNFT />
      <DiscoverNFT />
      <Footer />
    </div>
  );
}
