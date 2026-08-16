import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { FestivalCard } from "@/components/FestivalCard";
import { festivals } from "@/data/content";

const title = "Indian Festival Food — Diwali, Holi, Pongal & More | FlavorMap India";
const description =
  "Festival kitchens of India: the sweets, feasts and fasting food cooked for Diwali, Holi, Pongal, Onam, Baisakhi, Ganesh Chaturthi, Eid and Navratri.";

export const Route = createFileRoute("/festivals/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FestivalsPage,
});

function FestivalsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Festival Kitchens"
        title="Flavours of Indian Festivals"
        description="Some dishes appear only once a year. These are the sweets, feasts and fasting plates that mark India's festival calendar."
        crumbs={[{ label: "Festivals" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {festivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
