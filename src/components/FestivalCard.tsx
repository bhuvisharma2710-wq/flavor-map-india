import { ArrowRight } from "lucide-react";
import type { FestivalItem } from "@/data/homeData";

export function FestivalCard({ festival }: { festival: FestivalItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <img
        src={festival.image}
        alt={`Festive food prepared during ${festival.name}`}
        loading="lazy"
        width={900}
        height={700}
        className="aspect-[5/4] w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{festival.name}</h3>
        <p className="mt-1 text-xs font-medium text-accent">{festival.season}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{festival.description}</p>
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-spice"
        >
          Explore Recipes
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
