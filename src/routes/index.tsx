import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StateCard } from "@/components/StateCard";
import { FestivalCard } from "@/components/FestivalCard";
import { CulturalSection } from "@/components/CulturalSection";
import { IngredientCard } from "@/components/IngredientCard";
import { VideoCard } from "@/components/VideoCard";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { states, homeFestivals, homeIngredients, videos } from "@/data/homeData";

const title = "FlavorMap India — Explore Regional Indian Cuisine";
const description =
  "Discover regional Indian recipes, festival food, cultural stories, traditional cooking and local ingredients from across India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />

        {/* Explore by State */}
        <section id="states" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Regions of India"
            title="Explore by State"
            description="Discover the unique flavours and culinary traditions of different regions of India."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state) => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        </section>

        {/* Festivals */}
        <section id="festivals" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Festival Kitchens"
              title="Flavours of Indian Festivals"
              description="Some dishes appear only once a year. These are the sweets and feasts that mark India's festival calendar."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {homeFestivals.map((festival) => (
                <FestivalCard key={festival.id} festival={festival} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/festivals" className="font-semibold text-primary hover:text-spice">
                See all eight festivals →
              </Link>
            </div>

          </div>
        </section>

        <CulturalSection />

        {/* Ingredients */}
        <section id="ingredients" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Ingredient Guide"
            title="Discover Regional Ingredients"
            description="Learn about ingredients that give India's regional cuisines their distinctive flavours."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeIngredients.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/ingredients" className="font-semibold text-primary hover:text-spice">
              Open the full ingredient guide →
            </Link>
          </div>

        </section>

        {/* Traditional cooking videos */}
        <section id="videos" className="bg-deep">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Coming Soon"
              title="Traditional Cooking, Preserved"
              description="FlavorMap India will host short documentary-style videos of traditional cooking methods, recorded with home cooks and local communities."
              tone="light"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
