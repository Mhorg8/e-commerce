import { auth } from "@/auth";
import { getUsers } from "./actions/getUsers";
import HomeBanner from "./components/banners/HomeBanner";
import HomeLargeBanner from "./components/banners/HomeLargeBanner";
import Hero from "./components/hero/Hero";
import InfoSection from "./components/InfoSection";
import ProductsList from "./components/products/ProductsList";
import SliderContainer from "./components/slider/SliderContainer";

export default async function Home() {
  const { users, products } = await getUsers();

  const session = await auth();

  console.log("Server-side session:", session);

  if (!users || !products) {
    return <div>Loading data</div>;
  }
  return (
    <div>
      <Hero />
      <InfoSection />
      <ProductsList products={products} />
      <HomeBanner />
      <SliderContainer products={products} />
      <HomeLargeBanner />
    </div>
  );
}
