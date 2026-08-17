import { useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search as SearchIcon } from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { states, festivals, ingredients, recipes } from "@/data/content";

const title = "Search Indian Recipes, States, Festivals & Ingredients | FlavorMap India";
const description =
  "Search across regional cuisines, traditional recipes, festival food and the Indian ingredient guide.";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  type: fallback(z.string(), "all").default("all"),
});

const filters = ["all", "states", "recipes", "festivals", "ingredients"] as const;

type Result = {
  id: string;
  kind: "state" | "recipe" | "festival" | "ingredient";
  name: string;
  meta: string;
  text: string;
  image: string;
};

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SearchPage,
});

const allResults: Result[] = [
  ...states.map((s) => ({
    id: s.id,
    kind: "state" as const,
    name: s.name,
    meta: s.region,
    text: `${s.description} ${s.identity} ${s.staples.join(" ")} ${s.signatureFlavours.join(" ")}`,
    image: s.image,
  })),
  ...recipes.map((r) => ({
    id: r.id,
    kind: "recipe" as const,
    name: r.name,
    meta: `${r.region} · ${r.type}`,
    text: `${r.summary} ${r.culturalBackground} ${r.ingredients.join(" ")}`,
    image: r.image,
  })),
  ...festivals.map((f) => ({
    id: f.id,
    kind: "festival" as const,
    name: f.name,
    meta: `${f.season} · ${f.region}`,
    text: `${f.description} ${f.story} ${f.customs.join(" ")}`,
    image: f.image,
  })),
  ...ingredients.map((i) => ({
    id: i.id,
    kind: "ingredient" as const,
    name: i.name,
    meta: `${i.category} · ${i.origin}`,
    text: `${i.description} ${i.profile} ${i.usedIn.join(" ")}`,
    image: i.image,
  })),
];

const kindToFilter: Record<Result["kind"], string> = {
  state: "states",
  recipe: "recipes",
  festival: "festivals",
  ingredient: "ingredients",
};

function ResultLink({ result, children }: { result: Result; children: React.ReactNode }) {
  const className =
    "group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-lg";

  if (result.kind === "state")
    return (
      <Link to="/states/$stateId" params={{ stateId: result.id }} className={className}>
        {children}
      </Link>
    );
  if (result.kind === "recipe")
    return (
      <Link to="/recipes/$recipeId" params={{ recipeId: result.id }} className={className}>
        {children}
      </Link>
    );
  if (result.kind === "festival")
    return (
      <Link to="/festivals/$festivalId" params={{ festivalId: result.id }} className={className}>
        {children}
      </Link>
    );
  return (
    <Link
      to="/ingredients/$ingredientId"
      params={{ ingredientId: result.id }}
      className={className}
    >
      {children}
    </Link>
  );
}

function SearchPage() {
  const { q, type } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const activeFilter = filters.includes(type as (typeof filters)[number]) ? type : "all";
  const query = q.trim().toLowerCase().slice(0, 100);

  const results = useMemo(() => {
    return allResults.filter((r) => {
      const matchesFilter = activeFilter === "all" || kindToFilter[r.kind] === activeFilter;
      if (!matchesFilter) return false;
      if (!query) return true;
      return `${r.name} ${r.meta} ${r.text}`.toLowerCase().includes(query);
    });
  }, [query, activeFilter]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Search"
        title="Find a Dish, State, Festival or Ingredient"
        description="One search across every page on FlavorMap India."
        crumbs={[{ label: "Search" }]}
      />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <label htmlFor="site-search" className="sr-only">
          Search FlavorMap India
        </label>
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            id="site-search"
            type="search"
            value={q}
            placeholder="Try 'coconut', 'Diwali', 'mustard' or 'Rajasthan'"
            onChange={(e) =>
              navigate({ search: (prev) => ({ ...prev, q: e.target.value }), replace: true })
            }
            className="w-full rounded-full border border-border bg-card py-4 pl-12 pr-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => navigate({ search: (prev) => ({ ...prev, type: f }) })}
              className={
                activeFilter === f
                  ? "rounded-full bg-primary px-4 py-1.5 text-sm font-semibold capitalize text-primary-foreground"
                  : "rounded-full border border-border px-4 py-1.5 text-sm capitalize text-muted-foreground transition-colors hover:text-primary"
              }
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "result" : "results"}
          {query && ` for “${q.trim()}”`}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {results.map((result) => (
            <ResultLink key={`${result.kind}-${result.id}`} result={result}>
              <img
                src={result.image}
                alt={result.name}
                loading="lazy"
                width={200}
                height={200}
                className="size-20 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0">
                <p className="eyebrow capitalize">{result.kind}</p>
                <h2 className="mt-1 truncate text-base font-semibold text-foreground group-hover:text-primary">
                  {result.name}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">{result.meta}</p>
              </div>
            </ResultLink>
          ))}
        </div>

        {results.length === 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-base font-semibold text-foreground">No matches found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a broader term, or browse{" "}
              <Link to="/states" className="font-semibold text-primary hover:text-spice">
                states
              </Link>
              ,{" "}
              <Link to="/recipes" className="font-semibold text-primary hover:text-spice">
                recipes
              </Link>{" "}
              or{" "}
              <Link to="/ingredients" className="font-semibold text-primary hover:text-spice">
                ingredients
              </Link>
              .
            </p>
          </div>
        )}
      </section>
    </PageShell>
  );
}
