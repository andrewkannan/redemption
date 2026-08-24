import { Hero } from "@/components/sections/Hero";
import { Itinerary } from "@/components/sections/Itinerary";
import { Camera } from "@/components/sections/Camera";
import { Testimonies } from "@/components/sections/Testimonies";
import { getTestimonies } from "@/app/actions/testimonies";

export const dynamic = "force-dynamic";

export default async function Home() {
  const testimonies = await getTestimonies();

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Itinerary />
      <Camera />
      <Testimonies initialTestimonies={testimonies} />
      
      <footer className="py-8 text-center text-zinc-600 border-t border-zinc-900">
        <p>© 2026 Redemption by Reflect.</p>
      </footer>
    </main>
  );
}
