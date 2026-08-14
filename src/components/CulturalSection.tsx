import { Landmark, PartyPopper, Flame, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: Landmark,
    title: "Regional Traditions",
    text: "Climate, crops and history decide what a region cooks and how it is eaten.",
  },
  {
    icon: PartyPopper,
    title: "Festivals",
    text: "Many dishes exist only for a particular festival, month or ritual.",
  },
  {
    icon: Flame,
    title: "Traditional Practices",
    text: "Stone grinding, clay pots and wood fire still shape authentic flavour.",
  },
  {
    icon: Users,
    title: "Local Communities",
    text: "Recipes are carried forward by families and communities, not cookbooks.",
  },
];

export function CulturalSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Cultural Heritage"
              title="More Than Just Food"
              description="Indian cuisine is inseparable from the places and people it comes from. A recipe is only one part of the story."
              align="left"
            />
            <blockquote className="mt-8 border-l-4 border-primary pl-5">
              <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
                “We are not just showing users how to cook a dish; we are helping them understand
                the culture behind the food.”
              </p>
            </blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-accent">
                  <pillar.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
