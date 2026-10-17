import { createFileRoute, notFound } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { RecipeCard } from "@/components/RecipeCard";
import { getIngredient, recipesByIngredient } from "@/data/content";

export const Route = createFileRoute("/ingredients/$ingredientId")({
  loader: ({ params }) => {
    const ingredient = getIngredient(params.ingredientId);
    if (!ingredient) throw notFound();
    return { name: ingredient.name, description: ingredient.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Ingredient not found — FlavorMap India" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — Flavour, Uses & Recipes | FlavorMap India`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: IngredientDetail,
  errorComponent: IngredientError,
  notFoundComponent: IngredientNotFound,
});

function IngredientDetail() {
  const { ingredientId } = Route.useParams();
  const ingredient = getIngredient(ingredientId)!;
  const dishes = recipesByIngredient(ingredientId);

  return (
    <PageShell>
      <PageHeader
        eyebrow={`${ingredient.category} · ${ingredient.origin}`}
        title={ingredient.name}
        description={ingredient.description}
        crumbs={[{ label: "Ingredients", to: "/ingredients" }, { label: ingredient.name }]}
        image={ingredient.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <img
            src={ingredient.image}
            alt={ingredient.name}
            loading="lazy"
            width={800}
            height={800}
            className="aspect-square w-full rounded-2xl border border-border object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Flavour Profile</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {ingredient.profile}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Typically Used In</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {ingredient.usedIn.map((u) => (
                <li
                  key={u}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <h3 className="text-base font-semibold text-foreground">Buying & Storing</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {ingredient.buyingTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Cook With It</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Recipes using {ingredient.name}
          </h2>
          {dishes.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-base text-muted-foreground">
              No recipes linked yet —{" "}
              <Link to="/recipes" className="font-semibold text-primary hover:text-spice">
                browse the library
              </Link>
              .
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function IngredientNotFound() {
  return (
    <PageShell>
      <PageHeader
        title="That ingredient isn't in the guide yet"
        description="Browse the full ingredient guide instead."
        crumbs={[{ label: "Ingredients", to: "/ingredients" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/ingredients" className="font-semibold text-primary hover:text-spice">
          Back to the ingredient guide
        </Link>
      </div>
    </PageShell>
  );
}

function IngredientError() {
  return (
    <PageShell>
      <PageHeader
        title="This page didn't load"
        description="Something went wrong loading this ingredient."
        crumbs={[{ label: "Ingredients", to: "/ingredients" }]}
      />
    </PageShell>
  );
}
