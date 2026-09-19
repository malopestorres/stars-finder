import HomeContent from "@/components/HomeContent";
import HeroBanner from "../components/HeroBanner";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeContent />
    </>
  );
}
