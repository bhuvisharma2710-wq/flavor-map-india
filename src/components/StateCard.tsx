import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { StateItem } from "@/data/content";

export function StateCard({ state }: { state: StateItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <img
        src={state.image}
        alt={`Traditional cuisine of ${state.name}`}
        loading="lazy"
        width={900}
        height={700}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="p-5">
        <p className="eyebrow">{state.region}</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{state.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{state.description}</p>
        <Link
          to="/states/$stateId"
          params={{ stateId: state.id }}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-spice"
        >
          Explore {state.name}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
