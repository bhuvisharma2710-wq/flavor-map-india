import { createFileRoute, notFound } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { RecipeCard } from "@/components/RecipeCard";
import { getFestival, recipesByFestival } from "@/data/content";

export const Route = createFileRoute("/festivals/$festivalId")({
  loader: ({ params }) => {
    const festival = getFestival(params.festivalId);
    if (!festival) throw notFound();
    return { name: festival.name, description: festival.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Festival not found — FlavorMap India" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} Food & Recipes — FlavorMap India`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: FestivalDetail,
  errorComponent: FestivalError,
  notFoundComponent: FestivalNotFound,
});

function FestivalDetail() {
  const { festivalId } = Route.useParams();
  const festival = getFestival(festivalId)!;
  const dishes = recipesByFestival(festivalId);

  return (
    <PageShell>
      <PageHeader
        eyebrow={`${festival.season} · ${festival.region}`}
        title={festival.name}
        description={festival.description}
        crumbs={[{ label: "Festivals", to: "/festivals" }, { label: festival.name }]}
        image={festival.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">The Story</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{festival.story}</p>
          </div>
          <aside className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-base font-semibold text-foreground">Food Customs</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {festival.customs.map((c) => (
                <li key={c} className="border-b border-border/60 pb-2 last:border-0">
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Festival Recipes</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Cooked for {festival.name}
          </h2>
          {dishes.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p className="mt-6 max-w-2xl text-base text-muted-foreground">
              Recipes for this festival are being documented. In the meantime, browse the{" "}
              <Link to="/recipes" className="font-semibold text-primary hover:text-spice">
                full recipe library
              </Link>
              .
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function FestivalNotFound() {
  return (
    <PageShell>
      <PageHeader
        title="We haven't covered that festival yet"
        description="Browse the festivals we have documented."
        crumbs={[{ label: "Festivals", to: "/festivals" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/festivals" className="font-semibold text-primary hover:text-spice">
          Back to all festivals
        </Link>
      </div>
    </PageShell>
  );
}

function FestivalError() {
  return (
    <PageShell>
      <PageHeader
        title="This page didn't load"
        description="Something went wrong loading this festival."
        crumbs={[{ label: "Festivals", to: "/festivals" }]}
      />
    </PageShell>
  );
}
