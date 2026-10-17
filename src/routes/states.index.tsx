import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { StateCard } from "@/components/StateCard";
import { states } from "@/data/content";

const title = "Explore Indian Cuisine by State — FlavorMap India";
const description =
  "Browse the regional cuisines of Rajasthan, Gujarat, Kerala, Punjab, West Bengal and Tamil Nadu, with staples, flavours and signature dishes.";

export const Route = createFileRoute("/states/")({
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
  component: StatesPage,
});

function StatesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Regions of India"
        title="Explore by State"
        description="Each state cooks with what its land, climate and history allowed. Start anywhere on the map."
        crumbs={[{ label: "States" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <StateCard key={state.id} state={state} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
