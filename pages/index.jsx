import AmazeNFT from "@/components/AmazeNFT/AmazeNFT";
import CollectionOver from "@/components/CollectionOver/CollectionOver";

import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AmazeNFT />
      <CollectionOver />
    </div>
  );
}
