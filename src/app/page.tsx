import { Hero } from "@/components/sections/Hero";
import { Itinerary } from "@/components/sections/Itinerary";
import { Testimonies } from "@/components/sections/Testimonies";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Itinerary />
      <Testimonies />
      
      <footer className="py-8 text-center text-zinc-600 border-t border-zinc-900">
        <p>© 2024 Redemption by Reflect. Ephesians 1:7.</p>
      </footer>
    </main>
  );
}
